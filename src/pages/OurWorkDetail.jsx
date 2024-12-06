import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { detailPortfolios } from "../redux/async/fetchData";
import parse from 'html-react-parser'

const OurWorkDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {portfolio} = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(detailPortfolios({id}));
  }, [dispatch, id])

  return (
    <>
    <Header left={"opacity-0"} mousePosition={"bottom"} text={"We work with love."} />
    <div className="flex flex-col justify-center gap-4 lg:mx-28 mx-8 my-4">
      <img src={portfolio.banner} alt={portfolio.title} className="w-full h-96 object-cover" />
      <h1 className="lg:text-7xl text-5xl font-bold">{portfolio.title}</h1>
      <p className="mt-4">{parse(`${portfolio.content}`)}</p>
    </div>
    </>
  );
};

export default OurWorkDetail;