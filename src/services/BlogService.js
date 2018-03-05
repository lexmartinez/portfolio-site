'use strict'

import axios from 'axios'

const client = axios.create({
  baseURL: 'https://hapi-blog.herokuapp.com/v1/'
})

const endpoint = '/articles'

export default {
  posts: () => {
    let url = endpoint + '?limit=5&offset=0'
    return client.get(url)
  }
}
