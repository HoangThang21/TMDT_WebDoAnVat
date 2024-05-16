import { styled } from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import HeartOutlineIcon from "./icons/HeartOutlineIcon";
import HeartSolidIcon from "./icons/HeartSolidIcon";
import axios from "axios";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  position: relative;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;
const WishlistButton = styled.button`
  border: 0;
  width: 40px;
  height: 40px;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  cursor: pointer;
  ${(props) =>
    props.wished
      ? `
        color:red;
        `
      : `color:black`}
  svg {
    width: 16px;
  }
`;

export default function ProductBox({
  _id,
  title,
  description,
  price,
  images,
  wished = false,
  onRemoveFromWishlist=()=>{},
}) {
  const { addProduct } = useContext(CartContext);
  const [iswished, setIswhished] = useState(wished);

  function addtoWishlist(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    const nextValue = !iswished;
    if(nextValue===false && onRemoveFromWishlist){ 
      onRemoveFromWishlist(_id);
    }
    axios.post("api/wishlist", {
        product: _id,
      })
      .then(() => {});
    setIswhished(nextValue);
  }
  const url = "/product/" + _id;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <WishlistButton wished={iswished} onClick={addtoWishlist}>
            {iswished ? (
              <HeartSolidIcon></HeartSolidIcon>
            ) : (
              <HeartOutlineIcon></HeartOutlineIcon>
            )}
          </WishlistButton>
          <img src={images?.[0]} alt=""></img>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Thêm Vào Giỏ
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
