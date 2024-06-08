import AdsSpaceComp from "../components/home/AdsSpace";
import BannerComp from "../components/home/Banner";
import CategoriesComp from "../components/home/Categories";
import FeaturesComp from "../components/home/Features";
import NewArrivalComp from "../components/home/NewArrival";
import RecomendedProductsComp from "../components/home/RecomendedProducts";

const HomePage = () => {
  return (
    <>
    {/* <!-- banner --> */}
    <BannerComp />
    {/* <!-- ./banner --> */}

    {/* <!-- features --> */}
    <FeaturesComp />
    {/* <!-- ./features --> */}

    {/* <!-- categories --> */}
    <CategoriesComp />
    {/* <!-- ./categories --> */}

    {/* <!-- new arrival --> */}
    <NewArrivalComp />
    {/* <!-- ./new arrival --> */}

    {/* <!-- ads --> */}
    <AdsSpaceComp />
    {/* <!-- ./ads --> */}

    {/* <!-- product --> */}
    <RecomendedProductsComp />
    {/* <!-- ./product --> */}
    </>
  );
};

export default HomePage;
