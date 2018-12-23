
import axios from 'axios'
export const GET_INVOICES_START = "InvoiceActions/GetInvoicesStart";
export const GET_INVOICES_COMPLETE = "InvoiceActions/GetInvoicesComplete";
export const getInvoices = (filters) => async (dispatch, getState) => {
    dispatch({ type: GET_INVOICES_START });
    let response;
    try {
        response = await axios.post("https://jsonplaceholder.typicode.com/posts/");
    }catch (error) {
        return error.response.data;
    }
    console.log("response");
}

export default getInvoices;