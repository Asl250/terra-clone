'use client'

import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import { VscCircleLarge } from "react-icons/vsc";
import { useState } from "react";

const TashqiKiyim = () => {
    const [card, setCard] = useState(
        [
            {
                title: "Vetrovka AW23CA1N-27-19047-142451",
                image: "/tashqi-kiyim/1.jpg",
                link: "/catalog/tashqi-kiyim/vetrovka",
                size: "XL",
                // color: 'rgb(0,0,0)' | 'rgb(0,0,255)' | 'rgb(105,105,105)',
                cost: '500 000',
            },
            {
                title: "Vetrovka AW23CA1N-27-19047-142451",
                image: "/tashqi-kiyim/2.jpg",
                link: "/catalog/tashqi-kiyim/vetrovka",
                size: "XL",
                // color: 'rgb(0,0,0)' | 'rgb(0,0,255)' | 'rgb(105,105,105)',
                cost: '500 000',
            },
            {
                title: "Vetrovka AW23CA1N-27-19047-142451",
                image: "/tashqi-kiyim/3.jpg",
                link: "/catalog/tashqi-kiyim/vetrovka",
                size: "XL",
                // color: 'rgb(0,0,0)' | 'rgb(0,0,255)' | 'rgb(105,105,105)',
                cost: '500 000',
            },
            {
                title: "Vetrovka AW23CA1N-27-19047-142451",
                image: "/tashqi-kiyim/4.jpg",
                link: "/catalog/tashqi-kiyim/vetrovka",
                size: "XL",
                // color: 'rgb(0,0,0)' | 'rgb(0,0,255)' | 'rgb(105,105,105)',
                cost: '500 000',
            },
            {
                title: "Vetrovka AW23CA1N-27-19047-142451",
                image: "/tashqi-kiyim/5.jpg",
                link: "/catalog/tashqi-kiyim/vetrovka",
                size: "XL",
                // color: 'rgb(0,0,0)' | 'rgb(0,0,255)' | 'rgb(105,105,105)',
                cost: '500 000',
            }
        ]
    );

    return (
        <div>
            <div className={'text-center flex gap-2 mx-auto w-[300px] my-5'}>
                <Link href={'/'}>
                    <h1 className={'text-[rgb(189,190,191)] hover:text-black'}>Asosiy</h1>
                </Link>
                <p className={'text-[rgb(189,190,191)]'}>-</p>
                <Link href={'/catalog'}>
                    <h1 className={'text-[rgb(189,190,191)] hover:text-black'}>kiyim katalogi</h1>
                </Link>
                <p className={'text-[rgb(189,190,191)]'}>-</p>
                <h1>Tashqi kiyim</h1>
            </div>
            <h1 className={'text-4xl text-center mb-8'}><strong>Tashqi kiyim</strong></h1>
            <div className={'grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1'}>
                {card.map((card) => {
                    return (
                        <div
                          className={'mx-auto'}
                          key={card.link}
                        >
                            <div className={'w-[360px] h-[530px]'}>
                                <div
                                    className="group relative cursor-pointer items-center justify-center overflow-hidden">
                                    <Link href={card.link}>
                                        <img
                                            className="h-[530px] w-full object-cover"
                                            src={card.image}
                                            alt="image"/>
                                    </Link>
                                    <div
                                        className="absolute inset-0  from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                    <div
                                        className="bg-gradient-to-b from-transparent via-transparent to-white group-hover:from-white/70 group-hover:via-white/60 group-hover:to-white/70 h-[80px] absolute mt-[470px] inset-0 flex translate-y-[35%] flex-col  justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <button
                                            className="w-[100px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-com text-sm capitalize">
                                            <a href={card.link}>Sotib olish</a>
                                        </button>
                                        <div
                                            className="mb-6 ml-3 flex gap-10 text-lg italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <button><a href={card.link}>{card.size}</a></button>
                                            <button><a href={card.link}>{card.size}</a></button>
                                            <button><a href={card.link}>{card.size}</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'mx-3 my-2'}>
                                <Link href={card.link} className={'text-md'}>{card.title}</Link>
                                <div className={'flex gap-2 mt-2'}>
                                    <VscCircleLarge className={'bg-gray-600 rounded-full p-[12px]'}/>
                                    <VscCircleLarge className={'bg-blue-700 rounded-full p-[12px]'}/>
                                    <VscCircleLarge className={'bg-black rounded-full p-[12px]'}/>
                                </div>
                                <Link href={card.link} className={'mt-2'}>Narx: {card.cost} UZS</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TashqiKiyim
