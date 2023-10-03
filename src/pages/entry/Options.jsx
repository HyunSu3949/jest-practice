import React, { useEffect, useState} from "react";
import axios from 'axios';
import { Row } from "react-bootstrap";

import ScoopOptions from './ScoopOptions';
import ToppingOptions from "./ToppingOptions";

export default function Options({optionType}) {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:3030/${optionType}`).then(response => setItems(response.data)).catch(()=>{
    })
  },[optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions;
  const optionItems = items.map(item => (<ItemComponent key={item.name} name={item.name} imagePath = {item.imagePath} />))

  return <Row>{optionItems}</Row>;
}
