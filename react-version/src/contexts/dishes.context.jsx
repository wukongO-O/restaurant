import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const DishesContext = createContext({
    dishesMap: {},
});

export const DishesProvider = ({ children }) => {
    const [dishesMap, setDishesMap] = useState({});

    useEffect(() => {
        const getDishesMap = async () => {
            const dishMap = await getCategoriesAndDocuments();
            console.log(dishMap);
            setDishesMap(dishMap);
        }
        getDishesMap();
    }, []);

    const value = { dishesMap };
    return (
        <DishesContext.Provider value={value}>
            {children}
        </DishesContext.Provider>
    );
};