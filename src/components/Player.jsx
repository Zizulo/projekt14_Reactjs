import { players as Players } from "../data/players";
import { useState, useRef } from "react";

export function Player(){
    const[players, setPlayer] = useState(Players);

    const playerClubRef = useRef(null);
    const playerNumberRef = useRef(null);
    const playerFirstName = useRef(null);
    const playerLastName = useRef(null);

    const handlePlayersAdd = () => {
        const newPlayer = [...players];

        const club = playerClubRef.current.value;
        const number = parseInt(playerNumberRef.current.value);
        const firstName = playerFirstName.current.value;
        const lastName = playerLastName.current.value;

        if(typeof club !== "string"){
            throw new Error(`Nieprawidłowa nazwa klubu`);
        }
        if(isNaN(number)){
            throw new Error(`Nieprawidłowy numer na koszulce ${number}`);
        }
        if(typeof firstName !== "string"){
            throw new Error(`Nieprawidłowe imię`);
        }
        if(typeof lastName !== "string"){
            throw new Error(`Nieprawidłowe nazwisko`);
        }else{
            newPlayer.push({
                playerClub: club,
                playerNumber: number,
                playerFN: firstName,
                playerLN: lastName
            });
            setPlayer(newPlayer);
        } 
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {players.map(({playerClub, playerNumber, playerFN, playerLN}, index) => {
                    return(
                        <>
                            <div key={index} className={`player player__${playerClub}`}>{playerNumber}. {playerFN} {playerLN}</div>
                        </>
                    );

                })}
                
                
            </div>   

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}></div>
                <input placeholder="Club..." type="text" id="playerClub" ref={playerClubRef} style={{padding: 10, fontSize: 15}}></input>
                <input placeholder="Number..." type="text" id="playerNumber" ref={playerNumberRef} style={{padding: 10, fontSize: 15}}></input>
                <input placeholder="FirstName..." type="text" id="playerFN" ref={playerFirstName} style={{padding: 10, fontSize: 15}}></input>
                <input placeholder="LastName..." type="text" id="playerLN" ref={playerLastName} style={{padding: 10, fontSize: 15}}></input>
                <button style={{
                    padding: 10,
                    fontSize: 15,
                }} onClick={handlePlayersAdd}>Add new player</button>      
        </>       
    );
}