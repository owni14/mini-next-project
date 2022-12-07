import styled from 'styled-components';
import { useRouter } from 'next/router';

import Card from '../UI/Card';

const MeetItem = styled.li`
  margin: 5rem 0;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const ImageSection = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
`;

const TitleParagraph = styled.p`
  font-size: 20px;
`;
const AddressParagraph = styled.p`
  font-size: 20px;
`;

const ButtonBox = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const DetailButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: black;
  border: 1px solid #0078ff;
  background-color: transparent;
  border-radius: 5px;
  font-size: 20px;
  padding: 0.5rem;
  &:hover {
    background-color: #1e90ff;
  }
`;

const MeetupItem = (props) => {
  const router = useRouter();

  const detailHandler = () => {
    router.push(`/meetupDetails/${props.id}`);
  };

  return (
    <MeetItem>
      <Card>
        <ImageBox>
          <ImageSection src={props.image} alt='' />
        </ImageBox>
        <InfoBox>
          <TitleParagraph>{props.title}</TitleParagraph>
          <AddressParagraph>{props.address}</AddressParagraph>
        </InfoBox>
        <ButtonBox>
          <DetailButton onClick={detailHandler}>Show Detail</DetailButton>
        </ButtonBox>
      </Card>
    </MeetItem>
  );
};

export default MeetupItem;
