import Link from "next/link"

function PlaceOrder(){
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
            <h1>Thank You!!</h1>
            <h2>
                Order Placed Successfully.....
            </h2>
        </center>
        </>
    )
}

export default PlaceOrder