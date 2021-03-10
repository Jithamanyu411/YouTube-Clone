import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
//    baseURL: "https://www.breakingbadapi.com/api/"
});