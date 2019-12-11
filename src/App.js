import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <OuterWrap>
      <MainWrap>
        <StyledRow>
          <StyledSection sm="12" lg="6">
            Money
          </StyledSection>
          <StyledSection sm="12" lg="6">
            Calories
          </StyledSection>
        </StyledRow>
        <StyledRow>
          <StyledSection sm="12" lg="6">
            Goals
          </StyledSection>
          <StyledSection sm="12" lg="6">
            Fun
          </StyledSection>
        </StyledRow>
      </MainWrap>
    </OuterWrap>
  );
}

export default App;


const OuterWrap = styled.div`
  margin: 20rem 20px 20px 20px;
`

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
`

const StyledSection = styled.div`
  width: 30vw;
  height: 20rem;
  background: red;
  border: 5px solid black;
  transform(1,1);
  -webkit-transition: transform .5s;
  transition: transform .5s;
  :hover {
    transform: scale(1.5,1.5);
    -webkit-transition: transform .5s;
    transition: transform .5s;
  }
`