import "./Main.css";
import comics from "../comics";

function Main() {

  return (

    <main>

      <div className="comics-container">

        {comics.map(function (comic) {

          return (

            <div className="comic-card" key={comic.id}>

              <img src={comic.thumb} alt={comic.title} />

              <h4>{comic.title}</h4>

            </div>

          );

        })}

      </div>

    </main>

  );

}

export default Main;