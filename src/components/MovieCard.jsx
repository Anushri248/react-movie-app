import "./MovieCard.css";

export const MovieCard = ({ movieProp }) => {
  const { id, name, img_url, summary, rating, genre, cast, year, watch } =
    movieProp;

  const contentStyle = {};
  return (
    <>
      <li className="movie-card">
        <div>
          <img src={img_url} width="20%" height="20%" /> <br />
        </div>
        <div className="card-content">
          <h2> Name: {name} </h2>
          <p style={{ fontWeight: "100", padding: "2px 0px"  }}>
            <b>Summary:</b> {summary}
          </p>
          <p>
            <b>Rating:</b>
            <span className={`rating ${rating > 8 ? "green" : "yellow"}`}> {rating}</span>
          </p>
          <p>
            <b> Genre:</b> {genre} <br />
          </p>
          <p>
            <b> Cast:</b> {cast} <br />
          </p>
          <p>

            <b> Year:</b> {year} <br />
          </p>
          <a href={watch} target="_blank">
            <button>Watch</button>
          </a>
        </div>
        <br />
        <br />
        <br /> <br />
      </li>
    </>
  );
};
