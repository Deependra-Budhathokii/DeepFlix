import Moviecard from '@/components/Moviecard'
import React from 'react'

const movie = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000)) // just to test loading UI

    const url = process.env.RAPID_KEY
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd5f8f07088msh7a38f41cef3721ap18fc21jsn6ff54f9f3a61',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com',
        },
    }

    const res = await fetch(url, options)
    const data = await res.json()

    const main_data = data[0].episodes

    // To access Url
    // console.log(data[0].episodes[0].interestingMoment['_342x192'].webp.value.url)

    return (
        <section className="movie_section">
            <div className="container">
                <h1 className="my-3 text-4xl font-bold tracking-wide text-center underline capitalize underline-offset-[10px] decoration-gray-900 ">
                    Series and Movies
                </h1>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-9">
                    {main_data.map((curElem) => {
                        return <Moviecard key={curElem.id} {...curElem} />
                    })}
                    {/* <Moviecard /> */}
                </div>
            </div>
        </section>
    )
}
export default movie
