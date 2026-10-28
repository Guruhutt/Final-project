class Api {
  constructor(apiKey) {
    this.apiKey = apiKey;
    const newsApiBaseUrl = process.env.NODE_ENV === "production" 
  ? "https://news-api-proxy.up.railway.app/news/v2/everything"
  : "https://newsapi.org/v2/everything";
   this.baseUrl = newsApiBaseUrl;
  }

  getNews(query) {
    return fetch(`${this.baseUrl}?q=${query}&apiKey=${this.apiKey}`).then(
      (response) => response.json(),
    );
  }

  saveArticle(article) {
    return Promise.resolve(article);
  }

  fetchSavedArticles() {
    return Promise.resolve([]);
  }
}

export default Api;
