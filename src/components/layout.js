import React, { Component } from 'react'
import Helmet from 'react-helmet'
// import Header from '../components/header'
import '../styles/index.scss'

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="wrapper">
        <Helmet
          title="Brand hub - David Riches"
          meta={[
            { name: 'description', content: 'This site is a placeholder for brand-hub.co.uk (no longer live).' },
            { name: 'keywords', content: 'Brand Hub London, Brand Hub' },
          ]}
        />
        {/* <Header /> */}
          {children}
      </div>
    )
  }
}

export default Layout
