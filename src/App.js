import React, { useState } from "react";
import Game1 from "./components/Game1";
import Game2 from "./components/Game2";
import Game3 from "./components/Game3";
import Game4 from "./components/Game4";

function App() {
  const [activeGame, setActiveGame] = useState(null);

  return (
    <>
    <div style={{backgroundColor:"#00000077", width:"100%", display: "flex", justifyContent:"center",  padding: "10px 20px", fontSize:"20px"}}>Biko game app</div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw", overflow: "hidden" }}>
      {activeGame === null && (
        <div style={{ textAlign: "center" }}>
          <button 
            onClick={() => setActiveGame("Game1")}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          >
            2048
          </button>
          <button 
            onClick={() => setActiveGame("Game2")}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          >
            X O with Friends
          </button>
          <button 
            onClick={() => setActiveGame("Game3")}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          >
            Hangman
          </button>
          <button 
            onClick={() => setActiveGame("Game4")}
            style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          >
            Ssnake
          </button>
        </div>
      )}

      {activeGame === "Game1" && (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Game1 />
        </div>
      )}

      {activeGame === "Game2" && (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Game2 />
        </div>
      )}

      {activeGame === "Game3" && (
        <div style={{ width: "500px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", overflowY: "auto" }}>
          <Game3 />
        </div>
      )}

      {activeGame === "Game4" && (
        <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", overflowY: "auto", paddingBottom: "50px", position: "relative" }}>
          <div style={{ transform: "translate(-50px, -100px)", position: "relative", paddingBottom: "100px" }}>
            <Game4 />
          </div>
        </div>
      )}

      {activeGame && (
        <button 
          onClick={() => setActiveGame(null)}
          style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", position: "absolute", bottom: "20px" }}
        >
          Back to Menu
        </button>
      )}
    </div>
    </>
  );
}

export default App;
