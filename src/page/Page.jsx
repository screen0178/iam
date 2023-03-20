import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";


function Page () {
    return(
        <>
        <div className="issp-root">
            <Sidebar />
            <div className="issp-main">
                <Navbar/>
                <div className="issp-content">

                </div>
            </div>
        </div>
        </>
    )
}

export default Page