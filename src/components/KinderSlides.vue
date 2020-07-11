<template>
  <div class="kinder-slides">
    <div class="kinder-card-grid">
      <button class="handigkeit-btn" @click="component = 'Handigkeit'">
        <h3>Händigkeit</h3>
      </button>
      <button
        class="verhaltenstherapie-btn"
        @click="component = 'Verhaltenstherapie'"
      >
        <h3>Verhaltenstherapie</h3>
      </button>
      <button class="lerntherapie-btn" @click="component = 'Lerntherapie'">
        <h3>Lerntherapie</h3>
      </button>
      <button class="kurse-btn" @click="component = 'Kurse'">
        <h3>Kurse</h3>
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <component :is="component"></component>
    </transition>
  </div>
</template>

<script>
import Handigkeit from "@/components/Handigkeit.vue";
import Verhaltenstherapie from "@/components/Verhaltenstherapie.vue";
import Lerntherapie from "@/components/Lerntherapie.vue";
import Kurse from "@/components/Kurse.vue";
export default {
  name: "KinderSlides",
  components: {
    Handigkeit,
    Verhaltenstherapie,
    Lerntherapie,
    Kurse
  },
  data() {
    return {
      component: Handigkeit
    };
  }
};
</script>

<style>
.kinder-slides {
  max-width: 1000px;
  margin: 1rem auto;
}

.kinder-card-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  justify-content: center;
}

.kinder-card-grid button {
  min-width: 25ch;
  background: var(--primary-color);
  margin: 1rem;
  border: 0.5px solid var(--dark-text);
  color: default;
  border-radius: 1rem;
  -webkit-box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  transition: all 300ms ease-in-out;
}

.kinder-card-grid button:hover {
  background: #a95b07c0;
  cursor: pointer;
}

.kinder-card-grid button:focus,
.kinder-card-grid button:active {
  flex-grow: 10;
  background: var(--light-background);
  margin: 0.5rem;
  border: 2px solid var(--dark-text);
  border-radius: 1rem;
  text-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
}

#slide {
  background-size: cover;
  background-position: center;
  max-height: 700px;
  min-height: calc(700px - 30vh);
  display: grid;
  align-content: center;
  justify-content: center;
  flex-shrink: 0;
}

.text-wrapper {
  background-color: rgba(253, 253, 253, 0.7);
  padding: 20px;
  text-align: center;
}

p {
  font-family: "Josefin Sans", sans-serif;
  margin: 0 auto;
  font-weight: 500;
}

ul {
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  margin-left: 4rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
