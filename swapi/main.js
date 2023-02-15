const button = document.querySelector("#get-residents-btn")

button.addEventListener("click", () => {
  console.log("Button clicked")

  axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then(response => {
      const residents = response.data.results[0].residents
      residents.forEach(residentURL => {
        axios.get(residentURL)
          .then(residentResponse => {
            const residentName = residentResponse.data.name
            const h2 = document.createElement("h2")
            h2.textContent = residentName
            document.body.appendChild(h2)
          })
      })
    })
    .catch(error => {
      console.log(error)
    });
})

