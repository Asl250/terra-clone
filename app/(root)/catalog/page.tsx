"use client"

import Paragraph from '@/components/card/Paragraph'
import { card } from '@/constants'


const Clothes = async () => {
  
    return (
        <div>
          <Paragraph text={'Kiyim Katalogi'}/>
          
          <div className={'mx-auto max-md:mx-[13%] max-sm:mx-[3%] mt-[40px] grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-sm:grid-cols-1 gap-5'}>
                {card.map((card, idx) => {
                    return (
                         <div
                            key={idx}
                            className="transition duration-200 group relative cursor-pointer items-center justify-center xl:w-[640px] xl:h-[800px] h-[600px] max-sm:w-[350px] md:w-[380px] max-xl:mx-[5%] max-sm:mx-auto">
                            <div className="h-full">
                                <a href={card.link}>
                                    <img
                                        className="h-full grid xl:grid-cols-3 lg:grid-cols-2 max-lg:grid-cols-1 aspect-[1/1] object-center content-center transition-transform duration-300"
                                        src={card.image}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div
                                className="absolute inset-0 duration-300 bg-gradient-to-b  via-transparent to-black group-hover:from-black/30 group-hover:via-black/50 group-hover:to-black/70"></div>
                            <div
                                className="mt-[430px] xl:mt-[600px] absolute inset-0 flex translate-y-[10%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <a href={card.link}
                                   className="font-dmserif text-4xl font-bold text-white">{card.title}</a>
                                <button
                                    className="rounded-full mt-3 bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                                    <a href={card.link}>Koproq Korish</a>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Clothes
