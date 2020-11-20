import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';

$(document).ready(function(){
  let countryArray;
  let ratesArray;
  const currencies = ExchangeService.calculateExchange()
    .then((callResponse) => {
      if(callResponse instanceof Error){
        throw Error (`ExchangeRate API error: ${exchangeResponse.message}`)
      }
      countryArray = Object.keys(callResponse.conversion_rates);
      ratesArray = Object.values(callResponse.conversion_rates);
      let optionsArray = [];
      for(let i = 0; i < countryArray.length; i++){
        optionsArray.push(`<option>${countryArray[i]}</option>`)
      }
      optionsArray.forEach(option => $("#country").append(option));
    })
    .catch((error)=>{
      alert(`An Error Occured: ${error}`);
    })
  $("#convert").on('submit', (event) => {
    event.preventDefault();
    let code = $("#country option:selected");
    const USD = $("#USD").val();
    const result = $("#result");
      currencies.then((exchangeResponse) => {
        if(exchangeResponse instanceof Error){
          throw Error (`ExchangeRate API error: ${exchangeResponse.message}`)
        }
        let output;
        for(let i = 0; i < countryArray.length; i++){
          console.log(countryArray[i]);
          if(code.val() === countryArray[i]){
            const usdFormatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits:2
            })
            const otherFormatter = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: `${countryArray[i]}`,
              minimumFractionDigits:2
            })
            let toConvert = usdFormatter.format(USD);
            let converted = otherFormatter.format(((ratesArray[i]) * USD))
            output = `<h2>${toConvert} is equal to ${converted}</h2>`;
            break;
          } else if(code.text() === "none"){
            output = `Nothing selected, please select a valid coversion.`;
          } else {
            output = `${code.text()} conversion is not available. Sorry about that. Please select another currency conversion.`;
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
        alert(`An Error Occured: ${error}`);
      })
  })
    
})