import React, { Component } from 'react';
import producs from '../dados/producs_from_slider';
import './ProductsSlider.css';


class Products extends Component {
  render() {
    return (
        <div className="slider_products_conteiner">
          {producs.map((item) => (
            <div key={item.id} className={`product__${item.id}`}>

              <div className="info_product">
                <div className="main-wrapper">
                  <h3 className="product_line"> {` ${item.product_line} `} </h3>
                  <h1 className="product_name"> {` ${item.product} `} </h1>
                  <h2 className="price">{` R$ ${item.price} `} </h2>
                </div>
                <div className="main-content">
                  <div className="highlight_info"> {` ${item.highlight_info}`} </div>
                  <div className="product_info"> {` ${item.product_info}`} </div>
                  <a href="#" class="add_cart">
                    Comprar
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="-5" y1="12" x2="19" y2="12"></line>
                      <line x1="15" y1="16" x2="19" y2="12"></line>
                      <line x1="15" y1="8" x2="19" y2="12"></line>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="picture_product">
                <div className="img_product_conteiner">
                  <img className="bg_picture" src={`${item.model}`} alt={`fundo ${item.product} `} />
                  <img className ="product_picture" src={`${item.product_picture}`} alt={`${item.product}`} />
                </div>
              </div>

            </div>
          ))}
        </div>
    )
  }
}

export default Products;
