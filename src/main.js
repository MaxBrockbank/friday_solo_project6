import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchangeService.js';

$(document).ready(function(){
	let countryArray;
	let ratesArray;
	let currencies; 

	function processCallData(data){
		countryArray = Object.keys(data.conversion_rates);
		ratesArray = Object.values(data.conversion_rates);
		let optionsArray = [];
		for(let i = 0; i < countryArray.length; i++){
			optionsArray.push(`<option>${countryArray[i]}</option>`);
		}
		optionsArray.forEach(option => $("#country").append(option));
  
	}

	function formatAndPost(code, USD, results){
		let output;
		for(let i = 0; i < countryArray.length; i++){
			if(code.val() === countryArray[i]){
				const usdFormatter = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					minimumFractionDigits:2
				});
				const otherFormatter = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: `${countryArray[i]}`,
					minimumFractionDigits:2
				});
				let toConvert = usdFormatter.format(USD);
				let converted = otherFormatter.format(((ratesArray[i]) * USD));
				output = `<h2>${toConvert} is equal to <strong>${converted}</strong></h2>`;
				break;
			} else if(code.text() === "none"){
				output = `Nothing selected, please select a valid coversion.`;
			} else {
				output = `${code.text()} conversion is not available. Sorry about that. Please select another currency conversion.`;
			}
		}
		results.html(output);
		$("#country").val("none");
		$("#USD").val("");
	}

	(function(){
		if(sessionStorage.getItem('API_data')){
			const storedData = JSON.parse(sessionStorage.getItem('API_data'));
			processCallData(storedData);
		} else {
			currencies = ExchangeService.calculateExchange()
				.then((callResponse) => {
					if(callResponse instanceof Error){
						throw Error (`ExchangeRate API error: ${callResponse.message}`);
					}
					sessionStorage.setItem('API_data', JSON.stringify(callResponse));
					processCallData(callResponse);
				})
				.catch((error)=>{
					alert(`An Error Occured with the ExchangeRate API - ${error}`);
				});
		}
	})();
  

	$("#convert").on('submit', (event) => {
		event.preventDefault();
		let code = $("#country option:selected");
		const USD = $("#USD").val();
		const results = $("#result");

		if(sessionStorage.getItem('API_data')){
			formatAndPost(code, USD, results);
		} else {
			currencies.then((exchangeResponse) => {
				if(exchangeResponse instanceof Error){
					throw Error (`ExchangeRate API error: ${exchangeResponse.message}`);
				}
				formatAndPost(code, USD, results);
			})
				.catch((error)=>{
					alert(`An Error Occured: ${error}`);
				});
		}
	});
    
});