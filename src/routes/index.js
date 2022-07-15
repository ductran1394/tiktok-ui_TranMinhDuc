import {HeaderOnly} from "../layouts";
import Following from "~/pages/Following/Following";
import Home from "~/pages/Home/index";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload/index";
import config from "~/config/";

const publicRoutes = [
   {path: config.routes.home, component: Home},
   {path: config.routes.following, component: Following},
   // {path: config.routes.profile, component: Profile},
   {path: config.routes.upload, component: Upload, layout: HeaderOnly},
   {path: config.routes.search, component: Search, layout: null},
];
const privateRoutes = [];

export {publicRoutes, privateRoutes};
