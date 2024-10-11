import TicketNum from "./TicketNum";
import './Ticket.css';

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <h3>Ticket</h3>
            {ticket.map((value, idx) => (
                <TicketNum num={value} key={idx} />
            ))}
        </div>
    );
}