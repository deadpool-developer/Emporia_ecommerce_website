import React from "react";
import "./gadgets.css";
import GadgetsProduct from "./Product";

function Gadgets() {
  return (
    <div className="gadgets">
      <div className="gadgets__container">
        <img
          className="gadgets__image1"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/GGD/August/D27454537_IN_PC_Laptops_Grand-Gaming-Days-August_1500.jpg"
          alt=""
        />
        <img
          className="gadgets__image2"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Apple/Ipad_New_Launches/iPad-air_1500x300._CB467481828_.jpg"
          alt=""
            />

        <img
          className="gadgets__image3"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/MI_Band3/24-05-19/Blue/D10576195_mi_kv_jun_750x375._CB442951278_.jpg" 
          alt="" 
           />


        
      </div>
      <div className="gadgets__row">
        <GadgetsProduct
          id="1"
          title="HP Pavilion Gaming 15.6-inch(39.62 cms) FHD Gaming Laptop"
          features="(Ryzen 5-4600H/8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-ec1024AX"
          image="https://m.media-amazon.com/images/I/71FeUtw+TPL._SL1500_.jpg"
          rating={4}
          mrp={70172}
          price={61199}
        />
        <GadgetsProduct
         id="2"
         title="boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0,"
         features="Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design(Active Black)"
         image="https://images-eu.ssl-images-amazon.com/images/I/41Q6QY85qlL._SY300_SX300_QL70_FMwebp_.jpg"
         rating={4}
         mrp={2990.00}
         price={1299.00}
          />
        <GadgetsProduct
         id="3"
         title="New Apple Watch SE"
         features="(GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
         image="https://m.media-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg"
         rating={4}
         mrp={32900.00}
         price={29200.00}
          />
        <GadgetsProduct
         id="4"
         title="New Apple iPhone 12 (128GB) - Green"
         features="(128GB) - Green"
         image="https://m.media-amazon.com/images/I/71cQWYVtcBL._SL1500_.jpg"
         rating={5}
         mrp={84900.00}
         price={72999.00}
          />
      </div>

      <div className="gadgets__row">
        <GadgetsProduct  
          id="5"
          title="boAt Stone 650 10W with The ipx 5 Rating"
          features="7 Hours of Play time, Bluetooth v4.2 and AUX (Black)"
          image="https://m.media-amazon.com/images/I/71YXa2+AyNL._SL1500_.jpg"
          rating={5}
          mrp={4990.00}
          price={1999.00}
          />
        <GadgetsProduct
          id="6"
          title="Echo Dot (4th Gen, 2020 release) with clock "
          features="Next generation smart speaker with powerful bass, LED display and Alexa (Blue)"
          image="https://m.media-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg"
          rating={5}
          mrp={5499.00}
          price={4999.00}
           />

           <GadgetsProduct  
           id="7"
          title="2020 Apple MacBook Pro"
          features="13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Silver"
          image="https://m.media-amazon.com/images/I/71gD8WdSlaL._SL1500_.jpg"
          rating={5}
          mrp={122900.00}
          price={112990.00}
           />

<GadgetsProduct  
          id="8"
          title="Mitashi Game In Smarty Pro 2.0 "
          features=" Plus and Play Handheld Gaming Console with 3000 In-built (Black)
          Brand: Mitashi"
          image="https://m.media-amazon.com/images/I/81FcDWafQ4L._SL1500_.jpg"
          rating={4}
          mrp={4499.00}
          price={3999.00}
           />
      </div>

      <div className="gadgets__row">

        <GadgetsProduct 
          id="9"
          title="Echo Show 5"
          features="(Black) bundle with Zoook 9W Smart LED Color Bulb"
          image="https://m.media-amazon.com/images/I/61vBJYawGvL._SL1000_.jpg"
          rating={5}
          mrp={10998.00}
          price={5999.00}
           />

        <GadgetsProduct
          id="10"
          title="Qubo Smart WiFi Wireless Video Doorbell from Hero Group"
          features="Instant Visitor Video Call on Phone | Intruder Alarm System | 1080P FHD Camera | 2-Way Talk |"
          image="https://m.media-amazon.com/images/I/51VvAgQBgTL._SL1080_.jpg"
          rating={4}
          mrp={9990.00}
          price={6990.00}
          />

        <GadgetsProduct  
          id="11"
          title="QUBO Smart Outdoor Security WiFi Camera"
          features="( White) | Designed and Made in India | Face Mask Detection | Intruder Alarm System | Weatherproof | Continuous Recording 24x7 in Full HD |"
          image="https://m.media-amazon.com/images/I/51AcpejM4mL._SL1000_.jpg"
          rating={4}
          mrp={5490.00}
          price={3490.00}
           />

        <GadgetsProduct
        id="12"
        title="Fitbit Charge 3 Fitness Activity Tracker"
        features="Special Edition (Lavender Woven) with Offer on Accessory"
        image="https://m.media-amazon.com/images/I/81OvD8a4Y4L._SL1500_.jpg"
        rating={3}
        mrp={19999.00}
        price={10999.00} 
         />
      </div>

      <div className="gadgets__row">

        <GadgetsProduct 
        id="13"
        title="Belkin Wemo Wifi LED Lighting Starter Set"
        features="White, 6.7 x 3.4 x 7.6 Inches"
        image="https://m.media-amazon.com/images/I/412RF+XO5TL._AC_UY327_FMwebp_QL65_.jpg"
        rating={3}
        mrp={999.00}
        price={849.00}/>

        <GadgetsProduct 
        id="14"
        title="TCL 165 cm (65 Inches) 4K UHD LED Smart TV L65P1US (Black)"
        features="Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 hertz
        Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard dr"
        image="https://m.media-amazon.com/images/I/91s8pBsRkYL._SL1500_.jpg"
        rating={3}
        mrp={95000.00}
        price={89999.00} />

        <GadgetsProduct 
        id="15"
        title="Philips PowerPro FC9352/01 Compact Bagless Vacuum Cleaner (Blue)"
        features=""
        image="https://m.media-amazon.com/images/I/41xQDop2T5L.jpg"
        rating={5}
        mrp={9999.00}
        price={7899.00}/>

        <GadgetsProduct 
        id="16"
        title="Panasonic 1 Ton 5 Star Wi-Fi Inverter Split Air Conditioner "
        features="Copper, Shield Blu Anti-Corrosion Technology, PM 2.5 Air Purification, 2021 Model, CS/CU-NU12XKYW, White"
        image="https://m.media-amazon.com/images/I/611Xwiu0dzL._SX679_.jpg"
        rating={5}
        mrp={48999.00}
        price={34599.00}/>
      </div>

      <div className="gadgets__row">

        <GadgetsProduct 
        id="17"
        title="Ambrane 20000 mAh Power Bank "
        features="22.5W Fast Charging, Compact Size, Triple Output, Type C PD (Input & Output), Li-Polymer, Metallic Body, Made in India"
        image="https://m.media-amazon.com/images/I/71IObwlzU3L._SL1500_.jpg"
        rating={4}
        mrp={2499.00}
        price={1599.00}
        />

        <GadgetsProduct 
        id="18"
        title="2020 Apple iPad Air"
        features="A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi + Cellular, 64GB) - Space Grey (4th Generation)"
        image="https://m.media-amazon.com/images/I/71LJWOMyP4L._SL1500_.jpg"
        rating={5}
        mrp={66999.00}
        price={64999.00}/>

        <GadgetsProduct 
        id="19"
        title="Redgear Cloak Wired RGB Gaming Headphones with Microphone for PC"
        features="Redgear , Wired, 3.5mm Jack, Active Noise Cancellation"
        image="https://m.media-amazon.com/images/I/71L26Qve3jL._SL1500_.jpg"
        rating={5}
        mrp={1799.00}
        price={999.00}/>

        <GadgetsProduct 
        id="20"
        title="
        Redgear MT41 Manta 4. in 1 Gaming Combo with Keyboard, Mouse, Headphones and Speed Edition Mousepad."
        features="3 LED backlight and Windows Keylock,3200DPI Manta gaming mouse,RGB gaming headphones with mic and extra soft earmuffs"
        image="https://m.media-amazon.com/images/I/61EXt97ahyL._SL1024_.jpg"
        rating={5}
        mrp={2999.00}
        price={2549.00}/>
    </div>
  </div>
  );
}

export default Gadgets;