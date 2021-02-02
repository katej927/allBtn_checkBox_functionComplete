import React, { Component } from "react";
import styled from "styled-components";
import SubCategory from "../SubCategory/SubCategory";
import { Icon } from "react-icons-kit";
import { twoUp } from "react-icons-kit/iconic/twoUp";
import { menu } from "react-icons-kit/iconic/menu";
import { FiChevronDown } from "react-icons/fi";

export default class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      markActiveTab: "",
      markBtnClick: false,
    };
  }

  clickHandler = (id) => {
    this.setState({ currentId: id });
  };

  handleMarkBtn = () => {
    this.setState({ markBtnClick: true }); // !markBtnClick 왜 안됨?
  };

  handleCheckBox = (e) => {
    const { checked } = e.target;
    this.setState({
      markActiveTab: checked,
    });
  };

  render() {
    const { copyCategories, state, newCategories } = this.props;
    const { currentId, markActiveTab, markBtnClick } = this.state;

    // console.log("markActiveTab 콘솔: ", markActiveTab);
    // console.log("markBtnClick 확인: ", markBtnClick);

    return (
      <ProductCategoryWrapper>
        <AllBtnsWrapper>
          <BtnWrap>
            {BTN_WATCH_THROUGH.map((btn, idx) => {
              return (
                <BTN
                  key={idx + 1}
                  onClick={() => this.clickHandler(idx + 1)}
                  className={btn}
                  currentId={currentId}
                >
                  {idx === 0 && <Icon icon={twoUp} size={12} />}
                  {idx === 1 && <Icon icon={menu} size={12} />}
                  &nbsp;
                  {btn}
                </BTN>
              );
            })}
          </BtnWrap>

          <SelectBtnWrapper>
            <MarkBtnP>
              <MarkBtn onClick={this.handleMarkBtn} />
              <MarkBtnSpan>상세분류</MarkBtnSpan>
              <IconDiv>
                <FiChevronDown size={20} />
              </IconDiv>
            </MarkBtnP>
            <MarkOptionUl show={markBtnClick}>
              {MARKBTN_OPTIONS.map((text, idx) => {
                return (
                  <MarkOptionLi>
                    <MarkOptionSpan>
                      <IsNewOption
                        checked={idx + 1}
                        onClick={this.handleCheckBox}
                      />
                      <IsNewLabel>{text}</IsNewLabel>
                    </MarkOptionSpan>
                  </MarkOptionLi>
                );
              })}
            </MarkOptionUl>
          </SelectBtnWrapper>
        </AllBtnsWrapper>

        <SubCategory
          copyCategories={copyCategories}
          // newCategories={newCategories}
          currentId={currentId}
          state={state}
        />
      </ProductCategoryWrapper>
    );
  }
}

// - 배열
// 사진/영양정보 버튼 text
const BTN_WATCH_THROUGH = ["사진으로 보기", "영양정보로 보기"];

// 상세분류 option text
const MARKBTN_OPTIONS = ["신규 출시된 메뉴", "한정기간 출시되는 시즌성 메뉴"];

// - 스타일드 컴포넌트
const ProductCategoryWrapper = styled.main`
  border: 1px solid blue;
`;

const AllBtnsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

// 사진/영양정보 버튼
const BtnWrap = styled.section`
  border: 1px solid orange;
  display: flex;
  align-items: flex-end;
`;

const BTN = styled.button`
  width: 108px;
  height: 28px;
  border: 1px solid #ddd;
  margin-right: 15px;
  &: last-child {
    margin-right: 0px;
  }
  font-size: 12px;
  background-color: ${(props) =>
    props.currentId === props.key ? "#666" : "white"}; //왜안되지
  // background-color: #666;
  color: ${(props) => (props.currentId === props.key ? "white" : "#666")};
`;

// 상세분류 버튼
const SelectBtnWrapper = styled.div`
  border: 1px solid green;
  display: inline-block;
`;

const MarkBtnP = styled.p`
  position: relative;
`;

const MarkBtn = styled.input.attrs((props) => ({
  type: "button",
}))`
  border: 1px solid #ddd;
  width: 248px;
  height: 40px;
`;

const MarkBtnSpan = styled.span`
  position: absolute;
  left: 10px;
  top: 13px;
  font-size: 14px;
`;

const IconDiv = styled.div`
  // border: 1px solid blue;
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const MarkOptionUl = styled.ul`
  display: ${(props) => (props.show ? "inline-block" : "none")};
`;

const MarkOptionLi = styled.li``;

const MarkOptionSpan = styled.span``;

const IsNewOption = styled.input.attrs((props) => ({
  type: "checkbox",
}))``;

const IsNewLabel = styled.label`
  font-size: 14px;
`;
