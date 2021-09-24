import Link from 'next/link'


function Home(){
    return(
        <center>
            <h1>
                Home Page
            </h1>
            <Link href = "/profile">
            <a >
                <h4>
                Profile
                </h4>
            </a>
            </Link>
            <br/>
            <Link href = "/blog">
            <a >
                <h4>Blog Page</h4>
            </a>
            </Link>
            <br/>
            <Link href = "/docs">
            <a >
                <h4>
                Docs Page</h4>
            </a>
            </Link>
            <br/>
            <Link href = "/products">
            <a >
                <h4>
                Products Page</h4>
            </a>
            </Link>
            
        </center>
    )
}

export default Home