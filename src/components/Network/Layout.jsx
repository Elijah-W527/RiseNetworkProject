import React from 'react';
import Routes from "../Routing";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex", backgroundColor: "black"}}>
                <Sidebar history={props.history}/>
                <div style={{width: '100%'}}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
