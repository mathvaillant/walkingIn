class UI {
  constructor() {
    this.country = document.getElementById('country');
    this.capital = document.getElementById('capital');
    this.flag = document.getElementById('country-flag');
    this.population = document.getElementById('td-population');
    this.continent = document.getElementById('td-continent');
    this.language = document.getElementById('td-language');
    this.currenct = document.getElementById('td-currency');
    this.countryImageRight = document.getElementById('main-right');
    this.countryImageLeft = document.getElementById('main-left');
    this.imgSmall = document.querySelectorAll('.sm-image');

  }

  // Display Country & other informations
  async displayInfo(country) {
    this.country.textContent = country.name;
    this.capital.textContent = "Capital: " + country.capital;
    this.flag.setAttribute('src', country.flag);
    this.population.textContent = country.population.toLocaleString();
    this.continent.textContent = country.subregion;
    this.language.textContent = country.languages[0].name + " (" + country.languages[0].nativeName + ") ";
    this.currenct.textContent = country.currencies[0].name + " " + country.currencies[0].symbol;
    document.getElementById('enter-country').innerHTML = '';
  }

  // Set Images
  async setCountryImage(countryImage){
    const imageUrl = "url("+countryImage+")";

    this.countryImageLeft.style.backgroundImage = imageUrl;
  }

  async displaySmImage(results){
    const img = this.imgSmall;
    for(let i = 0; i < results.length; i++){
      console.log(img[i].style.backgroundImage = "url("+results[i].urls.small+")");
    }
  }
}
