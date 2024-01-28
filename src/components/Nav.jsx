import { NavLink, useLocation } from "react-router-dom"
import Classes from "../style/Nav.module.css"
import { useEffect, useState } from "react"

function Nav({children}){
    const [active, setActive] = useState("")
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
        setActive("home");
        } else if (location.pathname === "/create") {
        setActive("create");
        } else if (location.pathname.startsWith("/view/")) {
        setActive("view");
        } else if (location.pathname.startsWith("/update/")) {
        setActive("update");
        }
    }, [location.pathname]);
  
    
    return (
        <>
            <header>
                <nav className={Classes.nav}>
                    <div className="container">
                        <div className={Classes.nav_area}>
                            <div className={Classes.logo_area}>
                                <h1 className={Classes.logo}>CRUD App</h1>
                            </div>
                            <div className={Classes.navbar}>
                                <ul>
                                    <li className={`${active === "home" ? Classes.active : ""}`}><NavLink to={"/"}>Home</NavLink></li>
                                    <li className={`${active === "create" ? Classes.active : ""}`}><NavLink to={"/create"}>Create</NavLink></li>
                                    <li className={`${active === "view" ? Classes.active : ""}`}><NavLink to={"/view/:id"}>View</NavLink></li>
                                    <li className={`${active === "update" ? Classes.active : ""}`}><NavLink to={"/update/:id"}>Update</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default Nav