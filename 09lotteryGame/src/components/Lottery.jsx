import { useState } from "react"
import { genRandNums, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery( {n=3, winCondition} ) {

    let [ticket, setticket] = useState(genRandNums(n));

    let buyTicket = () => {
        setticket(genRandNums(n));

    }

    let isWin = winCondition(ticket);

    return (
        <div>
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket} />
            <br />
            <button className="btn" onClick={buyTicket}>Buy New Ticket</button>
            <h3 style={{backgroundColor:'Tomato', borderRadius: '10px'}}>{isWin && "Congratulation, You Won !"}</h3>
        </div>
    )
}

export default Lottery