<template>
  <div class="footer-container">
    <div class="contact-info">
      <div id="contact-card" class="phone">
        <router-link to="/kontakt/#kontaktformula">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z"
            />
          </svg>
        </router-link>
        <h3>Telefon & E-Mail</h3>
        <p>Telefon: +49 341 2465412</p>
        <p>Email: info@ergo-lazar.de</p>
      </div>
      <div id="contact-card" class="location">
        <router-link to="/kontakt#unsere_lage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
        </router-link>
        <h3>Lage</h3>
        <p>Taubchenweg 61</p>
        <p>04317 Leipzig</p>
      </div>
      <div id="contact-card" class="hours">
        <router-link to="/kontakt">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z"
            />
          </svg>
        </router-link>
        <h3>Öffnungszeiten</h3>
        <p>Montag - Freitag</p>
        <p>9:00am - 6:00pm</p>
      </div>
    </div>
    <div class="bottom-footer">
      <p>
        ©2020 Praxis für Ergotherapie Sophie Lazar
      </p>
      <p id="legal-links">
        <router-link class="link" to="/impressum">Impressum</router-link>
        <router-link class="link" to="/impressum"
          >Datenschutzerklarung</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  margin: 2rem 1rem 0 1rem;
  color: var(--dark-text);
  font-family: "Oswald", sans-serif;
}
.contact-info {
  display: flex;
  justify-content: center;
  font-family: "Oswald", sans-serif;
}

svg {
  max-width: 10ch;
  fill: var(--primary-color);
  transition: transform 400ms ease-out;
}

svg:hover {
  transform: scale(1.15);
}

#contact-card {
  padding: 1rem;
  min-width: 25ch;
}

#contact-card p {
  font-family: "Oswald", sans-serif;
}

.location,
.hours {
  border-left: 1px solid var(--dark-background);
}

.bottom-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;
  justify-content: space-between;
  font-family: "Oswald", sans-serif;
}

.bottom-footer p {
  margin: 1rem 0;
  font-family: "Oswald", sans-serif;
}

.link {
  margin: 1rem;
}

@media (max-width: 900px) {
  .contact-info {
    display: none;
  }
  .bottom-footer {
    justify-content: center;
  }
}
</style>
