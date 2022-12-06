import styled from 'styled-components';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d6/London-Eye-2009.JPG',
    title: 'London Eye',
    address: 'Some address 1, 12345 Some City',
  },
  {
    id: 'm2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Tottenham_Hotspur_Stadium_June_2019%2C_view_from_East.jpg',
    title: 'Tottenham Hotspur Stadium',
    address: 'Some address 2, 1234 Some City',
  },
  {
    id: 'm3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/58/Trafalgar_square_clouds.jpg',
    title: 'Trafalgar Square',
    address: 'Some address 3, 12 Some City',
  },
];

const MainBox = styled.div``;

const MainPage = () => {
  return (
    <MainBox>
      <MeetupList meetups={DUMMY_DATA} />
    </MainBox>
  );
};

export default MainPage;
