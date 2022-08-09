import { useParams, useRouteMatch } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  // const match = useRouteMatch();

  const movieChoice = movies.find((movie) => movie.id === +movieId);

  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
