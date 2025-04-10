import React, { createContext, useState, useContext } from "react";
import { User } from "../App";

export const DashboardContext = createContext<User | undefined>(undefined);

// export interface User {
//   isSubscribed: boolean;
//   name: string;
// }

// interface UserContextType {
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState<User>({
//     isSubscribed: true,
//     name: "YOU",
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = (): UserContextType => {
//     const context = userContetx
// }
