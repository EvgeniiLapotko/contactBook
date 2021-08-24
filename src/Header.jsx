import React from "react";
import user from "./assets/icon-user.png";

const Header = ({ login, exit, getName, name }) => {
   
    return (
        <div className="header__inner">
            <div className="header__item">
                <ul className="menu">
                    <li>Home</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="header__item" >
                {login ? 
                    <div className="header__item-info">
                        <img src={user} alt="user" />
                        <div>Welcom, {name}  </div>
                        <button className="btn" onClick={exit}>Log Out</button>
                    </div> : <button className="btn" onClick={getName}>Log In</button>
                }
            </div>
        </div>
    );
};

export default Header;
