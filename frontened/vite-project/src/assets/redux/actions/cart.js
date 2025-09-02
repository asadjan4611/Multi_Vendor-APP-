


//add to cart

export const addToCart= (data)=>async(dispatch,getState)=>{
    dispatch({
        type:"addToCart",
        payload:data,
    })


    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
    return data;
}

// remove from cart


export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:"removeFromCart",
        payload:id
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cart));
    // console.log(id);
    return id;
}