class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getUserInfo() {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me`, {
        headers: this._headers,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось получить данные профиля! ${err}`);
    }
  }

  async getInitialCards() {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards`, {
        headers: this._headers,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Карточки не получены! ${err}`);
    }
  }

  async editUserInfo({ name, about }) {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ name, about }),
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось изменить данные профиля! ${err}`);
    }
  }

  async changeUserAvatar(avatar) {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify(avatar),
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось изменить аватар профиля! ${err}`);
    }
  }

  async addNewCard({ name, link }) {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({ name, link }),
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось добавить новую карточку! ${err}`);
    }
  }

  async removeCard(cardId) {
    try {
      const res = await fetch(`${this._baseUrl}/v1/cohort-63/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось удалить карточку! ${err}`);
    }
  }

  async addLikeCard(cardId) {
    try {
      const res = await fetch(
        `${this._baseUrl}/v1/cohort-63/cards/${cardId}/likes`,
        {
          method: "PUT",
          headers: this._headers,
        }
      );
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось добавить лайк на карточку! ${err}`);
    }
  }

  async removeLikeCard(cardId) {
    try {
      const res = await fetch(
        `${this._baseUrl}/v1/cohort-63/cards/${cardId}/likes`,
        {
          method: "DELETE",
          headers: this._headers,
        }
      );
      if (res.ok) {
        const data = await res.json();
        return data;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    } catch (err) {
      console.log(`Ой! Не удалось убрать лайк с карточки! Ошибка: ${err}`);
    }
  }

  async changeLikeCardStatus(cardId, isLiked) {
    try {
      return isLiked ? this.removeLikeCard(cardId) : this.addLikeCard(cardId);
    } catch (err) {
      console.log(`Ой! Проблема с лайками карточки! ${err}`);
    }
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co",
  headers: {
    authorization: "1b47af07-4c33-4bad-9262-4cd7024f33a0",
    "Content-Type": "application/json",
  },
});
