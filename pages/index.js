import { useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import styled from 'styled-components';

import MeetupList from '../components/meetups/MeetupList';

const MainBox = styled.div``;

const MainPage = (props) => {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setLoadedData(props.meetups);
  }, []);

  return (
    <MainBox>
      <MeetupList meetups={loadedData} />
    </MainBox>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find().toArray();

  console.log('meetups:: ', meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.enteredTitle,
        image: meetup.enteredImage,
        address: meetup.enteredAddress,
        description: meetup.enteredDescription,
      })),
    },
  };
}

export default MainPage;
