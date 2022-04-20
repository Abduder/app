import Link from 'next/link'
import Head from 'next/head'
import {data} from '../../lib/villes.js'
import {useEffect, useState} from "react"
var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'];
var detSup = ["Ascenseur","Balcon","Terrasse","Meublé","Climatisation","Chauffage","Cuisine équipée","Concierge","Sécurité","Parking","Duplex"];

export default function DeposeAnnonce() {
  const [categories, setCategories] = useState("");
  const [transaction, setTransaction] = useState("");
  const [ville, setVille] = useState("");
  const [chambres, setChambres] = useState("");
  const [salle, setSalle] = useState("");
  const [salons, setSalons] = useState("");
  const [etages, setEtages] = useState("");
  const [details, setDetails] = useState([{name:"Ascenseur",selected:false},{name:"Balcon",selected:false},{name:"Terrasse",selected:false},{name:"Meublé",selected:false},{name:"Climatisation",selected:false},{name:"Chauffage",selected:false},{name:"Cuisine équipée",selected:false},{name:"Concierge",selected:false},{name:"Sécurité",selected:false},{name:"Parking",selected:false},{name:"Duplex",selected:false}]);
  const [loading, setLoading] = useState(false);
  let submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        categories: categories,
        transaction: transaction,
      }),
    });
    res = await res.json();
    setCategories("");
    setTransaction("");
    setLoading(false);
  };
  function selectDetail(e){
    e.preventDefault();
    let i=details.findIndex(ele=>ele.name===e.target.id);
    console.log(i);
    details[i].selected = !details[i].selected;
    setDetails(details);
  }

  return (
    <>
    	<Head>
    		<title>deposer une annonce</title>
    	</Head>
      <main>
        
          <form className="form">
            <div className="informations">
              <h3>Informations generales</h3>
              <p>Categorie<span className="required">*</span></p>
              <select id="dropdown-categorie"
              name="categories"
              value={categories}
              onChange={(e)=>setCategories(e.value)}
              required>
                <option value="appartements">Appartements</option>
                <option value="maisons-et-villas">Maisons et Villas</option>
                <option value="bureaux-et-plateaux">Bureaux et Plateaux</option>
                <option value="terrains-et-fermes">Terrains et Fermes</option>
              </select>
              <p>Type de Transaction<span className="required">*</span></p>
              <select id="dropdown-type"
              name="type-de-transaction"
              value={transaction}
              onChange={(e)=>setTransaction(e.value)}
              required>
                <option value="vente">Vente</option>
                <option value="location">Location</option>
              </select>
              <p>ville<span className="required">*</span></p>
              <select id="dropdown-ville"
              name="ville"
              value = {ville}
              onChange = {(e)=>setVille(e.value)}
              required>
              {
                data.map(ele=>{
                  return <option value={ele.ville}>{ele.ville}</option>
                })
              }
              </select>
            </div>
            <div className="composition">
              <div className="comp">
                <p>Chambres</p>
                <select id="dropdown-chambres"
                name="chambres"
                value={chambres}
              onChange={(e)=>setChambres(e.value)}>
                {
                  arr.map(ele=>{
                    return <option value={ele}>{ele}</option>
                  })
                }
                </select>
              </div>
              <div className="comp">
                <p>Salle de Bain</p>
                <select id="dropdown-salle-de-bain"
                name="salle-de-bain"
                value={salle}
              onChange={(e)=>setSalle(e.value)}>
                  
                {
                  arr.map(ele=>{
                    return <option value={ele}>{ele}</option>
                  })
                }
                </select>
              </div>
              <div className="comp">
                <p>Salons</p>
                <select id="dropdown-salons"
                name="salons"
                value={salons}
              onChange={(e)=>setSalons(e.value)}>
              {
                arr.map(ele=>{
                  return <option value={ele}>{ele}</option>
                })
              }
                </select>
              </div>
              <div className="comp">
                <p>Etages</p>
                <select id="dropdown-etages"
                name="etages"
                value={etages}
                onChange={(e)=>setEtages(e.value)}>
              {
                arr.map(ele=>{
                  return <option value={ele}>{ele}</option>
                })
              }
                </select>
              </div>
            </div>
            <div className="details-sup">
              <p className= "details-title">Détails supplémentaires</p>
              <div className="details">
              {
                details.map(ele=>{
                  return (<button id={ele.name} onClick={selectDetail} className={ele.selected? "select":"not-selected"}>{ele.name}</button>);
                })
              }
              </div>
            </div>

            <div className="discription-du-bien">
              <div className="titre-annonce">
                <p>Titre de l annonce<span className="required">*</span></p>
                <input type="text" placeholder="Titre de l'annonce" required/>
              </div>
              <div className="prix">
                <p>Prix</p>
                <input type="number" placeholder="0" />
              </div>
              <div className="discription-annonce">
                <p>Texte de l annonce<span className="required">*</span></p>
                <textarea placeholder="decrire le bien" rows="8" cols="45" required/>
              </div>
            </div>
            <div className="submit-container">
              <button className="submit" type="submit"  onSubmit={submit}>submit</button>
            </div>
          </form>
      </main>
      <style jsx>{`
        main{
          margin : 5% 15% 0 15%;
        }
        .informations{
          width :70 %;
          margin: 2rem 0;
          padding:1rem 3rem;
          display :flex;
          flex-direction : column;
          border : solid 1px grey;
          border-radius: 10px;
        }
        .composition{
          width:90%;
          margin: 2rem 0;
          padding:1rem 3rem;
          display: grid;
          grid-template-columns: 20% 20% 20% 20% ;
          border : solid 1px grey;
          border-radius: 10px;
        }
        .comp{
          width:80%;
          margin: 2rem 0;
          padding:1rem 3rem;
          display:grid;
          grid-template-rows: 1fr 1fr;
          
        }
        .details-sup{
          width:70%;
          margin: 2rem 0;
          padding:1rem 3rem;
          display:flex;
          flex-direction: column;
          border : solid 1px grey;
          border-radius: 10px;

        }
        .details{
          display:grid;
          grid-template-columns: 15% 15% 15% 15% 15% 15% ;
          grid-template-rows: 1fr 1fr ;
          grid-gap: 1rem;

        }
        .discription-du-bien{
          display:grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr ;
          grid-template-areas:"titre prix" "discription discription";
          border: 1px solid grey;
          border-radius:5px;
          padding : 10px 15px;
        }
        .titre-annonce{
          grid-area: titre;
          
        }
        .prix{
          grid-area: prix;
          
        }
        .discription-annonce{
          grid-area: discription;
          
        }
        .submit-container{
          display: flex;
          justify-content: center;
        }
        .submit{
          width:20%;
          margin:15px;
        }
        .select{
          background:black;
          color: white;
        }
        .required{
          color: red;
        }
        `}</style>
    </>
  )
}
