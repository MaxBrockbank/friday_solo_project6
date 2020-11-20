import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';

$(document).ready(function(){

  $("#convert").on('submit', (event) => {
    event.preventDefault();
    let code = $("#country option:selected");
    const USD = $("#USD").val();
    const result = $("#result");
    ExchangeService.calculateExchange()
      .then((exchangeResponse) => {
        if(exchangeResponse instanceof Error){
          throw Error (`ExchangeRate API error: ${exchangeResponse.message}`)
        }
        const countryArray = Object.keys(exchangeResponse.conversion_rates);
        const ratesArray = Object.values(exchangeResponse.conversion_rates);
        let output;
        for(let i = 0; i < countryArray.length; i++){
          console.log(countryArray[i]);
          if(code.val() === countryArray[i]){
            output = `<h2>${USD} USD is equal to ${((ratesArray[i]) * USD)} ${countryArray[i]}</h2>`;
            break;
          } else if(code.val() === "none"){
            output = `Nothing selected, please select a valid coversion.`;
          } else {
            output = `${code.val()} conversion is not available. Sorry about that. Please select another currency conversion.`;
            console.log("Fail")
          }
        }
        result.html(output);
        $("#country").val("none");
        $("#USD").val("");
        // console.log(code.val());
        // console.log(countryArray);
        // console.log(ratesArray);
        // console.log(USD);
      })
      .catch((error)=>{
        console.log(error);
      })
  })
    
})