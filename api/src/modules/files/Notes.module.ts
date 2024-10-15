import { Module } from "@nestjs/common";
import { FilesController } from "src/modules/files/Files.controller";

@Module({
	controllers: [FilesController]
})
export class NotesModule {}
