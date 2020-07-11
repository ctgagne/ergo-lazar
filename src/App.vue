<template>
  <div id="app">
    <NavBar />
    <transition name="view">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Open+Sans:wght@300;400;600;700&family=Oswald:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Merienda:wght@400;700&family=Passion+One:wght@400;700&display=swap");
#app {
  font-family: "Oswald", sans-serif;
  text-align: center;
  margin: auto 0;
}

:root {
  --light-text: #f4f5f4;
  --dark-text: #2d3032;
  --light-background: #ebb66d;
  --dark-background: #2d3032;
  --primary-color: #c47910;
  --component-color: #e2a68e;
}

body {
  margin: 0 auto;
  background-color: var(--light-text);
}

.main {
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: var(--light-background);
  color: var(--dark-text);
}

#nav {
  margin-bottom: 5px;
  margin: 0 auto;
  max-width: 90%;
}

#nav a {
  font-weight: bold;
}

p {
  color: var(--dark-text);
}

.view-enter-active,
.view-leave-active {
  transition: all 0.3s ease-out;
}

.view-enter-to,
.view-leave {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}
</style>
