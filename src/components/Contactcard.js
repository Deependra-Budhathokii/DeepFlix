import React from 'react'
import Link from 'next/link'
import { MdEmail, MdVoiceChat, MdForum } from 'react-icons/md'

const Contactcard = () => {
    return (
        <section>
            <div className="container">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {/* contact card-1 */}
                    <div className="py-5 text-center bg-white contact_card contact_card_shadow card-style-comp">
                        <MdEmail className="inline-block text-4xl text-[#e50914]" />

                        <h2 className="mt-2 mb-3 text-lg font-semibold">Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className="mb-8">response time: 72 hours </p>
                        <Link href="/">
                            {' '}
                            Send Email <span className="duration-200 transform">-&gt;</span>
                        </Link>
                    </div>
                    {/* contact card-2 */}
                    <div className="py-5 text-center bg-white contact_card contact_card_shadow card-style-comp">
                        <MdVoiceChat className="inline-block text-4xl text-[#e50914]" />

                        <h2 className="mt-2 mb-3 text-lg font-semibold">Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET </p>
                        <p className="mb-8">response time: 72 hours </p>
                        <Link href="/">
                            Chat Now <span className="duration-200 transform">-&gt;</span>
                        </Link>
                    </div>
                    {/* contact card-3 */}
                    <div className="py-5 text-center bg-white contact_card contact_card_shadow card-style-comp">
                        <MdForum className="inline-block text-4xl text-[#e50914]" />

                        <h2 className="mt-2 mb-3 text-lg font-semibold">Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className="mb-8">Monday to Friday Expected </p>
                        <Link href="/">
                            Ask The Community <span className="duration-200 transform">-&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactcard
