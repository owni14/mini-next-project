import styled from 'styled-components';
import { useRef } from 'react';

import Card from '../UI/Card';

// CSS Style
const OutsideFormBox = styled.div`
  margin: 3rem 0;
`;

const SubmitForm = styled.form`
  padding: 2rem;
`;

const TitleLabel = styled.label`
  font-size: 1.5rem;
`;

const TitleInput = styled.input`
  margin: 0.5rem 0;
  width: 100%;
  height: 2rem;
`;

const ImageLabel = styled.label`
  font-size: 1.5rem;
`;

const ImageInput = styled.input`
  margin: 0.5rem 0;
  width: 100%;
  height: 2rem;
`;

const AddressLabel = styled.label`
  font-size: 1.5rem;
`;

const AddressInput = styled.input`
  margin: 0.5rem 0;
  width: 100%;
  height: 2rem;
`;

const DescriptionLabel = styled.label`
  font-size: 1.5rem;
  display: block;
`;

const DescriptionTextarea = styled.textarea`
  margin: 0.5rem 0;
  width: 100%;
  height: 8rem;
  rows: 5;
`;

const ButtonBox = styled.div`
  text-align: right;
`;

const SubmitButton = styled.button`
  border: 1px solid #0078ff;
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;
  &:hover {
    background-color: #1e90ff;
  }
`;

const MeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <OutsideFormBox>
      <Card>
        <SubmitForm>
          <TitleLabel htmlFor='title'>Meetup Title</TitleLabel>
          <TitleInput id='title' />
          <ImageLabel htmlFor='image'>Meetup Image</ImageLabel>
          <ImageInput id='image' />
          <AddressLabel htmlFor='address'>Meetup Address</AddressLabel>
          <AddressInput id='address' />
          <DescriptionLabel htmlFor='description'>
            Meetup Description
          </DescriptionLabel>
          <DescriptionTextarea id='description' />
          <ButtonBox>
            <SubmitButton>Add Meetup</SubmitButton>
          </ButtonBox>
        </SubmitForm>
      </Card>
    </OutsideFormBox>
  );
};

export default MeetupForm;
