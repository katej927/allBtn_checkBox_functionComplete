import React from "react";
import styled from "styled-components";
import Nutrition from "../Nutrition/Nutrition";

export default function NutritionMap({ products }) {
  return (
    <NutritionMapWrapTable>
      <TableTr>
        {NUTRITION_TH.map((th) => {
          return <TableTh>{th}</TableTh>;
        })}
      </TableTr>
      {products.map((product) => {
        return (
          <Nutrition
            id={product.id}
            title={product.title}
            kcal={product.kcal}
            sugar={product.sugar}
            protein={product.protein}
            sodium={product.sodium}
            saturation={product.saturation}
            caffeine={product.caffeine}
          />
        );
      })}
    </NutritionMapWrapTable>
  );
}

// 배열
const NUTRITION_TH = [
  "메뉴",
  "칼로리(Kcal)",
  "당류(g)",
  "단백질(g)",
  "나트륨(mg)",
  "포화지방(g)",
  "카페인(mg)",
];

// styled components
const NutritionMapWrapTable = styled.table`
  width: 100%;
  margin-bottom: 60px;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableTr = styled.tr`
  padding: 16px 0px;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
`;

const TableTh = styled.th`
  height: 47px;
  color: #222;
`;
