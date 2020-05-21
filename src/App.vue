<template>
  <div id="app">
    <div class="topnav">
      <h1>Crypto Tracker</h1>
        <a class="active" href="#">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="# about">About</a>
    </div>
    <router-view/>
    <button type="button" class="trigger">Calc Holding</button>
    <div>
      <!-- <button type="button" class="trigger1"></button> -->
    </div>
    <table class="crypto-container">
      <tr>
        <th>Crypto Name</th>
        <th>Value($)</th>
        <th>Value(£)</th>
      </tr>
      <tr v-bind:key="index" v-for="(value, key, index) in cryptos">
        <td>{{key}}</td>
        <td>{{value.EUR}}</td>
        <td>{{value.USD}}</td>
      </tr>
    </table>
    <div class="modal">
       <div class="modal-content">
           <span class="close-button">&times;</span>
           <h1>Whats the value of my wallet?</h1>
               <br>
               <label>Number of shares owned:</label>
               <input id="one" type="number" name="" value="">
               <br><br>
               <label>Name/Price of Coin:</label>
               <select>
                 <option id="123" v-bind:key="index" v-for="(key,value, index) in cryptos">{{value}}: ${{key.USD}}</option>
               </select>
               <br>
               <br>
                <button type="" name="button" @click="add()">Submit</button>
               <br>
               <br>
               <label for="">Result:</label>
               <input type="text" id="ans" name="" value="">
       </div>
   </div>
   <div>
    <ul class="news" id="news">
       <header class="newtitle">
       <h2 align="left">News</h2>
          </header>
       <li align="left" v-bind:key="index" v-for="(value, index) in news">{{value.title}}<br><b>Source:</b> <a href="www.coindesk.com">{{value.source}}</a><br><br></li>
     </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data: () => ({
    cryptos: [],
    errors: [],
    news: [],
    nerrors: []
  }),
  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,ZEC,XRP,BCH,LTC,DASH&tsyms=USD,EUR&api_key=4c12c3112c1df9fbfa20473e9eda953e0bb351e112affb4dd6039b2b05d72989').then(response => {
      this.cryptos = response.data
      // console.log(response)
    }).catch(e => {
      this.errors.push(e)
    })
    axios.get('https://min-api.cryptocompare.com/data/news/?feeds=cryptocompare,cointelegraph,coindesk&api_key=4c12c3112c1df9fbfa20473e9eda953e0bb351e112affb4dd6039b2b05d72989').then(response => {
      this.news = response.data
      // console.log(response)
    }).catch(e => {
      this.nerrors.push(e)
    })
  },
  methods: {
    add () {
      var a = document.getElementById('one').value
      var e = document.getElementById('123').value
      var eg = e.slice(6)
      var example = Number(eg)
      var c = a * example
      document.getElementById('ans').value = c
    }
  }
}
</script>

<style>
.crypto-container {
position: absolute;
right: 250px;
}
.newtitle {
  /* background-color: lightgray; */
  text-decoration: underline;
  font-weight: bold;
  font-size: 28px;
  /* height: 100px;
  width: 300px; */
}

.news h2 {
  text-align: center;
}
.news {
  height: 700px;
  width: 250px;
  background-color: white;
  position:inherit;
  /* left: 10px; */
  top: 0px;
  overflow:scroll;
  list-style-type: none;
}
.trigger {
  font-size: 30px;
  position: absolute;
  left: 22%;
  color: black;
  border: 2px solid black;
}
/* Add a black background color to the top navigation */
.topnav {
  background-color: white;
  overflow: hidden;
  border: 5px solid;
  margin-bottom: 20px;
}
/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  color: black;
  text-align:center;
  padding: 14px 16px;
  text-decoration:none;
  font-size: 20px;
}
/* Change the color of links on hover */
.topnav a:hover {
  background-color: black;
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.portv{
  border: 1px solid;
  padding: 5px;
  background-color: lightgray;
  height: 350px;
  width: 350px;
  display:block;
  align-items: center;
}

.modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
        visibility: hidden;
        transform: scale(1.1);
        transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
    }

.modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        color: black;
        font-weight: bold;
        padding: 1rem 1.5rem;
        width: 24rem;
        border-radius: 0.5rem;
    }
.close-button {
        float: right;
        width: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        cursor: pointer;
        border-radius: 0.25rem;
        background-color: lightgray;
    }
.close-button:hover {
        background-color: darkgray;
    }
.show-modal {
        opacity: 1;
        visibility: visible;
        transform: scale(1.0);
        transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;}
table, th, td {
          border: 2px solid black;
          border-collapse: collapse;
          table-layout: auto;
          text-align: center;
          padding: 20px;
        }
table {
          width: 50%;
          height: 40%;
          background-color: white;

        }
        td{

          height: 50px;
          font-size: 20px;
        }
th{
          /* background-color: lightgray; */
          text-decoration: underline;
          font-weight: bold;
          font-size: 23px;
        }

</style>
