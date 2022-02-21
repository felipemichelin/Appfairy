/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=620bd724f2ff7d0894fe7b51").then(body => body.text()), isAsync: false },
  { loading: fetch("js/javy-influencers.js").then(body => body.text()), isAsync: false },
  { loading: Promise.resolve("$(\"#influencers\").submit(function(e){e.preventDefault(),$.ajax({url:\"https://hook.integromat.com/eug8lx4t6kljdhdxphvpef8babwl9w8n\",type:\"post\",data:$(\"#influencers\").serialize(),success:function(){window.location=\"/influencers/thank-you\"}})});"), isAsync: false },
  { loading: Promise.resolve("$(function(){$(\"#main_platform\").change(function(){console.log(\"changed\"),\"www.tiktok.com\"==$(this).val()&&($(\"#tiktok_link\").attr(\"required\",\"\"),$(\"#youtube_link\").removeAttr(\"required\"),$(\"#twitch_link\").removeAttr(\"required\"),$(\"#pinterest_link\").removeAttr(\"required\"),$(\"#instagram_link\").removeAttr(\"required\")),\"www.instagram.com\"==$(this).val()&&($(\"#tiktok_link\").removeAttr(\"required\"),$(\"#youtube_link\").removeAttr(\"required\"),$(\"#twitch_link\").removeAttr(\"required\"),$(\"#pinterest_link\").removeAttr(\"required\"),$(\"#instagram_link\").attr(\"required\",\"\")),\"www.youtube.com\"==$(this).val()&&($(\"#tiktok_link\").removeAttr(\"required\"),$(\"#youtube_link\").attr(\"required\",\"\"),$(\"#twitch_link\").removeAttr(\"required\"),$(\"#pinterest_link\").removeAttr(\"required\"),$(\"#instagram_link\").removeAttr(\"required\")),\"www.pinterest.com\"==$(this).val()&&($(\"#tiktok_link\").removeAttr(\"required\"),$(\"#youtube_link\").removeAttr(\"required\"),$(\"#twitch_link\").removeAttr(\"required\"),$(\"#pinterest_link\").attr(\"required\",\"\"),$(\"#instagram_link\").removeAttr(\"required\")),\"www.twitch.tv\"==$(this).val()&&($(\"#tiktok_link\").removeAttr(\"required\"),$(\"#youtube_link\").removeAttr(\"required\"),$(\"#twitch_link\").attr(\"required\",\"\"),$(\"#pinterest_link\").removeAttr(\"required\"),$(\"#instagram_link\").removeAttr(\"required\"))})});"), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '620f4d42e730139c9ac85545'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\javy-influencers.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-custom-code-embeds">
              <div className="w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-wave-bg svg {\n    display: block;\n    transform-origin: top;\n    -webkit-animation: animateWave 2000ms cubic-bezier(.23,1,.32,1) forwards;\n    animation: animateWave 2000ms cubic-bezier(.23,1,.32,1) forwards;\n}\n@-webkit-keyframes rotating /* Safari and Chrome */ {\n  .af-view from {\n    -webkit-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  .af-view to {\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes rotating {\n  .af-view from {\n    -ms-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  .af-view to {\n    -ms-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -webkit-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.af-view .af-class-rotating {\n  -webkit-animation: rotating 8s linear infinite;\n  -moz-animation: rotating 8s linear infinite;\n  -ms-animation: rotating 8s linear infinite;\n  -o-animation: rotating 8s linear infinite;\n  animation: rotating 8s linear infinite;\n}\n" }} />
              </div>
              <div className="af-class-global">
                <div className="af-class-html w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n/* ALL PAGES CSS */\n/* Media Queries */\n@media only screen and (min-width: 1540px) {\n\tbody {font-size: 15.4px;}\n}\n/* Desktop Only CSS (i.e. hover states) */\n@media only screen and (min-width: 992px) {\n}\n/* Main Variables */\n.af-view :root {\n  --main-dark: black;\n  --main-light: white;\n}\n/* Global Styles */\n.af-view ::selection {\n\tbackground: var(--main-dark);\n  color: var(--main-light);\n  text-shadow: none;\n}\n.af-view img::selection, .af-view svg::selection {\n\tbackground: transparent;\n}\n/* Link color inherits from parent font color  */\n.af-view a {\n\tcolor: inherit;\n}\n/* Disable / enable clicking on an element and its children  */\n.af-view .af-class-no-click {\n\tpointer-events: none;\n}\n.af-view .af-class-can-click {\n\tpointer-events: auto;\n}\n" }} />
                </div>
                <div className="w-embed">
                  <style dangerouslySetInnerHTML={{__html: "\n.af-view video {\nwidth: 100%!important;\nheight: 102%!important;\n}\n " }} />
                </div>
              </div>
              <div className="w-embed">.w-select {'{'}
                /* resetting default form style*/
                -moz-appearance: none!important;
                -webkit-appearance: none!important;
                appearance: none!important;
                {'}'}
                .caret-down {'{'}
                pointer-events: none;
                {'}'}
              </div>
            </div>
            <div className="af-class-main-container">
              <div className="af-class-hero-section af-class-wf-section">
                <div className="af-class-div-block-288"><img src="images/logo_1.svg" loading="lazy" alt className="af-class-logo af-class-upsell" /></div>
                <div className="af-class-container">
                  <div className="af-class-st-p-y-64">
                    <div className="w-layout-grid af-class-hero-grid"><img src="images/box-linda.png" loading="lazy" id="w-node-b7a98a27-c30c-37d3-a9ff-a6812310a4eb-9ac85545" sizes="(max-width: 479px) 63vw, (max-width: 767px) 75vw, (max-width: 991px) 72vw, 794px" srcSet="images/box-linda-p-500.png 500w, images/box-linda.png 794w" alt className="af-class-image-38" />
                      <div className="af-class-wrapper-l af-class-st-p-0">
                        <div className="af-class-tagline">Get FREE Javy Today!</div>
                        <h1 className="af-class-heading af-class-xl"><strong>Join Our </strong>Exclusive Influencer Program </h1>
                        <p className="af-class-body-text af-class-m">Thank you for your interest in becoming a Javy Coffee Ambassador/Affiliate.</p>
                        <div className="af-class-ctas-wrapper">
                          <a href="#influencers" className="af-class-button af-class-medium w-inline-block">
                            <div className="af-class-button-text">Get started</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-seeon">
                    <div className="af-class-divider-wrap af-class-payment-method">
                      <div className="af-class-grey-line" />
                      <div className="af-class-sign-up-text">AS SEEN ON</div>
                      <div className="af-class-grey-line" />
                    </div>
                    <div className="af-class-bottom-content">
                      <div className="af-class-logo-wrapper"><img src="images/usa-today-01.svg" alt className="af-class-company-logo" /><img src="images/cbs-04.svg" alt className="af-class-company-logo" /><img src="images/fox-02.svg" alt className="af-class-company-logo" /><img src="images/nbc-03.svg" alt className="af-class-company-logo" /></div>
                    </div>
                  </div>
                  <div className="af-class-feature-mobile">
                    <div className="af-class-grid-info">
                      <div className="af-class-div-block-5"><img src="images/drop.svg" loading="lazy" alt className="af-class-r_drop" /><img src="images/rotator.svg" loading="lazy" alt className="af-class-r_drop_rotator af-class-rotating" /></div>
                      <h2 className="af-class-heading af-class-l">We are looking for someone like you</h2>
                      <p className="af-class-body-text af-class-m">If you are obsessed with Javy Coffee and want to help represent the Javy Tribe, then our ambassador program is perfect for you!</p>
                      <ul role="list" className="af-class-subscription-features-2 w-list-unstyled">
                        <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                          <div className="af-class-subscription-text-3"><strong>Earn big commissions<br /></strong></div>
                        </li>
                        <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                          <div className="af-class-subscription-text-3"><strong>Get FREE coffee<br /></strong></div>
                        </li>
                        <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                          <div className="af-class-subscription-text-3"><strong>Early access to new flavors and launches<br /></strong></div>
                        </li>
                        <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                          <div className="af-class-subscription-text-3"><strong>Exclusive incentives<br /></strong></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-div-block-291">
                <section className="af-class-section2">
                  <div className="af-class-footer-gradient" />
                  <div className="af-class-top-gradient" />
                  <div className="af-class-container">
                    <div id="w-node-_9ed2bc93-a2a0-218c-ba83-86930cd2464c-9ac85545" className="af-class-div-block-292">
                      <div className="af-class-hero-animation-wrap">
                        <div data-w-id="19bb2ae8-ad02-20d9-2f75-1c1cdeff02cc" className="af-class-masonry">
                          <div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/267747645_426856765847892_2652799136371251486_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">themagicalmillennial_<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/ig-01.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/01.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/273031364_765520024408339_2132832041638325595_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">ambie333<br /></div>
                                        <div className="af-class-text-block-3">Place City,&nbsp;Country</div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if08.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/02.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/03.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/272716549_327813649220475_2389805824448957815_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">getreadywithkatrina<br /></div>
                                        <div className="af-class-text-block-3">Upstale, NY</div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if07.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/08.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/267747645_426856765847892_2652799136371251486_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">themagicalmillennial_<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/ig-01.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/01.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/273031364_765520024408339_2132832041638325595_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">ambie333<br /></div>
                                        <div className="af-class-text-block-3">Place City,&nbsp;Country</div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if08.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/02.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                          </div>
                          <div className="af-class-div-block-289">
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/04.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/244547104_917605295509217_1865357380693105143_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">hannabethh<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if09.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/05.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/272844899_1229899770752277_6701072094577230819_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">alisapuchko<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if04.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/06.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/07.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/222088413_126151443031323_7533741467889665853_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">insta_thena<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if06.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/04.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/244547104_917605295509217_1865357380693105143_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">hannabethh<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if09.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-random"><img src="images/tiktok-holder.svg" loading="lazy" alt className="af-class-image-35" />
                              <div className="af-class-html-embed-2 w-embed"><video playsInline autoPlay muted loop poster="/videos/k_step_01.jpg">
                                  <source src="https://cdn.javycoffee.com/videos/05.mp4" type="video/mp4" />
                                </video></div>
                            </div>
                            <div className="af-class-showcase-item-wrap-2 af-class-insta">
                              <div className="af-class-insta-block">
                                <div className="af-class-heading-2">
                                  <div className="af-class-user-info">
                                    <div className="af-class-user-img"><img src="images/272844899_1229899770752277_6701072094577230819_n.jpg" loading="lazy" alt className="af-class-image-32" />
                                      <div className="af-class-div-block">
                                        <div className="af-class-text-block-2">alisapuchko<br /></div>
                                      </div>
                                    </div>
                                  </div><img src="images/ig-options.svg" loading="lazy" alt className="af-class-image-33" />
                                </div>
                                <div className="af-class-insta-image"><img src="images/if04.png" loading="lazy" alt className="af-class-image-34" /></div><img src="images/ig-footer.svg" loading="lazy" alt className="af-class-image-36" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-ff3af8e3-b90c-5f2b-7d28-ce4b8cf1ebf7-9ac85545" className="af-class-wrapper-m af-class-top-spacing">
                      <div className="w-layout-grid af-class-feature-grid">
                        <div id="w-node-_4330506a-2960-4e7e-9764-d68f452cc0c9-9ac85545" className="af-class-feature-desktop">
                          <div className="af-class-grid-info">
                            <div className="af-class-div-block-5"><img src="images/drop.svg" loading="lazy" alt className="af-class-r_drop" /><img src="images/rotator.svg" loading="lazy" alt className="af-class-r_drop_rotator af-class-rotating" /></div>
                            <h2 className="af-class-heading af-class-l">We are looking for someone like you</h2>
                            <p className="af-class-body-text af-class-m">If you are obsessed with Javy Coffee and want to help represent the Javy Tribe, then our ambassador program is perfect for you!</p>
                            <ul role="list" className="af-class-subscription-features-2 w-list-unstyled">
                              <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                                <div className="af-class-subscription-text-3"><strong>Earn big commissions<br /></strong></div>
                              </li>
                              <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                                <div className="af-class-subscription-text-3"><strong>Get FREE coffee<br /></strong></div>
                              </li>
                              <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                                <div className="af-class-subscription-text-3"><strong>Early access to new flavors and launches<br /></strong></div>
                              </li>
                              <li className="af-class-subscription-item-2"><img loading="lazy" src="images/61780781d5a5dff1f1d8f564_check-testimonials.svg" alt="check-icon" className="af-class-subscription-icon-4" />
                                <div className="af-class-subscription-text-3"><strong>Exclusive incentives<br /></strong></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div id="w-node-_8d9cec32-36d3-0ec6-1967-8db4315eb186-9ac85545" className="af-class-get-started">
                  <div className="af-class-container">
                    <div className="af-class-wrapper-m">
                      <div className="af-class-form-block w-form">
                        <form id="influencers" name="wf-form-Influencers-Form" data-name="Influencers Form" method="get" className="af-class-signup-form">
                          <h1 className="af-class-form-heading">Apply Today!</h1>
                          <div className="af-class-field-wrap"><label htmlFor="Name" className="af-class-field-label">First Name</label>
                            <div className="af-class-form-column-2"><input type="text" className="af-class-form_field w-input" maxLength={256} name="First-Name" data-name="First Name" placeholder="e.g. John" ms-field="first-name" id="first_name" required /></div>
                            <div className="af-class-form-column-2"><label htmlFor="last_name" className="af-class-field-label">Last Name</label><input type="text" className="af-class-form_field af-class-last-name w-input" maxLength={256} name="Last-Name" data-name="Last Name" placeholder="e.g. Smith" ms-field="last-name" id="last_name" required /></div>
                          </div>
                          <div className="af-class-field-wrap"><label htmlFor="email_address" className="af-class-field-label">Email</label><input type="text" className="af-class-form_field w-input" maxLength={256} name="Email" data-name="Email" placeholder="e.g. your@email.com" ms-field="email" id="email_address" required /></div>
                          <div className="af-class-field-wrap"><label htmlFor="password" className="af-class-field-label">Main Platform (3k+ Followers)</label>
                            <div className="af-class-form-field-wrapper"><select id="main_platform" name="Main-Platform" data-name="Main Platform" required className="af-class-form_field w-select">
                                <option value="www.tiktok.com">Tiktok</option>
                                <option value="www.instagram.com">Instagram</option>
                                <option value="www.youtube.com">Youtube</option>
                                <option value="www.pinterest.com">Pinterest</option>
                                <option value="www.twitch.tv">Twitch</option>
                              </select>
                              <div className="af-class-caret-down"><img loading="lazy" src="images/arrows.svg" alt className="af-class-image-24" /></div>
                            </div>
                          </div>
                          <div className="af-class-field-title">Platform Links (Insert all applicable)<strong /></div>
                          <div className="af-class-field-wrap"><label htmlFor="tiktok_link" className="af-class-field-label">Tiktok</label><input type="text" className="af-class-form_field af-class-padding w-input" maxLength={256} name="Tiktok" data-name="Tiktok" placeholder="e.g. javy.coffee" id="tiktok_link" required />
                            <div className="af-class-form-icon"><img loading="lazy" src="images/tiktok-brands.svg" alt className="af-class-image-30" /></div>
                          </div>
                          <div className="af-class-field-wrap"><label htmlFor="instagram_link" className="af-class-field-label">Instagram</label><input type="text" className="af-class-form_field af-class-padding w-input" maxLength={256} name="Instagram-Link" data-name="Instagram Link" placeholder="e.g. javy.coffee" id="instagram_link" />
                            <div className="af-class-form-icon"><img loading="lazy" src="images/instagram-brands.svg" alt className="af-class-image-30" /></div>
                          </div>
                          <div className="af-class-field-wrap"><label htmlFor="youtube_link" className="af-class-field-label">Youtube</label><input type="text" className="af-class-form_field af-class-padding w-input" maxLength={256} name="Youtube-Link" data-name="Youtube Link" placeholder="e.g. https://www.youtube.com/c/JavyCoffee" id="youtube_link" />
                            <div className="af-class-form-icon"><img loading="lazy" src="images/youtube-brands.svg" alt className="af-class-image-30" /></div>
                          </div>
                          <div className="af-class-field-wrap"><label htmlFor="pinterest_link" className="af-class-field-label">Pinterest</label><input type="text" className="af-class-form_field af-class-padding w-input" maxLength={256} name="Pinterest-Link" data-name="Pinterest Link" placeholder="e.g. https://pinterest.com/javycoffee/" id="pinterest_link" />
                            <div className="af-class-form-icon"><img loading="lazy" src="images/pinterest-brands.svg" alt className="af-class-image-30" /></div>
                          </div>
                          <div className="af-class-field-wrap"><label htmlFor="twitch_link" className="af-class-field-label">Twitch</label><input type="text" className="af-class-form_field af-class-padding w-input" maxLength={256} name="Twitch-Link" data-name="Twitch Link" placeholder="e.g. https://www.twitch.tv/javy.coffee" id="twitch_link" />
                            <div className="af-class-form-icon"><img loading="lazy" src="images/twitch-brands.svg" alt className="af-class-image-30" /></div>
                          </div><label className="w-checkbox af-class-gdpr-checkbox"><input type="checkbox" name="checkbox" id="checkbox" data-name="Checkbox" required ms-field="gdpr" className="w-checkbox-input" /><span htmlFor="checkbox" className="af-class-terms-text w-form-label">I understand that I will need to sign an agreement first before receiving the package.</span></label><input type="submit" defaultValue="Submit Application →" data-wait="Please wait..." className="af-class-button af-class-medium af-class-fullwidth w-button" />
                        </form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="af-class-footer-2">
                  <div className="af-class-container">
                    <div className="af-class-footer-top-2">
                      <div className="af-class-footer-menu-wrapper">
                        <a href="#" className="af-class-footer-logo af-class-s-m-r-24 af-class-st-m-0 w-nav-brand"><img src="images/logo.svg" alt className="af-class-brand-logo-image-2" /></a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */