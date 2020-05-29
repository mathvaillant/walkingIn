class Image {
  constructor(countryImage) {
    this.countryImage = countryImage;
    this.client_id = 'PXFQq-aNDEKRx2dEKRUJkVI6vJyCltBdRpnNebkt9tg';
  }

  // Fetch API to get images
  async findImage() {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${this.client_id}&query=${this.countryImage}`);

    const responseData = await response.json();
    return responseData;
  }

  // Change countryImage
  async changeCountryImage(newCountryImage){
    this.countryImage = newCountryImage;
  }
}
