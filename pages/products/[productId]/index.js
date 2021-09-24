import { useRouter } from "next/dist/client/router";
import Link from "next/link"

function ProductDetails(){
const router = useRouter()
const productId = router.query.productId

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
        </center>
        </>
    )
}

export default ProductDetails