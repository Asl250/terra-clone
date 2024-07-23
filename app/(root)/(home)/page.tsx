import CarouselComponent from '@/components/homeComponents/CarouselComponent'
import Features from '@/components/homeComponents/Features'
import HomeCatalog from '@/components/homeComponents/HomeCatalog'
import Swiper from '@/components/homeComponents/Swiper'

const Home = () => {
	return (
		<div>
			<CarouselComponent/>
			<Features/>
			<Swiper/>
			<HomeCatalog/>
		</div>
	);
}
export default Home
