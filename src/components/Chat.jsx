import React, { useState } from "react";
import "../css/Chat.css"

const Chat = ()=>{
    const [clickMessage, setClickMessage] = useState();
    const handleMessage = () => {
        // console.log("handleMessage cliqué");
        setClickMessage((prevMessage)=> !prevMessage)
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Données du formulaire à envoyer :',formData);
      };
      
    return(
        <div>
            <div className="messageSee">
                    <span className="message" onClick={handleMessage}>
                        {
                            clickMessage ?
                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                            </svg>
                            
                            :

                            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30">
                                <path d="M240-399h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240L80-80Zm134-220h606v-520H140v600l74-80Zm-74 0v-520 520Z"/>
                            </svg>
                        
                        }
                    </span>
            </div>
            {clickMessage &&
                    <div className="chat">
                        <form onSubmit={handleSubmit} className="chat" method="POST" >
                            <h1 className="contact">Contact nous</h1>
                            <label htmlFor="">Nom</label>
                            <input type="name" name="name" value={formData.name} onChange={handleChange}/>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                            <label htmlFor="">Subject</label>
                            <input type="text" name="subject" value={formData.subject} onChange={handleChange} id="" />
                            <label htmlFor="">Message</label><br />
                            <textarea name="message" value={formData.message} onChange={handleChange} cols="45" rows="10"></textarea>
    
                            <button type="submit" name="submit">Envoyer le message</button>
                        </form>
                    </div>
                }
        </div>
    )
}

export default Chat;