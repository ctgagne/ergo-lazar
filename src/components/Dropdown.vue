<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <router-link to="#" class="dropdown-menu">
      {{ title }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="12.5">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </router-link>
    <transition name="fade">
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-items">
          <router-link :to="item.link"
            ><div class="menu-item-title">
              {{ item.title }}
            </div></router-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.menu-item {
  padding: 9px;
  margin: 0 auto;
}
.dropdown-menu {
  padding: 9px;
  margin: 0 auto;
  text-decoration: none;
  color: var(--primary-color);
  fill: var(--primary-color);
}

.dropdown-menu:focus,
.dropdown-menu:hover {
  box-sizing: border-box;
  background-color: var(--primary-color);
  color: var(--light-text);
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  fill: var(--light-text);
}

.sub-menu {
  position: absolute;
  padding: 10px;
  margin-top: 0.6rem;
  margin-left: auto;
  background-color: var(--primary-color);
  width: max-content;
  text-align: left;
}

.sub-menu .menu-items {
  padding: 5px;
  border-radius: 5px;
}

.sub-menu .menu-items a {
  color: var(--light-text);
  text-decoration: none;
}

.sub-menu .menu-items a:hover {
  color: var(--dark-text);
  text-decoration: none;
}

/* .sub-menu .menu-items:hover {
  background-color: #88530a;
  opacity: 85%;
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
