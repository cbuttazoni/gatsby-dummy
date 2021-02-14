import React from "react"
import "../styles/styles.scss"
import Layout from "../components/layout/layout"
import MetaData from "../components/meta-data/meta-data"
import dummy from "../images/dummy.jpg"

const AboutPage = () => (
    <Layout image={dummy}>
      <MetaData title="About" />
      <main>
        <h1>About the Author</h1>
        <p>Welcome to my Gatsby site.</p>
      </main>
  </Layout>
)
export default AboutPage
