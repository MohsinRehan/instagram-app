import React from "react";

const Suggested = ({name ,text}) => {
  
  return (
    <div className="flex justify-between my-4 items-center">
        <div className="flex items-center">
          <div>
            <img
              src="../Assets/image/mohsin.JPG"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
          <div className="ml-3">
            <p className="text-[14px] font-semibold ">
              {name}
            </p>
            <p className="text-[12px] font-normal text-[#737373]">{text}</p>
          </div>
        </div>
      <div>
        <button className="text-[12px] text-[#0095f6] font-semibold">F0llow</button>
      </div>
    </div>
  );
};

export default Suggested;
