<script lang="ts">
	let checked = $state('');
	const stats = $derived.by(() => {
		const stats = {
			success: 7,
			failure: 3,
			maybe: 4
		};
		if (checked === 'success' || checked === 'failure' || checked === 'maybe') {
			stats[checked]++;
		}
		return stats;
	});
	const sum = $derived(stats.success + stats.failure + stats.maybe);

	function handleUncheck(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		},
		type: string
	) {
		if (checked === type) {
			e.currentTarget.checked = false;
			checked = '';
		}
	}
</script>

{#snippet meter(type, label)}
	{@const percentage =
		(type === 'success' || type === 'failure' || type === 'maybe'
			? stats[type as keyof typeof stats] / sum
			: 0) * 100}
	<div class={type}>
		<input
			type="radio"
			name="choice"
			id="{type}-radio"
			value={type}
			onclick={(e) => handleUncheck(e, type)}
			bind:group={checked}
		/>

		<label for="{type}-radio">
			<div class="checkbox"></div>
			{label}
		</label>

		<div class="meter">
			<div class="meter-bar" style:--width={percentage + '%'}></div>
		</div>
		<div class="percentage">{percentage.toPrecision(2)}%</div>
	</div>
{/snippet}
<main>
	<article>
		<header>
			<p>If you write a book about failure, and it doesn't sell, is it called success?</p>
		</header>
		<div class="content">
			{@render meter('success', 'Definitely a success')}
			{@render meter('failure', 'No')}
			{@render meter('maybe', "Only if it's in the How To section of the library")}
		</div>
		<footer>
			<button>Submit</button>
		</footer>
	</article>
</main>

<style>
	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: var(--size-7);
		background-image: radial-gradient(#1f3b41, #416b72);
	}

	article {
		width: clamp(18rem, 100%, 36rem);
		background-color: white;
		border-radius: var(--size-3);
		overflow: clip;
	}

	header {
		background-color: #f1fcfd;
		color: #597775;
		padding: var(--size-7);

		& p {
			text-wrap: balance;
			text-align: center;
			font-size: var(--size-4);
			font-weight: 500;
		}
	}

	.content {
		color: var(--teal-12);
		padding: var(--size-7);
		display: grid;
		gap: var(--size-7);
	}

	.meter {
		border-radius: 100vw;
		background-color: var(--gray-2);
		width: 100%;
		height: var(--size-5);
		margin-bottom: var(--size-2);
	}

	.meter-bar {
		border-radius: 100vw;
		height: 100%;
		width: var(--width, 0);
		background-color: hsl(var(--shadow-color));
		box-shadow: var(--shadow-4);
		transition: width 300ms ease;
	}

	.percentage {
		text-align: right;
		font-weight: 500;
	}

	input[type='radio'] {
		position: fixed;
		opacity: 0;
		pointer-events: none;
	}

	.checkbox {
		position: relative;
		border-radius: 0.5rem;
		min-width: var(--size-6);
		aspect-ratio: 1;
		border: 2px solid var(--gray-2);
	}

	label {
		cursor: pointer;
		font-size: var(--font-size-3);
		display: flex;
		align-items: center;
		gap: var(--size-2);
		margin-bottom: var(--size-2);
	}

	input[type='radio']:checked + label > .checkbox {
		border-color: var(--blue-4);
		background-color: var(--blue-4);

		&::after {
			content: url(https://api.iconify.design/ph:check-fat-fill.svg);
			position: absolute;
			left: 50%;
			top: 50%;
			translate: -50% -50%;
			filter: invert();
		}
	}

	@scope (.success) {
		.meter-bar {
			--shadow-color: 99 74% 67%;
		}
	}

	@scope (.failure) {
		.meter-bar {
			--shadow-color: 349 74% 67%;
		}
	}

	@scope (.maybe) {
		.meter-bar {
			--shadow-color: 29 74% 67%;
		}
	}

	footer {
		padding: var(--size-7);
		display: grid;
		place-items: center;
	}

	@scope (footer) {
		button {
			color: var(--cyan-0);
			font-weight: 500;
			background-color: var(--cyan-5);
			padding: var(--size-2) var(--size-7);
			border-radius: 0.5rem;
			--shadow-color: 188 72% 47%;
			box-shadow: var(--shadow-3);
			transition: box-shadow 300ms ease;

			&:hover {
				background-color: var(--cyan-6);
				box-shadow: var(--shadow-4);
			}
		}
	}
</style>
