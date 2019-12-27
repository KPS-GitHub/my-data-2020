import React from 'react';
import styled from 'styled-components';

const inputs = ["Budget Total", "Purchases Total", "Individual Purchase"];

const BudgetInputs = () => {
  return (
    <Wrap>
      {inputs.map(input => {
        return(
          <InputWrap key={input + ` Input`}>
            {input}: &nbsp;
            <input type="number" />
            <button>update</button>
          </InputWrap>
        );
      })}
    </Wrap>
  );
}

export default BudgetInputs;


const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`