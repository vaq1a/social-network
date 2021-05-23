import {createContext, useContext} from 'react';

const UserNameContext = createContext();

const UserNameContextProvider = ({
    children,

}) => {

    const obj = {
        name: 'Vadim'
    }

    return (
        <UserNameContext.Provider value={obj}>
            {children}
        </UserNameContext.Provider>
    )
}


export default UserNameContextProvider;

export const useUserNameContext = () => useContext(UserNameContext);