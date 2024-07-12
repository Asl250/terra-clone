import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { IoLanguage } from 'react-icons/io5'
import terra_logo from '../../../public/logo/terra_logo.svg'
import { Search , ShoppingCart, User, Heart, X} from 'lucide-react';
import rus from '../../../public/languages/flag-for-russia-svgrepo-com.svg'
import uzb from '../../../public/languages/flag-for-flag-uzbekistan-svgrepo-com.svg'

const Navbar = () => {
	return (
		<div className={"h-[10vh] top-0 left-0 right-0 w-full bg-white inset-0 bg-background"}>
			<div className='container max-w-8xl mx-auto h-[10vh] w-full flex items-center justify-between max-md:px-0'>
				<div className={'hidden max-md:flex text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
					<Drawer>
						<DrawerTrigger>
							<Search className={'w-10'} />
						</DrawerTrigger>
						<DrawerContent>
						</DrawerContent>
					</Drawer>
				</div>
				<div>
					<Link href={'/'}>
						<Image
							src={terra_logo}
							alt={'logo'}
							width={220} />
					</Link>
		
				</div>
				
				<div className={'gap-10 hidden md:flex'}>
					
					<div className={'flex justify-end space-x-[15%]'}>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<Drawer>
								<DrawerTrigger>
									<Search className={'mx-auto'} />
									Izlash
								</DrawerTrigger>
								<DrawerContent>
								</DrawerContent>
							</Drawer>
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<ShoppingCart className={'mx-auto'} />
							Savat
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<Heart className={'mx-auto'} />
							Tanlanganlar
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<User className={'mx-auto'} />
							Kirish
						</div>
					</div>
				
				</div>
				
				<div>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<IoLanguage className={'cursor-pointer md:w-[35px] md:h-[35px] h-[25px] w-[25px]'} />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							
							
							<DropdownMenuItem>
								<Image src={rus} alt={'rus'}
								       width={30} height={30} />
								<p className={'pl-3 text-lg'}>Rus</p>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Image src={uzb} alt={"uzb"} width={"30"} height={"30"} />
								<p className={'pl-3 text-lg'}>Uzb</p>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		
		
		</div>
	)
}
export default Navbar
