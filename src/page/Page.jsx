import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import DashboardManajemenAplikasi from "../component/manajemen_aplikasi/DashboardManajemenAplikasi";


function Page () {
    const [isExtended, setExtended] = useState();
    return(
        <>
        <div className="issp-root">
            <Sidebar />
            <div className="issp-main">
                <Navbar/>
                <div className="issp-content">
                    <DashboardManajemenAplikasi />
                </div>
            </div>
        </div>
        </>
    )
}

export default Page