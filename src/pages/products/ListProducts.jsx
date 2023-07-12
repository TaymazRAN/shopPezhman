import React from "react";
import { data } from "./../../data/product";
const ListProducts = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {/* زحمت  بکش  اطلاعات رو  لود  کن  تو چی  ؟  */}
      {console.log("data", data)}
      {/* map   */}
      {data.map((item, key) => (
        <div
          key={key}
          className="card"
          style={{ width: "18rem", margin: "20px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
