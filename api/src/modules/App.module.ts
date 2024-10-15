import { Module } from "@nestjs/common";
import { NotesModule } from "src/modules/notes/Notes.module";

@Module({
	imports: [NotesModule]
})
export class AppModule {}
