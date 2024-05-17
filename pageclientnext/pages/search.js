import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ProductsGrid from "@/components/ProductsGrid";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { debounce, flatMap } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.5rem;
   
`;
const InputWrapper = styled.div`
    padding: 5px 0;
    margin: 25px 0;
    background-color: #eeeeeeaa;
    position: sticky;
    top: 68px;
`;
export default function SearchPage(){
    const [phrase, setPhase] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const debouncedSearch = useCallback( debounce(searchProducts, 500), []);
     useEffect(() => {
        if(phrase.length > 0){
            setIsLoading(true);
            debouncedSearch(phrase);
        }
        else
        {
            setProducts([]);
        }
    },[phrase]);
    
    function searchProducts(phrase){
        axios.get('/api/products?phrase='+encodeURIComponent(phrase))
            .then(
                response => {
                    setProducts(response.data);
                    setIsLoading(false);
                }
            );
    }
    return(
        <>
            <Header></Header>

            <Center>
                <InputWrapper>
                    <SearchInput 
                        autoFocus 
                        value={phrase} 
                        onChange={ev => setPhase(ev.target.value)} 
                        placeholder ="Enter name product ... "></SearchInput>
                </InputWrapper>
                

            {!isLoading && phrase !== '' && products.length === 0 && (
                <h2>No product found "{phrase}" !</h2>
            )}
            {isLoading && (
                <Spinner fullWidth={true}></Spinner>
            )}
            {!isLoading && products.length > 0 && (
                <ProductsGrid products={products}></ProductsGrid>
            )}
            </Center>
            <Footer></Footer>
        </>
    );
}