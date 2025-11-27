import { createContext, useContext, useState } from "react";

const cartCtx = createContext()

export default function CartContextProvider ({children}){ //oricare copil din cartcontextprovider va avea acces la cos
    
    const [cart, setCart] = useState([])

    const addToCart = (id) => {
        setCart(()=>{
            const productExists = cart.find((product) => product.id === id)

            if(!productExists){
                return [
                    ...cart,
                    {
                        id,
                        quantity : 1
                    }
                ]
            }
            else
            {
                return cart;
            }
        })
    }
    return (<cartCtx.Provider value = {{cart, addToCart}}>
        {children}
    </cartCtx.Provider>)

}

export const useCartContext = () => useContext(cartCtx)