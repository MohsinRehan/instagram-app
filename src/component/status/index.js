import { useEffect , useState } from "react";
import * as IMAGE_DATA from "./data/status.json";


function InstagramStory() {
  const [arrimage] = useState({ ...IMAGE_DATA }.data);
  const [stories, setStories] = useState([]);
  return (
    <div className="container mx-auto mt-10">
      {arrimage.map((story) => (
        <div key={story.id} className="flex items-center space-x-3">
          {story.image && (
            <img
              src={story.image}
              alt={story.username}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div className="flex-4">
            <h2 className="text-lg font-bold">{story.username}</h2>
            <p className="text-gray-500">{story.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InstagramStory