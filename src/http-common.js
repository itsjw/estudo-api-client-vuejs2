import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://127.0.0.1:8000/`,
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWdpbmFsZG9ydWJlbnMiLCJhdWQiOiJodHRwczpcL1wvZ2l0aHViLmNvbVwvcmVnaW5hbGRvcnViZW5zXC90ZXN0LWFwaS1yZXN0ZnVsLXNpbGV4IiwiaWF0IjoxNTA4NDM0NzUzLCJuYmYiOjE1MDg0MzQ3NTMsImV4cCI6MTUwODUyMTE1MywicGF5bG9hZCI6eyJpZCI6MSwidXNlcm5hbWUiOiJyZWdpbmFsZG8uc2lsdmEifX0.HsFHbyH3Rc8huhPwLq9XcA0V-s_XZy-MlII19QQ_AKo'
  }
})
