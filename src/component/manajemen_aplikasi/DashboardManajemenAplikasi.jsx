import React from "react";
import { Briefcase, Grid, Key, Monitor, StopCircle, Users } from "react-feather";

let DashboardManajemenAplikasi = () => {
    return (
        <div className="flex">
            <div className="flex-1 bg-gray-200 p-10 text-left">
                <h1 className="mb-5">Dashboard</h1>
                <div className="flex flex-wrap">
                    <div className="border-l-4 border-blue-500 w-1/3 p-4 bg-white m-2 rounded-lg">
                        <div className="text-blue-700 font-medium">Total Organisasi</div>
                        <div className="h1">10</div>
                        <div className="m-l-2 justify-end">
                            <Briefcase size={40}/>
                        </div>
                    </div>
                    <div className="border-l-4 border-blue-500 w-1/3 p-4 bg-white m-2 rounded-lg">
                        <div className="text-blue-700 font-medium">Total Aplikasi</div>
                        <div className="h1">20</div>

                    </div>
                    <div className="border-l-4 border-blue-500 w-1/3 p-4 bg-white m-2 rounded-lg">
                        <div className="text-blue-700 font-medium">Total Pengguna</div>
                        <div className="h1">30</div>

                    </div>
                </div>
            </div>
        </div>
      );
};

export default DashboardManajemenAplikasi;