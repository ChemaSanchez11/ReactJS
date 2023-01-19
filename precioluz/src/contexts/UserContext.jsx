import React, { createContext, useContext, useState } from 'react';

export const userContext = createContext();

export function ContextUserProvider(props) {
    const [user, setUser] = useState(null);
    const value = { user, setUser };
    return <userContext.Provider value={value}>{props.children}</userContext.Provider>;
}

export function useUserContext() {
    const context = useContext(userContext);
    return context;
}