<script lang="ts">
	interface Props {
		title: string;
		handle: string;
		price: number;
		images: string[];
	}
	let { title, handle, price, images }: Props = $props();
</script>

<div>
	<a
		href="/products/{handle}"
		class="bg-light-container-mid flex w-full flex-col justify-center gap-2 rounded-4xl px-3 py-4"
	>
		<img src={images[0]} alt="{title} product image" />
		<h3 class="text-dark">{title}</h3>
		<p class="text-dark">£{price}</p>
	</a>
</div>
