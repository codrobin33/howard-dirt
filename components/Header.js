import Seperator from "./Seperator";

export default function Example() {

    return (
        <div className="bg-gray-800 bg-opacity-50 sm:bg-opacity-90 overflow-hidden">
            <div className="relative">
                <video
                    autoPlay loop muted
                    poster="/bg_img_dirt.png"
                    className="hidden sm:block absolute -z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source src="/small_video_bg_dirt.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>

                <div className="isolate px-6 pt-14 lg:px-8 ">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <p className="text-lg leading-8 text-gray-200">
                                Kansas City, Missouri
                            </p>
                            <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-8xl">
                                A Plus Topsoil
                            </h1>
                            <p className="mt-6 text-2xl leading-8 text-gray-200">
                                From gravel hauling to top-quality black dirt, we've got you covered. <br /> Call us to get started
                            </p>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href="tel:816-935-9900" className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700">
                                    (816) 935-9900
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-300 hover:underline hover:underline-offset-2">
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
