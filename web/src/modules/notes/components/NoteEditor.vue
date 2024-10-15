<template>
	<div ref="editorContainer"></div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/modules/core/AppStore";
import { indentWithTab } from "@codemirror/commands";
import { markdown } from "@codemirror/lang-markdown";
import { keymap } from "@codemirror/view";
import { basicSetup, EditorView } from "codemirror";
import { onMounted, ref, shallowRef } from "vue";

var editorContainer = ref<HTMLElement>();
var editorRef = shallowRef<EditorView>();
var appStore = useAppStore();

onMounted(() => {
	editorRef.value = new EditorView({
		extensions: [basicSetup, keymap.of([indentWithTab]), markdown()],
		parent: editorContainer.value,
		doc: appStore.currentNoteContent
	});
});
</script>
