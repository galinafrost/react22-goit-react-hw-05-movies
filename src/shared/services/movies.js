import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'ac60926f151e6a5963568dadf02e1e9a',
    }
})

export async function getTrending () {
    const {data} = await instance.get('/trending/all/day')
    return data;
}

export async function getMovieById (id) {
    const {data} = await instance.get(`/movie/${id}`)
    return data;
}

export async function getMoviesBySearch (query) {
    const {data} = await instance.get(`/search/movie`, {
        params: {
            query,
            page: 1,
        }
    })
    return data;
}

export async function getMovieCast (id) {
    const {data} = await instance.get(`/movie/${id}/credits`)
    return data;
}

export async function getMovieReviews (id) {
    const {data} = await instance.get(`/movie/${id}/reviews`)
    return data;
}