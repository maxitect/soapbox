<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
<main class="m-10">
	{@render children()}
</main>
