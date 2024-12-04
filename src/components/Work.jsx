import React, { useState } from "react";

const Work = ({ layout, heightImg }) => {
  const [work, setWork] = useState([
    {
      id: 1,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 2,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 3,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 4,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 5,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 6,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 7,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
    {
      id: 8,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
    },
  ]);

  return (
    <div className={`${layout}`}>
      {work.map((item) => (
        <div
          key={item.id}
          className={`group relative ${heightImg} overflow-hidden`}
        >
          <img src={item.img} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 translate-y-16 left-0 w-full bg-black/50 flex justify-center items-center py-3 group-hover:translate-y-0 transition duration-200">
            <h1 className="text-white text-2xl font-bold">{item.id}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
