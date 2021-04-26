import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <nav>
            <h1>Logo</h1>
            <div>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
