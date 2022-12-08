import("./About.css");

const About = () => {
    return (
        <div className="about-page-container row px-5">
            <h3 className="about-h3 text-center"> ABOUT US </h3>
            <div>
                {" "}
                <p className = "sub-title"> OVERVIEW</p>{" "}
                <p>
                    This proposed project is a safe, reliable and
                    multifunctional application that can be used during
                    emergency situations.{" "}
                </p>
                <p>
                    {" "}
                    This app is associated with different Emergency Response
                    Team/Department of government associations like Hospitals,
                    BFP, Police Department etc., to assist and respond to
                    everybody's emergency needs.{" "}
                </p>
            </div>
            <hr/>
            <div >
                <div>
                    {" "}
                    <p className = "sub-title"> VISION </p>{" "}
                    <p>
                        Our vission is to help more people outside the
                        Philippines with the use of our application.{" "}
                    </p>{" "}
                </div>
                <div>
                    {" "}
                    <p className = "sub-title"> MISSION </p>{" "}
                    <p>
                        {" "}
                        Our mission is to provide an efficient reactive
                        emergency response application in the country.
                    </p>{" "}
                </div>
            </div>
            <hr/>
            <div>
                <p className = "sub-title"> WHY DID WE BUILD IT? </p>
                <p>
                    {" "}
                    Our application is built to help the community in times of
                    emergencies. We aim to have a faster way to ask for help
                    from different Government /nonGovernment agencies that can
                    help. Because we believe that during the emergencies, time
                    is the essence{" "}
                </p>
            </div>
            <hr/>
            <div className=" ">
                <div className="our-team"> OUR TEAM </div> <br/>
                <div className="about-info">
                    <p className = "name"> ALFRED CALAWA</p>
                    <span>Mern stack Developer</span>
                    <p>
                        Alfred is a scholar of DICT-CAR and wants to be a Web
                        Developer. He is also an Information Technology student
                        from the Philippines.
                    </p>
                </div>
                <hr/>
                
                <div className="about-info">
                    <p className = "name"> J.R. BANIQUED</p>
                    <span>Mern stack Developer</span>
                    <p>
                        JR is a scholar of DICT-CAR and want to be a Web
                        Designer. An Open Source enthusiast and an Information
                        Technology student from the Philippines.
                    </p>
                </div>
                <div className="about-info">
                    <p className = "name">JOHN ERIC DARLUCIO</p>
                    <span>Mern stack Developer</span>
                    <p>
                        John Eric is an electronics engineer and wants to be a
                        teacher in web development bootcamp someday.
                    </p>
                </div>
                <hr/>
                <div className="about-info">
                    <p className = "name">MIGUEL SABATER</p>
                    <span>Lead Developer and Graphic Designer</span>
                    <p className="d-flex">
                        Miguel holds a Business Administration degree and has an
                        extensive background as a Graphic Designer that led him
                        to become a freelancer, where he found clients
                        internationally. He is also passionate in building
                        websites that enables to create a better community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
