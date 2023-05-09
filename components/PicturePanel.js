import Image from 'next/image';

import truck from '../public/truck.webp';

export default function PicturePanel() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" id="promise">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
                    <div className="lg:pr-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Promise</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Experience the best quality dirt products and fast, reliable service with our family-run business. We offer a wide selection of topsoil,
                                fill dirt, gravel hauling, and asphalt millings for all your landscaping and construction needs. Our commitment to excellence means you can
                                trust us to deliver the highest quality products straight to your doorstep. Contact us today to learn more and place your order. Let us show
                                you why we're the go-to choice for all your dirt needs!
                            </p>
                            <div className="mt-8">
                                <a
                                    href="tel:816-935-9900"
                                    className="inline-flex rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    (816) 935-9900
                                </a>
                            </div>
                            <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                                <blockquote className="text-base leading-7">
                                    <p>
                                        “I recently ordered topsoil from this business and I couldn't be happier with the experience. From start to finish, Howard was professional,
                                        courteous, and went above and beyond to ensure I got exactly what I needed for my project. The quality of the topsoil was excellent and it was
                                        delivered right on time. Overall, I highly recommend this business for anyone in need of topsoil delivery.
                                        You won't be disappointed”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                                    <img
                                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                        alt=""
                                        className="h-6 w-6 flex-none rounded-full"
                                    />
                                    <div>
                                        <span className="font-semibold text-gray-900">Cassandra Robinson</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div className="relative w-full h-[15rem] sm:h-5/6 max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0">
                        <Image
                            src={truck}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Picture of dump truck"
                            style={{ borderRadius: '0.75rem' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
