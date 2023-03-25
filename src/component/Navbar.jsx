import React from "react";
import { LogOut } from 'react-feather';
import AvaIcon from "../assets/img/Ava-Icon.svg"
import "../assets/style/home.scss"

function Navbar() {
    return (
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
                    
                        <div className="dropdown inline-block relative text-left">
                            <img
                                className="rounded-full w-10"
                                src={AvaIcon}
                                alt="Avatar Icon"
                                sizes={10}
                            />
                            <ul
                                className="dropdown-menu absolute hidden bg-white absolute right-0 z-10 p-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                style={{ fontSize: "14px" }}
                            >
                                <li>
                                    <div className="dropdown-menu dropdown-menu-right p-2 divide-y">
                                        <h6 className="dropdown-header flex items-center">
                                            <img className="dropdown-user-img rounded-full w-10 p-2" data-display="static" style={{ objectFit: 'cover', border: '2px solid #B9B9B9', backgroundColor: '#B9B9B9' }} src={AvaIcon} alt="Dropdown Avatar Icon" />
                                            <div className="dropdown-user-details p-3">
                                                <div className="dropdown-user-details-name" style={{ whiteSpace: "nowrap" }}>Test Name</div>
                                                <div className="dropdown-user-details-email">Test email</div>
                                            </div>
                                        </h6>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item flex space-x-2 items-center justify-center p-2" type="button" style={{ width: "100%", whiteSpace: "nowrap" }}>
                                            <span className="dropdown-item-icon p-2"><LogOut /></span>
                                            Keluar
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        </>
    )
}

export default Navbar