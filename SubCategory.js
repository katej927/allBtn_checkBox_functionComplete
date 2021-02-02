import React, { Component } from "react";
import styled from "styled-components";
import ProductMap from "../ProductMap/ProductMap";
import NutritionMap from "../NutritionMap/NutritionMap";
import { Icon } from "react-icons-kit";
import { coffee } from "react-icons-kit/fa/coffee";
import "./SubCategory.scss";

export default class SubCategory extends Component {
  render() {
    const {
      currentId,
      categories,
      newCategories,
      state,
      copyCategories,
    } = this.props;

    return (
      <div className="subCategory">
        <div className="subCategoryDiv">
          {copyCategories.map((category) => {
            const MAPPING_OBJ = {
              1: <ProductMap products={category.products} />,
              2: <NutritionMap products={category.products} />,
            };

            return (
              <div>
                <SUBCATEGORY_TITLE>
                  <SubcategoryName>{category.name}</SubcategoryName>
                  <CoffeeDiv>
                    {currentId === 1 && <Icon icon={coffee} size={30} />}
                  </CoffeeDiv>
                  <SubcategoryDesc>
                    {currentId === 1 && category.description}
                  </SubcategoryDesc>
                </SUBCATEGORY_TITLE>
                {MAPPING_OBJ[currentId]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const SUBCATEGORY_TITLE = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 58px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  background-color: #f4f4f2;
`;

const SubcategoryName = styled.span`
  margin-right: 10px;
  color: #222;
  font-size: 18px;
  font-weight: bold;
`;

const SubcategoryDesc = styled.span`
  margin-left: 5px;
  color: #444444;
  font-size: 13px;
`;

const CoffeeDiv = styled.div`
  color: #94bb39;
`;
