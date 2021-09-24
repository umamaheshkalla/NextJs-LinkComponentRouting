import { useRouter } from "next/router"
import Link from 'next/link'

function Docs(){
const router = useRouter()
const {params = []} = router.query
console.log(params)

if (params.length == 2){
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
            <h1>Viewing Docs for {params[0]} and {params[1]}</h1>
        </center>
        </>
    )
}

if (params.length == 1){
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
                Viewing Docs for {params}
            </h1>
        </center>
        </>
    )
}
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
                Docs Home Page
            </h1>
        </center>
        </>
    )
}

export default Docs