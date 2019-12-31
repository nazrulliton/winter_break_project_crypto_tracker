<template>
  <div id="app">
    <div class="topnav">
      <h1>Crypto. Tracker</h1>
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
    <router-view/>
    <br>
    <br>
    <table class="crypto-container">
      <tr>
        <th>Crypto Name</th>
        <th>Value($)</th>
        <th>Value(£)</th>
    </tr>
    <tr v-for="(value, key) in cryptos">
        <td>{{key}}</td>
        <td>{{value.EUR}}</td>
        <td>{{value.USD}}</td>
    </tr>
    <tr>
      <button type="button" class="trigger">Analysis</button>
    </tr>
  </table>
    <div class="modal">
       <div class="modal-content">
           <span class="close-button">&times;</span>
           <h1>Whats the value of my wallet?</h1>
               <br><br>
               <label>Number of shares owned:</label>
               <input id="one" type="number" name="" value="">
               <br><br>
               <label>Name/Price of Coin:</label>
               <select>
                 <option id="123" v-for="(key,value) in cryptos">{{value}}: ${{key.USD}}</option>
               </select>
               <br>
               <br>
               <label>Value of coin:</label>
               <input type="number" name="" value="" id="two">
               <br>
               <br>
               <label for="">Result:</label>
               <input type="text" id="ans" name="" value="">

               <button type="" name="button" @click="add()">Submit</button>
       </div>
   </div>

   <div>
     <table class="news">
       <tr>
         <th>Crypto News</th>
       </tr>
       <tr v-for="value in news"><td>{{value.title}}<br><b>Source: </b><a href="value.url">{{value.source}}</a></td></tr>
     </table>
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
      console.log(response)
    }).catch(e => {
      this.errors.push(e)
    })
    axios.get('https://min-api.cryptocompare.com/data/news/?feeds=cryptocompare,cointelegraph,coindesk&api_key=4c12c3112c1df9fbfa20473e9eda953e0bb351e112affb4dd6039b2b05d72989').then(response => {
      this.news = response.data
      console.log(response)
    }).catch(e => {
      this.nerrors.push(e)
    })
  },
  methods: {
    add () {
      var a = document.getElementById('one').value
      var b = document.getElementById('two').value
      var c = a * b
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
.news {
  height: 900px;
  width: 300px;
  background-color: white;
  position: relative;
  left: 10px;
  top: 0px;
}
.trigger {
  font-size: 30px;

}
/* Add a black background color to the top navigation */
.topnav {
  background-color: white;
  overflow: hidden;
  border: 5px solid;
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
  background-color: #ddd;
  color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
          border: 1px solid black;
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
          font-family:
        }
th{
          background-color: lightgray;
          text-decoration: underline;
          font-weight: bold;
          font-size: 22px;
        }

</style>
