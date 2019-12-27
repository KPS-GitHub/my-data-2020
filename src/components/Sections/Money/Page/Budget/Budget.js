import React from 'react';
import styled from 'styled-components';
import BudgetGraph from './BudgetGraph';
import BudgetStats from './BudgetStats';
import BudgetInputs from './BudgetInputs';
import axios from 'axios';



class Budget extends React.Component {
  state = {
    monthlyBudget: null,
    totalSpent: null,
    individualPurchase: null,
  }

  componentDidMount () {
    axios.get('https://mydata-822b0.firebaseio.com/Money/Budget.json')
      .then( response => {
        console.log(response);
        this.setState({ 
          monthlyBudget: response.data.monthlyBudget,
          totalSpent: response.data.totalSpent,
          individualPurchase: response.data.individualPurchase
        });
      })
      .catch( error => {
        console.log(error);
      })
  }

  render() {
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