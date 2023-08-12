import Hero from "../../components/Hero";
import Home1 from "../../components/Home1";
import Home2 from "../../components/Home2";
import Home3 from "../../components/Home3";
import Home4 from "../../components/Home4";
import Home5 from "../../components/Home5";
import Home6 from "../../components/Home6";
import Sidebar from "../../components/Sidebar";
import TestimonialSlider from "../../components/Testinomial";
import Gift from "./gift";
import Electronic from "./electronic";
import Packege from "./packege";
import MyOrderPage from "./User/my_order";
import SideBar from "../../components/User/SideBar";
import Profile from "./User/profile";
import Address from "./User/address";
import LoyaltyPointsLayout from "./User/loyalty";
import ReferralLayout from "./User/referral";
import Contact from "./contact";
import Error from "./error";
import CheckOut from "../../components/CheckOut";
import Service from "../../components/Service";
import Popup from "../../components/PopUp";
import PopUp1 from "../../components/PopUp1";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />

      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <TestimonialSlider />
      {/* <Electronic/>
      <Packege/> 
      <Gift/> */}
      {/* <MyOrderPage/> */}
      {/* <SideBar/> */}
      {/* <Profile/> */}
      {/* <ReferralLayout/>
      <Address/> */}
      {/* <CheckOut /> */}
    </div>
  );
};
export default Home;
