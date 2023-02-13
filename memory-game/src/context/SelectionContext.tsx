import { ReactNode, createContext, useState } from "react";

export const CardContext = createContext<number | null>(null)

const initialSelection = {
    isSelected: false,
    setIsSelected: (isSelected: boolean) => {}
}

export const SelectionContext = createContext(initialSelection)

export const SelectionProvider = ({children}: {children: ReactNode}) => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <SelectionContext.Provider value={{isSelected, setIsSelected}}>
            {children}
        </SelectionContext.Provider>
    )
}