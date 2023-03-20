import React, { Component } from 'react';

function Login () {
    return(
        <>
         <div className="login-box items-center justify-center">
                    <div className="login-body items-center justify-center">
                        <h1 className="login-title text-red-600">ISSP</h1>
                        <h3 className="login subtitle text-uppercase mt-6">SSO Login system</h3>
                        <p className="text-lg text-muted mt-1 mb-5">Integrated Smart System Platform</p>
                        <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-7 rounded">
                        Login
                        </button>
                        {/* <a href={`${process.env.REACT_APP_SSO}/login?app_id=${this.context.get.appId}&redirect_uri=${encodeURI(this.context.get.baseUrl)}/login`} className="btn btn-danger btn-rounded mb-5 text-white">Login</a> */}
                    </div>
                </div>
        </>
    )
}

export default Login