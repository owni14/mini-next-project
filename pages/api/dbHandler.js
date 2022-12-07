import { MongoClient } from 'mongodb';

const dbHandler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log('result:: ', result);

    client.close;

    res.status(200).json({ success: true });
  }
};

export default dbHandler;
