import { useRouter } from "next/dist/client/router";
import Link from "next/link"

function ProductDetails(){
const router = useRouter()
const productId = router.query.productId

const onPlaceOrder = () => {
    console.log("Order Placed")
    router.push("/placeorder")
}
    return(
        <>

<Link href="/products" >
         <a>
    <h1>
    {`<-`} Back To Products
    </h1>
</a>
   </Link>
        <center>
            <h1>
                Details of Product :- {productId}
            </h1>
        </center>

        <center>
            <Link href = {`/products/${productId}/review/1`}>
            <a>
                <h3>
                    Reviews For Product
                </h3>
            </a>
            </Link>
            <button onClick = {onPlaceOrder}>
                Place Order
            </button>
        </center>
        </>
    )
}

export default ProductDetails