import LanguagePicker from '@/app/[locale]/(root)/_components/LanguagePicker'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import terra_logo from '../../../../public/logo/terra_logo.svg'
import { Search , ShoppingCart, User, Heart, X} from 'lucide-react';

const Navbar = () => {
	const t = useTranslations('Navbar');
	
	
	return (
		<div className={"h-[10vh] top-0 left-0 right-0 w-full bg-white inset-0 bg-background"}>
			<div className='container max-w-8xl mx-auto h-[10vh] w-full flex items-center justify-between max-md:px-0 max-lg:px-0'>
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
									{t('search')}
								</DrawerTrigger>
								<DrawerContent>
								</DrawerContent>
							</Drawer>
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<ShoppingCart className={'mx-auto'} />
							{t('basket')}
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<Heart className={'mx-auto'} />
							{t('favorites')}
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<User className={'mx-auto'} />
							{t('auth')}
						</div>
					</div>
				
				</div>
				
				<div>
					<LanguagePicker />
				
				</div>
			
			</div>
		
		
		</div>
	)
}
export default Navbar
