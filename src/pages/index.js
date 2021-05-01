import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

import '../styles/index.scss'


export default function HomePage({ data }) {
  
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" />

      <h1>{ title }</h1>
      <p>Welcome to my portfolio</p>
      <p>I build fast, flexible websites.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      
    </Layout>
  )
}

export const query = graphql `
  query getSiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
}`



