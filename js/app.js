// Initialize Classes
const country = new Country();
const ui      = new UI();
const image   = new Image();


//Find country & countryImage when btn-find clicked
document.getElementById('btn-find').addEventListener('click', function(e){

  const inputCountry = document.getElementById('enter-country').value;

  // Change country
  country.changeCountry(inputCountry.toLowerCase());

  // Change countryImage
  image.changeCountryImage(inputCountry.toLowerCase());

  //Find country
  findCountry();

  //Find image
  findImage();

  //Close Modal
  $('#findCountryModal').modal('hide');

   //Clear Everything
   document.getElementById('enter-country').value = '';
});

function findCountry() {
  country.findCountry()
  .then(function(results){
    ui.displayInfo(results[0]);
  })
  .catch(function(error){
    console.log(error)
  })
}

function findImage(){
  image.findImage()
  // .then(results => console.log(results.results[0].urls.full))
  .then(function(results){
    ui.setCountryImage(results.results[Math.floor(Math.random() * 9)].urls.regular)
    ui.displaySmImage(results.results);
  })
  .catch(error =>  console.log(error))
}
