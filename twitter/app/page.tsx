"use client";

import React, { useState, useEffect } from 'react';
import { Feed } from './Components/Feed';
import { TweetBox } from './Components/TweetBox';

const Home: React.FC = () => {
  const [tweets, setTweets] = useState<{ id: number, content: string, timestamp: Date, likes: number }[]>([]);

  useEffect(() => {
    const fetchTweets = async () => {
      const res = await fetch('/api/tweets');
      const data = await res.json();
      setTweets(data);
    };

    fetchTweets();
  }, []);

  const addTweet = async (content: string) => {
    const res = await fetch('/api/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    const newTweet = await res.json();
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = async (id: number) => {
    await fetch(`/api/tweets/${id}`, {
      method: 'DELETE',
    });
    setTweets(tweets.filter(tweet => tweet.id !== id));
  };

  const likeTweet = async (id: number) => {
    await fetch(`/api/tweets/${id}/like`, {
      method: 'POST',
    });
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
