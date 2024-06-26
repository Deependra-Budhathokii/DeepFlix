import Header from '@/components/Header'
import Image from 'next/image'
import Herosection from '@/components/Herosection'

// export const metadata = {
//   title: "Blog Posts",
//   description: "this is blog post on mindfulness, How the mindfulness training transform your life"
// }

export default function Home() {
    return (
        <>
            <Herosection title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={`/home.svg`} />
        </>
    )
}
