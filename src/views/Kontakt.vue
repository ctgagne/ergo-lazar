<template>
  <div class="main">
    <h1>Haben Sie Fragen?</h1>
    <h2>
      Wir beantworten gerne alle Ihre Fragen. Rufen Sie uns an oder benutzen Sie
      unser Kontaktformular unten.
    </h2>
    <div class="kontakt-container">
      <Contactform />

      <div class="map-container">
        <h2>Unsere Lage</h2>
        <div id="map">
          <a
            style="display:block;"
            href="https://www.google.com/maps/search/?api=1&amp;channel=mws-visit&amp;hl=de-DE&amp;query=51.336212,12.401953"
            target="_blank"
          >
            <img
              id="map_image_5803997577"
              style="margin:auto; max-width:100%;"
              data-src="https://maps.googleapis.com/maps/api/staticmap?channel=mws-visit&amp;language=de_DE&amp;center=51.337750041652%2C12.401566453998&amp;zoom=15&amp;size=638x400&amp;maptype=roadmap&amp;client=gme-11internet&amp;markers=51.336212,12.401953&amp;signature=uHRfMVG7GJZ6RRI5PyFKd6zDduw="
              src="https://maps.googleapis.com/maps/api/staticmap?channel=mws-visit&amp;language=de_DE&amp;center=51.337750041652%2C12.401566453998&amp;zoom=15&amp;size=638x400&amp;maptype=roadmap&amp;client=gme-11internet&amp;markers=51.336212,12.401953&amp;signature=uHRfMVG7GJZ6RRI5PyFKd6zDduw="
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contactform from "@/components/Contactform.vue";
export default {
  name: "Kontakt",
  components: {
    Contactform
  }
};
</script>

<style scoped>
.kontakt-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--dark-text);
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 3rem;
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--dark-text);
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
}

.map-container {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  padding: 1rem 1rem;
  max-height: 575px;
  max-width: 670px;
  border-radius: 4px;
  background-color: var(--primary-color);
  justify-content: center;
  align-content: center;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.map-container h2 {
  margin-top: -2rem;
  padding: 24px;
  font-weight: 700;
  font-size: 1.5rem;
}

#map {
  margin: 0 auto;
  max-height: 400px;
  width: 100%;
}

#map:hover {
  opacity: 0.85;
  background-color: var(--primary-color);
}
</style>
