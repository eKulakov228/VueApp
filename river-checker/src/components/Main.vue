<template>
    <b-container fluid="md">
      <b-container fluid="md" class="EnterCityButton">
        <b-row align-h="center">
          <b-col lg="150">
            <b-input-group prepend="City" class="mt-3" size="md">
              <b-form-input class="input" v-model="city" placeholder="Enter your city"></b-form-input>
              <b-input-group-append>
                <b-button class="submit_button"  @click="getData">Submit</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>

      <Weather
        :name="weather.name"
        :country="weather.country"
        :icon="weather.icon"
        :main="weather.main"
        :temp="weather.temp"
        :pressure="weather.pressure"
        :humidity="weather.humidity"
        :description="weather.description"
      >
      </Weather>

    </b-container>
</template>

<script>
import Reg from '../lib/api/River'
import Weather from './WeatherCard'
// import Time from "./Time"
// import axios from 'axios'
export default {
  name: 'Main',
  components: {
    Weather
  },
  data() {
    return {
      regApi: new Reg(),
      city: null,
      cityImageUrl: null,
      weather: {
        name: null,
        country: null,
        id: null,
        temp: null,
        pressure: null,
        humidity: null,
        main: null,
        description: null,
        icon: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.city).then(data => {
        console.log(data)
        this.weather.name = data.data.name
        this.weather.country = data.data.sys.country
        this.weather.temp = data.data.main.temp
        this.weather.id = data.data.weather[0].id
        this.weather.main = data.data.weather[0].main
        this.weather.description = data.data.weather[0].description
        this.weather.icon = data.data.weather[0].icon
        this.weather.pressure = data.data.main.pressure
        this.weather.humidity = data.data.main.humidity

        localStorage.city = this.city;
      })
    },
  },
  created() {
    this.city = "Gomel"
    this.getData(this.city)
  }
}

</script>

<style>
.input {
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  box-sizing: border-box;
  color: black;
}

.submit_button {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
}
</style>
