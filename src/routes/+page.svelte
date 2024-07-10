<script lang="ts">
	import type { Challenge } from '$lib';
	import Card from '$lib/components/Card.svelte';

	const challenges: Challenge[] = [
		{
			href: 'login-faq',
			title: 'Login FAQ',
			difficulty: 'easy',
			src: 'https://icodethis.com/_next/image?url=%2Fimages%2Fprojects%2FFAQ.png&w=1920&q=75'
		},
		{
			href: 'table',
			title: 'Table',
			difficulty: 'intermediate',
			src: 'https://icodethis.com/_next/image?url=%2Fimages%2Fprojects%2Ftable.png&w=1920&q=75'
		},
		{
			href: 'poll',
			title: 'Poll',
			difficulty: 'easy',
			src: 'https://icodethis.com/_next/image?url=%2Fimages%2Fprojects%2Fpoll.jpg&w=1920&q=75'
		}
	];
</script>

<main class="max-w-screen-xl mx-auto px-4 pt-8">
	<h1 class="m-8 font-bold text-3xl text-center">
		My collection of completed <a
			href="https://icodethis.com/"
			class="text-blue-600 hover:underline">iCodeThis</a
		> challenges
	</h1>
	<ul class="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-8 place-items-center">
		{#each challenges as challenge (challenge.href)}
			<Card {...challenge} />
		{/each}
	</ul>
</main>
