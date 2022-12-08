
import { useNavigate } from "react-router";

import Image from "react-image-webp";

import("./UserNavBar.css");

const UserNavigator = () => {

    const navigate = useNavigate();



    return (
        <div className="UserNavContainer">

            <Image
                className="logoNavIcon"
                webp={require("../assets/saverlogo.webp")}
                onClick={() => {
                    navigate('/');
                }
                }
            />

            <Image
                className="logoutIcon"
                webp={require("../assets/logout.webp")}
                onClick={() => {
                    if (window.confirm('Are you sure you want to logout?')) {
                        window.localStorage.clear();
                        navigate('/');
                    }
                }}
            />


        </div>
    );
};

export default UserNavigator;
