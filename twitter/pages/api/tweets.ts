import { NextApiRequest, NextApiResponse } from 'next';

let tweets = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { content } = req.body;
    const newTweet = { id: Date.now(), content, timestamp: new Date(), likes: 0 };
    tweets.push(newTweet);
    res.status(201).json(newTweet);
  } else if (req.method === 'GET') {
    res.status(200).json(tweets);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
