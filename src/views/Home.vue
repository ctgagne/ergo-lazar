<template>
  <div class="main">
    <div class="home">
      <div class="title">
        <h1>
          IHRE ERGO-PRAXIS
        </h1>
        <h2>Individuelle Therapie für maximale Erfolge</h2>
      </div>
      <div class="card-grid">
        <router-link class="service-card" to="/neurofeedback">
          <div class="image-card">
            <img
              src="@/assets/photo-1559757148-5c350d0d3c56.jpg"
              alt="Neurofeedback"
            />
          </div>
          <div class="image-text">
            <h3>neurofeedback</h3>
          </div>
        </router-link>
        <router-link class="service-card" to="/pädiatrie">
          <div class="image-card">
            <img src="@/assets/pexels-photo-4473993.jpeg" alt="Pädiatrie" />
          </div>
          <div class="image-text">
            <h3>pädiatrie</h3>
          </div>
        </router-link>
        <router-link class="service-card" to="/gerontologie">
          <div class="image-card">
            <img src="@/assets/pexels-photo-339619.jpeg" alt="Gerontologie" />
          </div>
          <div class="image-text">
            <h3>geriatrie</h3>
          </div>
        </router-link>
        <router-link class="service-card" to="/neurologie">
          <div class="image-card">
            <img src="@/assets/pexels-photo-4506166.jpeg" alt="Neurologie" />
          </div>
          <div class="image-text">
            <h3>neurologie</h3>
          </div>
        </router-link>

        <router-link class="service-card" to="/psychologie">
          <div class="image-card">
            <img
              src="@/assets/photo-1569437061241-a848be43cc82.jpg"
              alt="Psychologie"
            />
          </div>
          <div class="image-text">
            <h3>psychologie</h3>
          </div>
        </router-link>
        <router-link class="service-card" to="/motorisch-funktionell">
          <div class="image-card">
            <img
              src="@/assets/pexels-photo-4506164.jpeg"
              alt="Motorisch Funktionell"
            />
          </div>
          <div class="image-text">
            <h3>motorisch funktionell</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home h1 {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--dark-text);
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  font-size: 4rem;
}

.home h2 {
  font-weight: 400;
  margin-top: 0;
  margin: 0 auto;
  max-width: 1350px;
  color: var(--dark-text);
  font-family: "Open Sans", sans-serif;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: 1rem auto;
  justify-content: center;
}

.service-card {
  max-width: 450px;
  max-height: 350px;
  border-radius: 3%;
  background-color: none;
  text-decoration: none;
  box-sizing: border-box;
  object-fit: cover;
  margin: 0.5rem;
}

.image-card {
  border-radius: 3%;
  overflow: hidden;
  max-height: 250px;
}

.image-text {
  display: flex;
  justify-content: center;
  background-color: var(--primary-color);
  margin: 0 auto;
  width: 60%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  align-items: center;
  -webkit-box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 9px 4px 31px -6px rgba(0, 0, 0, 0.75);
  -webkit-transition: width 400ms ease-in-out;
  -moz-transition: width 400ms ease-in-out;
  -o-transition: width 400ms ease-in-out;
  transition: width 400ms ease-in-out;
}

.image-text:hover {
  width: 85%;
}

.image-text h3 {
  margin: 0;
  padding: 0.5rem;
  margin-top: -1rem;
  font-size: 2rem;
  color: var(--light-text);
  font-variant: small-caps;
  font-weight: 400;
}

.service-card img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  transition: transform 400ms ease-out;
}

.service-card img:hover {
  transform: scale(1.15);
}

@media (max-width: 460px) {
  .image-card {
    max-height: 200px;
  }
  .image-text h3 {
    font-size: 1.7rem;
  }
}

@media (max-width: 320px) {
  .image-card {
    max-height: 150px;
  }
}
</style>
