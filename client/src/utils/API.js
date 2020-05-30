import axios from "axios";

export default {

    getTickets: function () {
        axios.get("http://localhost:5000/tickets")
            .then(response => {
                console.log(response);
                return response;
            })
    },
    deleteTickets: function (id) {
        axios.delete("http://localhost:5000/tickets/" + id)
            .then(response => {
                console.log(response);
                return response

            })
    }
};