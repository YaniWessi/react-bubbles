import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [update, setUpdate] = useState(false);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const fetchData = () => {
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        console.log("respnse of colorList", res.data);
        setColorList(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
    setUpdate(false);
  }, [update]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
