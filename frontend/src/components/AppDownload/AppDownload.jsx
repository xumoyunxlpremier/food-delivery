import React from "react";
import './AppDownload.css'
import { assets } from "../../assets/assets";

function AppDownload() {
    return (
        <div className="app-download" id="app-download">
            <p>For a better Experience Download <br /><span>Tomato</span> App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="ima" />
                <img src={assets.app_store} alt="image" />
            </div>
        </div>
    );
}

export default AppDownload;
