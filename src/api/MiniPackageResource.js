export default {
    getAll: () => fetch(
      "http://localhost:8080/api/packages",
      {mode: 'cors'}
      )
  }
  