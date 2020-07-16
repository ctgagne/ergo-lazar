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
  --dark-text: #262941;
  --light-background: #f3cf7a8c;
  --dark-background: #252835;
  --primary-color: #c47910;
  --component-color: #a381968c;
  --component-background: #c4791033;
  --accent-dark: #6e3b3b;
}

body {
  margin: 0 auto;
  background-color: var(--light-text);
  background-image: linear-gradient(
    169deg,
    var(--light-background) -40%,
    var(--light-text) 65%,
    var(--component-color) 95%
  );
}

.main {
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
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
