import products from '$lib/data/products.json';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ params }) => {
	const product = products.find((product) => product.handle === params.slug);

	return {
		product
	};
};
