import { NextApiRequest, NextApiResponse } from 'next';

let tweets = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'POST') {
    tweets = tweets.map(tweet => {
      if (tweet.id === parseInt(id as string)) {
        tweet.likes += 1;
      }
      return tweet;
    });
    res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
