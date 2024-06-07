import { NextApiRequest, NextApiResponse } from 'next';

let tweets = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    tweets = tweets.filter(tweet => tweet.id !== parseInt(id as string));
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
