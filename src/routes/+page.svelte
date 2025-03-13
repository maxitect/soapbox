<script>
	import ProductGrid from '$lib/ui/ProductGrid.svelte';
	import products from '$lib/data/products.json';
</script>

<h1 class="text-dark p-10 text-center text-4xl">Got Soap?</h1>
<p class="mb-6">Check out our handcrafted, all natural selection of soaps and shampoo bars.</p>
<ProductGrid {products} />
