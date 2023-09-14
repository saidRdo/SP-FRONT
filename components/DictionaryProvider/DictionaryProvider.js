"use client"
import React, { createContext, useContext } from "react";

const DictionaryContext = createContext();

export function useDictionary() {
    return useContext(DictionaryContext);
}

export function DictionaryProvider({ children, dictionary }) {
    return (
        <DictionaryContext.Provider value={dictionary}>
            {children}
        </DictionaryContext.Provider>
    );
}