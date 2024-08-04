import React, { useState } from "react";
import "../css/Produit.css"
import { Link } from "react-router-dom";
import enMessages from "../languages/En.json";
// import itMessages from "../languages/It.json";
import frMessages from "../languages/Fr.json";

const Produits = () => {
    //Pour l'API

    //Pour les produits
    const [addedItems, setAddedItems] = useState([]);
    
    //Pour le panier
    const [shop, setShop] = useState(false);
    
    //Pour le prix total
    const [total, setTotal] = useState(0);
    
    // Pour changer la langue de l'application.
    const [language, setLanguage] = useState('en'); // 'fr' pour le français, 'en' pour l'anglais, pour définir la langue par défaut 
    const messages = language === 'en' ? enMessages : frMessages;

    // Fonction pour changer la langue
    const toggleLanguage = () => {
        // Mettre à jour la langue en fonction de la langue actuelle
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
    };

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
            const newItem = {title, imageUrl, price, quantité:1};
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
                // setShop(()=>false)
            }
            setAddedItems(updatedItems);
            setTotal((prevTotal) => prevTotal - parseFloat(price) );
        }
    }
    return(
        <div>
            <div className="container">
                <div className="produit add">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food1 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food1"/>
                            <p className="card-text">1€</p>
                            <button className="btn btn-primary" onClick={()=>
                                        addToItems(
                                            "food1",
                                            1,
                                            "https://placehold.co/1200x1200",
                                        )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food2 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food2"/>
                            <p className="card-text">2€</p>
                            <button className="btn btn-primary" 
                                onClick={()=>
                                    addToItems(
                                        "food2",
                                        2,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food3 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food3"/>
                            <p className="card-text">3€</p>
                            <button className="btn btn-primary" 
                                onClick={()=>
                                    addToItems(
                                        "food3",
                                        3,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food4 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food4"/>
                            <p className="card-text">4€</p>
                            <button className="btn btn-primary" 
                                onClick={()=>
                                    addToItems(
                                        "food4",
                                        4,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food5 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food5"/>
                            <p className="card-text">5€</p>
                            <button className="btn btn-primary"
                                onClick={()=>
                                    addToItems(
                                        "food5",
                                        5,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food6 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food6"/>
                            <p className="card-text">6€</p>
                            <button className="btn btn-primary" 
                                onClick={()=>
                                    addToItems(
                                        "food6",
                                        6,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food7 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food7"/>
                            <p className="card-text">7€</p>
                            <button className="btn btn-primary" 
                                 onClick={()=>
                                    addToItems(
                                        "food7",
                                        7,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food8 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food8"/>
                            <p className="card-text">8€</p>
                            <button className="btn btn-primary" 
                                 onClick={()=>
                                    addToItems(
                                        "food8",
                                        8,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Food9 </h5>
                            <img className="card-img-top" src="https://placehold.co/1200x1200" alt="Food8"/>
                            <p className="card-text">9€</p>
                            <button className="btn btn-primary" 
                                 onClick={()=>
                                    addToItems(
                                        "food9",
                                        9,
                                        "https://placehold.co/1200x1200",
                                    )}>{messages["add"]}
                            </button>
                        </div>
                    </div>
                </div>

                {/*Panier*/}
                
                {shop &&
                    <div className=" panier column is-4">
                        <section className="cart box has-background-white mt-6">
                            <h2 className="title is-4 has-text-black">{messages["cart"]}</h2>
                            <div className="items">
                                {addedItems.map((item, index) => (
                                    <article >
                                        <div className="products">
                                            <img src={item.imageUrl} alt={`Produit de ${item.title}`} />
                                            <div>
                                                <h5>{messages["dishe"] + item.title}</h5>
                                                <p>{messages["price"]} : {item.price + "€"}</p>
                                                <p> {messages["quantity"]} : {item.quantité}</p>
                                            </div>
                                        </div>
                                        <div className="supprime">
                                            <button type="button" className="btn btn-danger" onClick={() => removeFromItems(item.title, item.price)}>{messages["delete"]}</button>
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
                                <Link to={"/accueil/paiement"}><button className="btnPaye">{messages["payN"]}</button></Link>
                            </div>
                        </section>
                    </div>
                }
            </div>

            <button onClick={toggleLanguage} className="btnLangue">{messages["lang"]} {language === 'fr' ? 'anglais' : 'français'}</button>
        </div>
    )
};

export default Produits;