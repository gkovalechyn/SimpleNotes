import { Module } from "@nestjs/common";
import { NotesModule } from "src/modules/files/Notes.module";

@Module({
	imports: [NotesModule]
})
export class AppModule {}
