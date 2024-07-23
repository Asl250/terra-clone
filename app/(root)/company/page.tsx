import Paragraph from '@/components/card/Paragraph'
import Image from 'next/image'
import photo from '../../../public/company/company.webp'

const Company = () => {
	return (
		<div className={'mx-[7%] my-10'}>
			<Paragraph text={'Kompaniya haqida'}/>
			<h4 className={'font-extrabold'}>Company</h4>
			<hr className={'w-full h-[2px] bg-black mb-5'}/>
			<Image
				src={photo}
				alt={'company'}
				className={'w-full'}/>
			<p className={'mt-5 text-lg'}>Terra Pro - erkaklar va ayollar uchun mo`ljallangan kiyimlar do`konlarining tarmog`i.</p>
			<p className={'mt-5 text-lg'}>Biz 10 yildan ortiq muddat davomida o`z shaxsiy bichimi bilan ajralib turishga intiluvchi zamonaviy kiyimlarni yaratib, ijodkorlik va dizaynni barcha yechimlarimizning diqqat markaziga qo`ydik.</p>
			<p className={'mt-5 text-lg'}>Biz yuqori sifatli xizmat ko`rsatish, shaxsiylashtirish va barcha ehtiyojlarga diqqat- e`tibor bilan yondoshgan holda mijozlarimizni bilishni va ularga yaqinroq bo`lishni xohlaymiz.</p>
			<div className={'bg-[#e9f6fe] my-4'}>
				<p className={'w-full text-center justify-center font-bold py-6 text-lg'}>Biz erishgan natijalar:</p>
				<p className={'w-full text-center justify-center text-lg pb-6'}>- O`zbekiston Respublikasi hududida chakana savdo sohasidagi yetakchi mavqelar; </p>
				<p className={'w-full text-center justify-center text-lg pb-10'}>- har bir mavsumiy to`plamda 500 dan ortiq noyob artikullar;</p>
				<p className={'w-full text-center justify-center text-lg pb-6'}>- ko`plab moda tadbirlarida ishtirok etish.</p>
				<p className={'w-full text-center justify-center text-lg pb-6'}>- Qozog`iston hududida bir nechta do`konlarning ochilishi</p>
				<p className={'w-full text-center justify-center text-lg pb-2'}> * Toshkentdagi do`konlar soni-13 ta;</p>
				<p className={'w-full text-center justify-center text-lg pb-2'}>*Viloyatlardagi do`konlar soni-13 ta;</p>
				<p className={'w-full text-center justify-center text-lg pb-6'}>*Qozog`istondagi do`konlar soni-6 ta;</p>
			</div>
			<p className={'text-lg mb-6'}>
				Bizning do`konlarimiz O`zbekiston va Qozog`iston bo`ylab joylashgan.
				<br/>
				Brendning ishlab chiqarilish joyi Xitoyda Guanchjou shahrida joylashgan.
			</p>
		</div>
	)
}
export default Company
