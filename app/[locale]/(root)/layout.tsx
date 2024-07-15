import Footer from '@/app/[locale]/(root)/_components/Footer'
import Header from '@/app/[locale]/(root)/_components/Header'
import Menu from '@/app/[locale]/(root)/_components/Menu'
import Navbar from '@/app/[locale]/(root)/_components/Navbar'
import type { ChildProps } from '@/types'

const Layout = async ({ children } :ChildProps) => {
	return (
		<div className={"overflow-x-hidden"}>
			<Navbar/>
			{/* <Header/> */}
			<Menu/>
			{children}
			<Footer/>
		</div>
	)};

export default Layout;
