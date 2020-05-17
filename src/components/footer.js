import React from 'react'

const Footer = ({ siteAuthor }) => {
    return (
        <footer>
            Built with ❤️ by {siteAuthor}, © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer