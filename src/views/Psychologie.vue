<template>
  <div class="main">
    <div class="psychologie">
      <h1>Psychologie</h1>
      <h2>Demnächst verfügbar</h2>
    </div>
    <!-- 
    <p>
      <strong>Als eine</strong> der ersten in Leipzig und Umgebung praktiziere
      ich seit 2008 sehr erfolgreich Neurofeedback im Bezug auf die
      verschiedensten Krankheitsbilder. Über Ärzteschulungen und
      Informationsveranstalltungen leisten wir seither Aufklärungsarbeit über
      den vielseitigen Einsatz dieses Verfahrens: <br />
      Neurofeedback ist eine weltweit eingesetzte, wissenschaftlich anerkannte
    </p>
    <p>
      Methode zur Messung und Verbesserung der Gehirnaktivität. Hierbei werden
      Gehirnwellen über computergestützte Messgeräte (Prinzip eines EEGs)
      analysiert und daraufhin therapeutisch trainiert, so dass ausgewählte
      Verhaltensmuster und verschiedene Leistungsbereiche des menschlichen
      Gehirns gefördert, bzw. reguliert werden können.
    </p>
    <p>
      Sollten wir Ihr Interesse geweckt haben, beraten wir Sie gern telefonisch
      oder bei einem Besuch in der Praxis.
    </p>
    <div class="anwendungs-container">
      <div class="anwendungs">
        <div class="card-text">
          <h3>Anwendungsbereiche</h3>
          <p>
            Neurofeedback ist für jeden Menschen geeignet. Das Mindestalter
            liegt jedoch bei etwa 7 Jahren, da erst hier die Hirnreife für eine
            sinnvolle Therapie gewährleistet ist.
          </p>
          <p><strong>Anwendungsgebiete (Auswahl):</strong></p>
          <ul>
            <li>
              Steigerung der Entspannungsfähigkeit
            </li>
            <li>
              Erhöhung der Stresstoleranz
            </li>
            <li>
              Training von Aufmerksamkeit und Konzentration
            </li>
            <li>
              Einschlafproblemen
            </li>
          </ul>
          <p>
            <strong
              >Therapeutische Wirkung im Bezug auf Krankheitsbilder:</strong
            >
          </p>
          <p>… und vieles mehr.</p>
          <p>
            Wir arbeiten in unserer Praxis mit einer breiten Palette an
            Therapiemöglichkeiten. Einige spezielle Bereiche stellen wir Ihnen
            auf unserer Internetseite vor, so dass Sie sich einen groben
            Überblick verschaffen können.
          </p>
          <ul>
            <li>Aufmerksamkeitsdefizit-/ Hyperaktivitätssyndrom (ADS, ADHS)</li>
            <li>Demenz</li>
            <li>Epilepsie</li>
            <li>Tinnitus</li>
            <li>Konzentrationsschwäche</li>
            <li>Kopfschmerzen/ Migräne</li>
            <li>Tic-Störungen, Tourette-Syndrom</li>
            <li>Schlafstörungen</li>
            <li>Stimmungsschwankungen</li>
            <li>Depressionen</li>
            <li>Suchtkrankheiten</li>
            <li>Prüfungsangst</li>
            <li>Autismus</li>
          </ul>
        </div>
        <div class="image-box">
          <img src="..\assets\photo-1587309492556-5960dcda7e17.jpg" alt="" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script></script>

<style scoped>
.psychologie {
  padding-bottom: 325px;
}

@media (max-width: 900px) {
  .psychologie {
    padding-bottom: 100px;
  }
}
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

.anwendungs-container {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
}

.anwendungs {
  display: flex;
  margin: -1rem 0.5rem;
  padding: 1rem;
  padding-bottom: 0;
  max-width: 1000px;
  box-sizing: border-box;
  border-radius: 1rem;
  background-color: var(--primary-color);
}

.image-box {
  display: flex;
  width: 900px;
  height: 900px;
  object-fit: cover;
  overflow: hidden;
  justify-content: center;
}

img {
  max-height: 100%;
  opacity: 0.8;
  object-fit: cover;
  margin: 2rem;
  margin-left: 4rem;
}

@media (max-width: 900px) {
  .image-box {
    display: none;
  }
}
</style>
