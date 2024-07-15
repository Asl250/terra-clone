"use client"

import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photo1 from '../../public/carouselPhoto/photo1.jpg'
import photo2 from '../../public/carouselPhoto/phpto2.jpg'



const CarouselComponent = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	
	return (
		<>
			<Carousel
				responsive={responsive}
				showDots={true}
				autoPlay={true}
				autoPlaySpeed={2000}
				arrows={false}
				keyBoardControl={false}
				infinite={true}
			
			>
				<div>
					<div className={'relative items-center'}>
						<Image
							src={photo1}
							alt={'photo1'}
							className={'w-full object-cover object-center content-center'}
						/>
					</div>
					<div className={'absolute text-white ml-5 space-y-10'}>
						<h1 className={'text-8xl xl:-mt-[500px] max-sm:text-2xl md:-mt-[300px] max-sm:-mt-[150px] max-lg:text-6xl lg:text-8xl max-md:-mt-[200px] max-md:text-4xl mb-5 text-center text-white font-semibold'}>Yangi toplam</h1>
						<Link
							href={`/catalog`}
							className={'text-xl max-md:text-md max-sm:text-sm font-semibold py-[10px] px-[30px] max-md:px-[20px] max-sm:px-[7px] md:ml-8 bg-[#242424] hover:bg-gray-600 transition duration-500'}>Hammasini korish
						</Link>
					</div>
				
				</div>
				
				
				<div>
					<div className={'relative items-center'}>
						<Image
							src={photo2}
							alt={'photo1'}
							className={'aspect-[1800/805] w-full object-cover object-center content-center'}
						/>
					</div>
					<div className={'absolute text-white ml-5 space-y-10'}>
						<h1 className={'text-8xl xl:-mt-[500px] max-sm:text-2xl md:-mt-[300px] max-sm:-mt-[150px] max-lg:text-6xl lg:text-8xl max-md:-mt-[200px] max-md:text-4xl mb-5 text-center text-white font-semibold'}>
							Savdo Xitlari
						</h1>
						<Link
							href={'/catalog'}
							className={'text-xl max-md:text-md max-sm:text-sm font-semibold py-[10px] px-[30px] max-md:px-[20px] max-sm:px-[7px] md:ml-8 bg-[#242424] hover:bg-gray-600 transition duration-500'}>Hammasini
							korish
						</Link>
					</div>
				
				</div>
				
				
				<div>
					<div className={'relative items-center'}>
						<Image
							src={photo1}
							alt={'photo1'}
							className={'w-full object-cover object-center content-center'}
						/>
					</div>
					<div className={'absolute text-white ml-5 space-y-10'}>
						<h1 className={'text-8xl xl:-mt-[500px] max-sm:text-2xl md:-mt-[300px] max-sm:-mt-[150px] max-lg:text-6xl lg:text-8xl max-md:-mt-[200px] max-md:text-4xl mb-5 text-center text-white font-semibold'}>
							Yangi mahsulotlar
						</h1>
						<Link
							href={'/catalog'}
							className={'text-xl max-md:text-md max-sm:text-sm font-semibold py-[10px] px-[30px] max-md:px-[20px] max-sm:px-[7px] md:ml-8 bg-[#242424] hover:bg-gray-600 transition duration-500'}>Hammasini
							korish
						</Link>
					</div>
				
				</div>
			</Carousel>
		</>
	
	
	)
}
	export default CarouselComponent
