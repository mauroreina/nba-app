import { useEffect, useState } from "react";
import ServiceData from "../../../services/api";

const useMain = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    ServiceData.getData(setData);
    setSearch([]);
  }, [ServiceData]);

  const findData = (e) => {
    if (e.target.value === "") {
      setSearch([]);
      return;
    }
    const search = data.filter((value) => value.h_in.includes(e.target.value));
    setSearch(search);
  };

  return {
    search,
    findData,
  };
};
export default useMain;
