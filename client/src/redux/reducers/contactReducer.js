const { GET_CONTACT } = require("../actions/Type")

export const contactReducer = (state= [],{ type, payload}) =>{
   switch (type){
    case  GET_CONTACT:
        return payload
        default : 
        return state
   }
}

export default contactReducer