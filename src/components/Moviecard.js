import Image from 'next/image'
import Link from 'next/link'
const Moviecard = (curElem) => {
    // console.log(curElem)
    // console.log(curElem.episodes[0].title)
    const { url } = curElem.interestingMoment['_342x192'].webp.value
    const descrip = curElem.contextualSynopsis.text
    // const id = curElem.episodeId
    const { episodeId } = curElem

    return (
        <div className="p-4 rounded-lg card card_box_shadow card-style-comp">
            <div className="card_image">
                <Image
                    src={url}
                    // src={'/card.png'}
                    width={460}
                    height={200}
                    // layout="fill"
                    // objectFit="cover"
                    className="max-w-full rounded-tl-lg rounded-tr-lg"
                    alt="title"
                />
            </div>

            <div className="p-3 card_details">
                {/* <h2 className="text-2xl font-bold card_title">Sisu</h2> */}
                <h2 className="text-2xl font-bold card_title">{curElem.title}</h2>

                <p className="mt-3 mb-6 text-justify">{descrip.substring(0, 66)} ...</p>
                <Link href={`/movie/${episodeId}`}>
                    <button className="px-4 py-2 text-white duration-300 bg-black rounded-full hover:outline hover:bg-transparent hover:text-black">
                        Read more
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Moviecard
