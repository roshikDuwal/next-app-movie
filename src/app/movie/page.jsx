import React from "react";
import SingleMovie from "../components/SingleMovie";

const page = async () => {

  await new Promise(resolve=>setTimeout(resolve,2000))

  const url = process.env.RapidApi;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fa4b19b656mshb281b5d103099cdp1de960jsna7fc5c301b87",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <h1 className="text-xl font-bold text-center p-5">SERIES AND MOVIES</h1>
      <div className="p-2 flex flex-wrap gap-4  border-2 items-center justify-center">
        {main_data.map((elem) => {
          return <SingleMovie key={elem.id} {...elem} />;
        })}
      </div>
    </>
  );
};

export default page;
