<h1 align="center">~Currency Exchange Calculator~</h1>
<div align="center">
<img src="https://github.com/MaxBrockbank.png" width="200px" height="auto" >
</div>
<p align="center">Authored by Max Brockabnk</p>
<p align="center">Updated on Nov 20, 2020</p>

# Description

## Required Technologies
<details>
<summary></summary>

* Node.js / Webpack
* Modern web broswer
* Text editor
* ExchangeRate-API key _(see set-up instructions below)_

</details>

## Set-up Instructions
<details>
<summary></summary>

1. Clone this repo to your computer
2. Go to the [ExchangeRate-API](https://www.exchangerate-api.com/) website and sign up for an API key (the free plan is all you need).
3. Create a `.env` file in the highest level of the project directory and create a global variable called `API_KEY` and set it equal to your api key that you just signed up for. Should look like: `API_KEY = (_your api key here_)
4. Run npm i to install node_modules/

</details>

## Technologies Used
<details>
<summary></summary>

* HTML 
* CSS / Bootstrap
* JavaScript / jQuery
* Node.js / Webpack
* ExchangeRate API

</details>

## Known Bugs
<details>
<summary></summary>

</details>

## Specs
<details>
<summary></summary>

| Behavior  | Input | Output  |
| :--- | :---: |  :---: |
|1. Make ExchangeRate API request| | Promise|
|2. Import API call response to main.js| | |
|3. Check if the API call response is an error object|||
|4. If not an error object, grab specific country conversion rate| country_code = "EUR" | conversion_rate=0.844|
|5. HTML dropdown selection with options whose values are set to a corresponding country code| Europe | "EUR"|
|6. UI Logic to grab the value of the currently selected dropdown option to be set to the variable `code` attached to a button event listener|||

</details>
## Legal
* Copyright © 2020 Max Brockbank
* This software is licensed under the MIT license