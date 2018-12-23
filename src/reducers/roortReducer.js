const initialState ={
    data:[{
        "id":1,
        "addr_book_nr":"2889697932",
        "cust_po_nm":"8307546583",
        "ord_nr":374002,
        "bol_nr":7500,
        "invc_nr":44039,
        "invc_dt":"Mar 25, 2018 12:00:00 AM",
        "invc_tot_qty":45,
        "inv_tot_wgt":68,
        "extndd_tot_am":15364,
        "crncy_cd":"RUB",
        "ship_to_cd":"Venëv"
    },
        {
            "id":2,
            "addr_book_nr":"9501568369",
            "cust_po_nm":"3403394026",
            "ord_nr":273556,
            "bol_nr":2328,
            "invc_nr":68684,
            "invc_dt":"Oct 29, 2018 12:00:00 AM",
            "invc_tot_qty":67,
            "inv_tot_wgt":72,
            "extndd_tot_am":15229,
            "crncy_cd":"EUR",
            "ship_to_cd":"Tabuaço"
        },
        {
            "id":3,
            "addr_book_nr":"9809695691",
            "cust_po_nm":"3624802208",
            "ord_nr":131553,
            "bol_nr":2107,
            "invc_nr":64662,
            "invc_dt":"Sep 23, 2018 12:00:00 AM",
            "invc_tot_qty":75,
            "inv_tot_wgt":76,
            "extndd_tot_am":5466,
            "crncy_cd":"THB",
            "ship_to_cd":"Mae Sai"
        },
        {
            "id":4,
            "addr_book_nr":"4010682310",
            "cust_po_nm":"9897880879",
            "ord_nr":680017,
            "bol_nr":1551,
            "invc_nr":42396,
            "invc_dt":"Oct 13, 2018 12:00:00 AM",
            "invc_tot_qty":28,
            "inv_tot_wgt":1,
            "extndd_tot_am":67063,
            "crncy_cd":"EUR",
            "ship_to_cd":"Mâcon"
        },
        {
            "id":5,
            "addr_book_nr":"0219604878",
            "cust_po_nm":"8317175138",
            "ord_nr":786699,
            "bol_nr":5219,
            "invc_nr":71799,
            "invc_dt":"Mar 13, 2018 12:00:00 AM",
            "invc_tot_qty":65,
            "inv_tot_wgt":21,
            "extndd_tot_am":82678,
            "crncy_cd":"PLN",
            "ship_to_cd":"Rybie"
        },
        {
            "id":6,
            "addr_book_nr":"6243168646",
            "cust_po_nm":"0015848043",
            "ord_nr":823488,
            "bol_nr":7901,
            "invc_nr":14194,
            "invc_dt":"Oct 10, 2018 12:00:00 AM",
            "invc_tot_qty":98,
            "inv_tot_wgt":20,
            "extndd_tot_am":46469,
            "crncy_cd":"MXN",
            "ship_to_cd":"San Miguel"
        },
        {
            "id":7,
            "addr_book_nr":"3846576190",
            "cust_po_nm":"2723060896",
            "ord_nr":971969,
            "bol_nr":3023,
            "invc_nr":42852,
            "invc_dt":"Mar 5, 2018 12:00:00 AM",
            "invc_tot_qty":30,
            "inv_tot_wgt":21,
            "extndd_tot_am":82340,
            "crncy_cd":"RUB",
            "ship_to_cd":"Kovernino"
        },
        {
            "id":8,
            "addr_book_nr":"5870173949",
            "cust_po_nm":"4168646041",
            "ord_nr":430001,
            "bol_nr":4467,
            "invc_nr":67126,
            "invc_dt":"Oct 23, 2018 12:00:00 AM",
            "invc_tot_qty":2,
            "inv_tot_wgt":54,
            "extndd_tot_am":96058,
            "crncy_cd":"TJS",
            "ship_to_cd":"Mehron"
        },
        {
            "id":9,
            "addr_book_nr":"0699589290",
            "cust_po_nm":"4797354526",
            "ord_nr":709334,
            "bol_nr":5900,
            "invc_nr":60036,
            "invc_dt":"Aug 24, 2018 12:00:00 AM",
            "invc_tot_qty":92,
            "inv_tot_wgt":98,
            "extndd_tot_am":17653,
            "crncy_cd":"CNY",
            "ship_to_cd":"Choushui"
        },
        {
            "id":10,
            "addr_book_nr":"1039197086",
            "cust_po_nm":"9789294905",
            "ord_nr":295514,
            "bol_nr":9131,
            "invc_nr":23969,
            "invc_dt":"Apr 9, 2018 12:00:00 AM",
            "invc_tot_qty":85,
            "inv_tot_wgt":14,
            "extndd_tot_am":17472,
            "crncy_cd":"BRL",
            "ship_to_cd":"Salinópolis"
        }]
}



const rootReducer =  (state= initialState,action)=>{
    return state;
}

export default rootReducer;