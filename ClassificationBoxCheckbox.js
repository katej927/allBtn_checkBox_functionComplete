import React from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import "./ClassificationBoxCheckbox.scss";

export default function ClassificationBoxCheckbox({
  categories,
  state,
  isCheckedCategoryName,
}) {
  return (
    <ClassificationBoxCheckboxWrapper>
      <Label>
        <input
          type="checkbox"
          value="전체 보기"
          name="seeAllCategories"
          onClick={isCheckedCategoryName}
          id="allCheckboxId"
        />
        <label for="allCheckboxId">
          {/* <IconDiv>
            <AiOutlineCheck size={12} />
          </IconDiv> */}
        </label>
        <CheckboxText>전체 보기</CheckboxText>
      </Label>

      {categories.map((category) => {
        return (
          <Label>
            <input
              type="checkbox"
              value={category.name}
              // name={"subcategoryCheckboxId" + category.subcategory_id}
              name="subcategoryCheckboxId1"
              onClick={isCheckedCategoryName}
              id={"checkboxId" + category.subcategory_id}
            />
            <label for={"checkboxId" + category.subcategory_id}>
              {/* <IconDiv>
                <AiOutlineCheck size={12} />
              </IconDiv> */}
            </label>
            <CheckboxText>{category.name}</CheckboxText>
          </Label>
        );
      })}
    </ClassificationBoxCheckboxWrapper>
  );
}

const ClassificationBoxCheckboxWrapper = styled.section`
  border: 1px solid orange;
  margin-top: 20px;
`;

// 체크박스 묶음
const Label = styled.label`
  position: relative;
`;

const IconDiv = styled.div`
  border: 1px solid blue;
  position: absolute;
  left: 0px;
  display: inline-block;
  width: 13px;
  height: 13px;
`;

// const Checkbox = styled.input.attrs({ type: "checkbox" })`
//   height: 20px;
// `;

// const CheckboxLabel = styled.label``;

const CheckboxText = styled.span`
  font-size: 14px;
`;
