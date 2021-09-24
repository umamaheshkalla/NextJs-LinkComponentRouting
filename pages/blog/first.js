import Link from "next/link"

function First(){
    return(
    <>
      <Link href="/blog" >
<a>
    <h2>
    {`<-`} Back To Blogs Page
    </h2>
</a>
</Link>
        <center>
            <h1>
                First Blog
            </h1>
        </center>
        </>
    
    )
}

export default First