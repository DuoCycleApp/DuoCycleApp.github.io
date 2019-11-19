<template>
  <div class="data-at-glance">
    <p
      class="description-light"
    >On iPhone, your workout data is organized in tiles. Just tap on one of them to get its data to the top.</p>
    <img class="contained" src="../assets/features/heartMode.png" alt="DuoCycle's Heart Mode" />
    <p
      class="description-light"
    >On Apple Watch, your data is organized in lines. To switch the line, just turn the Digital Crown.</p>
    <div id="switcher" class="centered">
      <img
        class="contained"
        src="../assets/features/leftArrow.png"
        alt="Left Arrow"
        v-on:click="decrementViewMode"
      />
      {{ viewModes[viewMode].title }}
      <img
        class="contained"
        src="../assets/features/rightArrow.png"
        alt="Right Arrow"
        v-on:click="incrementViewMode"
      />
    </div>
    <p id="mode-description" class="centered">{{ viewModes[viewMode].description }}</p>
  </div>
</template>

<script>
export default {
  name: "ViewModes",
  props: {
    msg: String
  },
  data: function() {
    return {
      viewMode: 0,
      // TODO: Provide assets
      viewModes: [
        {
          image: "",
          title: "Heart",
          description:
            "In Heart Mode, you get the current heart rate at the top, a chart that depicts your heart rates over distance, your active calories burned and maximum and average values."
        },
        {
          image: "",
          title: "Speed",
          description:
            "In Speed Mode, you get your current speed at the top, along with your travelled distance and the average and maximum speeds."
        },
        {
          image: "",
          title: "Time",
          description:
            "In Time Mode, you can see your workout time at the top. In the middle, you see the real elapsed time since you started the workout. At the bottom, you have a stopwatch that allows for individual timing, e.g. for riding intervals."
        },
        {
          image: "",
          title: "Map",
          description:
            "The Map Mode on iPhone shows your travelled route on an interactive map so that you always know where you're going and where you came from."
        },
        {
          image: "",
          title: "Elevation",
          description:
            "In Elevation Mode, you see the current slope at the top, along with the current altitude and the elevation gained."
        }
      ]
    };
  },
  methods: {
    decrementViewMode: function() {
      if (this.viewMode == 0) {
        this.viewMode = 4;
      } else {
        this.viewMode -= 1;
      }
    },

    incrementViewMode: function() {
      if (this.viewMode == 4) {
        this.viewMode = 0;
      } else {
        this.viewMode += 1;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-at-glance {
  display: grid;
  margin: 2em;
  grid-gap: 1em;
  grid-template-columns: 1fr 40vw 1fr;
  grid-template-rows: 1fr 3em 3em;
  grid-auto-rows: 1fr;

  place-items: center;
}

.description-light {
  font-family: "Helvetica Neue";
  font-size: 20px;
  color: #acacac;
}

.contained {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

.centered {
  grid-column: 2 / span 1;
}

#switcher {
  display: grid;
  grid-template-columns: 15px 1fr 15px;
  width: 150px;
  place-items: center;
}

#mode-description {
  font-family: "Helvetica Neue";
  font-size: 20px;
}
</style>
