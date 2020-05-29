class Country {
  constructor(country) {
    this.country = country;
  }

  // Fetch country API
  async findCountry() {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.country}`);
    
    const responseData = await response.json();

    return responseData;
  }

  // Change Country
  async changeCountry(country){
    this.country = country;
  }  
}