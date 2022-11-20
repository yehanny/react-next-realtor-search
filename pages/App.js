import { useState, useEffect } from "react";
import axios from "axios";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Link from "next/link";

const queryClient = new QueryClient();
export default function App({ Component, pageProps, AppProps }) {
  // Limit the number of items to 10

  // Filter data based on the search input
  // Store the filtered data in a variable called filteredData (array)
  // Store the search input in a variable called search (string)
  // Search criteria: name, address, city, geo_county, mls_id, postalCode, property_subdivision, state
  // const [search, setSearch] = useState("");
  // const [filteredData, setFilteredData] = useState([]);
  // useEffect(() => {
  //   setFilteredData(data.filter((item) => Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(search.toLowerCase()))));
  // }, [search, data]);
  // Get data from json file using axios and store it in a variable called data (array)

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {/* <Component {...pageProps} /> */}

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export const useGetApartments = (filters) => {
  // Notice we only use `apartments` as query key, because we want to preserve our cache
  return useQuery(
    ["apartments", filters],
    () => fetch(filters),
    // We pass a third argument to our useQuery function, an options object
    {
      select: (apartments) => apartments.filter((apartment) => apartment.name.includes(filters.name)),
    }
  );
};
