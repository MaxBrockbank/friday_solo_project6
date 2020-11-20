export default class ExchangeService{

  static async calculateExchange(country_code){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(response => {
        if(!response.ok){
          throw Error(response.message)
        }
        return response.json();
      })
      .catch(error => {
        return error.message;
      })
  }

}