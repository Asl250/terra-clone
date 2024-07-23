import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { card } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const Swiper = () => {
	
	return(
		<Carousel className={'mb-10'}>
			<CarouselContent>
				{card.map((card, idx) => {
					return (
						<CarouselItem
							key={card.title}
							className={'w-auto hover:scale-105 duration-200 ease-in basis-auto mx-7'}>
							<Link href={card.link}>
								<Image
									width={200}
									height={200}
									src={card.image}
									alt={card.title}
									className={'aspect-square object-center rounded-full transition-none duration-0'}
								/>
								<h3 className={'text-center'}>{card.title}</h3>
							</Link>
							
							
						</CarouselItem>
					)
				})}
			</CarouselContent>
		</Carousel>
	)
}
export default Swiper
