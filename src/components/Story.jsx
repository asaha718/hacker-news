import React from "react";
import { useState, useEffect } from "react";
import { getStory } from "../services/newsApi";
import { StoryWrapper } from "../styles/StoryStyles"; 

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return story && story.url ? (
    <StoryWrapper>

      <a href={story.url}>
        <p>{story.title}</p>
      </a>

      <h3>By: {story.by}</h3>
      <h3>Posted: {story.time}</h3>
    </StoryWrapper>
    
  ) : null;
};

export default Story;
