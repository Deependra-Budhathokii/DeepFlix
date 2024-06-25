import Link from 'next/link'
import Logo from '@/../public/logo.png'
import Nav from './Nav'
import Navbar from './Navbar'
import Image from 'next/image'

const Header = () => {
    return (
        <header className="custom-box-shadow">
            <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-[1600px]">
                <div>
                    <Link href="/">
                        <Image src={Logo} width={200} height={40} />
                    </Link>
                </div>

                <Nav />
                {/* <Navbar /> */}
            </div>
        </header>
    )
}

export default Header
