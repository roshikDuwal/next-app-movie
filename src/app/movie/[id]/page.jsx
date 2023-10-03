
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const page = async({params}) => {
  const {id}=params

  const url =  `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`

  

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "fa4b19b656mshb281b5d103099cdp1de960jsna7fc5c301b87",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
 const main_data=data[0].details;



  return (
    <>
    <div className="flex flex-col items-center justify-center p-5">
      <div className="text-red-500 text-2xl font-bold mb-5">Netflix\<span className="text-black text-2xl font-bold  ">{main_data.type}</span></div>

      <div>
        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}></Image>
      </div>

      <div>
      
        <h1 className="font-bold uppercase text-3xl p-5 m-4">{main_data.title}</h1>
        <p className="p-5 text-lg">{main_data.synopsis}</p>
      
      </div>
    </div>
    
    </>
  )
};

export default page;
