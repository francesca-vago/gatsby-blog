import React from 'react'
import { graphql, Link }from 'gatsby'
import Layout from '../../components/Layout'

export default function Projects({ data }) {
    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
            <h1>Projects</h1>
                {
                    projects.map(project => {
                        const { title, stack, slug } = project.frontmatter

                        return (
                            <Link to={`/projects/${slug}`} key={project.id}>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{stack}</p>
                                </div>
                            </Link>
                        )
                    })
                }
        </Layout>
    )
}

export const query = graphql`
    query MyQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                    title
                    stack
                    slug
                    date
                }
            }
        }
    }
`




