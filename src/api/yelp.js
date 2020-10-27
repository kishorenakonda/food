import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    header:{
        Authorization: 'Bearer 8BeY9l_bDrBPXkpPuYjOVnQocsc_tjDL1uMZxqbyBwH-WCBMJP7zyCphqZ1GqVlUKl9QB4l2xVXjquoXnAkUPVUEZso2v5zmFO2sH4S5PYWvjEEFtdUNLOm16WlkXXYx'
    }
});


// yelp.get('/search')