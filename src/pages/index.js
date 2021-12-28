import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm Ted, a full-stack developer living in San Francisco. Need a Software
        Engineer <Link to="/contactus">Contact me</Link>
      </h2>
    </Layout>
  )
}

export default IndexPage
