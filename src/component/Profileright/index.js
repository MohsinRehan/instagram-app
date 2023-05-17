import React, { useState } from "react";
import Suggested from "../Suggest";

const Profile = ({name , text}) => {

  return (
    <>
      <div className=" mt-5 w-[350px] p-5">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div><img
              src="../Assets/image/mohsin.JPG"
              className="w-16 h-16 object-cover rounded-full"
            /></div>
            <div>
              <p className="ml-3 text-[14px] font-semibold">its_MohsinRehan</p>
              <p className="ml-3 text-[14px] text-[#737373]">Mohsin Ali</p>
            </div>
          </div>

          <div>
            <button className="text-[12px] text-[#0095f6] mt-5">Switch</button>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <p className="my-2 font-semibold	 text-[#737373] text-[14px]">Suggested for you</p>
          <button className=" font-semibold text-[12px]">See All</button>
        </div>
       <div>
        <Suggested name="Mohsin Ali" text="Suggested for you"/>
        <Suggested name="Arslan Ahmad" text="followed by malikali"/>
        <Suggested name="Sameer" text="Suggested for you"/>
        <Suggested name="Mirza Saim" text="followed by samikhan"/>
       </div>
      </div>
    </>
  );
};

export default Profile;
