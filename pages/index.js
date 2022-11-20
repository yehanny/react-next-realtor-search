import { useEffect, useRef, useState } from "react";
import { useGetApartmentsQuery, useGetApartmentByIdQuery } from "./api/apartments";
import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";
import Select from "react-select";
import Search from "../components/Search";
import { setUseProxies } from "immer";

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");

  const [filteredData, setFilteredData] = useState({
    data: [],
    isSearch: false,
    resultFound: false,
  });

  const [propertyData, setPropertyData] = useState();
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    _limit: 24,
    _page: 1,
    city: "Miami",
  });

  const { data, isLoading: isApartmentsLoading, isSuccess: isApartmentsSuccess, isError: isApartmentsError, error: apartmentsError } = useGetApartmentsQuery({ filters: filters });

  const debounce = (func, wait) => {
    let timerId;
    debugger;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, wait);
    };
  };

  // const filterData = () => {
  //   let fData = [];
  //   let resultFound = false;
  //   if (search) {
  //     // fData = [...data.filter((d) => d.name.toLowerCase().indexOf(search) !== -1)];
  //     fData = [...data.filter((d) => d.name.toLowerCase().indexOf(search) !== -1)];
  //     console.info("fData: ", fData);
  //     if (fData.length > 0) {
  //       resultFound = true;
  //     }
  //   }
  //   setFilteredData({
  //     ...fData,
  //     data: [...fData],
  //     isSearch: search.trim().length > 0,
  //     resultFound: resultFound,
  //   });
  // };
  // useEffect(() => {
  //   filterData();
  // }, [search]);

  // Create a filter select by city for the apartments data
  let filterValues = {};
  const filterByCity = (e) => {
    // e.preventDefault();
    const city = e.value;
    // const filtered = data.filter((item) => item.city === city);
    filterValues = {
      city,
      name: null,
    };
    setFilters({ ...filters, ...filterValues });
  };

  // Map the apartments data and search on typing in the search input field and return the results
  // with a given criteria of the search term

  const filterByName = (e) => {
    e.preventDefault();
    const search = e?.target.value;
    if (search?.length > 3) {
      const filtered = data.filter((item) => item.name.toLowerCase().includes(search?.toLowerCase()));
      let name = filtered[0]?.name ? filtered[0]?.name : null;
      filterValues = {
        name: name,
        _limit: null,
      };
    } else {
      filterValues = {
        name: null,
      };
    }
    setFilters({ ...filters, ...filterValues });
  };

  // Create a funtion to handle the search input field and get the object keys and values
  // and return the results with a given criteria of the search term

  useEffect(() => {
    if (isApartmentsLoading) {
      setPropertyData(
        <div className="d-flex justify-content-center w-100">
          <div className="spinner-border text-primary" role="status">
            <div className="visually-hidden" />
          </div>
        </div>
      );
    } else if (isApartmentsSuccess) {
      setPropertyData(<Apartments data={data} />);
    } else if (isApartmentsError) {
      setPropertyData(
        <div className="alert alert-danger w-100 text-center" role="alert">
          {apartmentsError.status} {JSON.stringify(apartmentsError)}
        </div>
      );
    }
    console.info("getApartments: ", data);
  }, [data, filters]);

  // United States Florida Cities list for the filter select
  const cities = [
    { label: "Miami", value: "Miami" },
    { label: "Tampa", value: "Tampa" },
    { label: "Orlando", value: "Orlando" },
    { label: "St. Petersburg", value: "St. Petersburg" },
    { label: "Hialeah", value: "Hialeah" },
    { label: "Fort Lauderdale", value: "Fort Lauderdale" },
    { label: "Tallahassee", value: "Tallahassee" },
    { label: "Port St. Lucie", value: "Port St. Lucie" },
    { label: "Cape Coral", value: "Cape Coral" },
    { label: "Pembroke Pines", value: "Pembroke Pines" },
    { label: "Hollywood", value: "Hollywood" },
    { label: "Miramar", value: "Miramar" },
    { label: "Gainesville", value: "Gainesville" },
    { label: "Coral Springs", value: "Coral Springs" },
    { label: "Miami Gardens", value: "Miami Gardens" },
    { label: "Clearwater", value: "Clearwater" },
    { label: "Palm Bay", value: "Palm Bay" },
    { label: "Pompano Beach", value: "Pompano Beach" },
    { label: "West Palm Beach", value: "West Palm Beach" },
    { label: "Lakeland", value: "Lakeland" },
    { label: "Davie", value: "Davie" },
    { label: "Miami Beach", value: "Miami Beach" },
    { label: "Sunrise", value: "Sunrise" },
    { label: "Plantation", value: "Plantation" },
    { label: "Boca Raton", value: "Boca Raton" },
    { label: "Deltona", value: "Deltona" },
    { label: "Largo", value: "Largo" },
    { label: "Deerfield Beach", value: "Deerfield Beach" },
    { label: "Palm Coast", value: "Palm Coast" },
    { label: "Melbourne", value: "Melbourne" },
    { label: "Boynton Beach", value: "Boynton Beach" },
    { label: "Lauderhill", value: "Lauderhill" },
    { label: "Weston", value: "Weston" },
    { label: "Fort Myers", value: "Fort Myers" },
    { label: "Kissimmee", value: "Kissimmee" },
    { label: "Homestead", value: "Homestead" },
    { label: "Tamarac", value: "Tamarac" },
    { label: "Delray Beach", value: "Delray Beach" },
    { label: "Daytona Beach", value: "Daytona Beach" },
    { label: "North Miami", value: "North Miami" },
    { label: "Wellington", value: "Wellington" },
    { label: "North Port", value: "North Port" },
    { label: "Jupiter", value: "Jupiter" },
    { label: "Ocala", value: "Ocala" },
    { label: "Port Orange", value: "Port Orange" },
    { label: "Margate", value: "Margate" },
    { label: "Coconut Creek", value: "Coconut Creek" },
    { label: "Sanford", value: "Sanford" },
    { label: "Sarasota", value: "Sarasota" },
    { label: "Pensacola", value: "Pensacola" },
    { label: "Bradenton", value: "Bradenton" },
    { label: "Pinellas Park", value: "Pinellas Park" },
    { label: "Coral Gables", value: "Coral Gables" },
    { label: "Doral", value: "Doral" },
    { label: "Bonita Springs", value: "Bonita Springs" },
    { label: "Apopka", value: "Apopka" },
    { label: "Titusville", value: "Titusville" },
    { label: "North Miami Beach", value: "North Miami Beach" },
    { label: "Oakland Park", value: "Oakland Park" },
    { label: "Fort Pierce", value: "Fort Pierce" },
    { label: "Spring Hill", value: "Spring Hill" },
    { label: "Altamonte Springs", value: "Altamonte Springs" },
    { label: "Aventura", value: "Aventura" },
    { label: "Hallandale Beach", value: "Hallandale Beach" },
    { label: "Dunedin", value: "Dunedin" },
    { label: "North Lauderdale", value: "North Lauderdale" },
    { label: "Palm Beach Gardens", value: "Palm Beach Gardens" },
    { label: "Casselberry", value: "Casselberry" },
    { label: "North Palm Beach", value: "North Palm Beach" },
    { label: "Greenacres", value: "Greenacres" },
    { label: "Ormond Beach", value: "Ormond Beach" },
    { label: "Ocoee", value: "Ocoee" },
    { label: "Royal Palm Beach", value: "Royal Palm Beach" },
    { label: "Palm Beach", value: "Palm Beach" },
    { label: "Pine Hills", value: "Pine Hills" },
    { label: "Winter Garden", value: "Winter Garden" },
    { label: "Lake Worth", value: "Lake Worth" },
    { label: "Sunny Isles Beach", value: "Sunny Isles Beach" },
    { label: "Plant City", value: "Plant City" },
    { label: "Clermont", value: "Clermont" },
    { label: "Opa-locka", value: "Opa-locka" },
    { label: "North Port", value: "North Port" },
    { label: "Lauderdale Lakes", value: "Lauderdale Lakes" },
    { label: "Miami Lakes", value: "Miami Lakes" },
    { label: "Lehigh Acres", value: "Lehigh Acres" },
    { label: "Palmet", value: "Palmet" },
  ];

  // Create a function to search apartments on user input and filter by city, state, county, etc.

  const filterApartments = (apartment, state) => {
    console.info("apartment: ", apartment);
    const filteredApartments = data.filter((apartment) => {
      // Search by city, state, county, zipcode and property type with user input and return the results to the user in real time as they type. This is a great way to filter data on the client side.
      // return apartment.city.toLowerCase().includes(apartment.toLowerCase()) || apartment.state.toLowerCase().includes(apartment.toLowerCase()) || apartment.geo_county.toLowerCase().includes(apartment.toLowerCase()) || apartment.postalCode.toLowerCase().includes(apartment.toLowerCase()) || apartment.property_type.toLowerCase().includes(apartment.toLowerCase());

      return apartment.city.toLowerCase().includes(apartment.city.toLowerCase()) || apartment.name.toLowerCase().includes(apartment.name.toLowerCase());
      // return apartment.city.toLowerCase().includes(apartment.city.toLowerCase());
      // if (apartment.city) {
      //   value = apartment.city.toLowerCase().includes(apartment.city.toLowerCase());
      // } else if (apartment.state) {
      //   value = apartment.state.toLowerCase().includes(apartment.state.toLowerCase());
      // } else if (apartment.geo_county) {
      //   value = apartment.geo_county.toLowerCase().includes(apartment.geo_county.toLowerCase());
      // } else {
      //   value = apartment.name.toLowerCase().includes(apartment.name.toLowerCase());
      // }
      // return value;
    });
    // setFiltered(filteredApartments);
  };

  const handleFilteredProperties = (e) => {
    console.info("city: ", e);
    // e.preventDefault();
    const city = e.value;
    console.info("data: ", data);
    const filtered = data.filter((item) => item.city === city);
    console.info("filterByCity: ", filtered);
    filterValues = {
      city,
    };
    setFilters({ ...filters, ...filterValues });
  };

  return (
    <>
      {/* Top */}
      <div className={`bg-[url('../public/images/hero.jpg')] bg-center bg-cover bg-scroll w-full py-10`}>
        {/* Navigation */}
        <div className=" mx-auto max-w-6xl flex items-center justify-between flex-col sm:flex-row space-y-2 sm:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-lime-600 ">Realtor Search</h1>
          </div>
          <div>
            <ul className="flex space-x-10 text-white text-xl font-bold">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <a>
              {/* <Icon width={30} /> */}
              <img src={"../images/icons/icon.svg"} />
            </a>
          </div>
        </div>

        {/* Hero  */}
        <div className="mx-auto max-w-3xl">
          <p className="text-5xl font-bold text-white text-center py-20 leading-relaxed">Discover the Best Apartment Around the World</p>
        </div>

        {/* Search */}
        <Search
          handleChange={debounce((v) => {
            setSearch(v);
          }, 2000)}
          filteredData={filteredData}
        />
        <form className="mx-auto max-w-3xl flex items-center justify-center space-x-4" onSubmit={(e) => handleFilteredProperties(e)}>
          <div className="mx-auto max-w-3xl hidden sm:block">
            <div className="flex divide-x bg-white py-4 justify-center items-center flex-row ">
              <div className="sm:px-4 flex flex-col ">
                <label className="text-xs text-gray-700">State</label>
                {/* <select id="city" name="city" className="text-sm text-gray-700 font-bold" onChange={filterByCity}>
                  <option value={null}>Select</option>
                  {cities.map((city, i) => (
                    <option key={i} value={city}>
                      {city}
                    </option>
                  ))}
                </select> */}
                <Select name="city" options={cities} placeholder="City" defaultValue="Miami" onChange={filterByCity} />
                {/* <input className="text-gray-500 py-2 focus:ring-0 outline-none" type="select" placeholder="2022-01-01" /> */}
              </div>
              {/* <div className="sm:px-6 flex flex-col ">
                <label className="text-xs text-gray-700">City</label>
                <input className="text-gray-500 py-2 focus:ring-0 outline-none" type="text" placeholder="Landed" />
              </div> */}
              <div className="sm:px-6 flex flex-row  sm:space-x-12 justify-between ">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-700">Type your keyword</label>
                  <input
                    id="search"
                    className="text-gray-500 py-2 focus:ring-0 outline-none"
                    type="search"
                    onChange={(e) => filterByName(e)}
                    handleChange={debounce((v) => {
                      setSearch(v);
                    }, 2000)}
                    placeholder="Property name or address"
                  />
                </div>

                <button type="button" className="w-12 h-12 inline-flex items-center justify-center p-2 border border-transparent  bg-lime-600 text-white focus:outline-none focus:ring-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* arrow */}
        <div className="mx-auto max-w-2xl pt-32">
          <div className="flex items-center justify-center">
            <a href="3">{/* <Arrow width={50} /> */}</a>
          </div>
        </div>
      </div>

      {/* Appartment list */}
      {propertyData}

      {/* Footer */}
      <Footer />
    </>
  );
};

const Apartments = (props) => {
  const { data } = props;
  return (
    <div className="w-full space-y-20 bg-gray-100 py-20 px-4 sm:px-0">
      <div className="mx-auto max-w-6xl space-y-20">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-start items-center space-x-2">
            <span className="text-red-500">&#8212;&#8212;</span>
            <h3 className="text-lg tracking-loose">Properties</h3>
          </div>

          <p className="text-5xl tracking-wide">We provide comprehensive detail on property.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {data.map((data, i) => (
            <div className="bg-white p-4 drop-shadow" key={i}>
              <div className="relative">
                <Link href={``}>
                  <img src={JSON.parse(data.json_data).photos[0]} className="drop-shadow-2xl" />
                </Link>
                <div className="absolute right-2 top-2 bg-lime-600 text-white tracking-wide py-2 px-4">
                  <span className="font-bold">{data.naturalPrice}</span>/{data.property_type}
                </div>
              </div>
              <div>
                <p className="text-2xl tracking-wide text-gray-700 py-4">{data.name}</p>
              </div>
              <div className="flex space-x-2 items-center justify-start">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">
                  <a href={data.url}>{`${data.geo_county}, ${data.city}, ${data.state} (${data.postalCode})`}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
