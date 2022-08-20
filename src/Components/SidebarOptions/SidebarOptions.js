import React from "react";
import "./Sidebaroptions.css";

export default function SidebarOptions({text, Icon,active}) {
    return <div className={`sidebar-options ${active &&'sidebarOption--active'}`}>
        <Icon/>
        <h2>{text}</h2>
    </div>
}