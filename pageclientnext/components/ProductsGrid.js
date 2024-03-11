import ProductBox from "./ProductBox";

const { styled } = require("styled-components");



const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    
`;




export default function ProductsGrid({products}) {
    return (
        <StyledProductsGrid>
            {products?.length > 0 && products.map(product =>(
                <div key={product._id}>
                    <ProductBox key={product._id} {...product}></ProductBox>
                </div>
            ))}
        </StyledProductsGrid>
    );
}