
import { LOGIN_ROUTE, REGISTER_ROUTE, START_ROUTE, SLASH_ROUTE } from "../consts/const";
import { SITE_USER_ROUTE, ADMIN_ROUTE, CATALOG_ROUTE, USER_PROFILE_ROUTE } from "../consts/const";
import { PAPER_BASE_ROUTE, HEADER_ROUTE, } from "../consts/const";
import { PRODUCT_ROUTE, PRODUCTS_ROUTE  } from "../consts/const";
import { ADD_PRODUCT_ROUTE, ORDERS_ROUTE } from "../consts/const";

import RegisterPage from "../pages/registerPage/RegisterPage";
import StartPage from "../pages/startPage/StartPage";
import LoginPage from "../pages/loginPage/LoginPage";
import UserSitePage from "../pages/userSitePage/UserSitePage";
import AdminPage from "../pages/adminPage/AdminPage";
import Header from "../pages/Header";
import PaperBase from "../pages/PaperBase";

export const publicRouts = [
   {
      path: START_ROUTE,
      Component: StartPage,
   },
   {
      path: REGISTER_ROUTE,
      Component: RegisterPage,
   },
   {
      path: SLASH_ROUTE,
      Component: StartPage,
   },
   {
      path: LOGIN_ROUTE,
      Component: LoginPage,
   },
   {
      path: PAPER_BASE_ROUTE,
      Component: PaperBase,
   },

   // {
   //    path: SITE_USER_ROUTE,
   //    Component: UserSitePage,
   // },
   // {
   //    path: CATALOG_ROUTE,
   //    Component: PageCatalog,
   // },
   // {
   //    path: PRODUCT_ROUTE,
   //    Component: PageProduct,
   // },
   // {
   //    path: PRODUCTS_ROUTE,
   //    Component: PageProducts,
   // },
   // {
   //    path: USER_PROFILE_ROUTE,
   //    Component: PageUserProfile,
   // },

]

export const privateRouts = [
   // {
   //    path: ADD_PRODUCT_ROUTE,
   //    Component: PageAddProduct,
   // },
   // {
   //    path: ORDERS_ROUTE,
   //    Component: PageOrders,
   // }
   {
      path: SITE_USER_ROUTE,
      Component: UserSitePage,
   },
   {
      path: ADMIN_ROUTE,
      Component: AdminPage,
   }
]
