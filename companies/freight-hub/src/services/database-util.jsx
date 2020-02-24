class DatabaseUtilService {
  url = "http://localhost:3001";
  getListOfShipments = () => {
    let responseData = {};
    return fetch(`${this.url}/shipments`);
  };

  getById(id) {
    return fetch(`${this.url}/shipments/${id}`);
  }
  addRecord(data) {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    return fetch(`${this.url}/shipments`, options).then(
      response => response.json
    );
  }
}

export default DatabaseUtilService;
