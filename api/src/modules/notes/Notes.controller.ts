import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import type { Express } from "express";
import { writeFile } from "fs/promises";
import multer from "multer";
import path from "path";
import { SaveFileDto } from "src/modules/notes/dtos/SaveFile.dto";

@Controller("/api/notes")
export class NotesController {
	private DATA_FOLDER = "/data";

	constructor() {
		if (process.env.DATA_FOLDER_OVERRIDE) {
			this.DATA_FOLDER = process.env.DATA_FOLDER_OVERRIDE;
		}
	}

	@Post("")
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
		const destination = path.resolve(this.DATA_FOLDER, "notes", body.filePath);

		await writeFile(destination, file.buffer);
	}
}
