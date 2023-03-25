import React from "react";
import { Briefcase, Grid, Key, Monitor, StopCircle, Users } from "react-feather";

let DashboardManajemenAplikasi = () => {
    return (
        <div className="flex">
            <div className="flex-1 bg-gray-200 p-10 text-left">
                <h1 className="mb-5">Dashboard</h1>
                <div className="flex flex-wrap gap-6">
                    <div className="border-l-4 flex border-blue-500 md:grid-cols-3 sm:grid-cols-1 p-4 bg-white rounded-lg">
                        <div className="pr-20">
                            <div className="text-blue-700 font-medium">Total Organisasi</div>
                            <div className="h1">10</div>
                        </div>

                        <div className="justify-end ">
                            <Briefcase size={40} color={"grey"} />
                        </div>
                    </div>
                    <div className="border-l-4 flex border-blue-500 md:grid-cols-3 sm:grid-cols-1  p-4 bg-white rounded-lg">
                        <div className="pr-20">
                            <div className="text-blue-700 font-medium">Total Aplikasi</div>
                            <div className="h1">10</div>
                        </div>

                        <div className="justify-end ">
                            <Briefcase size={40} color={"grey"} />
                        </div>
                    </div>
                    <div className="border-l-4 flex border-blue-500 md:grid-cols-3 sm:grid-cols-1  p-4 bg-white rounded-lg">
                    <div className="pr-20">
                            <div className="text-blue-700 font-medium">Total Pengguna</div>
                            <div className="h1">10</div>
                        </div>

                        <div className="justify-end ">
                            <Briefcase size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardManajemenAplikasi;