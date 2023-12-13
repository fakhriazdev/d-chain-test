import React from 'react';

let data = [
    {
        "id":"FI-C-36974019-6.23",
        "name":"Astra International Tbk.",
        "email":"astra_1@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.24",
        "name":"Astra International Tbk.",
        "email":"astra_2@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },

]

const CompanyService = () => {
    const fetchCompanys =()=>{
        return new Promise((resolve) => {
            setTimeout(()=>{
                console.log(data)
                resolve(data)
            },2000)
        })
    }
    return {
        fetchCompanys,
    }
};

export default CompanyService;