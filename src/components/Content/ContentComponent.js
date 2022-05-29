import { useEffect, useState } from "react";
import BodyContentComponent from "./BodyContentComponent";
import "./style.css";
import TitleContentComponent from "./TitleContentComponent";

const ContentComponent = () => {
  const [dataPosts, setDataPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch(
        "https://60935d54a7e53a0017950c0e.mockapi.io/news",
        {
          method: "GET",
        }
      );

      const dataRes = await response.json();
      setDataPosts(dataRes);

      //  console.log(dataPosts);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("show", dataPosts);

  return (
    <div className="contentContainer">
      {dataPosts.map((item) => {
        return (
          <>
            <div className="topContent">
              <TitleContentComponent item={item} />
            </div>
            <div className="bottomContent">
              <BodyContentComponent item={item} />
            </div>
          </>
        );
      })}
    </div>
  );
};
export default ContentComponent;
