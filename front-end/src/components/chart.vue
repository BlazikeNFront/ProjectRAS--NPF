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

      <transition name="tempChartLoader">
        <div class="tempChart__loader" v-if="loader">
          <loader></loader>
        </div>
      </transition>
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
  width: 90%;
  max-width: 50rem;
  min-width: 30rem;
  @include flexLayout;
  flex-direction: column;
}
.tempChartBox_chart {
  position: relative;

  width: 500px;

  @media (max-width: 500px) {
    transform: scale(0.9);
  }
  @media (max-width: 450px) {
    transform: scale(0.8);
  }
}
.tempChartBox__console {
  @include flexLayout;
  position: relative;
  z-index: 100;
  width: 100%;
  height: 6rem;
}
.tempChartBox__button {
  margin-top: 1rem;
  width: 25rem;
  background: white;
  border: none;
  border-radius: 50px;
  @include mainFontBold;
  font-family: inherit;
  padding: 1rem;
  @media (max-width: 550px) {
    padding: 0.5rem;
    font-size: $font-sm;
  }
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
  &:focus {
    outline: none;
  }
}
.tempChartBox__list {
  position: relative;
  top: -0.4rem;
  list-style: none;
  background-color: white;
  width: 13rem;
  margin: 0 auto;
  padding: 0.5rem 0;
  border-radius: 0 0 5px 5px;
}
.tempChartBox__listOption {
  padding: 0.5rem;
}
.tempChart__loader {
  transform: scale(0.7) translate(0, 4rem);
  height: 15rem;
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
</style>