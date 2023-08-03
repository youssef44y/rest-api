
import axios from "axios";
import {GET_CONTACT,} from "./Type"
import { response } from "express";
const url = " http://localhost:5000/api"

export const getContact =() => async (dispatch) => {
    await axios.get(url + "/get").the(
        (response) => dispatch({
            type: GET_CONTACT,
            payload: response.data.contact
        })
    )
}
