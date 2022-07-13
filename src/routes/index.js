import {HeaderOnly} from "~/components/Layout";
import Following from "~/pages/Following/Following";
import Home from "~/pages/Home/index";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload/index";

const publicRoutes = [
   {path: "/", component: Home},
   {path: "/following", component: Following},
   {path: "/upload", component: Upload, layout: HeaderOnly},
   // {path: "/@:nickname", component: Profile},
   {path: "/search", component: Search, layout: null},
];
const privateRoutes = [];

export {publicRoutes, privateRoutes};
