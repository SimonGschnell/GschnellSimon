
import {useState, useEffect} from 'react'


 let useLocaleStorageState = (key,initValue) => {
    let [search, setSearch] = useState(localStorage.getItem(key)||initValue);
    useEffect(()=>{
        localStorage.setItem(key, search);
    },[search,key])
    return [search, setSearch]
}



export {useLocaleStorageState} ;