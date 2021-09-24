import Link from 'next/link'


function blog(){
    return(
        <>
        <Link href="/" >
<a>
    <h2>
    {`<-`} Back To Home
    </h2>
</a>
        </Link>
        <center>
            <h1>
                Blog Page
            </h1>
        </center>
        <center>
            <Link href="/blog/first">
            <a>
                <h3>
                First Blog
                </h3>
            </a>
            </Link>
        </center>
        <center>
            <Link href="/blog/second">
            <a>
                <h3>
                Second Blog
                </h3>
            </a>
            </Link>
        </center>
        </>
    )
}

export default blog