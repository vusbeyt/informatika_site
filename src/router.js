import Vue from "vue";
import Router from "vue-router";
import Index from "./pages/Index.vue";
import Landing from "./pages/Landing.vue";

import Login from "./pages/Login.vue";
import Profile from "./pages/Profile.vue";

import MainNavbar from "./layout/MainNavbar";
import NavBar from "./layout/NavBar";

import NavBarLanding from "./layout/NavBarLanding";
import NavBarForLanding from "./layout/NavBarForLanding";

import Themes1 from "./pages/Themes/Themes1.vue";
import Themes2 from "./pages/Themes/Themes2.vue";
import Themes3 from "./pages/Themes/Themes3.vue";
import Themes31 from "./pages/Themes/Themes31.vue";
import Themes32 from "./pages/Themes/Themes32.vue";
import Themes4 from "./pages/Themes/Themes4.vue";

import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: NavBarForLanding, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes1",
      name: "Themes1",
      components: {
        default: Themes1,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes2",
      name: "Themes2",
      components: {
        default: Themes2,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes3",
      name: "Themes3",
      components: {
        default: Themes3,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes31",
      name: "Themes31",
      components: {
        default: Themes31,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes32",
      name: "Themes32",
      components: {
        default: Themes32,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/Themes4",
      name: "Themes4",
      components: {
        default: Themes4,
        header: NavBarLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        default: Landing,
        header: NavBarForLanding,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login },
      props: {
        header: { colorOnScroll: 400 },
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
