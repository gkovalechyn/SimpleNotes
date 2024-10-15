import { Module } from "@nestjs/common";
import { NotesController } from "src/modules/notes/Notes.controller";

@Module({
	controllers: [NotesController]
})
export class NotesModule {}
