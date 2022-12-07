import styled from 'styled-components';

const DetailLayout = styled.div`
  margin: 5vh 0;
`;

const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainImag = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 100%;
  text-align: center;
`;

const TitleParagraph = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 5vh;
`;

const AddressParagraph = styled.p`
  font-size: 1.5rem;
`;

const DescriptionParagraph = styled.p`
  font-size: 1.5rem;
`;

const MeetupDetail = (props) => {
  return (
    <DetailLayout>
      <ImageBox>
        <MainImag src={props.image} alt='' />
      </ImageBox>
      <InfoBox>
        <TitleParagraph>{props.title}</TitleParagraph>
        <AddressParagraph>{props.address}</AddressParagraph>
        <DescriptionParagraph>{props.description}</DescriptionParagraph>
      </InfoBox>
    </DetailLayout>
  );
};

export default MeetupDetail;
