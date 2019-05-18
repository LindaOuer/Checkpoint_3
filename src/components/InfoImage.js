import React, { Component } from "react";
import background from "../images/Background.jpg";

class InfoImage extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="layer1">
          <img src={background} className="App-background" alt="background" />
        </div>
        <div className="layer2">
          <p className="chif">Quelques Chiffres</p>
          <div className="InfoBlock">
            <div className="InfoText">
              <p className="numbers">+20,000</p>
              <p>passionnes du digital</p>
            </div>
            <div className="InfoText">
              <p className="numbers">+500</p>
              <p>Etudiants depuis le demarrage en Aout 2016</p>
            </div>
            <div className="InfoText">
              <p className="numbers">+300</p>
              <p>Produits developpes</p>
            </div>
            <div className="InfoText">
              <p className="numbers">+30</p>
              <p>Instructeurs Game, web et mobile</p>
            </div>
            <div className="InfoText">
              <p className="numbers">+50</p>
              <p>speakers</p>
            </div>
            <div className="InfoText">
              <p className="numbers">
                400 m<sup>2</sup>
              </p>
              <p>de hackerspace au coeur du lac 1</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InfoImage;
