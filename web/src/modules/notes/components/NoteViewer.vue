<template>
	<div class="flex flex-col w-1 grow">
		<div class="bg-slate-200 flex justify-between items-center p-1">
			<div class="flex">
				<Save :size="22" stroke-width="1" class="cursor-pointer hover:fill-blue-400" title="Save" />
				<Pencil :size="22" stroke-width="1" class="cursor-pointer hover:fill-blue-400" title="Edit" />
			</div>

			<div>
				<Input :model-value="appStore.currentNoteName" class="p-0 h-6 rounded-none" />
			</div>

			<div>
				<Trash :size="22" stroke-width="1" class="cursor-pointer hover:fill-red-500" title="Delete" />
			</div>
		</div>

		<div>def</div>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/modules/core/AppStore";
import Input from "@/modules/shadcn/components/ui/input/Input.vue";
import { Pencil, Save, Trash } from "lucide-vue-next";

const appStore = useAppStore();
</script>
