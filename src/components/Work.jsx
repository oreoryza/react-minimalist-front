import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolios } from "../redux/async/fetchData";

const Work = ({ layout, heightImg }) => {
  const dispatch = useDispatch();
  const {portfolios, loading} = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, [dispatch]);

  return (
    <div className={`${layout}`}>
      {portfolios.map((portfolio) => (
        <>
        {loading ? (
          <div class="border border-black shadow rounded-md p-2 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-64 bg-gray rounded"></div>
              </div>
            </div>
          </div>
        ) : (
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
      )}
      </>
      ))}
    </div>
  );
};

export default Work;
