import MeetupDetail from '../../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

const MeetupDetails = (props) => {
  // const DEMO_DATA = {
  //   id: 'm1',
  //   image:
  //     'https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG',
  //   title: 'London Eye',
  //   address: 'Some address 1, 12345 Some City',
  //   description: 'Test description',
  // };
  return (
    <>
      <MeetupDetail
        key={props.meetupData.id}
        id={props.meetupData.id}
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetupIds.map((id) => ({
      params: { meetupId: id._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    'mongodb+srv://kmwoo0514:1234@pratice.rxc6uzg.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  const foundData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  console.log('foundData:: ', foundData);

  return {
    props: {
      meetupData: {
        id: foundData._id.toString(),
        title: foundData.title,
        image: foundData.image,
        address: foundData.address,
        description: foundData.description,
      },
    },
  };
}

export default MeetupDetails;
