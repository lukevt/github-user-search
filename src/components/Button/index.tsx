import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
type Props ={
    title:string;
}
const Button = ({title}:Props) =>{
    const history = useHistory();

    const handleClick = () =>{
        history.push('/profile')
    }
    return(
        <button 
            type="submit"
            className="gitfinder-btn"
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button;