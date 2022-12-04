import { useRouter } from "next/router";
import SilentHill1 from "./SilentHill1";
import SilentHill2 from "./SilentHill2";
import react, { useState, useEffect } from "react";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.PageNo;

  const [monsterData, setMonsterData] = useState([]);
  const [monsterData2, setMonsterData2] = useState([]);
  useEffect(() => {
    const monsterFetchUrl =
      "https://souvikotaku.github.io/silenthillapi/data.json";

    const fetchData = async () => {
      const response = await fetch(monsterFetchUrl);
      const data = await response.json();
      console.log("silent hill data", data);
      setMonsterData(
        pageNumber == "silentHill1"
          ? data && data[0].monsters
          : data && data[0].monsters
      );
      // setMonsterData2(data.data[0].attributes?.silenthill2monsters);
    };
    fetchData();
  }, []);
  return (
    <>
      {pageNumber == "silentHill1" ? (
        <SilentHill1 monsterData={monsterData} />
      ) : pageNumber == "silentHill2" ? (
        <SilentHill2 monsterData={monsterData} />
      ) : (
        `This is page ${pageNumber}`
      )}
      {/* <h1>my {pageNumber} content</h1> */}
    </>
  );
};

export default PageNo;
