import "./BlueBar.css";
function BlueBar() {
  return (
    <section className="blue-bar">
      <div className="container blue-container">

        <div className="item">
          <img src="/img/buy-comics-digital-comics.png" alt="buy1" />
          <span>DIGITAL COMICS</span>
        </div>

        <div className="item">
          <img src="/img/buy-comics-merchandise.png" alt="buy2" />
          <span>DC MERCHANDISE</span>
        </div>

        <div className="item">
          <img src="/img/buy-comics-subscriptions.png" alt="buy3" />
          <span>SUBSCRIPTION</span>
        </div>

        <div className="item">
          <img src="/img/buy-comics-shop-locator.png" alt="buy4" />
          <span>COMIC SHOP LOCATOR</span>
        </div>

        <div className="item">
          <img src="/img/buy-dc-power-visa.svg" alt="buy5" />
          <span>DC POWER VISA</span>
        </div>

      </div>
    </section>
  );
}

export default BlueBar;