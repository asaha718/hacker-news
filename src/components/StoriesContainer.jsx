import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/newsApi";

const StoryContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return <div>{JSON.stringify(storyIds)}</div>;
};

export default StoryContainer; 