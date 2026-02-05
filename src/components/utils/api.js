class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://newsapi.org/v2/everything";
  }

  checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Error: ${response.status}`);
  }

  getNews(query) {
    return fetch(`${this.baseUrl}?q=${query}&apiKey=${this.apiKey}`).then(
      (response) => response.json(),
    );
  }

  saveArticle(article) {
    return Promise.resolve(article);
  }

  savedArticals() {
    return Promise.resolve("saved articles data");
  }

  fetchSavedArticles() {
    return Promise.resolve([]);
  }
}

export default Api;
