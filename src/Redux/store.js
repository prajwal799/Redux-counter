import { reducer } from "./reduce";

import {createStore} from "redux";

export const store = createStore(reducer);
