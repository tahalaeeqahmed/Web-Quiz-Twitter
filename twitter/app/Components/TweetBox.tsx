"use client";

import React, { useState } from 'react';

interface TweetBoxProps {
  addTweet: (content: string) => void;
}

export const TweetBox: React.FC<TweetBoxProps> = ({ addTweet }) => {
  const [tweetContent, setTweetContent] = useState('');

  const handleTweet = () => {
    if (tweetContent.trim()) {
      addTweet(tweetContent);
      setTweetContent('');
    }
  };

  return (
    <div className="p-4 border-b border-gray-300">
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="What's happening?"
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      />
      <div className="flex justify-end mt-2">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
