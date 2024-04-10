import React from "react";

function Show({ product , addToCart}) {

  const avatarStyle = {
    height: "300px", 
    width: "220px", 
    borderRadius: "10px",
  };

  const headingStyle = {
    backgroundColor: "gray",
    color: "white",
    padding: "10px",
  };

  const btnStyle = {
    backgroundColor: "rgba(65, 228, 112, 0.91)",
    border: "0",
    padding: "10px",
    fontWeight: "bold",
    fontSize: "18px",
  };

  const info = {
    textAlign: 'left',
    marginLeft: "20px"
  };

  const divStyle = {
    backgroundColor: "white",
    borderStyle: "solid",
    borderWidth: "5px",
    color: "rgba(65, 82, 228, 0.91)",
    width: "350px",
    height: "600px",
    borderRadius: "20px",
    margin: "10px",
    textAlign: "center"
  };


  return (
    <div style={{display:"flex"}}>
      {product.map(i => {
        return (
          <div style={divStyle}>
          <br />
          <img src={ i['imgurl']} alt={`${i['pname']}} profile pic`} style={avatarStyle} />
          <h1 style={headingStyle}>{i['pname']}</h1>
          <div style={info}>Price: <strong>{ i['price']}</strong> rs only.</div> <br/>
          <div style={info}>Qty: <strong>{ i['qty']}</strong>pcs</div> <br/>
          <button style={btnStyle} onClick={addToCart}> Add To Cart </button>
          </div>
        );
      })}
      <div />
    </div>
  );
}

export default Show;
