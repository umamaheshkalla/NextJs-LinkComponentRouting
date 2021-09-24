import Link from "next/link"

function Profile(){
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
           <h1> Profile Page</h1>
        </center>
        </>
    )
}

export default Profile