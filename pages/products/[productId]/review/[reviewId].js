import { useRouter } from "next/dist/client/router";
import Link from "next/link"

function ProductDetails(){
const router = useRouter()
const {productId,reviewId}= router.query

    return(
        <>
        <Link href="/products" >
         <a>
    <h1>
    {`<-`} Back To Products Page
    </h1>
</a>
   </Link>
        <center>
            <h1>
               Review {reviewId} for Product {productId}
            </h1>
            <h3>
                Good
            </h3>
        </center>
        </>
    )
}

export default ProductDetails