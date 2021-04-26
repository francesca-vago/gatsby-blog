import React from "react"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my portfolio</p>
    <p>I build fast, flexible websites.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
