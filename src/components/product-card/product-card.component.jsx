import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import "./product-card.styles.css";

function ProductCard({
  title,
  productImg,
  totalRatings,
  starRating,
  linkTo,
  like,
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(like);
  }, [setLiked]);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <div className="product-card_top">
        <div className="product-card_image">
          <img src={productImg} alt="" />
        </div>
        <div
          className={`${
            liked === true ? "product-card_heart-liked" : ""
          } product-card_heart`}
          onClick={handleLike}
        >
          {liked === true ? <FaHeart /> : <FaRegHeart />}
        </div>
        <div className="product-card_stars-container">
          <div className="product-card_stars">
            <ReactStars
              count={5}
              isHalf={true}
              value={starRating}
              edit={false}
              size={30}
              activeColor="#ffd700"
            />
            <div className="product-card_stars-total">{totalRatings}</div>
          </div>
        </div>
      </div>
      <div className="product-card_bottom">
        <Link to={linkTo} className="product-card_title">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
