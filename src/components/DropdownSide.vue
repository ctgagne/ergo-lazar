<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <router-link to="#">
      {{ title }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </router-link>
    <transition name="fade">
      <div
        class="sub-menu"
        v-if="isOpen"
        @click="$store.state.showSidebar = !$store.state.showSidebar"
      >
        <div v-for="(item, i) in items" :key="i" class="sub-menu-items">
          <router-link :to="item.link">{{ item.title }}</router-link>
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
#nav .menu-item svg {
  width: 15px;
  margin-left: 0;
  fill: var(--dark-text);
  transition: all 0.5s ease;
}

#nav .menu-item svg:focus-visible {
  transform: rotate(180deg);
}

#nav .menu-item {
  position: relative;
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
  text-align: left;
}

#nav .menu-item .sub-menu {
  position: relative;
  margin: 0.5rem;
  width: max-content;
  text-align: left;
}

#nav .menu-item .sub-menu a {
  color: var(--dark-text);
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
