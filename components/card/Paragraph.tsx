import type { ChildProps } from '@/types'
import Link from 'next/link'

const Paragraph = ({text} : any) => {
	return (
		<div>
			<div className={'text-center flex gap-2 mx-auto w-full justify-center mt-5'}>
				<Link href={'/'}>
					<h1 className={'text-[rgb(189,190,191)] hover:text-black'}>Asosiy</h1>
				</Link>
				<p className={'text-[rgb(189,190,191)]'}>-</p>
				<h1>{text}</h1>
			</div>
			<h1 className={'text-4xl text-center mt-[20px] text-black'}><strong>{text}</strong></h1>
		</div>
	)
}
export default Paragraph
