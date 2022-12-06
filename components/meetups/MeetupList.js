import styled from 'styled-components';
import MeetupItem from './MeetupItem';

const MeetList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MeetupList = (props) => {
  return (
    <MeetList>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </MeetList>
  );
};

export default MeetupList;
