<template>
  <article class="tempChartBox_container">
    <div class="tempChartBox__console">
      <button class="tempChartBox__button" @click="handleButtonClick">
        {{ buttonText }}
      </button>
      <div class="tempChartBox__categories">
        <button class="tempChartBox__categoryButton" @click="toggleListOptions">
          {{ listOptions.selected }}
        </button>
        <ul class="tempChartBox__list" v-if="listOptions.showListOption">
          <li
            class="tempChartBox__listOption"
            @click="changeCategory(listOptions.day)"
          >
            {{ listOptions.day }}
          </li>
          <li
            class="tempChartBox__listOption"
            @click="changeCategory(listOptions.week)"
          >
            {{ listOptions.week }}
          </li>
          <li
            class="tempChartBox__listOption"
            @click="changeCategory(listOptions.month)"
          >
            {{ listOptions.month }}
          </li>
        </ul>
      </div>
    </div>
    <div class="tempChartBox_chart">
      <apex
        v-if="chart.chartIsVisible"
        :options="chart.options"
        :series="chart.series"
      ></apex>
      <div v-if="!chart.chartIsVisible">
        <div class="tempChart__loader" v-if="loader">
          <loader></loader>
        </div>
      </div>
    </div>
  </article>
</template>



<script>
import apex from "./apex.vue";
import Loader from "./loader.vue";
export default {
  components: {
    apex,
    Loader,
  },

  data() {
    return {
      showChartButton: {
        clickable: true,
      },

      listOptions: {
        showListOption: false,
        selected: "LAST 24H",
        day: "LAST 24H",
        week: "LAST WEEK",
        month: "LAST MONTH",
      },
      loader: false,
      chart: {
        chartIsVisible: false,

        options: {
          chart: {
            id: "temperatureChart",
          },
          xaxis: {
            categories: null,
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ["#169e53"],
              background: {
                enabled: true,
                foreColor: "#fff",
                border: 0,
                fontFamily: "Helvetica, Arial, sans-serif",
              },
            },
            offsetY: -10,
          },
          yaxis: {
            min: 0,
            max: 35,
          },
        },
        series: [
          {
            name: "°C",
            data: null,
          },
        ],
      },
    };
  },
  computed: {
    apiQuery() {
      return this.listOptions.selected.replace(/\s+/g, "").toLowerCase();
    },
    buttonText() {
      if (this.chart.chartIsVisible) {
        return "HIDE TEMPERATURE CHART";
      } else {
        return "SHOW TEMPERATURE CHART";
      }
    },
  },
  methods: {
    toggleListOptions() {
      this.listOptions.showListOption = !this.listOptions.showListOption;
    },
    changeCategory(val) {
      if (val === this.listOptions.selected) {
        this.toggleListOptions();
        return;
      }
      this.listOptions.selected = val;

      this.toggleListOptions();
      this.createChartDisplayValues();
    },

    async handleButtonClick() {
      if (!this.showChartButton.clickable) {
        return;
      }
      if (this.chart.chartIsVisible) {
        this.chart.chartIsVisible = false;
        return;
      }
      this.showChartButton.clickable = false;
      this.loader = true;
      await this.createChartDisplayValues();
      this.showChartButton.clickable = true;
    },

    async getDataFromAPI() {
      try {
        const response = await fetch(
          `https://project-ras.herokuapp.com/temp${this.apiQuery}`
        );
        const data = await response.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    async createChartDisplayValues() {
      this.chart.chartIsVisible = false;
      this.loader = true;
      const data = await this.getDataFromAPI();

      //temp
      const yAxis = data.map((obj) => obj.temp);

      this.chart.series[0].data = yAxis;

      //time

      let xaxis;
      if (data[0].hour) {
        xaxis = data.map((obj) => obj.hour + ":00");
      } else {
        xaxis = data.map((obj) => obj.day);
      }

      this.chart.options.xaxis.categories = xaxis;
      this.loader = false;
      this.chart.chartIsVisible = true;
    },
  },
};
</script>

<style lang='scss'>
.tempChartBox_container {
  @include flexLayout;
  width: clamp(30rem, 100%, 50rem);
  flex-direction: column;
}
.tempChartBox_chart {
  position: relative;
  border-radius: 20px;
  width: 500px;
  background-color: #2c3e50;
  transform: scale(0.6);
}
.tempChartBox__console {
  @include flexLayout;
  position: relative;
  margin: 1rem;
  width: 100%;
  height: 6rem;
  z-index: 100;
}
.tempChartBox__button {
  @include mainFontBold;
  margin-top: 1rem;

  width: 25rem;
  background: white;
  border: none;
  border-radius: 50px;
  font-family: inherit;
}
.tempChartBox__categoryButton {
  margin-top: 1rem;
  width: 13rem;
  background: white;
  border: none;
  border-radius: 5px 5px;
  @include mainFontBold;
  font-family: inherit;
  padding: 1rem;
}
.tempChartBox__list {
  position: absolute;
  top: 4.5rem;
  margin: 0 auto;

  width: 13rem;
  border: 1px solid #2c3e50;
  list-style: none;
  background-color: white;
}
.tempChartBox__listOption {
  padding: 0.7rem 0.5rem;
  border-top: 1px solid #2c3e50;
}
.tempChartBox__listOption:nth-child(1) {
  border: none;
}
.tempChart__loader {
  @include flexLayout;
  justify-content: center;
  height: 22rem;
  .lds-roller {
    position: relative;
    top: -2.5rem;
    left: 0rem;
  }
}
.tempChartLoader-enter-active,
.tempChartLoader-leave-active {
  transition: all 0.3s ease;
}

.tempChartLoader-enter-from,
.tempChartLoader-leave-to {
  opacity: 0;
  transform: scale(0.7) translate(0, -5rem);
}
.tempChartLoader-enter-to,
.tempChartLoader-leave-from {
  opacity: 1;
  transform: scale(0.7) translate(0, 4rem);
}

@media (min-width: 340px) {
  .tempChartBox_chart {
    transform: scale(0.6);
  }
}
@media (min-width: 375px) {
  .tempChartBox_chart {
    transform: scale(0.7);
  }
  .tempChartBox__button {
    padding: 0.5rem 0.7rem;
  }
}
@media (min-width: 450px) {
  .tempChartBox_chart {
    transform: scale(0.85);
  }
}
@media (min-width: 500px) {
  .tempChartBox_chart {
    transform: scale(0.9);
  }
  .tempChartBox__button {
    padding: 1rem 2rem;
  }
}
</style>