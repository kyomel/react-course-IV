import axios from 'axios';

const searchImages = async () => {
    const response =  await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID CxQNlIDWOBdqSB1fQDWEEQanCyTHe3LhVyk47ESMK5U',
        },
        params: {
            query: 'cars',
        }
    });

    console.log(response)

    return response;
};

export default searchImages;