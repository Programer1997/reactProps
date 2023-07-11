import React from "react";
import "./styles.scss";
import Main from "./components/main/main.jsx";
import Card from "./components/cards/cards.jsx";

function App(){


    return (<>
    <div className="every">
        <Main/>
    </div>
    <div className="cardsIndividuals">
        <Card  qualify="5.0" city="joshua Tree,California,US" price="From $6,610/night" image ="https://images.unsplash.com/photo-1656392047371-b3fd66e9bc9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyYm5iJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
        <Card  qualify="5.0" city="joshua Tree,California,US" price="From $6,610/night" image ="https://plus.unsplash.com/premium_photo-1683296357476-db69c5ded3a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyYm5ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
        <Card  qualify="5.0" city="joshua Tree,California,US" price="From $6,610/night" image ="https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWlyYm5ifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"/>
    </div>
    </>);
};


export default App;
