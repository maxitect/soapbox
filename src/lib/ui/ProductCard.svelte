<script lang="ts">
	export interface ProductProps {
		name: string;
		handle: string;
		price: number;
		images: string[];
	}
	let { name, handle, price, images }: ProductProps = $props();
</script>

<div>
	<a
		href="/products/{handle}"
		class="bg-light-container-mid flex w-full flex-col justify-center gap-2 border-2"
	>
		<img src={images[0]} alt="{name} product image" class="m-0 p-0" />
		<div class="flex justify-between p-6 text-xl">
			<h3 class="text-dark text-bold">{name}</h3>
			<p class="text-dark">£{price}</p>
		</div>
	</a>
</div>
