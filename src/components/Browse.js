import React from "react";
import Navbar from "./Navbar";
import Widgets from "./widgets/Widgets";
import { Outlet } from "react-router-dom";

function Browse() {
    return (
        <div className="mainContainer">
            <Navbar />
            <div className="feed">
                <Outlet />
            </div>
            <div className="widgets">
                <Widgets />
            </div>
        </div>
    )
}

export default Browse