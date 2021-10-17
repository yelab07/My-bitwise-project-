import { TypesOfActions } from "../Constants/Types-OfActions";

const initialState = {
    products: [{
        id: 1,
        title: "dip",
        catagory:"men"
        
    }]
}

export const Reducer = (state, {type,payload}) => {
    switch (type) {
        case TypesOfActions.SET_PRODUCTS:
            return state;
             default:
            return state;
    }
    
}