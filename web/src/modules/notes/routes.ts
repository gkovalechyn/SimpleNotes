import type { RouteRecordRaw } from "vue-router";
import NoteViewer from "./components/NoteViewer.vue";

export const NoteRoutes: RouteRecordRaw[] = [
	{
		path: "/",
		component: NoteViewer
	}
];
