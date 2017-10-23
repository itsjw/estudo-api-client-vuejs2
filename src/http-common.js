import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/'
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWdpbmFsZG9ydWJlbnMiLCJhdWQiOiJodHRwczpcL1wvZ2l0aHViLmNvbVwvcmVnaW5hbGRvcnViZW5zXC90ZXN0LWFwaS1yZXN0ZnVsLXNpbGV4IiwiaWF0IjoxNTA4NzY0MDM5LCJuYmYiOjE1MDg3NjQwMzksImV4cCI6MTUwODg1MDQzOSwicGF5bG9hZCI6eyJpZCI6MSwidXNlcm5hbWUiOiJyZWdpbmFsZG8uc2lsdmEifX0.bbGdbBTCWA75huHdugUxiOrvlj7blOErVyAHSxzQ_pc'

export const HTTP = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
})
