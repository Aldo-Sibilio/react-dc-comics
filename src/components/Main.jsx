import "./Main.css";
import comics from "../comics";

function Main() {
  return (
    <main>

      {/* Immagine grande in cima */}
      <div className="jumbotron">
        <img src="/img/jumbotron.jpg" alt="DC Comics" />
      </div>

      {/* Etichetta + griglia fumetti */}
      <div className="comics-section">
        <div className="container">

          <div className="current-series-label">CURRENT SERIES</div>

          <div className="comics-grid">
            {comics.map(function (comic) {
              return (
                <div className="comic-card" key={comic.id}>
                  <img src={comic.thumb} alt={comic.title} />
                  <h4>{comic.title}</h4>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Bottone load more */}
      <div className="load-more">
        <button>LOAD MORE</button>
      </div>

    </main>
  );
}

export default Main;