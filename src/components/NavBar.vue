<template>
  <div>
    <div id="nav">
      <div class="menu">
        <router-link class="link" to="/">Home</router-link>
        <Dropdown title="Unsere Leistungen" :items="leistungen" />
        <router-link class="link" to="/team">Team</router-link>
        <router-link class="link" to="/kontakt">Kontakt</router-link>
      </div>
      <div
        class="hamburger"
        @click="$store.state.showSidebar = !$store.state.showSidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>
      <!-- // Sidebar -->
      <transition name="slide">
        <div
          class="sidebar-container"
          v-if="$store.state.showSidebar"
          @click.self="$store.state.showSidebar = !$store.state.showSidebar"
        >
          <div
            class="hamburger"
            @click="$store.state.showSidebar = !$store.state.showSidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              />
            </svg>
          </div>
          <div class="sidebar">
            <div
              class="menu-home"
              @click="$store.state.showSidebar = !$store.state.showSidebar"
            >
              <router-link to="/">Home</router-link>
            </div>
            <DropdownSide title="Leistungen" :items="leistungen" />
            <div
              class="menu-d"
              @click="$store.state.showSidebar = !$store.state.showSidebar"
            >
              <router-link to="/team">Team</router-link> <br />
            </div>
            <div
              class="menu-d"
              @click="$store.state.showSidebar = !$store.state.showSidebar"
            >
              <router-link to="/kontakt">Kontakt</router-link>
            </div>
            <div class="social-media-sidebar">
              <a href="https://www.instagram.com/ergotherapiesophielazar/"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                  /></svg
              ></a>
              <a
                href="https://www.facebook.com/Ergotherapie-Sophie-Lazar-216808598361964/"
                ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                  /></svg
              ></a>
            </div>
          </div>

          <div class="image-box">
            <img alt="Lazar Logo" src="../assets/butterflyflipped.png" />
          </div>
        </div>
      </transition>

      <div class="logo-container">
        <div class="business">
          <div class="social-media">
            <a href="https://www.instagram.com/ergotherapiesophielazar/"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
                /></svg
            ></a>
            <a
              href="https://www.facebook.com/Ergotherapie-Sophie-Lazar-216808598361964/"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
                /></svg
            ></a>
          </div>
          PRAXIS F&#220;R ERGOTHERAPIE
          <div class="owner">
            SOPHIE LAZAR
          </div>
        </div>
        <div class="logo">
          <img alt="Lazar Logo" src="../assets/butterfly.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
import DropdownSide from "@/components/DropdownSide.vue";
export default {
  name: "NavBar",
  components: {
    Dropdown,
    DropdownSide
  },
  data() {
    return {
      leistungen: [
        {
          title: "Neurofeedback",
          link: "/neurofeedback"
        },
        {
          title: "Pädiatrie",
          link: "/pädiatrie"
        },
        {
          title: "Geriatrie",
          link: "/geriatrie"
        },
        {
          title: "Neurologie",
          link: "/neurologie"
        },
        {
          title: "Psychologie",
          link: "/psychologie"
        },
        {
          title: "Motorisch Funktionell",
          link: "/motorisch-funktionell"
        }
      ]
    };
  }
};
</script>

<style>
#nav {
  display: flex;
  height: 3rem;
  background-color: var(--light-text);
  padding: 2rem 1rem;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

#nav .menu {
  display: flex;
  padding: 1rem 0 0;
  margin: 0 0 0 -1rem;
  border-bottom: 1px solid var(--primary-color);
  margin-bottom: 0;
}

.hamburger {
  width: 40px;
  fill: var(--dark-text);
}

#nav .link {
  padding: 9px;
  margin: 0 0.5rem;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: bold;
  transition: 100ms;
}

#nav .link:focus,
#nav .link:hover {
  box-sizing: border-box;
  background-color: var(--primary-color);
  color: var(--light-text);
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  fill: var(--light-text);
}

.logo-container {
  max-width: 600px;
  display: flex;
  flex-direction: row;
}

.social-media svg {
  height: 25px;
  width: 25px;
  fill: var(--primary-color);
  margin: 0 5px;
  transition: all 0.3s ease;
}
.social-media svg:hover {
  transform: scale(1.1);
}

.logo img {
  margin-top: 4rem;
  max-width: 200px;
}

.business {
  margin-top: 5rem;
  text-align: right;
  font-family: "Merienda", cursive;
  font-weight: 700;
}

.owner {
  color: rgb(230, 149, 34);
  text-shadow: 1px 1px 1px rgb(12, 12, 12, 0.8);
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  #nav .menu {
    display: none;
  }
  .social-media {
    display: none;
  }
  .business {
    padding: auto;
    margin-top: 6rem;
    text-align: right;
    font-family: "Merienda", cursive;
    font-weight: 700;
  }
}

@media (max-width: 512px) {
  .logo img {
    margin-top: 3rem;
    max-width: 150px;
  }
  .business {
    padding: auto;
    margin-top: 3.5rem;
    text-align: right;
    font-family: "Merienda", cursive;
    font-weight: 700;
  }
}

@media (max-width: 320px) {
  .logo img {
    margin-top: 3rem;
    max-width: 125px;
  }
  .business {
    padding: auto;
    margin-top: 3rem;
    text-align: right;
    font-family: "Merienda", cursive;
    font-weight: 700;
  }
}

@media (min-width: 900px) {
  .hamburger {
    display: none;
  }
}

.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  border-right: 1px solid var(--dark-text);
  background-color: var(--primary-color);
  z-index: 3;
  justify-content: left;
}

.sidebar {
  display: flex;
  flex-direction: column;
  margin: 2rem;
  margin-top: 4rem;
  color: var(--dark-text);
  justify-content: left;
  text-align: left;
}

.menu-d {
  margin-top: 0.5rem;
}

.sidebar-container .hamburger {
  fill: var(--dark-text);
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  width: 20px;
}

.sidebar a {
  text-decoration: none;
  color: var(--dark-text);
  margin-top: 0.5rem;
  transition: all 0.5 ease;
}

.social-media-sidebar {
  display: flex;
  margin-left: -2px;
}

.social-media-sidebar svg {
  height: 25px;
  width: 25px;
  fill: var(--dark-text);
  margin: 0 10px 0 0;
}

.image-box {
  display: flex;
  width: 200px;
  height: 300px;
  box-sizing: border-box;
  object-fit: cover;
  overflow: hidden;
  justify-content: center;
  margin-top: -1rem;
}

.image-box img {
  opacity: 0.5;
  max-height: 275px;
  object-fit: cover;
  margin-right: 4rem;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
