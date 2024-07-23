import LanguagePicker from '@/app/(root)/_components/LanguagePicker'
import { Menubar, MenubarItem, MenubarMenu, MenubarSeparator, MenubarContent, MenubarTrigger } from '@/components/ui/menubar'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import terra_logo from '../../../public/logo/terra_logo.svg'
import { Search, User, Heart, Menu, ScrollText } from 'lucide-react'
import '../../../styles/auth.css'

const Navbar = () => {
	
	return (
		<div className={'h-[10vh] top-0 left-0 right-0 w-full bg-white inset-0 bg-background'}>
			<div
				className='container max-w-8xl mx-auto h-[10vh] w-full flex items-center justify-between max-md:px-0 max-lg:px-0'>
				<div
					className={'hidden max-md:flex text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
					<Drawer>
						<DrawerTrigger>
							<Search className={'w-10'} />
						</DrawerTrigger>
						<DrawerContent>
						</DrawerContent>
					</Drawer>
					<Link href={'/company'}>
						<ScrollText className={'mx-auto'}/>
					</Link>
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
							<Link href={'/catalog'}>
								<Menu className={'mx-auto'} />
								catalog
							</Link>
						
						</div>
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<Heart className={'mx-auto'} />
							favorites
						</div>
						
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							<Link href={'/sign-up'}>
								<User className={'mx-auto'} />
								auth
							</Link>
						</div>
						
						
						<div
							className={'text-lg text-gray-400 hover:text-black cursor-pointer transition duration-300'}>
							
							<Menubar>
								<MenubarMenu>
									<MenubarTrigger>
										<ScrollText className={'mx-auto'}/>
										Company
									</MenubarTrigger>
									<MenubarContent>
										<MenubarItem>
											<Link href={'/company'}>
												Company
											</Link>
										</MenubarItem>
										
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/stores'}>
												Stores
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/contacts'}>
												Contact
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/public-offer'}>
												Public-offer
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/privacy-info'}>
												Privacy-info
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/vozvrat'}>
												Vozvrat
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/delivery-info'}>
												Delivery-info
											</Link>
										</MenubarItem>
										
										<MenubarSeparator/>
										
										<MenubarItem>
											<Link href={'/company/FAQ'}>
												FAQ
											</Link>
										</MenubarItem>
										
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
							
						
						</div>
					</div>
				
				</div>
				
				<div className={'flex'}>
					<div className={'mr-3 flex'}>
						<UserButton />
					</div>
					<LanguagePicker />
				
				</div>
			
			</div>
		
		
		</div>
	)
}
export default Navbar
