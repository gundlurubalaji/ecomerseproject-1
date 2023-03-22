import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
        const {cartData}=useContext(CartContext)
        const total=useRef()
        const RazorPay =useRazorpay();
        const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_lNdrVS4VlBSCrw",
            amount: total*100,
            currency: "INR",
            name: "balajigame",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "gundluru balaji",
                email: "balajirock7093@gmail.com",
                contact: "9505716578"
            
            },
            notes: {
                address: "office address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    
   return <>
   <section>
        <section>
                {cartData.map((cartitem)=>{
                        return(
                                <article>
                                        <img src={`http://localhost:1337${cartitem?.image?.data?.attributes?.url}`}  alt=""/>
                                        <article>{cartitem.title}</article>
                                        <article>{cartitem.price}</article>
                                        <button>Remove from card</button>

                                </article>
                        )
                                
                        
                })}
        </section>
        <section>
                <article>Billilng information</article>
                {cartData.map((cart)=>{
                        // total.current.price = total.current.price + cart.price
                        return<article>
                                <span>{cart.title}</span>
                                <span>{cart.price}</span>

                        </article>
                })}
                <article>Total:3000</article>
                <button onClick={()=>{razorPayDisplay(5000)}}>ceckout</button>

                
                
                
        </section>
   </section>
             
                          
           
        </>
    
}
export default Cart;