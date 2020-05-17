import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
    return (
        <nav>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Menu