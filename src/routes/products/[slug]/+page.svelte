<script lang="ts">
	import type { Product } from '$lib/types';

	let { data } = $props();
	let product: Product | undefined = data.product;
</script>

{#if product}
	<div class="mb-10 flex justify-between border-2 text-xl">
		<div class="flex flex-col gap-4">
			{#each product.images as image, i}
				<img src={image} alt={product.name} />
			{/each}
		</div>
		<div class="m-10">
			<div class="flex justify-between">
				<h1 class="text-dark mb-2 font-bold">{product.name}</h1>
				<p class="text-dark">£{product.price}</p>
			</div>
			<div class="flex justify-between">
				<p class="text-dark mb-6">{product.category}</p>
				<p class="text-dark">Available: {product.availableStock}</p>
			</div>
			<p>{product.description}</p>
		</div>
	</div>
{/if}
