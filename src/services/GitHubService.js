'use strict'

import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.github.com'
})

const endpoint = '/users/'

export default {
  events: (user) => {
    let url = endpoint + user + '/events'
    return client.get(url)
  },
  profile: (user) => {
    let url = endpoint + user
    return client.get(url)
  }
}
