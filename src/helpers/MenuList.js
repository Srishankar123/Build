import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";
import {Link} from 'react-router-dom';

export const MenuList = [
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Pepperoni Pizza</Link>,
    image: Pepperoni,
    price: 299.99,
  },
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Mexico Spicy Delicacy </Link>,
    image: Margherita,
    price: 349.99,
  },
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Honolulu Hawaiian </Link>,
    image: PedroTechSpecial,
    price: 399.99,
  },
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Vegan Pizza</Link>,
    image: Vegan,
    price: 449.99,
  },
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Meat Slice</Link>,
    image: Pineapple,
    price: 559.99,
  },
  {
    name: <Link style={{textDecoration: 'none',color:'black'}} to="/login">Bellaro's Special Pizza </Link>,
    image: Expensive,
    price: 799.99,
  },
];