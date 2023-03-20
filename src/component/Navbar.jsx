import React from "react";
import { LogOut } from 'react-feather';
import AvaIcon from "../assets/img/Ava-Icon.svg"

function Navbar() {
    return(
        <>
        <React.Fragment>
        <div className="issp-bg-nav">
                    <div className="issp-nav">
                        <div className="issp-sidebar-toggle" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <div className="issp-alert">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg> */}
                        </div>
                        <div className="dropdown dropdown-user">
                            <img className="issp-avatar" data-toggle="dropdown" data-display="static" src={AvaIcon} alt="Avatar Icon" />
                            <div className="dropdown-menu dropdown-menu-right">
                                <h6 className="dropdown-header flex items-center">
                                    <img className="dropdown-user-img" data-display="static" style={{objectFit: 'cover', border: '2px solid #B9B9B9', backgroundColor: '#B9B9B9'}} src={AvaIcon} alt="Dropdown Avatar Icon" />
                                    <div className="dropdown-user-details">
                                        <div className="dropdown-user-details-name">Test Name</div>
                                        <div className="dropdown-user-details-email">Test email</div>
                                    </div>
                                </h6>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" type="button" style={{width: "100%"}}>
                                    <span className="dropdown-item-icon"><LogOut /></span>
                                    Keluar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

        </React.Fragment>
        </>
    )
}

export default Navbar