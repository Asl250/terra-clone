import Image from 'next/image'

const Features = () => {
	const cards = [
		{
			title: "Tovarlarni bo'lib-bo'lib va komissiyasiz sotib olish",
			img:"/homePagePhoto/zoodmall.png",
			width:100,
			height:100
		},
		{
			title: "Oson qaytish tovarlar",
			img:"/homePagePhoto/box.png",
			width:100,
			height:100
		},
		{
			title: "Bepul yetkazib berish 400 000 so'mdan",
			img:"/homePagePhoto/money.png",
			width:100,
			height:100
		},
		{
			title: "O'zbekiston boylab dostavka",
			img:"/homePagePhoto/truck.png",
			width:100,
			height:100
		},
		{
			title: "Mavjud narxlar",
			img:"/homePagePhoto/price.png",
			width:100,
			height:100
		}
	]
	
	
	return (
		<div className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ' +
			'max-md:grid-cols-1 w-full my-[100px] gap-x-[3%] md:mx-5'}>
			{
				cards.map((card, index) => {
					return(
						<div
							key={index}
							className={'cursor-pointer py-10 space-y-5 mb-5 max-md:w-[70%] max-md:mx-auto text-center w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'}>
							<Image src={card.img}
								alt={card.title}
								className={'mx-auto'}
								width={card.width}
								height={card.height}
							/>
							<h3>{card.title}</h3>
						</div>
					)
				})
			}
		</div>
	)
	
}

export default Features
