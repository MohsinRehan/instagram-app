import { useEffect, useState } from "react";
import * as IMAGE_DATA from "./data/status.json";
import { AiOutlineClose } from "react-icons/ai";
import StoryProgressBar from "../storyprogress";

function InstagramStory() {
  const [arrimage] = useState({ ...IMAGE_DATA }.data);
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  useEffect(() => {
    setStories(arrimage);
  }, [arrimage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[100px] mx-5  mt-10 relative">
      {arrimage.map((story) => (
        <div
          key={story.id}
          className="mx-2 cursor-pointer"
          onClick={() => handleStoryClick(story)}
        >
          {story.image && (
            <img
              src={story.image}
              alt={story.name}
              className="w-14 h-14 rounded-full ml-[4px] "
            />
          )}
          <div className="w-16 h-16 border-2 border-solid	border-red-700 absolute top-[-3px] mr-2 rounded-full	"></div>
          <div className="flex-4">
            <p className="text-[12px] my-2 ml-2">{story.name}</p>
          </div>
        </div>
      ))}
      {selectedStory && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50">
          <img
            src={selectedStory.image}
            alt={selectedStory.name}
            className="w-[400px] m-auto h-full object-cover"
          />

          <button
            className="absolute top-4 right-8 text-white text-xl font-bold"
            onClick={() => setSelectedStory(null)}
          >
            <AiOutlineClose />
          </button>
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-1/2">
              <StoryProgressBar progress={progress} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InstagramStory;
