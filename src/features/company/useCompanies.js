import React, {useEffect, useState} from 'react';
export const useCompanies = () => {
let cloud = [
    {
        "id":"FI-C-36974019-6.23",
        "name":"Astra International Tbk.",
        "email":"astra_1@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.24",
        "name":"Makmur",
        "email":"astra_2@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.25",
        "name":"Manusia Setengah Macan",
        "email":"astra_3@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Manusia kok macan?",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Jakarta kok macan?",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Kemeja sampit",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Kemeja sampit",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Kemeja sampit",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Kemeja sampit",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
    {
        "id":"FI-C-36974019-6.26",
        "name":"Kemeja sampit",
        "email":"astra_4@mail.com",
        "phoenNumber":"+62 888=888-888",
        "limit":2000000000,
    },
]
    const [companies, setCompanies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [sortOrder, setSortOrder] = useState();

    const handlerSort = (e) => {
        setSortOrder(e.target.value)
    };
    const fetchCompanies = async () =>{
        setIsLoading(true);
        try {
            setTimeout(async()=>{
                const companiesResponse = cloud
               if(sortOrder){
                   const sortedData = companiesResponse.sort((a,b)=>{
                       return sortOrder === 'asc'
                           ? a.name.localeCompare(b.name)
                           : b.name.localeCompare(a.name)
                   })

                   setCompanies(sortedData)
                   setIsLoading(false)
               }
                setCompanies(companiesResponse)
                setIsLoading(false)
            },1500)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCompanies();
    }, [sortOrder]);


    return {
        data:companies,
        handlerSort,
        sortOrder,
        isLoading,
    };
};

