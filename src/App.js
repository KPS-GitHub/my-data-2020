import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <OuterWrap>
      <MainWrap>
        <StyledRow>
          <StyledSection>
            Money
          </StyledSection>
          <Spacer />
          <StyledSection>
            Calories
          </StyledSection>
        </StyledRow>
        <StyledRow>
          <StyledSection>
            Goals
          </StyledSection>
          <Spacer />
          <StyledSection>
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
  position: relative;
  width: 90%;
  height: 20rem;
  padding-bottom: .5rem;
  background: red;
  border: 5px solid black;
  transform(1,1);
  -webkit-transition: transform .5s;
  transition: transform .5s;
  :hover {
    transform: scale(1.1,1.2);
    -webkit-transition: transform .5s;
    transition: transform .5s;
  }
`

const Spacer = styled.div`
  width: 5rem;
`