import React from "react";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import DanhSachSanPham from "../../product/DanhSachSanPham";
// import List from "../product/List";

function HomePage(){
    return(
        <div>
            <Banner />
            <Carousel />
            <DanhSachSanPham />
        </div>
    );
}

export default HomePage;