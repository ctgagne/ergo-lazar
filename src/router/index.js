import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pädiatrie",
    name: "Pädiatrie",
    component: () => import("../views/Kinder.vue")
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("../views/Kontakt.vue")
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("../views/Impressum.vue")
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/gerontologie",
    name: "Gerontologie",
    component: () => import("../views/Gerontologie.vue")
  },
  {
    path: "/neurofeedback",
    name: "Neurofeedback",
    component: () => import("../views/Neurofeedback.vue")
  },
  {
    path: "/erwachsene",
    name: "Erwachsene",
    component: () => import("../views/Erwachsene.vue")
  },
  {
    path: "/motorisch-funktionell",
    name: "MotorischFunktionell",
    component: () => import("../views/MotorischFunktionell.vue")
  },
  {
    path: "/psychologie",
    name: "Psychologie",
    component: () => import("../views/Psychologie.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
