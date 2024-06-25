import React from "react"
import Contact from "./Contact";
import './style.css';
import luffy from '../images/luffy.jpeg'
import zoro from '../images/zoro.jpeg'
import nami from '../images/nami.jpg'
import usopp from '../images/usopp.jpg'
import sanji from '../images/sanji.jpg'
import chopper from '../images/chopper.jpg'
import robin from '../images/robin.jpg'
import franky from '../images/franky.jpg'
import brook from '../images/brook.jpg'

function App() {
  return (
    <div className="contacts">
      <Contact 
        img = {luffy}
        name = "Monkey.D.Luffy"
        phone  = "4561237892"
        email = "luffy@strawhat.pirates"
      />
      <Contact 
        img = {zoro}
        name = "Roronoa Zoro"
        phone  = "5435424352"
        email = "lostzoro@strawhat.pirates"
      />
      <Contact 
        img = {nami}
        name = "Nami"
        phone  = "9856737892"
        email = "nami@strawhat.pirates"
      />
      <Contact 
        img = {usopp}
        name = "Usopp"
        phone  = "4444231112"
        email = "usopp@strawhat.pirates"
      />
      <Contact 
        img = {sanji}
        name = "Sanji"
        phone  = "9871224435"
        email = "sanji@strawhat.pirates"
      />
      <Contact 
        img = {chopper}
        name = "Tony Tony Chopper"
        phone  = "1234567891"
        email = "chopper@strawhat.pirates"
      />
      <Contact 
        img = {robin}
        name = "Nico Robin"
        phone  = "9936587441"
        email = "robin@strawhat.pirates"
      />
      <Contact 
        img = {franky}
        name = "Franky"
        phone  = "7005671234"
        email = "franky@strawhat.pirates"
      />
      <Contact 
        img = {brook}
        name = "Brook"
        phone  = "8368753645"
        email = "brook@strawhat.pirates"
      />
      
    </div>
  );
}

export default App;
