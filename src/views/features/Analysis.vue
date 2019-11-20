<template>
  <div class="analysis">
    <div class="analysis-desc">
      <h1>Analyze and Share</h1>
      <p
        class="copy"
      >After your workout is over, you can go over to the DuoCycle iOS app and analyze your ride right away.</p>

      <p
        class="copy"
      >The zoomable and pannable chart works closely with the interactive map that shows your travelled route. Therefore, you’ll always know when your workout was the fastest and the hardest.</p>

      <p
        class="copy"
      >You can also export your workout to the popular GPX format and share it or even upload your workout directly to STRAVA®.</p>

      <p
        class="copy"
      >DuoCycle has been developed to work seamlessly with Health, so all your rides not only fill your Activity Rings but also expose all the data you would expect from a fitness app, to Health.</p>
    </div>
    <div>
      <img
        src="../../assets/features/analysis.png"
        alt="Workout data is displayed both on Apple Watch and iPhone"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "analysis"
};
</script>

<style scoped>
.analysis {
  text-align: right;
  display: flex;
  justify-content: space-evenly;
}

.analysis-desc {
  width: 50vw;
}

img {
  display: block;
  max-width: 40vw;
  max-height: 70vh;
}
</style>