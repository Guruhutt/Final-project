class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://newsapi.org/v2/everything";
  }

  getNews(query) {
    return fetch(`${this.baseUrl}?q=${query}&apiKey=${this.apiKey}`).then(
      (response) => response.json()
    );
  }
}

export default Api;
