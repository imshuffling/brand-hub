import React from 'react'
import Layout from "../components/layout.js"
import styled from 'styled-components'
import { Heading, SubHeading } from '../elements'

const Section = styled.section`
  max-width: 600px;
  animation: intro 800ms cubic-bezier(0.694, 0, 0.335, 1) 0s backwards;
`

const IndexPage = (props) => (
  <Layout>
    <Section>
      <Heading>This is a <a target="_blank" rel="noopener noreferrer" href="https://www.styled-components.com/"><span className="MainText">Styled Components</span><span className="HoverText">Styled Components</span></a> demo.</Heading>
      <SubHeading>Built in React, using <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org/"><span className="MainText">Gatsby.js</span><span className="HoverText">Gatsby.js</span></a> and hosted on <a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/"><span className="MainText">Netlify.</span><span className="HoverText">Netlify.</span></a></SubHeading>
    </Section>
  </Layout>
)

export default IndexPage