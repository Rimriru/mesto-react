class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json().then((data) => data);
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  async getUserInfo() {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me`, {
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async getInitialCards() {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards`, {
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async editUserInfo({ name, about }) {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    });
    return this._checkResponse(res);
  }

  async changeUserAvatar(avatar) {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    });
    return this._checkResponse(res);
  }

  async addNewCard({ name, link }) {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    });
    return this._checkResponse(res);
  }

  async removeCard(cardId) {
    const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    return this._checkResponse(res);
  }

  async addLikeCard(cardId) {
    const res = await fetch(
      `${this._baseUrl}/v1/cohort-63/cards/${cardId}/likes`,
      {
        method: "PUT",
        headers: this._headers,
      }
    );
    return this._checkResponse(res);
  }

  async removeLikeCard(cardId) {
    const res = await fetch(
      `${this._baseUrl}/v1/cohort-63/cards/${cardId}/likes`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    );
    return this._checkResponse(res);
  }

  async changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.removeLikeCard(cardId) : this.addLikeCard(cardId);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co",
  headers: {
    authorization: "1b47af07-4c33-4bad-9262-4cd7024f33a0",
    "Content-Type": "application/json",
  },
});
