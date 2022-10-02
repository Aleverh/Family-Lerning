import {LOGIN_ROUTE, SLASH} from "../consts/consts";
import { REGISTER_ROUTE } from "../consts/consts";
import { CHAT_ROUTE } from "../consts/consts";
import { SLASH_ROUTE } from "../consts/consts";

import PageLogin from "../pages/PageLogin";
import PageChat from "../pages/PageChat";
import PageRegister from "../pages/PageRegister";

export const publicRouts = [
   {
      path: LOGIN_ROUTE,
      Component: PageLogin,
   },
   {
      path: REGISTER_ROUTE,
      Component: PageRegister,
   },
   {
      path: SLASH_ROUTE,
      Component: PageLogin,
   }
]

export const privateRouts = [
   {
      path: CHAT_ROUTE,
      Component: PageChat,
   }
]


