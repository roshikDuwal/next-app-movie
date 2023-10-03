import React from "react";
import "@/app/loading.css";

const loading = () => {
  return (
    <section>
      <div className="w-full h-[600px] flex items-center justify-center">
        <div class="lds-dual-ring "></div>
      </div>
    </section>
  );
};

export default loading;
