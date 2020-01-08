import Vue from 'vue';


//Foundation Components
Vue.component("Table", () => import("@/components/Table"));
Vue.component("Loader", () => import("@/components/Loader"));
Vue.component("Navbar", () => import("@/components/Navbar"));
Vue.component("Button", () => import("@/components/Button"));
Vue.component("Combobox", () => import("@/components/Combobox"));
Vue.component("Navdrawer", () => import("@/components/Navdrawer"));
Vue.component("AccessCard", () => import("@/components/AccessCard"));

//Page Layouts (combines foundation components to achieve a pagelayout)
Vue.component("boards", () => import("@/views/home/Boards"));
Vue.component("projects", () => import("@/views/home/Projects"));