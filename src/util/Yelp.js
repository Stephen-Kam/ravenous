const apiKey = "Vbd5Sl9EAkyZKBvcAVV3gCZvgXxPX7tqzb1L4f175oRF4i7rp_Mx1RlN4N2KnA-2I10qCkctGdTSe8FZMWQnHOLHiXIrTXpAtuQPpd2YXQCT6kEVdJwbZX_t44AAYHYx"

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { headers: { Authorization: `Bearer ${apiKey}` } })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Request failed!');
            }, networkError => {
                console.log(networkError.message)
            })
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
}