import { Inter, Roboto_Mono, Rajdhani, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const rajdhani = Rajdhani({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-kathdhani',
    weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
    title: 'Deepflix',
    description: 'Platform for exploring movies and series',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/deepflix_Favicon.svg" type="image/x-icon" />
            </head>
            <body className={poppins.className}>
                <Header />
                {/* <hr className="w-full h-5 bg-black" /> */}
                {/* <Navbar /> */}
                {children}
                <Footer />
            </body>
        </html>
    )
}
