"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Menu } from 'lucide-react';
import Link from 'next/link'


const Header = () => {
	return (
		<div className={"bg-[#383b47] text-white hidden lg:block"}>
			<div className={"max-w-8xl mx-auto h-[7vh] w-full flex items-center justify-around"}>
				
				<HoverCard>
					<HoverCardTrigger>
							<div className={'flex text-lg cursor-pointer'}>
								<Menu width={20} className={'mr-2'}/>
								<Link href={'/catalog'}>
									Kiyim katalogi
								</Link>
							</div>
				</HoverCardTrigger>
				<HoverCardContent className={'duration-0'}>content</HoverCardContent>
				</HoverCard>

				<HoverCard>
				<HoverCardTrigger>
						<div
							className={'flex text-lg cursor-pointer'}>
							<Menu width={20} className={'mr-2'} />
							<Link
								href={'/catalog'}>
								Yangi toplam
							</Link>
							
						</div>
					</HoverCardTrigger>
					<HoverCardContent>content</HoverCardContent>
				</HoverCard>
				
				<HoverCard>
					<HoverCardTrigger>
						<p className={'flex text-lg cursor-pointer'}>
							Kompaniya haqida
						</p>
					</HoverCardTrigger>
					<HoverCardContent>content</HoverCardContent>
				</HoverCard>
			</div>
		</div>
	)
}
export default Header
