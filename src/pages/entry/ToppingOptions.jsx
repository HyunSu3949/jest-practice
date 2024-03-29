import React from 'react'
import { Col } from 'react-bootstrap';

export default function ToppingOptions({name, imagePath}) {
  return <Col xs = {12} sm={6} md={4} lg={3} style = {{textAlign: 'center'}}><img stype={{width: '75%'}}src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} /></Col>;
}
