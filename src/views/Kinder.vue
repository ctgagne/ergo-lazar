<template>
  <div class="main">
    <h1>Pädiatrie</h1>
    <h2>Entwicklungsförderung</h2>
    <p>
      <strong>Jedes Kind ist individuell </strong>und hat unterschiedliche
      Neigungen und Interessen. Hin und wieder können verschiedenste Umstände
      dazu führen, dass Kinder nicht die Möglichkeit haben ihr volles Potential
      auszuschöpfen oder ihre Fähigkeiten bestmöglichst auszubauen. Dadurch
      entstehen Verzögerungen in der altersgerechten Entwicklung, so dass eine
      therapeutische Unterstützung notwendig wird, um eine solide Grundlage für
      das „Erwachsenwerden“ herzustellen. Unsere Praxis ist darauf ausgerichtet
      Ihrem Kind eine umfassende und individuell angepasste Therapie zu
      erstellen, um ihm das Erreichen neuer Entwicklungsstufen zu ermöglichen
      und im bestmöglichen Umfang Hilfe dabei zu gewährleisten. Mögliche
      Hinweise auf Entwicklungsverzögerungen: Ihr Kind... … zeigt auffällige
      Schwierigkeiten beim Puzzeln oder konstruktiven Arbeiten (wie z.B. Bauen
      mit Bauklötzen, Knetfiguren,..) … zeigt sich in Bewegungsabläufen deutlich
      unsicher oder ungeschickt (häufiges Stolpern, Ängste beim Erlernen des
      Fahrradfahrens oder Schwimmen). … hat Schwierigkeiten sich zu
      konzentrieren oder sich langfristig einer Aktivität zu widmen. (Bsp:
      Puzzle, Spiel. ausgenommen TV gucken, Videokonsole, PC) … bastelt nicht
      gern. … verweigert das Malen oder andere feinmotorische Aktivitäten mit
      Stiften, Pinseln etc. u.v.m.
    </p>
    <KinderSlides />
  </div>
</template>

<script>
import KinderSlides from "@/components/KinderSlides.vue";
export default {
  components: {
    KinderSlides
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
