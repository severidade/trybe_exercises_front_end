import React, { Component } from 'react';
import $ from 'jquery';
import producs from '../dados/producs_from_slider';
import './ProductsSlider.css';

// import Video from '../video/grafismos.mp4'


class Products extends Component {

  slider = () =>{
    const liWidth = $("#slider_galery ol li").outerWidth();
    console.log(liWidth);

    $(".button").click(function(){
      $('h1').toggleClass( "highlight" );
    });

    //proximo <
	  $("#prevbutton").click(function(e){

	  	e.preventDefault();
      // adiciona a calsse ativo ao segundo li
      // $("#slider_galery ol li:eq(1)").addClass("highlight");
      

      $("#slider_galery ol").css({'width':'99999%'}).animate({'left':-liWidth }, 0, function(){
        $("#slider_galery ol li:eq(1)").addClass("highlight");
        $("#slider_galery ol li").last().after($("#slider_galery ol li").first());
        $(this).css({'left':'0', 'width': liWidth});

        //remove a classe ativo do ultimo li
        $("#slider_galery ol li").last().removeClass("highlight");
      });
	  });

    //Voltar>
    $("#nextbutton").click(function(e){
      e.preventDefault();
      // $("#slider_galery ol li").last().addClass("highlight");

      $("#slider_galery ol li").first().before($('#slider_galery ol li').last());

      // $("#slider_galery ol li:eq(0)").addClass("highlight");
      
      $("#slider_galery ol").css({'width': '99999%', 'margin-left': -liWidth}).animate({left:liWidth}, 0, function(){
        $("#slider_galery ol li:eq(0)").addClass("highlight");
        $(this).css({'left': '0', 'width': liWidth, 'margin-left': '0'});
        
      // remove a calsse ativo ao segundo li
      $("#slider_galery ol li:eq(1)").removeClass("highlight");
      });
	  });

  }

  componentDidMount (){
    this.slider();
  }

  render() {
    return (
      <div id="slider_galery" className='hero'>
        
        <div class="nav_slider">
          <div id="prevbutton" class="prev_slider_button">
            <svg class="prev_icon" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.41421" y1="10" x2="10" y2="18.5858" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"></line>
              <line x1="1" y1="-1" x2="13.1421" y2="-1" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 0 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"></line>
            </svg>
          </div>
          <div id="nextbutton" class="next_slider_button">
            <svg class="next_icon" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="-1" x2="13.1421" y2="-1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 12 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"></line>
              <line x1="10.5858" y1="10" x2="2" y2="1.41421" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"></line>
            </svg>
          </div>
        </div>
        <ol className="slider_products_conteiner">
          {producs.map((item) => (
            <li key={item.id} className={`product_${item.id}`}>
              <div className="info_product">
                <div className="main-wrapper">
                  <h3 className="product_line"> {` ${item.product_line} `} </h3>
                  <h1 className="product_name"> {` ${item.product} `} </h1>
                  <h2 className="price">{` R$ ${item.price} `} </h2>
                  <button className="button">clicar</button>
                </div>
                <div className="main-content">
                  <div className="highlight_info"> {` ${item.highlight_info}`} </div>
                  <div className="complementary_info"> {` ${item.product_info}`} </div>
                  <a href="https://severidade.github.io/" className="add_to_cart">
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
                  <img className="fundo" src={`${item.model}`} alt={`fundo ${item.product} `} />
                  {/* bg_picture */}
                  <img className ="produto" src={`${item.product_picture}`} alt={`${item.product}`} />
                  {/* product_picture */}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Products;


// https://docs.videojs.com/tutorial-react.html para por video acho que vou ter que fazer um componente