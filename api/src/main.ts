import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/modules/App.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.setGlobalPrefix("api");
	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

	await app.listen(3000);
}
bootstrap();
