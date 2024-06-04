import { FC } from 'react'
import LeftBlock from './LeftBlock'
import RightBlock from './RightBlock'

const Block: FC = () => {
	return (
		<section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl'>
			<div className='mb-8 flex flex-wrap justify-between md:mb-16'>
				<LeftBlock />
				<RightBlock />
			</div>
		</section>
	)
}

export default Block
