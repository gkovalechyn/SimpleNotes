<template>
	<div class="shadow-lg">
		<Input placeholder="Search notes" class="rounded-none" />

		<div v-for="note in appStore.notes" :key="note" class="px-2 cursor-pointer">
			{{ note }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/modules/core/AppStore";
import Input from "@/modules/shadcn/components/ui/input/Input.vue";

const appStore = useAppStore();
</script>
