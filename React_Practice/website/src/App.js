import { useState } from 'react';

import Show from './components/Show';
import Search from './components/Search';


var product = [
    {id:1, pname: "t-shirt",price: 599.95,qty: 8,imgurl:"https://m.media-amazon.com/images/I/71r3W2+d-vL._AC_UL320_.jpg"},
    {id:2,pname: "t-shirt",price: 699.95,qty: 15,imgurl:"https://m.media-amazon.com/images/I/51BQpqMPIaL._AC_UL320_.jpg"},
    {id:3,pname: "shirt",price: 999.95,qty: 22,imgurl:"https://m.media-amazon.com/images/I/81hxCj6SQrL._SY550_.jpg"},
    {id:4,pname: "shirt",price: 1599.95,qty: 30,imgurl:"https://m.media-amazon.com/images/I/71OKaQZbj5L._SX466_.jpg"},
    {id:4,pname: "kurti",price: 1099.95,qty: 30,imgurl:"https://m.media-amazon.com/images/I/51Hb6WB2tyL._SY550_.jpg"},
]


function App() {

  const [name, setName] = useState('');
  const [Card, setCard] = useState([]);

  function getName(event) {
    setName(event.target.value);
    console.log(name);
  }

  const res = product.filter(searchedProduct); 
  function searchedProduct(i) {
    return i.pname === name;
  }
  
  function ToCard(i) {
    setCard(...Card, i)
  }
  return (
    <div>
      
      <Search getName={getName} />
      <Show product={{res === "" ? product : res}  addToCart={ToCart}} />
    
    </div>
  );
}

export default App;
