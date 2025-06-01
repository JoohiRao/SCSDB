import axios from "axios"

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept:"application/json",

        // headers
   
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGI4NjFlMGI3OWJkNzA1MDI1MWRiZDU0ODk4NTI1OSIsIm5iZiI6MTc0NjM1ODg0Ny40NjIwMDAxLCJzdWIiOiI2ODE3NTIzZjdlNTI1ZTNmMDg5MDg2NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TWlXnJngagsFTnm6uwBydfopZr31yhheuE-sgEp9R14'
    }
})

export default instance