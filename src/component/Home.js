import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getProduct} from "../service/Product-service";

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct());
    }, []);

    let listProduct = useSelector((state) => {
        console.log(state.listProducts.listProducts, "state");
        return state.listProducts.listProducts;
    })

    return (<>
      <table style={{border: "1px solid black"}}>
          <tr style={{border: "1px solid black"}}>
              <td style={{border: "1px solid black"}}>name</td>
              <td style={{border: "1px solid black"}}>quantity</td>
          </tr>
          {listProduct.map((product) => {
              return <tr style={{border: "1px solid black"}}>
                  <td style={{border: "1px solid black"}}>{product?.name}</td>
                  <td style={{border: "1px solid black"}}>{product?.quantity}</td>
              </tr>
          })}
      </table>
    </>)
}