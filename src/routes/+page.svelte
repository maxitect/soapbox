<script>
	import ProductGrid from '$lib/ui/ProductGrid.svelte';
	import products from '$lib/data/products.json';
</script>

<h1 class="text-dark text-center text-4xl">Got Soap?</h1>
<ProductGrid {products} />
