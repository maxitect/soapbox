<script lang="ts">
	import type { ProductProps } from '$lib/types';
	import ProductCard from './ProductCard.svelte';

	interface Props {
		products: ProductProps[];
	}
	let { products }: Props = $props();
</script>

<div
	class="bg-dark grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-10 xl:grid-cols-4 xl:gap-6"
>
	{#each products as p}
		<ProductCard name={p?.name} handle={p?.handle} price={p?.price} images={p?.images} />
	{/each}
</div>
