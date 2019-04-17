import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout.js"
import Img from 'gatsby-image'
import logo from '../logo.png'
// import dent from '../dent.svg'
// import dentPrimary from '../dent-primary.svg'
// import dentLight from '../dent-light.svg'

const IndexPage = (props) => (
  <Layout>
    <section className="hero clearfix dent-container light">
      <div className="dent-cover">
        <div className="contain">
          <span className="label green"></span>
          <h1 className="landing-descend"><img alt="brand hub logo" src={logo} /></h1>
          <h3>In memory of brand-hub.co.uk</h3>
        </div>
      </div>
    </section>

    <section className="size dent-container">
		<div className="dent-cover">
			<div className="contain">
        <h2>The Brief</h2>
        <p>Provide a web based solution for a startup marketing company.</p>
        <strong>What I delivered</strong>
        <p>Branding, UX &amp; Website (Drupal 7 CMS with Omega templating engine).</p>
			</div>
		</div>
	</section>


	<section className="features dent-container light">
		<div className="dent-cover">
			<div className="contain">
        <h2>Draft Homepage</h2>
        <p>Client settled for branding and overral layout, below in a screenshot in development.</p>
        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
			</div>
		</div>
	</section>

  <section class="boilerplate bg dent-container">
		<div class="dent-cover">
			<div class="contain">
        <h2>Branding concept phase</h2>
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
      </div>
		</div>
	</section>

  <section className="boilerplate bg dent-container light">
		<div className="dent-cover">
			<div className="contain">
        <h2>Contact page</h2>
        <p>2 column layout with built in form.</p>
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
			</div>
		</div>
	</section>

  <section>
    <div className="contain">
      <p><a href="https://davidrich.es" rel="noopener">Back to davidrich.es</a></p>
    </div>
  </section>
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
