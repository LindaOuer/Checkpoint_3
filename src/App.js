import React, { Component } from "react";
import "./App.css";
import InfoImage from "./components/InfoImage";
import Box from "./components/Box";
import ImageBox from "./components/ImageBox";
import { tunis, sousse, sfax } from "./images";

class App extends Component {
  render() {
    let messages = [
      {
        id: 0,
        name: "Full Time Program",
        content:
          "Un programme intensif de 3 mois pour devenir developpeur fullstack js ou java. Un coaching technique et professionnel regulier et des liens tres forts avec le monde de l'entreprise."
      },
      {
        id: 1,
        name: "Part Time Program",
        content:
          "Tu peux developper ton produit technologique pendant l'annee scolaire si tu es etudiant ou en parallele de ton travail si tu es professionnel. Ca se passe tous les weekends (demi-journee Samedi ou dimanche) dans notre Hackerspace!"
      },
      {
        id: 2,
        name: "Kids Coding Program",
        content:
          "Ce programme vise a initier les plus jeunes (8-12 ans) a l'informatique et a la programmation sur 4 niveaux. Un niveau dure 2 mois. A la fin du programme, l'enfant doit presenter son projet au PDG d'une entreprise technologique."
      },
      {
        id: 3,
        name: "Summer academy",
        content:
          "Developpe ton produit technologique pendant 3 semaines pendant l'ete. Une experience tres riche d'apprentissage et de rencontres avec des passionnes de la technologie."
      }
    ];
    const items = messages.map((item, key) => (
      <Box pos={item.id} name={item.name} content={item.content} />
    ));
    return (
      <div className="App">
        <p className="App-title" style={{ textAlign: "left" }}>
          Nos programmes
        </p>
        <div className="App-head">
          <div className="BoxContainer">{items}</div>

          <InfoImage />
        </div>
        <div className="App-body">
          <p className="App-title"> Ou se passent les sessions?</p>
          <p style={{ color: "#3e3e3e" }}>
            Les sessions se passent dans les Hackerspaces de GoMyCode dans les
            villessuivantes: L'hebergement est possible dans la limite des
            places disponibles.
          </p>

          <div className="App-images">
            <ImageBox image={tunis} title="Tunis" />
            <ImageBox image={sousse} title="Sousse" />
            <ImageBox image={sfax} title="Sfax" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
