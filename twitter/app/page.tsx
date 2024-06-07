"use client";

import React, { useState } from 'react';
import { Feed } from './Components/Feed';
import { TweetBox } from './Components/TweetBox';

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<{ id: number, content: string, timestamp: Date, likes: number }[]>([]);

  const addTweet = (content: string) => {
    const newTweet = {
      id: tweets.length + 1,
      content,
      timestamp: new Date(),
      likes: 0
    };
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = (id: number) => {
    setTweets(tweets.filter(tweet => tweet.id !== id));
  };

  const likeTweet = (id: number) => {
    setTweets(tweets.map(tweet => tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet));
  };

  return (
    <div className="w-3/4 p-4">
      <TweetBox addTweet={addTweet} />
      <Feed tweets={tweets} deleteTweet={deleteTweet} likeTweet={likeTweet} />
    </div>
  );
};

export default Home;
