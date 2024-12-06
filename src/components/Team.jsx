import React, { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "../redux/async/fetchData";

const Team = () => {
  const dispatch = useDispatch();
  const { teams } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
      {teams.map((member) => (
        <div key={member.id} className="bg-white p-4 drop-shadow-md">
          <div className="h-72">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 py-8 px-2">
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-lg text-black/[.5] font-medium">
              {member.title}
            </p>
          </div>
          <div className="flex gap-4 text-black/[.5] px-2">
            <a href={member.ig_url} target="_blank" rel="noreferrer noopener" className="flex items-center">
              LINKEDIN <FiArrowUpRight />
            </a>
            <a href={member.linkedin_url} target="_blank" rel="noreferrer noopener" className="flex items-center">
              INSTAGRAM <FiArrowUpRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
