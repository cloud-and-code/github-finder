import axios from 'axios'
import NotFound from '../../components/pages/NotFound'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// get search results
export const searchUsers = async text => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

// get single user
export const getSingleUser = async login => {
  const response = await github.get(`/users?${login}`)

  if (response.status === 404) {
    window.location = '/notfound'
  } else {
    return response.data
  }
}

// get user repos
export const getUserRepos = async login => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: 10,
  })

  const response = await github.get(`/users?${login}/repos?${params}`)
  return response.data
}
