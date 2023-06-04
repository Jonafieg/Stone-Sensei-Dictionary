import {Fragment} from 'react'
import {Outlet, Link} from 'react-router-dom'
import './navigation.styles.css'

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <p>Stone Sensei</p>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        <p>Home</p>
                    </Link>
                    <Link className='nav-link' to='/about'>
                        <p>About</p>
                    </Link>
                    <Link className='nav-link' to='/wordbank'>
                        <p>Wordbank</p>
                    </Link>
                    <Link className='grammar-guide' to='/grammar'>
                        <p>Grammar</p>
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation