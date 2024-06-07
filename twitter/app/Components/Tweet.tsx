"use client";

import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface TweetProps {
  id: number;
  content: string;
  timestamp: Date;
  likes: number;
  deleteTweet: (id: number) => void;
  likeTweet: (id: number) => void;
}

export const Tweet: React.FC<TweetProps> = ({ id, content, timestamp, likes, deleteTweet, likeTweet }) => {
  return (
    <div className="border p-4 my-2 rounded-lg flex justify-between items-start">
      <div>
        <p>{content}</p>
        <p className="text-gray-500 text-sm">
          {formatDistanceToNow(new Date(timestamp))} ago
        </p>
        <div className="flex items-center mt-2">
          <button onClick={() => likeTweet(id)} className="mr-2">
            <span role="img" aria-label="like">❤️</span> {likes}
          </button>
          <button onClick={() => deleteTweet(id)} className="text-red-500">
            <span role="img" aria-label="delete">🗑️</span>
          </button>
        </div>
      </div>
    </div>
  );
};
