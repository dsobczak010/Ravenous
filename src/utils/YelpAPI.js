const apiKey = "n_KL0Q1Me6mS4qK94hlZ1XaSIRdiMJqfp_MNAc5B-o_mwobkz6j__cRkyUywUbqnuJ1ZMhcwwDWm2euQW879hpJ0JHoGGJ9Kbvw8-Nd7c7W0wIRAHCG9b1Iv7c6UZ3Yx";

export const YelpAPI = {
  search(term, location, sortBy) {
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data from Yelp API");
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.businesses) {
          return [];
        }
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          name: business.name,
          imageSrc: business.image_url,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0]?.title || "Unknown",
          rating: business.rating,
          reviewCount: business.review_count,
        }));
      });
  },
};
