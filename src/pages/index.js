import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1 className="title">Hi people</h1>
    <h2 className="subtitle">
      Welcome to your new Gatsby site.
    </h2>
    <p>Now go build something great.</p>
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
