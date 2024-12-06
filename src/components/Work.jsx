import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolios } from "../redux/async/fetchData";

const Work = ({ layout, heightImg }) => {
  const dispatch = useDispatch();
  const {portfolios} = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  return (
    <div className={`${layout}`}>
      {portfolios.map((portfolio) => (
        <Link key={portfolio.id} to={`/our-work-detail/${portfolio.id}`}>
          <div
            className={`group relative ${heightImg} overflow-hidden`}
          >
            <img src={portfolio.banner} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 translate-y-16 left-0 w-full bg-black/50 flex justify-center items-center py-3 group-hover:translate-y-0 transition duration-200">
              <h1 className="text-white text-2xl font-bold">{portfolio.title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
