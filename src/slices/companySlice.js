

const companySlice = createSlice({
    name: 'Companies',
    initialState:{
        companies:[],
        selectedCompany: null,
    },
    extraReducers:(builder) =>{
        builder.addCase(companyAction.fulfilled,(state,{payload})=>{
            if(payload){
                state.companies = payload.data;
            }
        })
        builder.addCase(selectedCompanyAction.fulfilled,(state,{payload})=>{
            if(payload){
                state.selectedCompany = payload;
            }
        })
    }
})

export default companySlice;