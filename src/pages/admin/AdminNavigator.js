import { useState } from "react";
import { useNavigate } from "react-router";

import Image from "react-image-webp";

import("./AdminNavigator.css");

const AdminNavigator = () => {
    const navigate = useNavigate();
    const [displayMenu, setDisplayMenu] = useState(false);

    const displaymenuHandler = () => {
        if (displayMenu === false) {
            setDisplayMenu(true);
        } else {
            setDisplayMenu(false);
        }
    };

    return (
        <div className="NavigationMainContainer">
            <div className="AdminNavContainer">
                <Image
                    className="menuIcon"
                    webp={require("../assets/menu.webp")}
                    onClick={displaymenuHandler}
                />

                <h3 className="dashboardtitle">ADMIN DASHBOARD</h3>

                <Image
                    className="admin-navigator-logout"
                    webp={require("../assets/logout.webp")}
                    onClick={() => {
                        if (window.confirm('Are you sure you want to logout?')) {
                            window.localStorage.clear();
                            navigate('/');
                        }
                    }}
                />


            </div>

            {displayMenu && (
                <div className="menuModal">
                    <button
                        className="menuBtn"
                        onClick={() => {
                            navigate("/admin-dashboard");
                        }}
                    >
                        PENDING
                    </button>
                    <button
                        className="menuBtn"
                        onClick={() => {
                            navigate("/admin-responding");
                        }}
                    >
                        RESPONDING
                    </button>
                </div>
            )}
        </div>
    );
};

export default AdminNavigator;
