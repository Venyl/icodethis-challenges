<script lang="ts">
	import type { Challenge } from '$lib';

	const { href, alt, title, difficulty, src }: Challenge = $props();
</script>

<a
	{href}
	class="block border rounded-md overflow-clip shadow-sm transition-[box-shadow,_border-color] duration-300 hover:shadow-lg hover:border-gray-300"
	><img class="max-w-full" {src} alt={alt ?? title} />
	<div class="px-4 py-2 space-y-2">
		<h2 class="font-bold text-xl">{title}</h2>
		<div>
			Difficulty: <span
				class="font-bold capitalize"
				class:text-emerald-600={difficulty === 'easy'}
				class:text-amber-600={difficulty === 'intermediate'}
				class:text-rose-600={difficulty === 'advanced'}
			>
				{difficulty}
			</span>
		</div>
	</div>
</a>
