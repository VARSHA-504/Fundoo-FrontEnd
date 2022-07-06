import React from 'react';
import './header.css'
import {connect} from 'react-redux'

function Header (props) {

    const clickHandler =() => {
        props.showDrawer();
    }
    
    return (
        <div className="header">
        <div className="section-content-one">
            <div>
                <img src="./images/hamburger-menu-462145.png" alt="Menu" className="menu-icon" onClick={clickHandler}></img>
            </div>
            <div>
                <img src="./images/google_keep.webp" alt="Keep" className="keep-icon" />
            </div>
            <div className="keep-text">{props.title}</div>
        </div>
        <div className="section-content-two">
            <div>
                <img src="./images/img_197388.png" alt="search" className="search-icon" />
            </div>
            <div>
                <input type="search" placeholder="         Search" className="search-field" />
            </div>
        </div>
        <div className="section-content-three">
            <div>
                <img src="./images/refresh.png" alt="Refresh" className="refresh-icon" />
            </div>
            <div>
                <img src="./images/list-view.jfif" alt="list-view" className="list-icon" />
            </div>
            <div>
                <img src="./images/settings.png" alt="settings" className="settings-icon" />
            </div>
        </div>
        <div className="section-content-four">
            <div>
                <img src="./images/googleApps.png" alt="Apps" className="apps-icon" />
            </div>
            <div>
                <img src="./images/VV.jfif" alt="Account" className="account-icon" />
            </div>
        </div>
    </div>

    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.drawerReducer.title,
    };
};
export default connect(mapStateToProps)(Header);

