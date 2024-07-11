<script lang="ts">
	import 'open-props/open-props.min.css';
	import '$lib/globals.css';
	let { children } = $props();
</script>

<a
	href="/"
	class="block border border-gray-300 h-12 w-12 absolute bg-white rounded-full grid place-items-center right-4 bottom-4 z-30"
	><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
		><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" /></svg
	></a
>

{@render children()}
