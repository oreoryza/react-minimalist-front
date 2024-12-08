import React from 'react'

const  Brands = ({bg, filter}) => {
    const brands = [
        {
            id: 1,
            img: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
        },
        {
            id: 2,
            img: "https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-Logo.wine.svg",
        },
        {
            id: 3,
            img: "https://www.logo.wine/a/logo/Tesla_Grohmann_Automation/Tesla_Grohmann_Automation-Logo.wine.svg",
        },
        {
            id: 4,
            img: "https://www.logo.wine/a/logo/Reddit/Reddit-Logo.wine.svg",
        },
        {
            id: 5,
            img: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
        },
        {
            id: 6,
            img: "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg",
        },
        {
            id: 7,
            img: "https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg",
        },
        {
            id: 8,
            img: "https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg",
        },
    ]

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[.1rem] bg-gray">
            {brands.map((item) => (
                <div key={item.id} className={`flex justify-center items-center ${bg}`}>
                    <img className={`scale-75 ${filter}`} src={item.img} alt={item.id} />
                </div>
            ))}
        </div>
    )
}

export default Brands