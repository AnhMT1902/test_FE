import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    'getProduct',
    async () => {
        const res = await axios.get(`http://localhost:3000`);
        console.log(res.data, 'server response');
        return res.data
    }
)