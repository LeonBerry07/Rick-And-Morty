import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
display: flex;
flex-direction: column;
background-color: lightblue; 
color: black;
border-color: black;
border-radius: 20px;
margin-left: 400px;
margin-right: 400px;
margin-top: 40px;
margin-bottom: 40px;
font-size: 0.7em;
`;

const Button = styled.button`
color: grey;
background-color: red;
border-color: grey;
border-radius: 6px;
margin-top: 20px;
margin-right: 190px;
margin-left: 190px;
`

const Imagen = styled.img`
border: 40px;
border-color: violet;
border-radius: 40px;
margin: 20px;
`

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <Div>
         <Button onClick={() => onClose(id)}>X</Button>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <Imagen  src={image} alt="" />
      </Div>
   );
}
