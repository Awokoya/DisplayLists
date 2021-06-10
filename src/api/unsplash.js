import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID dlDE77zJqZDmvt6XFHCTtNIbc7XuAcbv8aV1ndE8rbU'


  }
})