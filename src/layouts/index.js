import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Brand Hub"
      meta={[
        { name: 'description', content: 'Brand Hub' },
        { name: 'keywords', content: 'brand hub' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
