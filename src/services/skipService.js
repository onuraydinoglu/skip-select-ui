import axios from "axios";

export const fetchSkips = async () => {
  const url = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
  const response = await axios.get(url);
  return response.data;
};
