import Catalog from '@/components/ui/catalog/Catalog'
import Block from '@/components/ui/block/Block'
import { ProductService } from '@/services/product.service'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home page',
	description: 'Home page description',
}

async function getProducts() {
	const data = await ProductService.getAll()

	return data
}

export default async function Home() {
	const data = await getProducts()

	return (
		<div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
			<Block />
			<Catalog products={data} isFull={false} />
		</div>
	)
}
