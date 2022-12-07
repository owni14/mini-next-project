import MeetupDetail from '../../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  const DEMO_DATA = {
    id: 'm1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG',
    title: 'London Eye',
    address: 'Some address 1, 12345 Some City',
    description: 'Test description',
  };
  return (
    <>
      <MeetupDetail
        id={DEMO_DATA.id}
        image={DEMO_DATA.image}
        title={DEMO_DATA.title}
        address={DEMO_DATA.address}
        description={DEMO_DATA.description}
      />
    </>
  );
};

export default MeetupDetails;
