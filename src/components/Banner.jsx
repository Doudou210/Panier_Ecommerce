import React from "react";
import Chat from "./Chat";
import "../css/Banner.css";
// import axios from "axios";

const Banner = (options, foodData) => {
    // const [banner, setBanner] = useState([]);
    // useEffect(()=>{
    //     // foodData();
    // });
    return(
        <div className="platJour">
            <Chat/>
            {/* {banner.map(item=>(
                <div className="speciale">
                    <img src={item.image} alt="" srcset="" />
                </div>
            ))} */}
            <div className="speciale">
                <h1>Plats du jour</h1>
                <div className="plat">
                    <h2>Lorem ipsum dolor sit</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Dicta quaerat at earum deserunt veritatis nihil nobis maxime in distinctio <br />
                        inventore, repudiandae fugiat blanditiis atque ipsam omnis, quas quia autem id?
                    </p>
                </div>
            </div>
            <div className="imgPlat">
                <img src="https://placehold.co/1200x1200" alt="" />
            </div>
        </div>
    )
}
export default Banner