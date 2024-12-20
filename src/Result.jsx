import Box from "./Box.jsx";

function Result(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
        id={item.id}
        index={index}
        key={index}
      />
    );
  });

  return (
    <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {boxes}
    </div>
  );
}

export default Result;
