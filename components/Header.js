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
                <img src="/bg_img_dirt.png" className="sm:hidden -z-10 absolute object-cover h-full" />

                <div className=" isolate px-6 pt-14 lg:px-8 ">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-8xl">
                                A Plus Topsoil
                            </h1>
                            <p className="mt-6 text-2xl leading-8 text-gray-300">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
