import styled from 'styled-components';

const CardBox = styled.div`
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Card = (props) => {
  return <CardBox>{props.children}</CardBox>;
};

export default Card;
