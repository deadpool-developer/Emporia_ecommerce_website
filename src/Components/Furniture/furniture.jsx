import React from "react";
import "./furniture.css";
import FurnitureProduct from "./Product";
import Footer from "../Home/Footer";

function Furniture() {
  return (
    <div className="furniture">
      <div className="furniture__container">
        <img
          className="furniture__image1"
          src="https://shagunarts.com/media/responsivebannerslider/responsivebannerslider/banner-1.jpg" 
          alt=""
        />
        <img
          className="furniture__image2"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG-2017/Furniture/2018/Desktop/HandPicked1._CB453266250_.jpg"     
          alt=""
            />

        <img
          className="furniture__image3"
          src="https://www.royaloakindia.com/royaloak-react/public/react-images/xmobile-bannerBeds-v2.png.pagespeed.ic.ixwHk2Aaic.png"     
          alt="" 
           />

   </div>
      <div className="furniture__row">
        <FurnitureProduct
          id="1389"
          title="Bedsheet for Double Bed"
          features="Divine Casa 100% Cotton Geometric Print Mix N Match (Multicolour)"
          image="https://m.media-amazon.com/images/I/81iDqTDVr+L._SL1500_.jpg"
          rating={4}
          mrp={899}
          price={789}
        />

<FurnitureProduct
          id="1477"
          title="DeckUp Dusun King Bed"
          features=" Length (213 cm), Width (191 cm), Height (92 cm),Engineered Wood, Color: Dark Wenge, Finish: Matte Finish"
          image="https://m.media-amazon.com/images/I/817+qPbDo8L._SL1500_.jpg"
          rating={5}
          mrp={23999}
          price={14599}
        />

<FurnitureProduct
          id="1885"
          title=" Shoe Cabinet"
          features="Ebee 4 Shelves(Maroon)"
          image="https://m.media-amazon.com/images/I/612u9rSYhbL._SL1435_.jpg"
          rating={4}
          mrp={789}
          price={649}
        />

<FurnitureProduct
          id="1777"
          title="L-Shaped Couch/Sofa "
          features="SEA Green Four Seater,Espoir I’Décor"
          image="https://m.media-amazon.com/images/I/61IOFTBtm0S._SL1280_.jpg"
          rating={5}
          mrp={34589}
          price={29899}
        />
</div>

<div className="furniture__row">
        <FurnitureProduct
          id="1111"
          title="King Size Firm Mattress"
          features="Duroflex Back Magic - Doctor Recommended Orthopaedic High Density Coir, 5 Inch Back Support and Posture Alignment (78 X 72 X 5)"
          image="https://m.media-amazon.com/images/I/61houOLEztL._SL1100_.jpg"
          rating={4}
          mrp={24599}
          price={19899}
        />

<FurnitureProduct
          id="1222"
          title="4 Seater Dining Table "
          features="3 Chairs and 1 Bench for Living Room,Sheesham Wood "
          image="https://m.media-amazon.com/images/I/61VoVk8ystL._SX679_.jpg"
          rating={5}
          mrp={19899}
          price={16789}
        />

<FurnitureProduct
          id="1333"
          title="Coffee Table/Centre Table with Shelves (Wenge)"
          features="Length ( 75 Cm / 29.5 Inch) Breadth ( 75 Cm / 29.5 Inch) Height( 41 Cm / 16.1 Inch),Engineered Wood"
          image="https://m.media-amazon.com/images/I/81X77ocwykL._SL1500_.jpg"
          rating={5}
          mrp={7899}
          price={5677}
        />

<FurnitureProduct
          id="1578"
          title="Lezino Single Seater Recliner Chair"
          features="Premium Suede Fabric (Manual Recliner, Grey)"
          image="https://m.media-amazon.com/images/I/7101yUUdq3S._SX679_.jpg"
          rating={5}
          mrp={46789}
          price={34564}
        />
</div>

<div className="furniture__row">
        <FurnitureProduct
          id="1667"
          title="Couchette® XXXL Lounge Chair Luxury Bean Bag Cover with Footrest, Without Beans, Tan (Without Fillers)"
          features="76.2 x 76.2 x 73.7 Centimeters,Brown,Leather"
          image="https://images-eu.ssl-images-amazon.com/images/I/41dhLyT8SPL._SX300_SY300_QL70_FMwebp_.jpg"
          rating={4}
          mrp={8777}
          price={5499}
        />

<FurnitureProduct
          id="1565"
          title="Generic LTT-0013 Multipurpose Laptop Table"
          features="with Dock Stand and Non-Slip Legs Foldable and Portable Lapdesk for Study & Bed (Random Colour)"
          image="https://images-eu.ssl-images-amazon.com/images/I/31WCpP7bypL._SY300_SX300_QL70_FMwebp_.jpg"
          rating={5}
          mrp={989}
          price={458}
        />

<FurnitureProduct
          id="1343"
          title="Supreme Futura Plastic Chairs for Home and Office "
          features="Set of 4, Globus Brown"
          image="https://images-eu.ssl-images-amazon.com/images/I/41im-X47wkL._SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          mrp={4087}
          price={3456}
        />

<FurnitureProduct
          id="1898"
          title="Spacecrafts Engineered Wood Office Desk; Study Desk ; Folding Desk"
          features="Wenge finish,60 x 40 x 70 Centimeters"
          image="https://m.media-amazon.com/images/I/71HgzzjLDuL._SL1500_.jpg"
          rating={4}
          mrp={6789}
          price={5645}
        />
</div>

<div className="furniture__row">
        <FurnitureProduct
          id="1788"
          title="High Back Executive Chair"
          features="Measures 29.13 by 25.59 by 41.34 to 45.08 inches (LxWxH),Maximum weight capacity - 124.7 KGS,bonded leather and PVC"
          image="https://m.media-amazon.com/images/I/71Hb89D+DAL._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
          mrp={18000.00}
          price={9999.00}
        />

<FurnitureProduct
          id="1878"
          title="Solimo Vega Engineered Wood Wardrobe with Drawer Espresso"
          features="Length (79 cm), Width (49 cm), Height (180.5 cm),Polished,Engineered Wood"
          image="https://m.media-amazon.com/images/I/81o6U5PszvL._SL1500_.jpg"
          rating={4}
          mrp={12899.00}
          price={9899.00}
        />

<FurnitureProduct
          id="1788"
          title="DecorDen Zigzag Floating Wall Mount Wooden Display Storage Organizer Shelf for Wall Decoration (Brown)"
          features="18 x 18 x 117 Centimeters,"
          image="https://images-eu.ssl-images-amazon.com/images/I/31sd5ZF79ES._SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          mrp={2278.00}
          price={850.00}
        />

<FurnitureProduct
          id="1577"
          title="AEROHAVEN Set of 5 Designer Decorative Throw Pillow/Cushion Covers"
          features="(16 inch x 16 inch, Multicolour)"
          image="https://images-eu.ssl-images-amazon.com/images/I/518e4DdqgWL._SX300_SY300_QL70_FMwebp_.jpg"
          rating={5}
          mrp={678.00}
          price={560.00}
        />
</div>

<div className="furniture__row">
        <FurnitureProduct
          id="1557"
          title="Nirwana decor Velvet Striped Eyelet Curtains"
          features="4 x 5 Feet, Brown, Pack of 2"
          image="https://m.media-amazon.com/images/I/81uIHqw2OXL._SL1500_.jpg"
          rating={5}
          mrp={1000.00}
          price={849.00}
        />

<FurnitureProduct
          id="1345"
          title="Deco Window Polyester Blend Non-Blackout Roller Blinds for Windows "
          features="36 Wide X 84 Long, Grey,	Inside Mount, Outside Mount"
          image="https://m.media-amazon.com/images/I/71iTHKO-iwL._SL1500_.jpg"
          rating={4}
          mrp={1699.00}
          price={1199.00}
        />

<FurnitureProduct
          id="1444"
          title="Best Manufacturers Doormat "
          features="Brown, Coir, 35 x 60 cm,Rectangular,Made from 100% natural coco fibre."
          image="https://m.media-amazon.com/images/I/81VSz64oKmL._SL1100_.jpg"
          rating={4}
          mrp={549.00}
          price={349.00}
        />

<FurnitureProduct
          id="1767"
          title="Bluewud Maxelle Engineered Wood Floor Mounted Large Bookshelf "
          features="Frosty White and Wenge,Length (75.4 Cm ) x Width (23.5 Cm) x Height ( 155.5 Cm)"
          image="https://m.media-amazon.com/images/I/811GrKhSdzL._SX679_.jpg"
          rating={5}
          mrp={5999.00}
          price={4199.00}
        />
    </div>
    <Footer/>
</div>
  );
}

export default Furniture;