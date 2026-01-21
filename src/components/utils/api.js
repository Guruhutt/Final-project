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

  savedArticals(token) {
    return fetch("http://localhost:3000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(article),
    }).then(this.checkResponse);
  }

  fetchSavedArticles(token) {
    return fetch("http://localhost:3000/articles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }).then(this.checkResponse);
  }
}

export default Api;
