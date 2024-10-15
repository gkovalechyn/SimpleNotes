<template>
	<Topbar />

	<div class="flex h-1 grow">
		<Sidebar class="w-1/6" />
		<RouterView />
	</div>
</template>

<script setup lang="ts">
import Sidebar from "@/modules/core/components/Sidebar.vue";
import Topbar from "@/modules/core/components/Topbar.vue";


</script>

