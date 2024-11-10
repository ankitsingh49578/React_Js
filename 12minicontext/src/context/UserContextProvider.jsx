import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);       {/*can also use like that without importing useState */}
    return(
        <UserContext.Provider value={{user, setUser}}>          {/*can give access of all the things */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider