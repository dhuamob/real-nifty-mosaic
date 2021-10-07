import React from "react";

const Landing = ({ accountAddress, accountBalance }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "js/script.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <body class="dark">
      <div class="site-header  d-flex flex-column align-items-center justify-content-between">
        <div class="hero">
          <div>
            <h1>COLLECTIBLE MOSAIC NFT</h1>
            <br />
            <h3>Artist: Matt Vegh</h3>
					</div>
          <p class="lead mt-3 mx-auto">
            Art and innovation comes hand in hand with NFTs.
            <br />
            The space is constantly evolving with new ideas and ways to use the technology are constantly being implemented.
            <br />
            With this in mind, Real Nifty have teamed up with artist Matt Vegh for a completely unique NFT drop in the coming weeks.
          </p>
          <a href="/#/mint" class="btn btn-primary mt-3">
            Mint your NFT
            <img src="images/right-arrow.svg" alt="arrow" />
          </a>
        </div>
      </div>

      <section class="section">
        <div class="container">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-12 col-md-6">
                    <img class="img-square" src="images/matt_vegh.jpg" alt="illustration" />
                </div>
                <div class="col-12 col-md-6">
                    <h6 class="text-info mb-4">
                        ABOUT MATT VEGH
                    </h6>
                    <h2 class="mb-4">A Canadian Abstract and AI artist based in Chengdu, China</h2>
                    <p class="lead mb-4">
                      Being the first foreigner to obtain a Chinese Green Card in that City, Matt worked as an editor for the Chengdu Daily newspaper before retiring from the role and concentrating on his artwork.
                    </p>

                    <p>
                      Since 2017 Vegh has sold over 460 orignal works of art. Being a fan of technology, Vegh also has a keen interest in cryptocurrency and NFTs. His very first NFT artwork sale was a community minted project entitled Rebuilding the Tower of Babel. The piece sold for 16.1 ETH on Opensea.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-12 col-md-6">
                    <h2 class="mb-4">Mosaic NFT Project</h2>
                    <p class="lead mb-4">
                      Vegh’s recent works have included a move to mosaics; hand-painted, hand-cut and hand-trimmed tiles that show off the artist’s skill and craft in some beautiful pieces. Each tile is a painting within itself, featuring scenes of mountains, maidens, animals, Buddhas, and much more.
                    </p>
                    <p>
                      Like NFTs, each mosaic piece is unique and cannot be copied or replicated; this is one of the reasons why Vegh decided on a revolutionary physical and digital NFT drop for his next mosaic project. Teaming up with Real Nifty to help make this happen, buyers will have the opportunity to not only purchase the digital NFTs of Vegh’s mosaic art, but also physical mosaics from his collection.
                    </p>
                </div>
                <div class="col-12 col-md-6">
                    <img className="img-square" src="images/mosaic3.jpg" alt="illustration" />
                </div>
            </div>
        </div>
      </section>
      
      <section class="section feature-highlight">
        <div class="container">
            <div class="section-title mini-title">
                <h4>Ecosystem</h4>
            </div>
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="feature-item">
                        <img src="images/feature-one.svg" alt="icon" class="featured-item-icon" />
                        <h4 class="featured-item-title">Mosaic NFT Drop</h4>
                        <p>
                          Purchasers will have the chance to mint between 1-9 NFTs per transaction on a special Mosaic Drop Page located on the Real Nifty website. The NFT(s) will be transferred to your connected crypto wallet upon purchase. You will not see which NFT(s) you receive until it is in your wallet. 
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="feature-item">
                        <img src="images/feature-two.svg" alt="icon" class="featured-item-icon" />
                        <h4 class="featured-item-title">Mosaic NFT Auctions</h4>
                        <p>
                          As well as the Mosaic NFT drop, there will also be two NFT auctions for larger mosaic pieces of sizes 4x4cm and 5x5cm.
                          There will only be around 40 of each and they will feature more intricate detail and dexterity. Due to this, they will be issued through a marketplace auction. Dates to be confirmed.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="feature-item">
                        <img src="images/feature-three.svg" alt="icon" class="featured-item-icon" />
                        <h4 class="featured-item-title">Crystalization</h4>
                        <p>
                          By crystalizing your mosaic pieces, a brand new NFT of the combined digital mosaic will be created. By choosing to crystalize your mosaic, this essentially reduces the number of physical mosaic pieces available, with the potential to make them more valuable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section class="section section-highlight">
        <div class="container">
            <div class="section-title max-title">
                <h3>Mosaic NFT Drop</h3>
            </div>
            <p class="lead p-3 centered-text text-center mx-auto">
              The inital NFT drop will take place on Dec 20th. 
            </p>

            <div class="text-center">
                <div class="countdown-clock" data-datetime="January 28, 2019 10:30:00"></div>
            </div>

            <div class="progress-area">
                <div class="row">
                    <div class="col-2 col-md-1 text-right">
                        <span> 0 </span>
                    </div>
                    <div class="col-8 col-md-10">
                        <div class="progress">
                            <div class="progress-bar bg-gradient" role="progressbar" style={{ width: '75%' }} aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-2 col-md-1 text-left">
                        <span> 1000 </span>
                    </div>

                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h6 class="text-info">
                        TOTAL SUPPLY
                    </h6>
                    <h3 class="display-5 mb-5">1000</h3>
                </div>
                <div class="col">
                    <h6 class="text-info">
                        NFT LEFT TO BE CREATED NOW
                    </h6>
                    <h3 class="display-5 mb-5">250</h3>

                </div>
                <div class="col">
                    <h6 class="text-info">
                        PRE-MINTED NFTS FOR AUCTION
                    </h6>
                    <h3 class="display-5 mb-5">70</h3>
                </div>
            </div>
            <div class="text-center">
                <a href="/#/mint" class="btn btn-lg btn-primary mt-5">
                  Mint your NFT Now
                  <img src="images/right-arrow.svg" alt="arrow" />
                </a>
                <div class="text-muted my-3">
                    Limited supply: after sale ends, NFT can be bought on OpenSea and Rarible
                </div>
            </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="d-flex flex-column justify-content-between align-items-center">
                  <div class="flex-fill flex-shrink-1">
                    <canvas id="distChart" class="donut-chart"></canvas>
                  </div>
                  <div id="dist_legend" class="flex-fill flex-grow-1 donut-legend"></div>
                </div>
                <div class="col-12 col-md-6">
                    <h6 class="text-info mb-4">
                      NFT DISTRIBUTION
                    </h6>
                    <h2 class="mb-4">Together, We’re Modernizing Global Payments</h2>
                    <p class="lead mb-4">
                      Purchase of Matt Vegh Mosaic NFTs that will be available for purchase on an inital drop day. NFTs will be instantly sent to your crypto wallet upon purchase. If you purchase 9 or more mosaic pieces, these can be digitally ‘crystalized’ into one unique piece. Physical pieces will be held in storage at Matt Vegh’s gallery untill buyer decides to crystalize and take delivery of physical piece. 
                    </p>
                    <ol>
                      <li>Initial Mosaic Drop Day to be announced</li>
                      <li>Mint mosiac NFTs through Real Nifty Website on Drop Day</li>
                      <li>NFTs sent directly to your Metamask wallet</li>
                      <li>If 9 or more NFTs purchased, NFTs can be crystalized into one piece</li>
                      <li>Option to have a matching physical mosaic crystalized and delivered in the real world.</li>
                    </ol>

                    <a href="/#/marketplace" class="btn btn-primary mt-3">Buy larger mosaic pieces</a>

                </div>
            </div>
        </div>
      </section>

      <section class="section section-separated">
        <div class="container">
            <div class="section-title max-title">
                <h3>Latest Mosaic NFT News</h3>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="blog-list-item">
                        <a target="_blank" href="https://www.facebook.com/MattVeghArtist/posts/1046952042713776?__cft__[0]=AZUs_n8bNv7cMEiEstDlB9vYFr8wdGysusfrhY3F5K9KG_J-wV20tBSaGxdtL_2Z1KC4yX0FhdEdI3B6mEfty9MVbiQOxAZvmV9P_LbYE9m9yP-HnJX63OL-8lVB7hnoiMyXqch7gJDR1HkQOzt5fdaV&__tn__=%2CO%2CP-R">
                            <h6 class="text-info text-uppercase">
                                by Matt Vegh • Oct 3 2021
                            </h6>
                            <p class="mb-4">I have been working on completing my 1,000 Mosaic NFT works of art over the past 6 months for an upcoming project. </p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="blog-list-item">
                        <a target="_blank" href="https://www.facebook.com/MattVeghArtist/posts/1046952042713776?__cft__[0]=AZUs_n8bNv7cMEiEstDlB9vYFr8wdGysusfrhY3F5K9KG_J-wV20tBSaGxdtL_2Z1KC4yX0FhdEdI3B6mEfty9MVbiQOxAZvmV9P_LbYE9m9yP-HnJX63OL-8lVB7hnoiMyXqch7gJDR1HkQOzt5fdaV&__tn__=%2CO%2CP-R">
                            <h6 class="text-info text-uppercase">
                                by Matt Vegh • Oct 3 2021
                            </h6>
                            <p class="mb-4">I have been working on completing my 1,000 Mosaic NFT works of art over the past 6 months for an upcoming project. </p>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="blog-list-item">
                      <a target="_blank" href="https://www.facebook.com/MattVeghArtist/posts/1046952042713776?__cft__[0]=AZUs_n8bNv7cMEiEstDlB9vYFr8wdGysusfrhY3F5K9KG_J-wV20tBSaGxdtL_2Z1KC4yX0FhdEdI3B6mEfty9MVbiQOxAZvmV9P_LbYE9m9yP-HnJX63OL-8lVB7hnoiMyXqch7gJDR1HkQOzt5fdaV&__tn__=%2CO%2CP-R">
                          <h6 class="text-info text-uppercase">
                              by Matt Vegh • Oct 3 2021
                          </h6>
                          <p class="mb-4">I have been working on completing my 1,000 Mosaic NFT works of art over the past 6 months for an upcoming project. </p>
                      </a>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="blog-list-item">
                      <a target="_blank" href="https://www.facebook.com/MattVeghArtist/posts/1046952042713776?__cft__[0]=AZUs_n8bNv7cMEiEstDlB9vYFr8wdGysusfrhY3F5K9KG_J-wV20tBSaGxdtL_2Z1KC4yX0FhdEdI3B6mEfty9MVbiQOxAZvmV9P_LbYE9m9yP-HnJX63OL-8lVB7hnoiMyXqch7gJDR1HkQOzt5fdaV&__tn__=%2CO%2CP-R">
                          <h6 class="text-info text-uppercase">
                              by Matt Vegh • Oct 3 2021
                          </h6>
                          <p class="mb-4">I have been working on completing my 1,000 Mosaic NFT works of art over the past 6 months for an upcoming project. </p>
                      </a>
                  </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a target="_blank" href="https://www.facebook.com/MattVeghArtist/" class="btn btn-outline-secondary">Read all Blog</a>
            </div>


        </div>
      </section>

      <section class="section">
        <div class="container">

            <div class="section-title max-title mb-5">
                <h3>Our Happy Customers</h3>
            </div>

            <div class="row justify-content-md-center">
                <div class="col-12 col-md-10">
                    <div class="testimonials mt-lg">
                        <div class="testimonial-slider owl-carousel owl-theme">
                            <div class="slider__item">
                                <div class="user-thumbnail">
                                    <img src="images/user-thumb.jpg" alt="user" class="img-fluid" />
                                </div>
                                <blockquote class="blockquote text-center">

                                    <h6 class="text-info text-uppercase">
                                        Helen Wade • United States
                                    </h6>

                                    <h4 class="mb-0"> Just wanted to say that I am very happy with all the services you
                                        have provided regarding
                                        the NFTs.
                                    </h4>

                                </blockquote>
                            </div>
                            <div class="slider__item">
                                <div class="user-thumbnail">
                                    <img src="images/user-thumb.jpg" alt="user" class="img-fluid" />
                                </div>
                                <blockquote class="blockquote text-center">

                                    <h6 class="text-info text-uppercase">
                                        Helen Wade • United States
                                    </h6>

                                    <h4 class="mb-0">I am very happy with all the services you have provided regarding
                                        the NFTs. Just wanted
                                        to say that.
                                    </h4>

                                </blockquote>
                            </div>
                            <div class="slider__item">
                                <div class="user-thumbnail">
                                    <img src="images/user-thumb.jpg" alt="user" class="img-fluid" />
                                </div>
                                <blockquote class="blockquote text-center">

                                    <h6 class="text-info text-uppercase">
                                        Helen Wade • United States
                                    </h6>

                                    <h4 class="mb-0"> Just wanted to say that I am very happy with all the services you
                                        have provided regarding
                                        the NFTs.
                                    </h4>

                                </blockquote>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </section>

      <section class="section">
        <div class="container">


            <div class="section-title max-title">
                <h3>Project Roadmap</h3>
            </div>
            <p class="lead p-3 centered-text text-center mx-auto">The roadmap focuses on the development of the
                technology, operations infrastructure, new partnerships, and marketing
                initiatives.
            </p>


            <section class="cd-timeline js-cd-timeline">
                <div class="cd-timeline__container">
                    <div class="cd-timeline__block js-cd-block">
                        <div class="cd-timeline__milestone"> </div>
                        <div class="cd-timeline__content js-cd-content">
                            <div class="cd-timeline__date">SEP 2021</div>
                            <h4>Project Concept</h4>
                            <p>The team is established. Start of the Mosaic NFT concept.</p>
                        </div>
                    </div>
                    <div class="cd-timeline__block js-cd-block">
                        <div class="cd-timeline__milestone"> </div>
                        <div class="cd-timeline__content js-cd-content">
                            <div class="cd-timeline__date">NOV 2021</div>
                            <h4>First NFT Drop</h4>
                            <p>Initial NFT Drop for 3x3cm pieces.</p>
                        </div>
                    </div>
                    <div class="cd-timeline__block js-cd-block">
                        <div class="cd-timeline__milestone"> </div>
                        <div class="cd-timeline__content js-cd-content">
                            <div class="cd-timeline__date">January 2020</div>
                            <h4>Second NFT Drop</h4>
                            <p>Second NFT Drop for 3x3cm pieces.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </section>

      <section class="section">
        <div class="container">
            <div class="section-title max-title mb-5">
                <h3>Our Team Members</h3>
            </div>

            <div class="row text-center">
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <img src="images/team_1.jpg" alt="team" class="img-team-member" />
                    <h5 class="mb-0">Matt Vegh</h5>
                    <small class="text-info text-uppercase">Artist</small>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <img src="images/team_2.png" alt="team" class="img-team-member" />
                    <h5 class="mb-0">George Luecke</h5>
                    <small class="text-info text-uppercase">Founder &amp; CEO</small>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <img src="images/team_3.jpg" alt="team" class="img-team-member" />
                    <h5 class="mb-0">Jamie Parmenter</h5>
                    <small class="text-info text-uppercase">Product Manager</small>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-5">
                    <img src="images/team_4.png" alt="team" class="img-team-member" />
                    <h5 class="mb-0">Niranjan Singh</h5>
                    <small class="text-info text-uppercase">Lead Developer</small>
                </div>
            </div>

        </div>
      </section>

      <section class="section">
        <div class="container">

            <div class="section-title max-title text-center">
                <h3>Frequently Asked Questions</h3>
            </div>
            <p class="lead centered-text text-center mx-auto">
              Got questions about Mosaic NFT? We have got answers. Check it out!
            </p>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="faq__item">
                        <h4>Who is Matt Vegh?</h4>
                        <p>
                          Matt Vegh is a Canadian Abstract and AI artist based in Chengdu, China. Being the first foreigner to obtain a Chinese Green Card in that City, Matt worked as an editor for the Chengdu Daily newspaper before retiring from the role and concentrating on his artwork. 
                        </p>
                    </div>
                    <div class="faq__item">
                        <h4>what is Mosaic NFT Project?</h4>
                        <p>
                          Vegh’s recent works have included a move to mosaics; hand-painted, hand-cut and hand-trimmed tiles that show off the artist’s skill and craft in some beautiful pieces. Each tile is a painting within itself, featuring scenes of mountains, maidens, animals, Buddhas, and much more.
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="faq__item">
                        <h4>Who is Matt Vegh?</h4>
                        <p>
                          Matt Vegh is a Canadian Abstract and AI artist based in Chengdu, China. Being the first foreigner to obtain a Chinese Green Card in that City, Matt worked as an editor for the Chengdu Daily newspaper before retiring from the role and concentrating on his artwork. 
                        </p>
                    </div>
                    <div class="faq__item">
                        <h4>what is Mosaic NFT Project?</h4>
                        <p>
                          Vegh’s recent works have included a move to mosaics; hand-painted, hand-cut and hand-trimmed tiles that show off the artist’s skill and craft in some beautiful pieces. Each tile is a painting within itself, featuring scenes of mountains, maidens, animals, Buddhas, and much more.
                        </p>
                    </div>
                </div>
            </div>

            <div class="text-center my-3">
                <a href="#" class="btn btn-outline-secondary">Got Questions? Contact Us</a>
            </div>

        </div>
      </section>

      <footer class="section section-separated py-lg">
        <div class="container">

            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <img src="images/logo.png" alt="footer logo" class="logo mb-4" />
                    <p class="footer__info--text">Creative NFTs For Real Things</p>
                    <ul class="social__links">
                        <li>
                            <a href="#">
                                <img src="images/facebook-icon.svg" alt="fb" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/twitter-icon.svg" alt="tw" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/linked-in-icon.svg" alt="in" class="img-fluid" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="images/github-icon.svg" alt="gh" class="img-fluid" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <p class="footer-col__head">Contact Us</p>

                    <div class="contact__address"> <p> 330 Franklin Road,
                            <br /> Suite 135A, Brentwood,
                            <br /> TN 37027-5237</p>

                        <p> Phone: 615.555.5555</p>

                        <p> Email: yourfriends@coindash.com</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <p class="footer-col__head">Quick Links</p>
                    <div class="row">
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="#">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#">FEATURES</a>
                                </li>
                                <li>
                                    <a href="#">TOKENS</a>
                                </li>
                                <li>
                                    <a href="#">ROAD MAP</a>
                                </li>
                                <li>
                                    <a href="#">WHITEPAPER</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="footer__links">
                                <li>
                                    <a href="#">HELP</a>
                                </li>
                                <li>
                                    <a href="#">TERMS OF USE</a>
                                </li>
                                <li>
                                    <a href="#">PRIVACY POLICY</a>
                                </li>
                                <li>
                                    <a href="#">AGREEMENTS</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <p class="copyright__text mb-0"><small>Copyright ©
                        <script>
                            document.write(new Date().getFullYear());
                        </script>. All rights reserved. Coindash LLC</small></p>
            </div>
        </div>
      </footer>
    </body>
  );
};

export default Landing;
