import React from 'react'

const  Brands = ({bg, filter}) => {
    const brands = [
        {
            id: 1,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 2,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 3,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 4,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 5,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 6,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 7,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 8,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
    ]

    return (
        <div className="grid grid-cols-4 gap-[2px] bg-gray">
            {brands.map((item) => (
                <div key={item.id} className={`flex justify-center items-center ${bg}`}>
                    <img className={`scale-75 ${filter}`} src={item.img} alt={item.id} />
                </div>
            ))}
        </div>
    )
}

export default Brands