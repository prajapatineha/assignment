import React from "react";
// import banner1 from "./Images/banner1.jpg";
// import banner2 from "./Images/banner2.jpg";
// import banner3 from "./Images/banner3.jpg";
const Content = () => {
  return (
    <div>
      <div class="content">
        <section class="banner">
          <div class="banner-imgs">
            {/* <span class="img-container">
              <img src={banner1} alt="" />
            </span>
            <span class="img-container">
              <img src={banner2} alt="" />
            </span>
            <span class="img-container">
              <img src={banner3} alt="" />
            </span> */}
          </div>
        </section>
        <section class="electronic" id="electronic">
          <span class="cat-upper-text">
            <h1>Electronic</h1>
            <p class="more-opt">See more</p>
          </span>

          <div class="row">
            <div class="column">
              <div class="card">
                <img src="https://iili.io/H1xLuoX.png" alt="" id="headph"></img>
                <h3> &#8377;1,299 </h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Headphone</p>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <img src="https://iili.io/H1xiO1j.png" alt="" id="keybd"></img>
                <h3>&#8377;3,599</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Keyboard</p>
              </div>
            </div>

            <div class="column">
              <a href="/Productlaptop">
                <div class="card">
                  <img
                    src="https://images.acer.com/is/image/acer/Nitro5_AN515-57_Backliton_RGB-Black_01a-1?$Product-Cards-XL$"
                    alt=""
                    id="lap"
                  ></img>
                  <h3>&#8377;62,299</h3>
                  <p>
                    <i class="fa fa-heart" title="Add to Wishlist"></i>
                    <i
                      class="far fa-cart-plus"
                      title="Add to Cart"
                      id="add-cart"
                    ></i>
                  </p>
                  <p class="prod-name">Laptop</p>
                </div>
              </a>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="https://oasis.opstatics.com/content/dam/oasis/page/events/ovaltine/na/OnePlus10Pro-1.png"
                  alt=""
                ></img>
                <h3>&#8377;32,199</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Phone</p>
              </div>
            </div>
          </div>
        </section>

        <section class="clothes" id="clothes">
          <span class="cat-upper-text">
            <h1>Clothes</h1>
            <p class="more-opt">See more</p>
          </span>

          <div class="row">
            <div class="column">
              <div class="card">
                <img
                  src="https://iili.io/H1xDT7f.md.png"
                  id="shirt"
                  alt=""
                ></img>
                <h3> &#8377;599 </h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Shirt</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="https://iili.io/H1xbvM7.png" id="hoodie" alt=""></img>
                <h3>&#8377;799</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Hoodie</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="https://iili.io/H1zHT7e.png" id="jean" alt=""></img>
                <h3>&#8377;699</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Jeans</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="https://iili.io/H1zJT6N.png" id="track" alt=""></img>
                <h3>&#8377;599</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Track Pant</p>
              </div>
            </div>
          </div>
        </section>

        <section class="sports" id="sports">
          <span class="cat-upper-text">
            <h1>Sports</h1>
            <p class="more-opt">See more</p>
          </span>

          <div class="row">
            <div class="column">
              <div class="card">
                <img
                  src="https://i.postimg.cc/FspQ3vQj/Png-Item-1580377.png"
                  alt=""
                ></img>
                <h3> &#8377;999 </h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Tennis Racket</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="https://i.postimg.cc/KYNpjP3F/Png-Item-1595310.png"
                  alt=""
                ></img>
                <h3>&#8377;799</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Hockey Stick</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="https://i.postimg.cc/gkgvxgNg/Png-Item-3336790.png"
                  id="bat"
                  alt=""
                ></img>
                <h3>&#8377;899</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Cricket Bat</p>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img
                  src="https://i.postimg.cc/kGzRypzC/Png-Item-4779463.png"
                  id="bow"
                  alt=""
                ></img>
                <h3>&#8377;1,199</h3>
                <p>
                  <i class="fa fa-heart" title="Add to Wishlist"></i>
                  <i
                    class="far fa-cart-plus"
                    title="Add to Cart"
                    id="add-cart"
                  ></i>
                </p>
                <p class="prod-name">Archery Bow</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
