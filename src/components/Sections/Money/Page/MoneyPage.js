import React from 'react';
import styled from 'styled-components';
import MoneyGraphs from './MoneyGraphs';
import MoneyInputs from './MoneyInputs';

const MoneyPage = () => {
  return (
    <PageWrap>
      <div>
        <MoneyGraphs />
      </div>
      <div>
        <MoneyInputs />
      </div>
    </PageWrap>
  );
}

export default MoneyPage;


const PageWrap = styled.div`
  margin: 10%;
`