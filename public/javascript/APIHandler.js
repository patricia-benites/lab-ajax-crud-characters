class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);

  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(inputName, inputOccupation, inputWeapon, inputCartoon) {
    return axios.post(`${this.BASE_URL}/characters`, {
    name: inputName.value,
    occupation:inputOccupation.value,
    weapon: inputWeapon.value,
    cartoon: inputCartoon.value
  });
  }

  updateOneRegister(inputName, inputOccupation, inputWeapon, inputCartoon) {
    return axios.put(`${this.BASE_URL}/characters`, {
      name: inputName.value,
      occupation:inputOccupation.value,
      weapon: inputWeapon.value,
      cartoon: inputCartoon.value
    });
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
