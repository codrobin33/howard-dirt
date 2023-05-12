import Image from 'next/image';
import Seperator from "./Seperator";

import bgImage from '../public/bg_img_dirt.webp';

export default function Header() {

    return (
        <div className="bg-gray-800 bg-opacity-80 sm:bg-opacity-90 overflow-hidden">
            <div className="relative">
                <video
                    autoPlay loop muted
                    poster="/bg_img_dirt.webp"
                    className="hidden sm:block absolute -z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src="/small_video_bg_dirt.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>

                <div className="sm:hidden absolute -z-10 w-full h-full">
                    <Image
                        src={bgImage}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        quality={50}
                        priority
                    />
                </div>

                <div className="isolate px-6 pt-10 lg:px-8 ">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <p className="text-lg leading-8 text-gray-200">
                                Kansas City, Missouri
                            </p>
                            <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-8xl">
                                A Plus Topsoil
                            </h1>
                            <p className="mt-6 text-2xl leading-8 text-gray-200">
                                Dirt, gravel, fill and more! We have top quality product ready for your project. <br /><br /> Call us to get started
                            </p>

                            <div className="mt-8 flex items-center justify-center gap-x-6">
                                <a href="tel:816-935-9900" className="inline-flex items-center px-5 py-3 mr-1 text-lg font-semibold text-white no-underline align-middle bg-red-600 border border-transparent border-solid rounded-md cursor-pointer select-none mb-0 w-auto hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700">
                                    (816) 935-9900
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                                <a href="#promise" className="hidden sm:block text-sm font-semibold leading-6 text-gray-300 hover:underline hover:underline-offset-2">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Seperator />
            </div>
        </div>
    )
}
