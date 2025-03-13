export interface ProductProps {
	name: string;
	handle?: string;
	price: number;
	images: string[];
}

export interface Product extends ProductProps {
	id: string;
	category: string;
	availableStock: number;
	description: string;
	quantity?: number;
}
