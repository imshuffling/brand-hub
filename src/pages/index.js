import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout.js"
import Img from 'gatsby-image'

const IndexPage = (props) => (
  <Layout>
    <section>
      <h3>Placeholder website for brand-hub.co.uk</h3>
      <strong>The Brief</strong>
      <p>Provide a web based solution for a startup marketing company.</p>
      <strong>What I delivered</strong>
      <p>Branding, UX &amp; Website (Drupal 7 CMS with Omega templating engine).</p>
    </section>
    <section>
      <h5>Branding concept phase</h5>
      <p>Working with the client rapidly prototyping different logo designs.</p>
      <div className="grid-2">
        <div>
          <strong>Concept 1</strong>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <div>
          <strong>Concept 2</strong>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </div>
    </section>
    <section>
      <h5>Draft Homepage</h5>
      <p>Client settled for branding and overral layout, below in a screenshot in development.</p>
      <Img fluid={props.data.imageSix.childImageSharp.fluid} />
    </section>
    <section>
      <h5>Contact page</h5>
      <p>2 column layout with built in form.</p>
      <Img fluid={props.data.imageFour.childImageSharp.fluid} />
    </section>
    <p><a href="https://davidrich.es" rel="noopener">Back to davidrich.es</a></p>
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1400) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "brand-hub.png" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "brand-hub2.png" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "brand-int-homepage.png" }) {
      ...fluidImage
    }
    imageFour: file(relativePath: { eq: "contact.png" }) {
      ...fluidImage
    }
    imageFive: file(relativePath: { eq: "debut-light.png" }) {
      ...fluidImage
    }
    imageSix: file(relativePath: { eq: "homepage.png" }) {
      ...fluidImage
    }
  }
`
