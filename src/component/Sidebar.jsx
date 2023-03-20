import React, { Component } from "react";
import { Briefcase, Grid, Key, Monitor, StopCircle, Users } from "react-feather";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

function Sidebar() {
    return (
        <>
            <div className="issp-side">
                <div className="issp-brand">
                    <img className="issp-brand-image" src={Logo} alt="Logo Kota Semarang" />
                    <div className="issp-brand-name">Manajemen SSO</div>
                    <div className="issp-mobile-toggle" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>
                <div className="issp-list p-20 pl-4">
                    <div className="grid grid-cols-2 gap-0 p-2">
                        <div className="issp-icon">
                            <Grid />
                        </div>
                        <div className="issp-name">Dashboard</div>
                    </div>
                    <div className="grid grid-cols-2 gap-0 p-2">
                        <div className="issp-icon">
                            <Briefcase />
                        </div>
                        <div className="issp-name">Organisasi</div>

                    </div>
                    <div className="grid grid-cols-2 gap-0 p-2">

                        <div className="issp-icon">
                            <StopCircle/>
                        </div>
                        <div className="issp-name">Klaster</div>
                    </div>
                    <div className="grid grid-cols-2 gap-0 p-2">
                        <div className="issp-icon">
                            <Monitor />
                        </div>
                        <div className="issp-name">Aplikasi</div>

                    </div>
                    <div className="grid grid-cols-2  gap-0 p-2">
                        <div className="issp-icon">
                            <Key />
                        </div>
                        <div className="issp-name">Admin</div>
                    </div>
                    <div className="grid grid-cols-2  gap-0 p-2">
                        <div className="issp-icon">
                            <Users  />
                        </div>
                        <div className="issp-name">Pengguna</div>
                    </div>
                    <div className="grid grid-cols-2 gap-0 p-2">


                        <div className="issp-icon">
                            <Grid />
                        </div>
                        <div className="issp-name">Cascading</div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Sidebar