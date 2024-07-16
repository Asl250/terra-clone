"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import uzb from '@/public/languages/flag-for-flag-uzbekistan-svgrepo-com.svg'
import rus from '@/public/languages/flag-for-russia-svgrepo-com.svg'
import Image from 'next/image'
import Link from 'next/link'
import { IoLanguage } from 'react-icons/io5'

const LanguagePicker = () => {
	
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<IoLanguage className={'cursor-pointer md:w-[35px] md:h-[35px] h-[25px] w-[25px]'} />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				
				
				<DropdownMenuItem>
					<Image src={rus} alt={'rus'}
					       width={30} height={30} />
					<Link locale='ru' href={'/'} className={'pl-3 text-lg w-full'}>Rus</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Image src={uzb} alt={"uzb"} width={"30"} height={"30"} />
					<p className={'pl-3 text-lg'}>Uzb</p>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
		
		
		
	)
}
export default LanguagePicker
