<script lang="ts">
	const accordion = [false, false, false, false, false];
	function toggleOpen(
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		},
		open: boolean,
		i: number
	) {
		const li = e.currentTarget.closest('li');
		if (!li) return;
		const range = document.createRange();
		range.selectNode(li.querySelector('p')?.childNodes[0]!);

		if (open) {
			li.style.setProperty('--height', '0');
			delete li.dataset.open;
		} else {
			li.style.setProperty('--height', `${range.getBoundingClientRect().height}px`);
			li.dataset.open = '';
		}
		accordion[i] = !open;
	}
</script>

<main class="bg-[#501559] grid justify-center items-start min-h-screen px-2">
	<div
		class="bg-white p-16 rounded-lg flex flex-col lg:flex-row gap-12 max-w-screen-lg mt-32 relative [transform-style:_preserve-3d]"
		id="login-faq"
	>
		<div
			class="w-48 aspect-square bg-[#b6325c] absolute top-[-60px] left-[-60px] [transform:_translateZ(-1px);]"
		></div>

		<div
			class="w-48 aspect-[6/1] bg-[#b6325c] absolute bottom-[-60px] right-[-60px] [transform:_translateZ(-1px);]"
		></div>
		<div
			class="h-48 aspect-[1/6] bg-[#b6325c] absolute bottom-[-60px] right-[-60px] [transform:_translateZ(-1px);]"
		></div>
		<h2 class="flex-grow flex-basis-1/4 text-3xl font-semibold">
			Questions and answers about login
		</h2>
		<ul class="flex-grow flex-basis-3/4 space-y-2">
			{#each accordion as open, i}
				<li
					class={`border p-4 rounded-md shadow-sm [--height:0] transition-shadow duration-300 ${open ? 'shadow-purple-900/20 shadow-lg' : ''}`}
				>
					<div class="flex items-center justify-between gap-4">
						<h3 class="font-bold">Lorem ipsum dolor sit amet consectetur.</h3>
						<button
							onclick={(e) => toggleOpen(e, open, i)}
							class="font-bold text-xl w-8 h-8 rounded-full bg-gray-200 flex items-start justify-center"
							class:text-green-600={!open}
							class:text-rose-500={open}
						>
							<span
								class={`transition-transform duration-300 ${open ? 'rotate-45 translate-x-[16.666%]' : ''}`}
								>+</span
							></button
						>
					</div>
					<p
						class="max-h-[var(--height)] overflow-clip transition-[max-height] duration-300 ease-[cubic-bezier(0.5, 0, 0.1, 1)]"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolores aperiam nisi
						illo recusandae, distinctio iure. Dolorem optio eum vitae!
					</p>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	main > div::before {
		content: '';
	}
</style>
