import axios from "axios";

const Data = {
  getAll: (urlLink) => {
    const url = urlLink;
    return axios.get(url);
  },
};
export default Data;
