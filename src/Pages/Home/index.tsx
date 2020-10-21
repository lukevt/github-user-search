import React from 'react'
import './styles.css'
import Button from '../../components/Button'

const Home = () =>{
    return(
        <div className="home-container">
            <h1 className="home-title">
                github user finder by devSuperior
            </h1>
            <p className="home-description">
                welcome to github user finder project dev superior, 
                here you can search github api to find user profiles
                and obtain all the relevant information about their github profiles
                and displaying in your app.
                This design was adapted from Ant Design System for Figma, by Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <Button title="Start"/>
        </div>
    )
}

export default Home;