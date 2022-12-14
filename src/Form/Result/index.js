import React from 'react'
import { ResultStyled } from './styled';

const Result = ({ result }) => (
  <p>
    <ResultStyled>
      {result !== undefined && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
          {" "}
          {result.targetAmount.toFixed(2)}&nbsp;{result.selectCurrency}
          <ResultStyled rate>
            Stawka {result.showRate.toFixed(2)}&nbsp;PLN
          </ResultStyled>
        </>
      )}
    </ResultStyled>
  </p>
);
export default Result