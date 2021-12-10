<template>
  <b-container fluid="md">
    <b-row align-h="center">
      <div class="card">
        <b-row align-h="center">
          <div class="header">Weather in:</br> {{ name }}, {{ country }}</div>
        </b-row>
        <b-row align-h="center">
          <img :src="`http://openweathermap.org/img/wn/${icon}@2x.png`" alt="icon">
          <div class="temp">{{ Math.round((temp -273.15)) }} &#8451;</div>
        </b-row>
        <b-row align-h="center">
          <div class="main">
            {{ main }}
          </div>
          <div align-h="center" class="line">

          </div>
          <div id="demo">
            <p>{{ description }}</p>
          </div>
        </b-row>
        <b-row align-h="center">
          <div class="pressure">Pressure: {{ pressure }} mmHg</div>
        </b-row>
        <b-row align-h="center">
          <div class="humidity">Humidity: {{ humidity }} %</div>
        </b-row>


      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Weather',
  data(){
    return{

    }
  },
  props: {
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
</script>

<style scoped>
.card{
  font-size: 30px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  width: 347.76px;
  margin: 10px 0px;
  padding: 15px 15px;
  display: inline-block;
}
.header{
  font-size: 40px;
  color: #000000;
}
.main{
  margin: auto 5px;
}
.temp{
  text-align: center;
  font-size: 40px;
  margin: auto 5px;
}
.line{
  height: 30px;
  border-left: 2px solid #ffffff;
  margin-top: auto;
  margin-bottom: auto;
}
img{
  width: 100px;
  vertical-align: middle;
  margin: 0px 10px;
}
p{
  font-size: 20px;
  margin-top: auto;
  margin-bottom: auto;
  margin: 5px;
}
</style>
