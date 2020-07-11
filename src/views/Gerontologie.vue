<template>
  <div class="main">
    <h1>Gerontologie</h1>
    <h2>Von wegen "altes Eisen"...</h2>
    <p>
      <strong>Jeder Mensch</strong> erlebt im Laufe des Alterns funktionelle
      Einschränkungen oder muss mit vielen Veränderungen umgehen. Dies muss
      jedoch keinesfalls eine Minderung der Lebensqualität bedeuten. In unserer
      Praxis gilt stets der Grundsatz „Der Weg ist das Ziel - Lernen
      funktioniert auch im Alter, nur anders als in jungen Jahren.“, mit dem wir
      Menschen höheren Alters mit einem individuellen Behandlungsangebot
      unterstützen und begleiten wollen – in der Praxis oder auch im Hausbesuch.
    </p>
    <p>Hier eine Auswahl unserer Angebote:</p>
    <ul>
      <li>
        funktionelle Ergotherapie zum Erhalt der Beweglichkeit
      </li>
      <li>
        handwerkliche Techniken
      </li>
      <li>
        An- und Ausziehtraining
      </li>
      <li>
        Waschtraining
      </li>
      <li>
        Hilfsmittelberatung und -anpassung, sowie gezieltes Training
      </li>
      <li>
        Gedächtnistraining
      </li>
      <li>
        lebenspraktisches Kompetenztraining
      </li>
      <li>
        Wahrnehmungs- und Sensibilitätstraining
      </li>
    </ul>
    <p>… und vieles mehr.</p>
    <p>
      Wir arbeiten in unserer Praxis mit einer breiten Palette an
      Therapiemöglichkeiten. Einige spezielle Bereiche stellen wir Ihnen auf
      unserer Internetseite vor, so dass Sie sich einen groben Überblick
      verschaffen können.
    </p>
    <GerontologieSlides />
  </div>
</template>

<script>
import GerontologieSlides from "@/components/GerontologieSlides.vue";
export default {
  components: {
    GerontologieSlides
  }
};
</script>

<style scoped>
.main p {
  font-family: "Open Sans", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: auto 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-bottom: 2rem;
  text-align: left;
}

ul,
li {
  font-family: "Open Sans", sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: auto 1rem;
  padding-right: 1rem;
  padding-left: 2rem;
  list-style-position: inside;
}
ul {
  margin-bottom: 1rem;
}

h1,
h2 {
  font-family: "Josefin Sans", sans-serif;
}

h1 {
  font-size: 3rem;
  margin: 1rem auto;
}

h2 {
  border-bottom: 1px solid var(--primary-color);
  max-width: 900px;
  margin: 0 auto 1rem auto;
}
</style>
