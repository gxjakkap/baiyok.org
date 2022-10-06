import Link from "next/link"

const Header = () => {
    return (
        <header className="mb-10">
            <div>
            <h3 className="md:float-left mb-0"><Link href="/">Baiyok</Link></h3>
                {/* <nav className="flex flex-wrap list-none pl-0 mb-0 justify-center md:float-right space-x-5">
                    <Link className="nav-link fw-bold py-1 px-0" href="#">Home</Link>
                    <Link className="nav-link fw-bold py-1 px-0" href="/random">Random</Link>
                    <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
                </nav> */}
            </div>
        </header>
    )
}

export default Header