import React from 'react';
import styled from 'styled-components';
import BudgetGraph from './BudgetGraph';
import BudgetStats from './BudgetStats';
import BudgetInputs from './BudgetInputs';

const Budget = () => {
  return(
    <SectionWrap>
      <RowWrap>
        <BudgetGraph />
        <BudgetStats />
      </RowWrap>
      <RowWrap>
        <BudgetInputs />
      </RowWrap>
    </SectionWrap>
  )
}

export default Budget;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`