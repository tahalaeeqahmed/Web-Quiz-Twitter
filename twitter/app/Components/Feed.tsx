"use client";

import React from 'react';
import { Tweet } from './Tweet';

interface FeedProps {
  tweets: { id: number, content: string, timestamp: Date, likes: number }[];
  deleteTweet: (id: number) => void;
  likeTweet: (id: number) => void;
}

export const Feed: React.FC<FeedProps> = ({ tweets, deleteTweet, likeTweet }) => {
  return (
    <div>
      {tweets.map(tweet => (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          content={tweet.content}
          timestamp={tweet.timestamp}
          likes={tweet.likes}
          deleteTweet={deleteTweet}
          likeTweet={likeTweet}
        />
      ))}
    </div>
  );
};
