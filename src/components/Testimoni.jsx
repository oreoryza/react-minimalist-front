import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonial } from "../redux/async/fetchData";

const Testimoni = () => {
  const dispatch = useDispatch()
  const {testimonials} = useSelector((state) => state.fetch)

  useEffect(() => {
    dispatch(fetchTestimonial())
  }, [dispatch])

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {testimonials.map((testimoni) => (
          <div key={testimoni.id} className="flex justify-center items-start gap-4 max-w-xl lg:mb-0 mb-6">
            <div>
            <FaQuoteLeft className="text-dark-yellow text-xl" />
            </div>
            <div className="flex flex-col justify-between h-full gap-8">
              <p className="text-black">{testimoni.message}</p>
              <div className="flex gap-8">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={testimoni.foto_profile} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-bold">{testimoni.name}</p>
                  <p className="text-black/[.4]">{testimoni.title}</p>
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
