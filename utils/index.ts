export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f2475a1f79mshc0533298d992273p1b4b04jsn02fa86c6678a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
