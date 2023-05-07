import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What types of dirt products do you offer?",
        answer:
            "We offer a variety of dirt products, including topsoil, fill dirt, black dirt, and asphalt millings. We also offer gravel hauling services.",
    },
    {
        question: "How much dirt can I order for delivery?",
        answer:
            "We offer delivery for any amount of dirt you need, from small residential projects to large commercial jobs.",
    },
    {
        question: "What areas do you offer delivery services to?",
        answer:
            "We offer delivery services to a wide range of areas. Contact us to see if we deliver to your specific location.",
    },
    {
        question: "Is your business family-owned?",
        answer:
            "Yes, our business is family-owned and operated. We take pride in our commitment to excellent service and quality products.",
    },
    {
        question: "Do you offer installation services?",
        answer:
            "While we don't offer installation services ourselves, we can recommend trusted professionals in your area who can help with your landscaping or construction project.",
    },
    {
        question: "How much notice do I need to give for an order?",
        answer:
            "While we strive to provide fast delivery services, it's always best to give us as much notice as possible. For larger orders, we recommend contacting us at least a week in advance to ensure availability and schedule delivery.",
    },
]

export default function FAQ() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
