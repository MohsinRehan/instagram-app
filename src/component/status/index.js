import { useEffect , useState } from "react";
import * as IMAGE_DATA from "./data/status.json";


function InstagramStory() {
  const [arrimage] = useState({ ...IMAGE_DATA }.data);
  const [stories, setStories] = useState([]);
  return (
    <div className="flex h-[100px] mx-5  mt-10 relative">
      {arrimage.map((story) => (
        <div key={story.id} className="mx-2">
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
    </div>
  );
}

export default InstagramStory