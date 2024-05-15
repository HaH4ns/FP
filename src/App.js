import React, { useState } from "react";
import FloorplanSVG from './svg/floorplansvg'; // Ensure correct path to FloorplanSVG
import SecondFloorSVG from './svg/SecondFloorSVG'; // Ensure correct path to SecondFloorSVG
import "./svg/styles.css"; // Ensure this CSS includes the necessary styles

const App = () => {
  const [selected, setSelected] = useState(undefined);
  const [currentFloor, setCurrentFloor] = useState("firstfloor");

  const handleFloorClick = (floor) => {
    setCurrentFloor(floor);
  };

  const handleRoomClick = (room) => {
    setSelected(room);
  };

  return (
    <div className="App">
      <div className="rooms">
        <h2>Room Availability</h2>
        <p className="tip">Floor layout</p>
        <div>
          <b>Floors</b>
        </div>
        <div
          onClick={() => handleFloorClick("firstfloor")}
          className={`room-link clickable ${currentFloor === "firstfloor" ? "active" : ""}`}
        >
          <span className="square" style={{ backgroundColor: "#3b82f6" }}></span>
          First Floor
        </div>
        <div
          onClick={() => handleFloorClick("secondfloor")}
          className={`room-link clickable ${currentFloor === "secondfloor" ? "active" : ""}`}
        >
          <span className="square" style={{ backgroundColor: "#3b82f6" }}></span>
          Second Floor
        </div>
        <br />
        <div>
          <b>Available Rooms</b>
        </div>
        {currentFloor === "firstfloor" ? (
          <>
            <div
              onMouseEnter={() => handleRoomClick("Room_A")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_A")}
              className={`room-link ${selected === "Room_A" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room A
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_B")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_B")}
              className={`room-link ${selected === "Room_B" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room B
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_C")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_C")}
              className={`room-link ${selected === "Room_C" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room C
            </div>
          </>
        ) : (
          <>
            <div
              onMouseEnter={() => handleRoomClick("Room_D")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_D")}
              className={`room-link ${selected === "Room_D" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room D
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_E")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_E")}
              className={`room-link ${selected === "Room_E" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room E
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_F")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_F")}
              className={`room-link ${selected === "Room_F" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room F
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_G")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_G")}
              className={`room-link ${selected === "Room_G" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room G
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_H")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_H")}
              className={`room-link ${selected === "Room_H" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room H
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_I")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_I")}
              className={`room-link ${selected === "Room_I" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room I
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_J")}
              onMouseLeave={() => setSelected(undefined)}
              onClick={() => handleRoomClick("Room_J")}
              className={`room-link ${selected === "Room_J" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room J
            </div>
            <div
              onMouseEnter={() => handleRoomClick("Room_K")}
              onMouseLeave={()=> setSelected(undefined)}
              onClick={() => handleRoomClick("Room_K")}
              className={`room-link ${selected === "Room_K" ? "active" : ""}`}
            >
              <span className="square" style={{ backgroundColor: "#a229b6" }}></span>
              Room K
            </div>
          </>
        )}
      </div>
      {currentFloor === "firstfloor" ? (
        <FloorplanSVG selected={selected} onHovered={setSelected} />
      ) : (
        <SecondFloorSVG selected={selected} onHovered={setSelected} />
      )}
    </div>
  );
};

export default App;

