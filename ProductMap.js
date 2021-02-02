import React from "react";
import Product from "../Product/Product";
import styled from "styled-components";

export default function ProductMap({ products }) {
  return (
    <ProductMapWrap>
      {products.map((product) => {
        return (
          <Product
            id={product.id}
            image={product.image}
            isnew={product.isnew}
            isseason={product.isseason}
            title={product.title}
          />
        );
      })}
    </ProductMapWrap>
  );
}

const ProductMapWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
