import axios from "./config";

export default {
  getData: (setData) => {
    axios
      .get(`https://mach-eight.uc.r.appspot.com/`)
      .then((res) => setData(res.data.values));
  },
};
