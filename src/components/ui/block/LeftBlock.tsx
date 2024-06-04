import { FC } from 'react'

const LeftBlock: FC = () => {
	return (
		<div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40'>
			<h1 className='mb4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl'>
				Top Fashion Shop - DECATLON
			</h1>
			<p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
				We have high quality products, Decatlon the place where you should come.
				Just do it.
			</p>
		</div>
	)
}

export default LeftBlock
