import Image from 'next/image'

const moviespage = async ({ params }) => {
    // console.log(params)
    // console.log(params.id) //value of id
    const id = params.id
    // console.log(id)

    // const url = process.env.RAPID_KEY
    // const url = 'https://netflix54.p.rapidapi.com/title/details/?ids=${params.id}&lang=en'
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd5f8f07088msh7a38f41cef3721ap18fc21jsn6ff54f9f3a61',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com',
        },
    }

    const res = await fetch(url, options)
    const data = await res.json()

    const common_data = data[0].details
    const image = common_data.backgroundImage

    // console.log(common_data)

    return (
        <section>
            <div className="container">
                <h2 className="my-8 text-3xl font-bold capitalize card_title">
                    Netflix \<span className="text-[#e50914]">{common_data.type}</span>
                </h2>
                <div className="flex flex-wrap items-center justify-between gap-12 card w-100">
                    <div className="card_image">
                        <Image
                            src={image.url}
                            // src={'/card.png'}
                            // width={image.width}
                            // height={image.height}
                            width={600}
                            height={300}
                            className="max-w-full rounded-tl-lg rounded-tr-lg"
                            alt="title"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold card_title">{common_data.title}</h2>
                        <p className="mt-3 mb-6 text-justify md:w-9/12">{common_data.synopsis}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default moviespage
