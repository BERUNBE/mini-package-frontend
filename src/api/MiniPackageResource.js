export default {
    getAll: () => fetch(
      "http://localhost:8080/packages",
      {mode: 'cors'}
      )
  }
  