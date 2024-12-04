import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimoni = () => {
  const [testimon, setTestimon] = useState([
    {
      id: 1,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      name: "John Doe",
      job: "CEO",
      desc: "I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them again and would recommend them to anyone else looking for a designer and developer. They know their stuff!",
    },
    {
      id: 2,
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      name: "John Doe",
      job: "CEO",
      desc: "Great work ethic and very reliable! Brooklyn was our logo designer. She walked us through many iterations and guided us on all aspects of the process. Very professional, will use them again soon!”",
    },
  ]);
  return (
    <div>
      <div className="flex gap-10">
        {testimon.map((item) => (
          <div key={item.id} className="flex justify-center items-start gap-4 max-w-xl">
            <div>
            <FaQuoteLeft className="text-dark-yellow text-xl" />
            </div>
            <div className="flex flex-col justify-between h-full gap-8">
              <p className="text-black">{item.desc}</p>
              <div className="flex gap-8">
                <img src={item.img} className="w-14 h-14 rounded-full" />
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-bold">{item.name}</p>
                  <p className="text-black/[.4]">{item.job}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
