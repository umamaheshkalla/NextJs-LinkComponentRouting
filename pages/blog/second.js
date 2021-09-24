import Link from "next/link"

function Second(){
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
                Second Blogcd
            </h1>
        </center>
        </>
    )
}

export default Second