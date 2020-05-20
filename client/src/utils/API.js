import axios from "axios";

export function getTickets ()
    {
        axios.get("http://localhost:5000/tickets")
        .then(response =>
        {
            console.log(response);
            return response;
        })
    }