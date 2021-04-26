import React from 'react'

const Footer = ({ siteAuthor }) => {
    return (
        <footer>
            Built with <span role="img" aria-label="heart">❤️</span> by {siteAuthor}, © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer