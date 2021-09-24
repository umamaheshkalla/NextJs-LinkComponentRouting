import Link from "next/link"

function Products({productId = 100}){
    return(
        <>
         <Link href="/" >
<a>
    <h1>
    {`<-`} Back To Home
    </h1>
</a>
        </Link>
        <center>
            <h1>
                Products Page
            </h1>
        </center>
        <center>
            <Link href = '/products/1'> 
            <a>
            
            <h2>
                Product 1
            </h2>
            </a>
            </Link>
            
            <Link href = '/products/2'> 
            <a>
            
            <h2>
                Product 2
            </h2>
            </a>
            </Link>
            <Link href = '/products/3'> 
            <a>
            
            <h2>
                Product 3
            </h2>
            </a>
            </Link>
            <h3>.</h3>
            
            <h3>.</h3>
            
            <h3>.</h3>

            <Link href = {`/products/${productId}`}> 
            <a>
            
            <h2>
               Product {productId}
            </h2>
            </a>
            </Link>
            
        </center>
        </>
    )
}

export default Products