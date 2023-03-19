import styled from 'styled-components';
const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #111111;
  font-size: 28px;
  border: none;
  background-color: transparent;
`;
const Burger = styled.div`
  position: relative;
  align-item: center;
  display: block;
  width: 30px;
  height: 20px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: #212121;
    border: 1px solid #212121;
    border-radius: 10px;

    width: 100%;
    height: 3px;
  }
  &:before {
    top: 0;
    left: 0;
  }
  &:after {
    bottom: 0;
    left: 0;
  }
`;
const Span = styled.div`
  position: absolute;
  background-color: #212121;
  border: 1px solid #212121;
  border-radius: 10px;
  width: 100%;
  height: 3px;
  top: 8px;
`;

export const Menu = () => {
  return (
    <Container>
      <Burger>
        <Span />
      </Burger>
    </Container>
  );
};
