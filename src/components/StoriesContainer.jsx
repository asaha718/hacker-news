import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/newsApi";
import Story from "./Story";

const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <div className="stories-page">
      <h1>Hacker News Stories </h1>
      <ol>
        {storyIds.map((storyId) => (
          <li key={storyId}>
            <Story storyId={storyId} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StoryContainer;
