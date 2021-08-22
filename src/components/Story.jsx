import React from "react";
import { useState, useEffect } from "react";
import { getStory } from "../services/newsApi";
import { StoryTitle, StoryWrapper } from "../styles/StoryStyles";

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return story && story.url ? (
    <StoryWrapper>
    <StoryTitle>
      <a href={story.url}>
        <h2>{story.title}</h2>
      </a>
    </StoryTitle> 
      <div className="post-details">
      <p>{story.score} points</p>
      <p>by {story.by}</p>
      <p>{story.time}</p>
      </div>
    </StoryWrapper>
  ) : null;
};

export default Story;
