import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/newsApi";
import Story from "./Story";

const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};

export default StoryContainer;
