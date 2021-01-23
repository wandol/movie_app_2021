import React from "react";
import PropType from "prop-types";

function Food({name, picture, rating}){
  return (<div>
      <h1>I like {name}!</h1>
      <h4>{rating}</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

Food.prototype = {
  name: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  image: PropType.string.isRequired
}

const foodILike = [
  {
    id: 1,
    name:"Kimchi",
    rating: 5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn1r0L3_E3B0XVsU4CvIv0159c0ZQ0ZRTW_NMd2E6Xgh22ARK72vj-wa_uA&usqp=CAc"
  },
  {
    id: 2,
    name:"Kimchi2",
    rating: 6,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxn1r0L3_E3B0XVsU4CvIv0159c0ZQ0ZRTW_NMd2E6Xgh22ARK72vj-wa_uA&usqp=CAc"
  }
];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
