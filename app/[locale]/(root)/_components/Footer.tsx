import Image from 'next/image'
import Link from 'next/link'
import { PiTelegramLogo } from "react-icons/pi";
import {FaClock, FaInstagram, FaMapMarkerAlt} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import logo from '../../../../public/footer_logo/terra-footer.svg'

const Footer = () => {
	return (
		<div className={'bg-[rgb(36,36,36)] max-lg:h-[645px] bottom-0'}>
			<Link href={'/'}>
				<Image src={logo} alt={'logo'} className={'flex mx-auto pt-8'}/>
			</Link>
			<div className={'mx-auto flex w-[130px] gap-3 pt-[40px]'}>
				<PiTelegramLogo className={'text-[rgb(122,125,140)] text-4xl'}/>
				<FaFacebookF className={'text-[rgb(122,125,140)] text-4xl'}/>
				<FaInstagram className={'text-[rgb(122,125,140)] text-4xl'}/>
			</div>
			<div className={'xl:w-[860px] lg:mx-auto md:gap-5 max-sm:space-y-3 grid xl:grid-cols-4 max-sm:grid-cols-1 md:grid-cols-2 md:justify-between max-sm:justify-between mx-auto mt-[50px]'}>
				<div className={'flex text-[rgb(122,125,140)] gap-2 w-[220px] max-sm:mx-auto md:mx-auto'}>
					<MdEmail className={'my-auto text-[rgb(122,125,140)] text-xl'}/>
					<p>
						terrapro.retail@gmail.com
					</p>
				</div>
				<div className={'flex text-[rgb(122,125,140)] gap-2 w-[180px] max-sm:mx-auto md:mx-auto'}>
					<FaMapMarkerAlt className={'my-auto text-[rgb(122,125,140)] text-xl'}/>
					<p className={'me-auto'}>
						Xaritada korsatish
					</p>
				</div>
				<div className={'flex text-[rgb(122,125,140)] gap-2 w-[190px] max-sm:mx-auto md:mx-auto'}>
					<IoIosCall className={'my-auto text-[rgb(122,125,140)] text-xl'}/>
					<p className={'me-auto'}>
						+998 71 250-93-91
					</p>
				</div>
				<div className={'flex text-[rgb(122,125,140)] gap-2 w-[229px] max-sm:mx-auto md:mx-auto'}>
					<FaClock className={'my-auto text-[rgb(122,125,140)] text-xl'}/>
					<p className={'me-auto'}>
						Пн, -Суб.:с 9:00 до 18:00
					</p>
				</div>
			</div>
			<div className={'pt-[30px]'}>
				<div className={'flex text-[rgb(122,125,140)] gap-2 w-[127px] max-sm:mx-auto md:mx-auto'}>
					<FaMapMarkerAlt className={'my-auto text-[rgb(122,125,140)] text-xl'}/>
					<p className={'me-auto'}>
						Sayt Xaritasi
					</p>
				</div>
			</div>
			<div className={'xl:flex lg:flex md:flex mx-auto w-[555px] max-sm:block pt-[30px] max-sm:w-[360px]'}>
				<p className={'text-[rgb(122,125,140)] text-sm'}>
					© 2024 TERRA PRO. Hamma huquqlar himoyalangan |
				</p>
				<p className={'text-[rgb(122,125,140)] text-sm max-sm:mx-auto max-sm:w-[200px]'}>
					Sayt ishlab chiqargan | Devus
				</p>
			</div>
		</div>
	)
}
export default Footer
