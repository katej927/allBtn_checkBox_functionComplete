import React from "react";
import styled from "styled-components";

export default function Nutrition({
  id,
  title,
  kcal,
  sugar,
  protein,
  sodium,
  saturation,
  caffeine,
}) {
  return (
    <NutritionTr>
      <TableTh>{title}</TableTh>
      <TableTd>{kcal}</TableTd>
      <TableTd>{sugar}</TableTd>
      <TableTd>{protein}</TableTd>
      <TableTd>{sodium}</TableTd>
      <TableTd>{saturation}</TableTd>
      <TableTd>{caffeine}</TableTd>
    </NutritionTr>
  );
}

const NutritionTr = styled.tr`
  height: 47px;
  padding: 16px 0px;
  border-bottom: 1px solid #ddd;
`;

const TableTh = styled.th`
  // border: 1px solid orange;
  color: #666;
  font-weight: 500;
`;

const TableTd = styled.td`
  // border: 1px solid pink;
  color: #666;
  text-align: center;
`;
