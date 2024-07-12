import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'


export const card = [
	{
		title: "Tashqi Kiyim",
		link: "/tashqi-kiyim",
		image: "/catalog/tashqi1.webp"
	},
	{
		title: "Tolstovka",
		link: "/tolstovka",
		image: "/catalog/tolstovka.webp"
	},
	{
		title: "Jemperlar",
		link: "/jemper-cardigan",
		image: "/catalog/jemper.webp"
	},
	{
		title: "Futbolkalar va pololar",
		link: "/futbolka-polo",
		image: "/catalog/futbolka.webp"
	},
	{
		title: "Ko'ylaklar",
		link: "/ko'ylaklar",
		image: "/catalog/ko'ylaklar.webp"
	},
	{
		title: "Shimlar",
		link: "/shimlar",
		image: "/catalog/shimlar.webp"
	},
	{
		title: "Jinslar",
		link: "/jinslar",
		image: "/catalog/jinslar.webp"
	},
	{
		title: "Pidjak",
		link: "/pidjak",
		image: "/catalog/pidjak.webp"
	},
	{
		title: "Shortilar",
		link: "/shortilar",
		image: "/catalog/shortilar.webp"
	},
	{
		title: "Aksesuarlar",
		link: "/aksesuarlar",
		image: "/catalog/aksasuar.webp"
	},
]
const Swiper = () => {
	
	return(
		<Carousel className={'mb-10'}>
			<CarouselContent>
				{card.map((card, idx) => {
					return (
						<CarouselItem className={'w-auto hover:scale-105 duration-200 ease-in basis-auto mx-7'}>
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
