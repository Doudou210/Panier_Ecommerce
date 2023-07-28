import React, { useState } from "react";
import "../css/Produit.css"
import { Link } from "react-router-dom";
// import axios from 'axios';
import enMessages from "../languages/En.json";
// import itMessages from "../languages/It.json";
import frMessages from "../languages/Fr.json";

const Produits = () => {
    //Pour les produits
    const [addedItems, setAddedItems] = useState([]);
    
    //Pour le panier
    const [shop, setShop] = useState(false);
    
    //Pour le prix total
    const [total, setTotal] = useState(0);
    
    // Pour changer la langue de l'application.
    const [language, setLanguage] = useState('en'); // 'fr' pour le français, 'en' pour l'anglais, pour définir la langue par défaut 
    const messages = language === 'en' ? enMessages : frMessages;

    //Pour récupérer ajouter les différents article dans le panier
    const addToItems = (title, price, imageUrl) =>{
        
        //Pour afficher le panier
        setShop(()=>true)
        
        const existsItem = addedItems.find((item) => item.title === title);
        if (existsItem) {

            //Si le produit existe, on augmente la quantité et mettre le panier à jour.
            existsItem.quantité +=1;
        } else {
            //Si le produit n'exite pas dans le panier, on l'ajoute et mettre à jour le panier
            const newItem = {title, price, imageUrl, quantité:1};
            setAddedItems((prevItems) => [...prevItems, newItem]);
        }

        setTotal((prevTotal) => prevTotal + parseFloat(price) );
        
    }
    
    //Pour supprimer un élément
    const removeFromItems = (title,price) => {
        const itemIndex = addedItems.findIndex((item) => item.title === title);
        if (itemIndex !== -1) {
            const updatedItems = [...addedItems];
            updatedItems[itemIndex].quantité -= 1;
            
            if (updatedItems[itemIndex].quantité === 0) {
                updatedItems.splice(itemIndex, 1);
            }
            setAddedItems(updatedItems);
            setTotal((prevTotal) => prevTotal - parseFloat(price) );
        }
    }
    // Fonction pour changer la langue
    const toggleLanguage = () => {
        // Mettre à jour la langue en fonction de la langue actuelle
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
    };
    
    
    // const [menu, setMenu] = useState([]);
    
    // //api
    // const options = {
        //     method: 'GET',
    //     url: 'https://the-fork-the-spoon.p.rapidapi.com/sale-type-menu/list',
    //     params: {
    //     id_restaurant: '522995',
    //     locale: 'en_US'
    //     },
    //     headers: {
    //     'X-RapidAPI-Key': 'f3923651bcmsha1c4f38d3c7e587p10186ajsn5efb532fd6d1',
    //     'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    //     }
    // };
    // useEffect(() => {
    //     const fetchMenu = async () =>{
    //         try {
    //             const response = await axios.get(options);
    //             setMenu(response.data)
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchMenu();
    // })
    return(
        <div>

            <div className="container">

                <div className="produit add">
                    
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 1</h5>
                            <p className="card-text">10 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    1,
                                    10,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>

                    {/* <div>
                        {menu.map((item) => (
                            <div className="card" style={{width: "18rem"}} key={item.id}>
                                <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                                <div className="card-body" key={item.id}>
                                <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">some quick example text to build on the card title and make up the bk of the card's content.</p>
                                    <Link to="" className="btn btn-primary">Go somewhere</Link>
                                </div>
                                </div>
                        ))}
                    </div> */}

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 2</h5>
                            <p className="card-text">20 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    2,
                                    20,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 3</h5>
                            <p className="card-text">40 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    3,
                                    40,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 4</h5>
                            <p className="card-text">40 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    4,
                                    40,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 5</h5>
                            <p className="card-text">50 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    5,
                                    50,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 6</h5>
                            <p className="card-text">50 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    6,
                                    50,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 7</h5>
                            <p className="card-text">25 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    7,
                                    25,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 8</h5>
                            <p className="card-text">25 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    8,
                                    25,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>

                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 9</h5>
                            <p className="card-text">15 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    9,
                                    15,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 10</h5>
                            <p className="card-text">35 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    10,
                                    35,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 11</h5>
                            <p className="card-text">15 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    11,
                                    15,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                    
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Card images cap" />
                        <div className="card-body">
                            <h5 className="card-title">{messages["dishe"]} 12</h5>
                            <p className="card-text">20 €</p>
                            <Link to="" className="btn btn-primary" onClick={()=>
                                addToItems(
                                    12,
                                    20,
                                    "https://placehold.co/1200x1200")}>{messages["add"]}
                            </Link>
                        </div>
                    </div>
                </div>

                {/*Panier*/}
                
                {shop &&
                    <div className=" panier column is-4">
                        <section className="cart box has-background-primary">
                            <h2 className="title is-4 has-text-white">{messages["card"]}</h2>
                            <div className="items">
                                {addedItems.map((item, index) => (
                                    <article >
                                        <div className="products">
                                            <img src={item.imageUrl} alt={`Image de ${item.title}`} />
                                            <div>
                                                <h5>{messages["dishe"] + item.title}</h5>
                                                <p>{messages["price"]} : {item.price + "€"}</p>
                                            </div>
                                        </div>
                                        <div className="supprime">
                                            <p> {messages["quantity"]} : {item.quantité}</p>
                                            <button type="button" className="sup" onClick={() => removeFromItems(item.title, item.price)}>Supprimer</button>
                                        </div>
                                        <hr />
                                    </article>
                                ))}
                            </div>
                            <footer className="title is-4 has-text-black mt-5">
                                Total : <span>{total +"€"}</span>
                            </footer>
                            
                            <div className="paiement">
                                <input type="text" placeholder={messages["promo"]} />
                                <button type="button" className="btnPaye">{messages["payN"]}</button>
                            </div>
                        </section>
                    </div>
                }
            </div>
            <button onClick={toggleLanguage} className="btnLangue">Changer de langue en {language === 'fr' ? 'anglais' : 'français'}</button>
        </div>
    )
};

export default Produits;