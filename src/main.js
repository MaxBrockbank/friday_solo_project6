import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';

$(document).ready(function(){
    let code="EUR";
    ExchangeService.calculateExchange()
      .then((exchangeResponse) => {
        if(exchangeResponse instanceof Error){
          throw Error (`ExchangeRate API error: ${exchangeResponse.message}`)
        }
        const countryArray = Object.keys(exchangeResponse.conversion_rates);
        const ratesArray = Object.values(exchangeResponse.conversion_rates);
        for(let i = 0; i <= countryArray.length; i++){
          if(code === countryArray[i]){
            console.log({"country": countryArray[i], "conversion rate":ratesArray[i]});
          }
        }
      })
      .catch((error)=>{
        console.log(error);
      })
})