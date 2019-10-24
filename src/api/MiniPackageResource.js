export default {
    getAll: () => fetch(
      "http://localhost:8080/api/packages",
      {mode: 'cors'}
      ),
    createPackage: (packageitem) => fetch(
      "http://localhost:8080/api/packages", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(packageitem),
      })
  }
  