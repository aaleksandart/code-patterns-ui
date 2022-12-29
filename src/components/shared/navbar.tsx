import { Link, Outlet } from 'react-router-dom'

// SRP: Komponent som visar vår navbar.

// OCP: Kan utökas utan att modifieras eller krasha.

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-4 shadow">
                <div className="container navbar-content">
                    <Link className="navbar-brand brand-text" to="/">Clothing Patterns</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link shadow" aria-current="page" to='/'>Home</Link>
                            <Link className="nav-link shadow" to="/products">Products</Link>
                            <Link className="nav-link shadow" to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default navbar