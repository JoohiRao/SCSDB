import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGI4NjFlMGI3OWJkNzA1MDI1MWRiZDU0ODk4NTI1OSIsIm5iZiI6MS43NDYzNTg4NDc0NjIwMDAxZSs5LCJzdWIiOiI2ODE3NTIzZjdlNTI1ZTNmMDg5MDg2NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4ltMtllwwQhzuiA9AoRaCQYaoFiKnmkT5iNFdKroVn0",
  },
});
export default instance;