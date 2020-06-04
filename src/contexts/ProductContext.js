import React, {createContext, useState, useEffect, useReducer} from 'react';
import client from "./getContentful";
import {contentfulReducer} from './contentfulReducer';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [product, dispatch] = useReducer(contentfulReducer, []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadAllEntries () {
        try {
            let postsArr = [];
            const entries = await client.getEntries({ content_type: "product"});
            postsArr = entries.items;
            dispatch({ type: 'GET_PRODUCTS', product: postsArr });
            loading ? setLoading(false) : setLoading(false);
        }
        catch (err) {
            setError(true);
        }

    }

    useEffect(() => {
        loadAllEntries()
    }, [])

    return (
        <ProductContext.Provider value={{ product, dispatch, loading, loadAllEntries }}>
            {props.children}
        </ProductContext.Provider>
    )
};

export default ProductContextProvider;