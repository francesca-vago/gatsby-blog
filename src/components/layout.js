/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from './Navbar/Navbar'
import Footer from "./Footer/Footer"

import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata;

  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <div className={layoutStyles.content}>
        <main>{children}</main>
      </div>
      <Footer siteAuthor={author}/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
