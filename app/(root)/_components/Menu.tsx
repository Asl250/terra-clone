import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Heart, Search, ShoppingCart, AlignJustify, User } from 'lucide-react'

const Menu = () => {
	return(
		<div
			className={'fixed z-50 md:right-0 bg-white rounded-lg md:pb-4 md:space-y-5 md:my-16 md:px-2 max-md:bottom-0 max-md:right-0 max-md:left-0 max-md:flex max-md:justify-around max-md:mt-5'}>
			<div className={'md:hidden text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
				<AlignJustify className={'mx-auto max-md:w-6 max-md:h-6'} width={30} height={30} />
				<p className={'md:ml-8 text-xl max-md:text-md max-md:text-sm'}>catalog</p>
			</div>
			
			<div className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
				<ShoppingCart className={'mx-auto max-md:w-6 max-md:h-6'} width={30} height={30} />
				<p className={'md:ml-8 max-md:text-sm text-xl max-md:text-md md:pr-2'}>basket</p>
			</div>
			
			<Drawer>
				<DrawerTrigger
					className={'max-md:hidden  max-md:text-sm text-xl text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
					<div className={'md:ml-8'}>
						<Search className={'mx-auto'} width={30} height={30} />
						search
					</div>
				</DrawerTrigger>
				<DrawerContent>
				</DrawerContent>
			</Drawer>
			
			<div className={'max-md:text-sm text-xl text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
				<Heart className={'mx-auto max-md:w-6 max-md:h-6'} width={30} height={30} />
				favorites
			</div>
			
			<div className={'md:hidden text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
				<User className={'mx-auto max-md:w-6 max-md:h-6'} width={30} height={30} />
				<p className={'md:ml-8 text-xl max-md:text-md max-md:text-sm'}>auth</p>
			</div>
		</div>
	)
}
export default Menu
