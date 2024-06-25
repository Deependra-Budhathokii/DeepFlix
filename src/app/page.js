import Header from '@/components/Header'
import Image from 'next/image'
import Herosection from '@/components/Herosection'

export default function Home() {
    return (
        <>
            <Herosection
                title={"LET'S WATCH MOVIE TOGETHER"}
                imageUrl={`/home.svg`}
            />
        </>
    )
}
