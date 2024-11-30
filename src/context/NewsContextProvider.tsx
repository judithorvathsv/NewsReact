import { ReactElement, createContext, useState } from "react";
import { INewProps } from "../News";


interface INewsContex{
    allNews:INewProps[];
    setAllNews: React.Dispatch<React.SetStateAction<INewProps[]>>;
}

interface INewsContextProvider{
    children:ReactElement;
}

export const NewsContext = createContext({} as INewsContex);


export function NewsContextProvider({children}: INewsContextProvider):ReactElement{
    const [allNews, setAllNews] = useState<INewProps[]>([]);

    const values: INewsContex = {
        allNews,
        setAllNews,
    };

    return <NewsContext.Provider value = {values}>{children}</NewsContext.Provider>
}