const apiKey = ''
const apiUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3`
const search = async (term, location, sortBy) => {
    try {
        const response = await fetch(`${apiUrl}/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`, 
                Origin: 'localhost',
                withCredentials: true,
            }
        });
        if (response.ok) {
            const responseJSON = await response.json();
            console.log('it worked')
            console.log(responseJSON.businesses);

            return responseJSON.businesses.map(business => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zipCode,
                category: business.category,
                rating: business.rating,
                review_count: business.review_count
            })
            )

        }


    } catch (error) {
        console.log(error.message)
    }
}

const Yelp = { search }

export default Yelp

/*const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp*/
