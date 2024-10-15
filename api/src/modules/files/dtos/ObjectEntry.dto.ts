export class ObjectEntryDto {
	public type: "file" | "folder";
	public name: string;
	public children: ObjectEntryDto[] | undefined;
}
