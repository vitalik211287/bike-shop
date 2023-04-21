import BestSellers from "components/Home/BestSellers/BestSellers";
import Main from "components/Home/Main/Main";
import NewHistory from "components/Home/NewHistori/NewHistori";
import Recomended from "components/Home/Recomended/Recomended";


const Homepage = () => {
  return (
    <>
      <Main />
      <BestSellers/>
      <Recomended/>
      <NewHistory/>
      {/* <p>SDFHDfhdf</p> */}
    </>
  );
};

export default Homepage;
