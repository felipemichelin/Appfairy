/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=620bd724f2ff7d0894fe7b51").then(body => body.text()), isAsync: false },
  { loading: fetch("js/javy-influencers.js").then(body => body.text()), isAsync: false },
]

let Controller

class ThankYouView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/ThankYouController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ThankYouView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '620d98b7e5cb3b8b04c25566'
    htmlEl.dataset['wfSite'] = '620bd724f2ff7d0894fe7b51'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = ThankYouView.Controller !== ThankYouView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\javy-influencers.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-form">
            <div className="w-embed">
              <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
              <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-material-icons, .af-view .af-class-material-icons-outlined, .af-view .af-class-material-icons-two-tone, .af-view .af-class-material-icons-round, .af-view .af-class-material-icons-sharp {\n  font-weight: normal;\n  font-style: normal;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n  display: inline-block;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  font-feature-settings: 'liga';\n  }\n  .af-view .af-class-material-icons-s {\n   font-size: 16px;\n  line-height: 16px;\n  }\n " }} />
            </div>
            <div className="af-class-div-block-285">
              <div className="af-class-form-wrapper">
                <div className="af-class-form-title-wrapper"><img src="images/logo_1.svg" loading="lazy" alt className="af-class-logo af-class-upsell" />
                  <div className="af-class-title-small">SIGN UP</div>
                  <h1 className="af-class-account-title">Thank you!</h1>
                  <div className="af-class-start-application-form">
                    <p className="af-class-sub-heading af-class-left af-class-no-margin af-class-smaller">You will be contacted by our agents.<br />Keep an eye on your inbox!<br /></p>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ThankYouView

/* eslint-enable */