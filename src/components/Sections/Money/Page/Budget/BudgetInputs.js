import React from 'react';
import styled from 'styled-components';

const inputs = ["Budget Total", "Purchases Total"];
// const inputs = ["Budget Total", "Purchases Total", "Individual Purchase"];

class BudgetInputs extends React.Component {
  state={
    budgetInputVal: null,
    spentInputVal: null
  }

  budgetUpdate = e => {
    this.setState({budgetInputVal: parseInt(e.target.value)});
  }

  render() {
    return (
      <Wrap>
        {inputs.map(input => {
          return(
            <InputWrap key={input + ` Input`}>
              {input}: &nbsp;
              <input onChange={input === "Budget Total" ? this.budgetUpdate : null} type="number" name={input} />
              <button onClick={input === "Budget Total" ? () => this.props.budgetUpdate(this.state.budgetInputVal) : null }>update</button>
            </InputWrap>
          );
        })}
      </Wrap>
    );
  }

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