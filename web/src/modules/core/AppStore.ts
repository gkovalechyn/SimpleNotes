import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
	const notes = ref<string[]>([
		"note1.md",
		"note1.child1.md",
		"note1.child2.md",
		"note1.child3.md",
		"note1.child3.subchild1.md",
		"note1.child3.subchild2.md",
		"note1.child3.subchild3.md",
		"note2.md",
		"note3.md",
		"note4.md",
		"note5.md"
	]);

	const currentNoteName = ref<string>();
  const currentNoteContent = ref<string>();

	return {
    notes,
    currentNoteName,
    currentNoteContent
  };
});
