import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleMovie = (elem) => {
  const { id, title, type, synopsis } = elem.jawSummary;
  return (
    <>
      <div className="border-2 w-[400px] p-3"  key={id}>
        <div>
          <Image
            src={elem.jawSummary.backgroundImage.url}
            alt={title}
            width={400}
            height={30}
          ></Image>
        </div>

        <div className="flex gap-2 flex-col items-center">
          <h2 className="font-bold text-xl uppercase">{title.substring(0,16)}</h2>
          <p>{synopsis.substring(0,40)}...</p>

          <Link className="p-2 m-2 bg-black text-white" href={`/movie/${id}`}>Watch Now</Link>

        </div>
      </div>
    </>
  );
};

export default SingleMovie;
