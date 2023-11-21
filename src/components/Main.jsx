import React from 'react';
import '../components/MainStyles.css';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className="container-img">
        <img src={props.MainImg} alt="Mainimg"/>
         <div className="Main-text">
            <h1>{props.title}</h1> 
            <p>{props.text}</p>
            <Link to="/menu" className='btnclass'>
              <a href={props.url} className={props.btnclass}>{props.buttonText}    <i class="fa-solid fa-arrow-right"></i></a>
            </Link>
         </div>
    </div>
  )
}

export default Main;