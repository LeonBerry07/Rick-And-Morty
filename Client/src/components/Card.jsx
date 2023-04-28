import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

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

function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {

      if(isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <Div>
         {
            isFav 
            ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
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

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character))}, 
      removeFav: (id) => { dispatch(removeFav(id))}
   }
}

export default connect( mapStateToProps, mapDispatchToProps )(Card);