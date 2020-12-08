export const getFlights = () => {
  return fetch('https://front-test.beta.aviasales.ru/search')
    .then(response => response.json())
    .then(json =>
      fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${json.searchId}`).then(response =>
        response.json().then(json => json.tickets.slice(0, 100))
      )
    )
}
