<template>
	<div class="flex flex-col w-1 grow">
		<div class="bg-slate-200 flex justify-between items-center p-1">
			<div class="flex">
				<Save :size="22" stroke-width="1" class="cursor-pointer hover:fill-blue-400" title="Save" />
				<Pencil
					:size="22"
					stroke-width="1"
					class="cursor-pointer hover:fill-blue-400"
					title="Edit"
					@click="editingEnabled = !editingEnabled"
				/>
			</div>

			<div>
				<Input :model-value="appStore.currentNoteName" class="p-0 h-6 rounded-none" />
			</div>

			<div>
				<Trash :size="22" stroke-width="1" class="cursor-pointer hover:fill-red-500" title="Delete" />
			</div>
		</div>

		<div class="flex h-1 grow">
			<div v-if="editingEnabled" class="w-1 grow">
				<NoteEditor />
			</div>

			<div class="w-1 grow">def</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/modules/core/AppStore";
import NoteEditor from "@/modules/notes/components/NoteEditor.vue";
import Input from "@/modules/shadcn/components/ui/input/Input.vue";
import { Pencil, Save, Trash } from "lucide-vue-next";
import { ref } from "vue";

const appStore = useAppStore();
const editingEnabled = ref(true);

function save() {}
</script>
