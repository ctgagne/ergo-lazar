<template>
  <div class="main">
    <div class="team-container">
      <h1>Unser Team</h1>
      <div class="team-card">
        <div class="team-member-card">
          <div class="team-member-photo">
            <img alt="Lazar Logo" src="../assets/lazar_pic.jpg" />
          </div>
          <div class="team-member-name">
            <h3>Sophie Lazar</h3>
            <h4>
              Praxisinhaberin und Therapeutin <br />
              Dozentin für Ergotherapie
            </h4>
          </div>
        </div>
        <div class="team-script">
          <h5>
            Qualifizierungen:
          </h5>
          <ul>
            <li>
              Therapeutische Gesprächsführung in der Arbeitspraxis (Dr. Martina
              Gühne)
            </li>
            <li>
              Audiva:Grundlagen, Diagnostik, Training der auditiven Wahrnehmung
              (Uwe Minning)
            </li>
            <li>
              ADHS-Coach Level1 (Diana Völkel-Halbrock und Dr. med. M.J.Gelb)
            </li>
            <li>Ergotherapie bei Demenzerkrankung (Gudrun Schaade)</li>
            <li>
              Sensorische Integrationstherapie -Einführung- (Astrid Künnemann)
            </li>
            <li>Bobath-24-Std-Konzept für Erwachsene (Kirsten Minkwitz)</li>
            <li>
              IntraActPlus-Konzept: Verhaltens- und Lerntherapie (Dr. Fritz
              Jansen und Dipl.-Psych. Uta Streit)
            </li>
            <li>
              Interaktionsstörung im 1.Lebensjahr (1u2) (Dr. Sabine Narnke und
              Dipl.-Psych. Uta Steit)
            </li>
            <li>Babymassage</li>
            <li>Neurofeedback (1-3) (Akademie für Neurofeedback)</li>
            <li>pädagogische Qualifizierung (DPFA)</li>
            <li>Händigkeitsprofil (Dr. Elke Kraus)</li>
            <li>Lese-Rechtschreib-Schwäche (Dietmar Wenzel)</li>
            <li>Wunstorfer Konzept (Brita Winter)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team"
};
</script>

<style scoped>
.team-container {
  display: grid;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 1rem;
  padding-bottom: 325px;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--dark-text);
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 3rem;
  border-bottom: 1px solid var(--dark-text);
}

h3 {
  color: var(--primary-color);
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: -1rem;
  padding: 0 1rem;
}

h4 {
  color: var(--accent-dark);
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  margin: 1rem;
  font-weight: 400;
  font-style: italic;
}

h5 {
  font-family: "Oswald", sans-serif;
  text-align: left;
  margin: 1rem;
  font-size: 1rem;
}

.team-card {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  padding: 1rem 1rem;
  max-width: 800px;
  height: 95%;
  border-radius: 4px;
  background-color: var(--component-background);
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.team-member-photo img {
  object-fit: cover;
  max-height: 150px;
  min-height: 150px;
  width: 100%;
  border-radius: 50%;
  -webkit-box-shadow: -9px 20px 31px -6px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: -9px 20px 31px -6px rgba(0, 0, 0, 0.4);
  box-shadow: -9px 20px 31px -6px rgba(0, 0, 0, 0.4);
}

.team-member-photo {
  padding-right: 1rem;
  border-right: 1px solid var(--dark-text);
}

@media (max-width: 512px) {
  .team-member-photo {
    border: none;
  }
}

.team-member-card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.team-member-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.team-card p,
ul {
  text-align: left;
  margin: 1rem;
  margin-top: 0;
  font-family: "Oswald", sans-serif;
}

.team-card p {
  margin-top: -1rem;
}

ul {
  list-style-type: round;
}

.team-script {
  display: flex;
  flex-direction: column;
}
</style>
