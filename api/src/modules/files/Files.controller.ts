import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { mkdirSync } from "fs";
import { readdir, writeFile } from "fs/promises";
import multer from "multer";
import path, { basename, resolve } from "path";
import { ObjectEntryDto } from "src/modules/files/dtos/ObjectEntry.dto";
import { SaveFileDto } from "src/modules/files/dtos/SaveFile.dto";

@Controller("files")
export class FilesController {
	private DATA_FOLDER = "/data";
	private MEDIA_FOLDER = "";

	constructor() {
		if (process.env.DATA_FOLDER_OVERRIDE) {
			this.DATA_FOLDER = path.resolve(process.env.DATA_FOLDER_OVERRIDE);
		}

		this.MEDIA_FOLDER = path.resolve(this.DATA_FOLDER, "media");

		mkdirSync(this.MEDIA_FOLDER, { recursive: true });
	}

	@Post()
	@UseInterceptors(
		FileInterceptor("file", {
			storage: multer.memoryStorage()
		})
	)
	public async postSaveFile(
		@Body()
		body: SaveFileDto,

		@UploadedFile()
		file: Express.Multer.File
	) {
		const destination = path.resolve(this.DATA_FOLDER, body.filePath);

		await writeFile(destination, file.buffer);
	}

	@Get()
	public async getFileTree() {
		return await this.readDirectoryTree(this.DATA_FOLDER);
	}

	private async readDirectoryTree(path: string): Promise<ObjectEntryDto> {
		const folder = new ObjectEntryDto();
		folder.type = "folder";
		folder.name = basename(path);
		folder.children = [];

		const entries = await readdir(path, { withFileTypes: true });

		for (const entry of entries) {
			if (entry.isDirectory()) {
				folder.children.push(await this.readDirectoryTree(resolve(path, entry.name)));
			} else {
				const file = new ObjectEntryDto();
				file.type = "file";
				file.name = entry.name;

				folder.children.push(file);
			}
		}

		return folder;
	}
}
