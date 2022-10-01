import React from "react";
import "../layout/header.css"


const Header =({black}) =>{
    return(
        <header className={black ? 'header-black': ''}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/netflix-logo.png" />
                </a>
            </div>
            <div className="header-user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"  />
                </a>

            </div>
        </header>
    )
}

export default Header