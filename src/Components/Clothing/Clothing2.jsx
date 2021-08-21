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
            title="Full stone Kadhayi lehnga"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kjkbv680-0/kids-lehenga-choli/3/e/c/3-4-years-lehenga-choli-butto-kids-craqlin-original-imafz36gt79z2kk5.jpeg?q=50"
            rating={4}
            mrp={195}
            price={2000}
          />
          <ClothingProduct 
              id="1324324"
            title="Floor touch skirt and top"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kqco5u80/lehenga-choli/p/u/l/free-short-sleeve-3055-mor-for-fab-original-imag4dh6hrmyd6fd.jpeg?q=50"
            rating={4}
            mrp={195}
            price={3050}
          />
          <ClothingProduct 
              id="1324324"
            title="White Boat neck top with skirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/keokpe80/lehenga-choli/z/4/7/free-sleeveless-white-moti-lehenga-ramkrupa-creation-original-imafvbbtf2rzbwyv.jpeg?q=50"
            rating={4}
            mrp={195}
            price={4500}
          />
          <ClothingProduct 
              id="1324324"
            title="Wedding lehnga"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/khtghow0-0/lehenga-choli/f/c/h/free-half-sleeve-kiyara-kedar-fab-original-imafxqtxcqe3zkyv.jpeg?q=50"
            rating={4}
            mrp={195}
            price={5000}
          />
        </div>

        <div className="grocery__row">
          <ClothingProduct id="1324324"
            title="Dotted pattern Lehnga"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jz8qf0w0/lehenga-choli/8/f/y/free-bindu-pink-thakar-creation-original-imafjayyunagqmzg.jpeg?q=50"
            rating={4}
            mrp={195}
            price={6000} />
          <ClothingProduct
          id="1324324"
            title="Saree Lehnga"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/k3erngw0/fabric/s/h/w/k5a-owee-original-imaeyhfm9xhnkdem.jpeg?q=50"
            rating={4}
            mrp={195}
            price={5999} />
          <ClothingProduct 
              id="1324324"
            title="Off shoulder top with skirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kk1h5e80/lehenga-choli/g/0/1/free-sleeveless-madhav-sky-blue-lehenga-choli-vm-tejani-original-imafzh65mstghmqt.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1500}
          />
          <ClothingProduct
          id="1324324"
            title="T-neck navy blue shirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kd1zngw0/shirt/n/i/z/xl-double-threshold-blue-shirt-qlonz-store-original-imafufjvfd9wdh3a.jpeg?q=50"
            rating={4}
            mrp={195}
            price={2999} />
        </div>

        <div className="grocery__row">
          <ClothingProduct
          id="1324324"
            title="Foldable sleeve shirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kiulxu80-0/shirt/d/l/f/xl-lf-grey-united-club-original-imafyj2zmuqxzgqx.jpeg?q=50"
            rating={4}
            mrp={195}
            price={3980} />
          <ClothingProduct
          id="1324324"
            title="Simpe plain shirt"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kqgyhe80/shirt/t/g/s/xl-men-slim-fit-solid-mandarin-collar-casual-shirt-juhil-bazar-original-imag4h5nrhf8jecx.jpeg?q=50"
            rating={4}
            mrp={195}
            price={4000} />
          <ClothingProduct
          id="1324324"
            title="Mens Jogger with strip pattern"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kmccosw0/jean/o/p/6/28-ud0024-united-denim-original-imagf9n8rw3qdsvg.jpeg?q=50"
            rating={4}
            mrp={195}
            price={1400} />
          <ClothingProduct 
              id="1324324"
            title="Loose jeans"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kcnp8y80/jean/h/b/o/32-kd-2000-drk-bll-bollm-joggr-kingdenim-original-imafgahyvtzpyqn3.jpeg?q=50"
            rating={4}
            mrp={195}
            price={500}
          />
        </div>

        <div className="grocery__row">
          <ClothingProduct 
          id="1324324"
            title="Low west strip trouser"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kmccosw0/jean/o/p/6/28-ud0024-united-denim-original-imagf9n8rw3qdsvg.jpeg?q=50"
            rating={4}
            mrp={195}
            price={850} />
          <ClothingProduct 
          id="1324324"
            title="Plain black trouser"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jjylw280/jean/p/a/s/34-eps-black-03-urbano-fashion-original-imaf7f7wyy7sv6zk.jpeg?q=50"
            rating={4}
            mrp={195}
            price={720} />
          <ClothingProduct
          id="1324324"
            title="Men black jeans"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kjym9ow0/jean/v/k/o/xl-black-zip-1-sk-fashion-original-imafzf6gzhdretnz.jpeg?q=50"
            rating={4}
            mrp={195}
            price={990} />
          <ClothingProduct
          id="1324324"
            title="Printed Black trouser"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/k7xnukw0/jean/z/k/b/34-virinder-styzon-original-imafqfz3ewpvkfyu.jpeg?q=50"
            rating={4}
            mrp={195}
            price={799} />
        </div>

        <div className="grocery__row">
          <ClothingProduct id="1324324"
            title="Blue short Shrug"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kqidx8w0/shrug/b/2/p/xl-wsg5104-in-love-original-imag4gftrkexuvge.jpeg?q=50"
            rating={4}
            mrp={195}
            price={300} />
          <ClothingProduct
          id="1324324"
            title="Light floral print Shrug"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/jrwdyfk0/shrug/n/t/2/s-ser-e-18-serein-original-imafdhez4btp2kxx.jpeg?q=50"
            rating={4}
            mrp={195}
            price={480} />
          <ClothingProduct
          id="1324324"
            title="Magenta color short shrug"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kk01pjk0/shrug/6/q/h/m-shrug-swiftly-original-imafzg7zgudh3ksr.jpeg?q=50"
            rating={4}
            mrp={195}
            price={550}/>
          <ClothingProduct 
              id="1324324"
            title="Coat style shrug with for collar"
            size="1 Piece"
            image="https://rukminim1.flixcart.com/image/495/594/kj61gnk0-0/shrug/t/5/v/xl-fur-shurg-for-women-green-moshe-original-imafyskghuf7dzch.jpeg?q=50"
            rating={4}
            mrp={195}
            price={999}
          />
        </div>
      
    </>
  );
};
export default Clothing;