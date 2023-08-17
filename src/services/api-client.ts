import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f8341b573e3643e29b207af6a9760953",
  },
});
