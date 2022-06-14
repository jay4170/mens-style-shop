import BannerImages from "./BannerImages";
import clothingRail from "../Media/pexels-mentatdgt-1336873.jpg";
import fatherDay from "../Media/gb_kids_hattiebourn1x1_15.jpg";
import jewel from "../Media/Banner-No-Copy-Desktop_1920 x 480.jpg";
import shirt from "../Media/pexels-monstera-5384423.jpg";

const Content = () => {
  return (
    <div className="grid  mx-10 gap-4 justify-items-center ">
      <BannerImages src={clothingRail}text={"Full Collection"} />
      <BannerImages src={fatherDay} text={"Fathers Day"} />
      <BannerImages src={jewel} text={"Jewelry"} />
      <BannerImages src={shirt} text={"Designer T-Shirts"} />
    </div>
  );
};
export default Content;
