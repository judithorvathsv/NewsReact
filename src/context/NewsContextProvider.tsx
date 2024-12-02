import { ReactElement, createContext, useState } from "react";
import { INewProps } from "../News";


interface INewsContex{
    allNews:INewProps[];
    setAllNews: React.Dispatch<React.SetStateAction<INewProps[]>>;
    selectedText: string;
    setSelectedText: (selectedText: string) => void;
}

interface INewsContextProvider{
    children:ReactElement;
}

export const NewsContext = createContext({} as INewsContex);


export function NewsContextProvider({children}: INewsContextProvider):ReactElement{
    const [allNews, setAllNews] = useState<INewProps[]>([]);
    const[selectedText, setSelectedText] = useState("");

    const values: INewsContex = {
        allNews,
        setAllNews,
        setSelectedText,
        selectedText
    };

    return <NewsContext.Provider value = {values}>{children}</NewsContext.Provider>
}