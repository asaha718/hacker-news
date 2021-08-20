import React from "react";
import { useState, useEffect } from "react";
import { getStory } from "../services/newsApi";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <div>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>

      <h3>By: {story.by}</h3>
      <h3>Posted: {story.time}</h3>
    </div>
  ) : null;
};

export default Story;
