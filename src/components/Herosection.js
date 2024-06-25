import heroStyles from '@/app/css/herosection.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Herosection = ({ para, imageUrl, title }) => {
    return (
        <main className={`bg-hero-grad relative  ${heroStyles.shape_div_main}`}>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 md:items-center gap-y-14">
                    {/* Right side */}
                    <div className="hero_content">
                        <h1 className="text-5xl/snug text-[#161617] font-bold uppercase">{title}</h1>
                        <p className="mt-5 mb-10 leading-relaxed">
                            From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our selection of the latest and greatest movies, and find your new favorite today.
                        </p>
                        <Link href={`/movie`}>
                            <button className="px-5 py-2 font-normal text-white duration-700 bg-black rounded-full hover:bg-white hover:text-black ">
                                Explore movies
                            </button>
                        </Link>
                    </div>

                    {/* left side */}
                    <div className="flex justify-start md:justify-end hero_image">
                        <Image
                            src={imageUrl}
                            // src={'/about1.svg'}
                            className="h-auto max-w-full"
                            alt="lets watch movie"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>

            {/* Shape Divider code  */}
            {/* <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles['shape-fill']}
                    ></path>
                </svg>
            </div> */}
        </main>
    )
}

export default Herosection
