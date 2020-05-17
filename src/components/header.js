import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link className={headerStyles.title} to="/">
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
