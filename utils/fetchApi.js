import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'


export const fetchApi=async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fb03f7d189mshac4be1f78090cf6p1c5e37jsnd7bf109dd473',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
  }

