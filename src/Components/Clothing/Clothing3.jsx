import React from "react";

import TemporaryDrawer from "./Drawer";
import ClothingProduct from "./ClothingProduct";

const Clothing = () => {
  return (
    <>
      <TemporaryDrawer />
      
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        <div className="grocery__row">
          <ClothingProduct
            id="1324324"
            title="Long Length Pochu"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/j8684280/shrug/f/n/8/m-shrug16-ewools-original-imaewy8r3xe5g5nf.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1200}
          />
          <ClothingProduct 
              id="1324324"
            title="Long side cut shrug"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jdq9rbk0/shrug/w/6/y/m-rnr2001sg14-maroon-r-sports-original-imaepy3n7cxhh5fg.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1640}
          />
          <ClothingProduct 
              id="1324324"
            title="Plazo kids suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kiew3gw0/kids-apparel-combo/9/6/b/6-7-years-cpgl0034-pink-chandrika-original-imafy7gztm2hvfyj.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1100}
          />
          <ClothingProduct 
              id="1324324"
            title="Loose sleeve top with plain skirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jvo4scw0/kids-apparel-combo/2/e/q/6-7-years-668632-dds-original-imafggtccvzycppn.jpeg?q=50"
            rating={4}
            mrp={195}
            price={900}
          />
        </div>

        <div className="grocery__row">
          <ClothingProduct id="1324324"
            title="Floral Print Salwar suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/k1tm1e80/fabric/g/r/z/899d197-852d158-saara-original-imafkfcwqhpkdmmg.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1000} />
          <ClothingProduct
          id="1324324"
            title="Black Kadhayi salwar suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/keuagsw0-0/fabric/4/n/e/yes-unstitched-rf-flower-black-rensilafab-original-imafvfg5nfwknmru.jpeg?q=50"
            rating={4}
            mrp={195}
            price={5999} />
          <ClothingProduct 
              id="1324324"
            title="Two shades patiala salwar suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kikluvk0-0/fabric/e/w/v/yes-unstitched-joplpdp1006-vsm4091-rajnandini-original-imafybuhpefyxqy5.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1100}
          />
          <ClothingProduct
          id="1324324"
            title="Printed grey color suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kfvfwy80hlty2aw-0/fabric/n/v/x/yes-2-m-2-m-2-5-m-1-ej1180-88031-2-35-m-salwar-suit-material-original-imafwapfgf8m3tf7.jpeg?q=50"
            rating={4}
            mrp={195}
            price={3950} />
        </div>

        <div className="grocery__row">
          <ClothingProduct
          id="1324324"
            title="Kurti with pant suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/krqoknk0/fabric/y/o/6/yes-unstitched-1038dj341a-siril-original-imag5h27nvzjbdgy.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1200} />
          <ClothingProduct
          id="1324324"
            title="Patiyala suit with printed salwar"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/fabric/g/h/h/vastra21-vastra-export-original-imaer9u5bnvnr2ut.jpeg?q=50"
            rating={4}
            mrp={195}
            price={2650} />
          <ClothingProduct
          id="1324324"
            title="Collar kurti"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jex4yvk0/fabric/y/z/g/cotton-dress-material-crally-original-imaf3g5dwdegpdfe.jpeg?q=50"
            rating={4}
            mrp={195}
            price={800} />
          <ClothingProduct 
              id="1324324"
            title="Kadhayi churidaar suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/km6mxe80/ethnic-set/x/m/y/s-miraansan2307s-miraan-original-imaf3k3gtdqhzsgu.jpeg?q=50"
            rating={4}
            mrp={195}
            price={2500}
          />
        </div>

        <div className="grocery__row">
          <ClothingProduct 
          id="1324324"
            title="Heavy design neck suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kihqz680-0/fabric/c/j/u/yes-semi-stitched-rj1170-rj-febric-original-imafya3h3wqvkutw.jpeg?q=50"
            rating={4}
            mrp={195}
            price={4950} />
          <ClothingProduct 
          id="1324324"
            title="aqua color suit"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/k47cgi80pkrrdj/fabric/k/v/z/rama-green-th-1029-tisha-hub-1029-original-imafgtudd3jj4uzh.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1399} />
          <ClothingProduct
          id="1324324"
            title="Heavy design neck blue churidaar"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kjiwfbk0-0/fabric/e/j/q/yes-semi-stitched-1170-advotis-original-imafz2zfxpy5pkpm.jpeg?q=50"
            rating={4}
            mrp={195}
            price={5500} />
          <ClothingProduct
          id="1324324"
            title="Mens blue jogger"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kjn6qvk0-0/track-pant/w/t/j/l-mens-track-vebnor-original-imafz62kqyw4735v.jpeg?q=50"
            rating={4}
            mrp={195}
            price={500} />
        </div>

        <div className="grocery__row">
          <ClothingProduct id="1324324"
            title="Slim mens jogger"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kqidx8w0/track-pant/2/m/b/m-petpntmr3218507-peter-england-original-imag4g8hvhvshcmu.jpeg?q=50"
            rating={4}
            mrp={195}
            price={600} />
          <ClothingProduct
          id="1324324"
            title="Slim Mens Grey jogger"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kkr72q80/track-pant/4/9/x/4xl-jog18-d95-mil-alan-jones-original-imaf3va58uzufmgz.jpeg?q=50"
            rating={4}
            mrp={195}
            price={670} />
          <ClothingProduct
          id="1324324"
            title="Mens jockey inner wear"
            size="3 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/k1v1h8w0/kids-vest/h/v/z/14-15-years-gypkid-gypsy-original-imafhbhmgxss3kaf.jpeg?q=50"
            rating={4}
            mrp={195}
            price={170}/>
          <ClothingProduct 
              id="1324324"
            title="Kids Inner wear"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kqv8vww0/kids-short/g/y/l/5-6-years-klrss21st005-killer-original-imag4s7gvscjxpka.jpeg?q=50"
            rating={4}
            mrp={195}
            price={150}
          />
        </div>
      
    </>
  );
};
export default Clothing;