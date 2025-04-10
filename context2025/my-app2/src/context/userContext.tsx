import React, { createContext, useState, useContext } from "react";
import { User } from "../App";

export const UserContext = createContext<User | undefined>(undefined);
