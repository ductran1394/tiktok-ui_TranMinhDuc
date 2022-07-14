import {HeaderOnly} from "~/components/Layout";
import Following from "~/pages/Following/Following";
import Home from "~/pages/Home/index";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload/index";
import routesConfig from "~/config/routes";

const publicRoutes = [
   {path: routesConfig.home, component: Home},
   {path: routesConfig.following, component: Following},
   // {path: routesConfig.profile, component: Profile},
   {path: routesConfig.upload, component: Upload, layout: HeaderOnly},
   {path: routesConfig.search, component: Search, layout: null},
];
const privateRoutes = [];

export {publicRoutes, privateRoutes};
