import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import ClassificationBox from "./Components/ClassificationBox/ClassificationBox";
import { PRODUCTLIST_API } from "../../config";
import { AiOutlineHome } from "react-icons/ai";

export default function ProductList() {
  const [categories, setCategories] = useState([]);
  // const [newCategories, setNewCategories] = useState([]);
  const [copyCategories, setCopyCategories] = useState([]);
  const [state, setState] = useState({
    seeAllCategories: "",
    subcategoryCheckboxId1: "",
    // subcategoryCheckboxId2: "",
    // subcategoryCheckboxId3: "",
  });
  const [checkedNames, setCheckedNames] = useState([]);

  useEffect(() => {
    // fetch(PRODUCTLIST_API)
    fetch("/data/productList.json")
      .then((res) => res.json())
      .then((res) => setCategories(res.results));
  }, []);

  // 1. [인풋 업데이트 (카테고리 이름 업뎃)] & 검사mtd(비동기)
  const isCheckedCategoryName = (e) => {
    const { name, value, checked } = e.target;
    setState({ [name]: value });
    // setState({ [name]: checked });
    makeCheckedNames(value);
  };

  // 2. [체크한 카테고리 배열에 넣는 mtd] (중복제거 mtd 포함)
  const makeCheckedNames = (value) => {
    const isInclude = checkedNames.some((name) => name === value);
    const isIncludeAllBtn = checkedNames.some((name) => name === "전체 보기");

    if (isInclude) {
      const deleteOverlappedName = checkedNames.filter(
        (name) => name !== value
      );
      setCheckedNames(deleteOverlappedName);
    } else {
      if (value === "전체 보기") {
        setCheckedNames(["전체 보기"]);
      } else {
        if (isIncludeAllBtn) {
          setCheckedNames([value]);
          setCopyCategories([]);
        } else {
          setCheckedNames((prev) => [...prev, value]);
        }
      }
    }
  };

  // 3. 하위 컴포넌트에서 체크된 카테고리만 나오게 만든 md
  useEffect(() => {
    alignData();
  }, [checkedNames]);

  // matchedDatas-> filter사용
  const alignData = () => {
    const isInclude = checkedNames.some(
      // = e.target.value
      (name) => name === state.subcategoryCheckboxId1
    );
    // const isIncludeAllBtn = checkedNames.some((name) => name === "전체 보기");

    if (checkedNames.length > 0) {
      console.log("checkedNames.length > 0 진입");
      checkedNames.forEach((name) => {
        if (name === "전체 보기") {
          setCopyCategories(categories);
        } else {
          const matchedDatas = categories.filter(
            (category) => category.name === name
          );
          console.log("matchedDatas : ", matchedDatas);

          // if (isIncludeAllBtn)
          if (isInclude) {
            setCopyCategories(copyCategories.concat(matchedDatas));
          } else {
            const filteredGoneObj = copyCategories.filter(
              (category) => category.name !== state.subcategoryCheckboxId1
            );
            console.log("name 확인:", name);
            console.log("filteredGoneObj 확인:", filteredGoneObj);
            setCopyCategories(filteredGoneObj);
          }
        }
      });
    } else {
      console.log("checkedNames.length =< 0 진입");
      setCopyCategories([]);
    }
  };

  console.log(
    "ProductList subcategoryCheckboxId1 : ",
    state.subcategoryCheckboxId1,
    "checkedNames: ",
    checkedNames,
    "categories 확인: ",
    categories,
    "copyCategories 확인",
    copyCategories
  );
  return (
    <ProductListWrap>
      <Nav>네브바 자리</Nav>
      <Header>
        <MenuName>음료</MenuName>
        <CurrentLocation>
          <AiOutlineHome size={18} /> {">"} MENU {">"} 음료
        </CurrentLocation>
      </Header>
      <ClassificationBox
        categories={categories}
        state={state}
        isCheckedCategoryName={isCheckedCategoryName}
      />
      <ProductCategory
        copyCategories={copyCategories}
        state={state}
        // newCategories={newCategories}
      />
    </ProductListWrap>
  );
}

const ProductListWrap = styled.div`
  margin-bottom: 90px;
  padding: 0px 125px;
  font-family: $nanumGothic;
`;

const Nav = styled.nav`
  border: 1px solid black;
  height: 120px;
  width: 100%;
`;

const Header = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 98px;
`;

const MenuName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

const CurrentLocation = styled.div`
  font-size: 12px;
  color: #222222;
`;
