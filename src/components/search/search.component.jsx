import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
    const [search, setSearch] = useSearchParams();
    const onChangeHandler = (event) => {
        const text = event.target.value;
        if(text.length === 0){
            search.delete('query');
            setSearch(search, {replace: true});
        }else{
            search.set('query', text);
            setSearch(search, {replace: true});

        }
    }

    return   <input onChange={onChangeHandler} className="search-box-input" placeholder="what you looking for?" type="search"/>
}