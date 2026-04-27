import "./Footer.css";
function Footer() {
  return (
    <footer>

      <div className="footer-top">
        <div className="container footer-links">

          <div>
            <h3>DC COMICS</h3>
            <p>Characters</p>
            <p>Comics</p>
            <p>Movies</p>
            <p>TV</p>
            <p>Games</p>
            <p>Videos</p>
            <p>News</p>
          </div>

          <div>
            <h3>SHOP</h3>
            <p>Shop DC</p>
            <p>Shop DC Collectibles</p>
          </div>

          <div>
            <h3>DC</h3>
            <p>Terms Of Use</p>
            <p>Privacy policy</p>
            <p>Ad Choices</p>
            <p>Advertising</p>
            <p>Jobs</p>
          </div>

          <div>
            <h3>SITES</h3>
            <p>DC</p>
            <p>MAD Magazine</p>
            <p>DC Kids</p>
            <p>DC Universe</p>
          </div>

        </div>
         <img src="/img/dc-logo-bg.png" alt="DC Logo" className="footer-logo-bg" />
      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">

          <button>SIGN-UP NOW!</button>

          <div className="social">
            <h3>FOLLOW US</h3>
            <img src="/img/footer-facebook.png" alt="Facebook" />
            <img src="/img/footer-twitter.png" alt="Twitter" />
            <img src="/img/footer-youtube.png" alt="YouTube" />
            <img src="/img/footer-pinterest.png" alt="Pinterest" />
            <img src="/img/footer-periscope.png" alt="Periscope" />
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;