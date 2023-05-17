import React from 'react';

const StoryProgressBar = ({ progress }) => {
  return (
    <div className="absolute top-1 left-1 w-full bg-gray-300 h-2 rounded-full">
      <div
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default StoryProgressBar;
