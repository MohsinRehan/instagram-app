import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-between mt-5 w-[350px] p-5">
        <div className="flex">
          <div>
            <img
              src="../Assets/image/mohsin.JPG"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div>
            <p className="ml-2 text-[14px] font-semibold">its_MohsinRehan</p>
            <p className="ml-3 text-[14px]">Mohsin Ali</p>
          </div>
        </div>
        <div>
          <button className="text-[12px] text-[#0095f6] mt-5">Switch</button>
        </div>
      </div>
      <div>
        <p>Suggested for you</p>
      </div>
    </>
  );
};

export default Profile;
