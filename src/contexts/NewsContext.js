import React, {createContext, useState, useEffect, useReducer} from 'react';
import client from "./getContentful";
import {contentfulReducer} from './contentfulReducer';

export const NewsContext = createContext();

const NewsContextProvider = (props) => {
    const [news, dispatch] = useReducer(contentfulReducer, []);
    const [loadNews, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadAllEntries () {
        try {
            let postsArr = [];
            const entries = await client.getEntries({ content_type: "news"});
            postsArr = entries.items;
            dispatch({ type: 'GET_NEWS', news: postsArr });
            setLoading(false);
        }
        catch (err) {
            setError(true);
        }

    }

    useEffect(() => {
        loadAllEntries();
    }, [])

    return (
        <NewsContext.Provider value={{ news, loadNews, error }}>
            {props.children}
        </NewsContext.Provider>
    )
};

export default NewsContextProvider;