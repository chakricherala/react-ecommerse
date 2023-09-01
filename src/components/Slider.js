import React from 'react'

export const Slider = () => {
  return (
    <div>
      <h2> Featured Products </h2>
      {/* this is a carousel file from the bootstrap */}
      <div class="container">
        <div id="featured-products-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/dress1.jpg" class="card-img-top" alt="dress1" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/dress2.jpg" class="card-img-top" alt="dress2" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/girl2.jpg" class="card-img-top" alt="girl2" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/saree3.jpg" class="card-img-top" alt="saree3" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/womenjeans3.jpg" class="card-img-top" alt="jeans3" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/womenjeans2.jpg" class="card-img-top" alt="jeans2" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/shirt1.jpg" class="card-img-top" alt="shirt1" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/pant3.jpg" class="card-img-top" alt="pant3" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/tshirt4.jpg" class="card-img-top" alt="tshirt4" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/shirt3.jpg" class="card-img-top" alt="shirt3" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/pant4.jpg" class="card-img-top" alt="pant4" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card">
                    <img src="./images/tshirt2.jpg" class="card-img-top" alt="tshirt2" />
                    <div class="card-body">
                      <h5>Product</h5>
                      <h6>$20</h6>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                      <button class="btn btn-warning"><span class="material-symbols-outlined"></span>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#featured-products-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#featured-products-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider;
