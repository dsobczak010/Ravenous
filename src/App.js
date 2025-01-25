import logo from './logo.svg';
import styles from './App.module.css';
import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from "./components/SearchBar/SearchBar";
import { YelpAPI } from "./utils/YelpAPI"
import React, { useState } from "react";

function App() {
  // const businesses = [
  //   {
  //     imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  //     name: 'MarginOtto Pizzeria',
  //     address: '1010 Paddington Way',
  //     city: 'Flavortown',
  //     state: 'NY',
  //     zipCode: '10101',
  //     category: 'Italian',
  //     rating: 4.5,
  //     reviewCount: 90
  //   },
  //   {
  //     imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/640px-Sushi_platter.jpg',
  //     name: 'Sushi Sumo',
  //     address: '2020 Ocean Breeze Dr',
  //     city: 'Sushitown',
  //     state: 'CA',
  //     zipCode: '90001',
  //     category: 'Japanese',
  //     rating: 4.7,
  //     reviewCount: 120
  //   },
  //   {
  //     imageSrc: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
  //     name: 'Burger Bliss',
  //     address: '3030 Grill Rd',
  //     city: 'Burgertown',
  //     state: 'TX',
  //     zipCode: '75001',
  //     category: 'American',
  //     rating: 4.2,
  //     reviewCount: 150
  //   },
  //   {
  //     imageSrc: 'https://benjaminsteakhouse.com/wp-content/uploads/Porterhouse.6-1.jpg',
  //     name: 'Steakhouse Supreme',
  //     address: '4040 Meat Lover Ave',
  //     city: 'Steakcity',
  //     state: 'FL',
  //     zipCode: '33101',
  //     category: 'Steakhouse',
  //     rating: 4.6,
  //     reviewCount: 200
  //   },
  //   {
  //     imageSrc: 'https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp',
  //     name: 'Pasta Pronto',
  //     address: '5050 Noodle Blvd',
  //     city: 'Pastaville',
  //     state: 'IL',
  //     zipCode: '60601',
  //     category: 'Italian',
  //     rating: 4.3,
  //     reviewCount: 80
  //   }
  // ];

  const [businesses, setBusinesses] = useState([]);
  
  const handleSearch = (searchTerm, location, sortBy) => {
    console.log("Searching Yelp for:", searchTerm, location, sortBy);
    // Call Yelp API in the future
    YelpAPI.search(searchTerm, location, sortBy).then((results) => {
      setBusinesses(results);
    })
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>ravenous</h1>
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
      {/* <div className="business-list">
        {businesses.map((business, index) => (
          <Business key={index} business={business} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
