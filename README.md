<h1 align="center">~Currency Exchange Calculator~</h1>
<div align="center">
<img src="https://github.com/MaxBrockbank.png" width="200px" height="auto" >
</div>
<p align="center">Authored by Max Brockabnk</p>
<p align="center">Updated on Nov 20, 2020</p>

# Description

This project uses the ExchangeRate API to convert a user input amount in USD to a select option from the dropdown, which includes all options supported by this API. This project's aim is to show the use of the Fetch API, proper error handling, and writing clean/modular code.

## Required Technologies
<details>
<summary>See details</summary>

* Node.js / Webpack
* Modern web broswer
* Text editor
* ExchangeRate-API key _(see set-up instructions below)_

</details>

## Set-up Instructions
<details>
<summary>See details</summary>

1. Clone this repo to your computer
2. Go to the [ExchangeRate-API](https://www.exchangerate-api.com/) website and sign up for an API key (the free plan is all you need, see the _Standard Endpoint_ documentation for details on the API call made).
3. Create a `.env` file in the highest level of the project directory and create a global variable called `API_KEY` and set it equal to your api key that you just signed up for. Should look like: `API_KEY = (_your api key here_)`
4. Run `npm i` while in the highest level of the project directory to install node_modules/
5. Run `npm start` while in the highest level of the project directory which will launch the development server in your browser.

</details>

## Technologies Used
<details>
<summary>See details</summary>

* HTML 
* CSS / Bootstrap
* JavaScript / jQuery
* Node.js / Webpack
* ExchangeRate API

</details>

## Known Bugs
<details>
<summary>See details</summary>

</details>

## Specs
<details>
<summary>See details</summary>

| Behavior  | Input | Output  |
| :--- | :---: |  :---: |
|1. Make ExchangeRate API request| | Promise|
|2. Import API call response to main.js| | |
|3. Check if the API call response is an error object|||
|4. If not an error object, grab specific country conversion rate| country code = "EUR" | conversion rate=0.844|
|5. HTML dropdown selection with options whose values are set to a corresponding country code| Europe | "EUR"|
|6. UI Logic to grab the value of the currently selected dropdown option to be set to the variable `code` attached to a button event listener|||
|7. Use `code` variable to get exchange rate and mulitple against user input USD amount|$100 * 0.844|€84.32|
|8. Append converted currancy amount to the DOM|||
|9. Add all API exchange rate options to drop down|||
|10. Cache API results in session storage so we only make one API call. (If error testing the API call, you'll need to open up a new tab in your browser since the calls data is being stored in session storage which is checked for the exchange rate data before an API call is made.)|||

</details>

## Legal
* Copyright __©__ 2020 Max Brockbank
* This software is licensed under the __MIT license__