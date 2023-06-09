import React, { useEffect } from "react";
import { useState } from "react";
import * as POST_DATA from "./data/post.json";
import { SlOptions } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";

const Post = () => {
  const [arrimage] = useState({ ...POST_DATA }.post);
  const [changeColor, setChangeColor] = useState();
  const [count, setCount] = useState(0);
  const [stories, setStories] = useState([]);


  const handleHeart = () => {
    setChangeColor("red");
    setCount(count + 1);
  };

  useEffect (() =>{
  
    setStories(arrimage);
  }, [arrimage]);
  return (
    <div>
      {arrimage.map((item) => (
        <div className="w-[500px] my-[50px] mx-auto border-b-[1px] border-solid border-[#CCCCCC]">
          <div
            key={item.id}
            className="mx-2 relative flex justify-between  items-center mt-4"
          >
            <div className="flex items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full ml-[4px] "
                />
              )}
              <div className="w-12 h-12 border-2 border-solid	border-red-700 absolute top-[-3.5px]  mr-2 rounded-full	"></div>

              <div className="">
                <p className="text-[12px] my-2 ml-2">{item.name}.</p>
              </div>
              <div>
                <p>{item.time}</p>
              </div>
            </div>
            <div>
              <SlOptions />
            </div>
          </div>
          <div>
            <img
              src={item.image}
              className="w-[490px] h-[500px] my-4 rounded"
            />
          </div>
          <div className="flex  my-2 justify-between mx-2">
            <div className="flex">
              <div>
                <span
                  className="text-[25px] cursor-pointer"
                  onClick={handleHeart}
                  style={{ color: changeColor }}
                >
                  <AiOutlineHeart />
                </span>
              </div>
             
              <span className="text-[25px] ml-2 ">
                <BiMessageRounded />
              </span>
              <span className="text-[25px] ml-2">
                <TbSend />
              </span>
            </div>
            <div>
              <span className="text-[25px]">
                <BsBookmark />
              </span>
            </div>
          </div>
          <p className="mb-4 ml-3">{count}<span className="ml-2">likes</span></p>
        </div>
      ))}
    </div>
  );
};

export default Post;
