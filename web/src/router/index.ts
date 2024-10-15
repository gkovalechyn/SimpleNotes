import { NoteRoutes } from "@/modules/notes/routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [...NoteRoutes]
});

export default router;
