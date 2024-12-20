import { Link } from "react-router-dom";

function Box(props) {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className="m-2 shadow">
      <Link to={`/details/${props.id}`}>
        <img
          src={IMGPATH + props.image}
          alt="img"
          className="w-full max-h-[90%]"
        />
        <div className="flex justify-between items-center px-3">
          <span className="font-semibold text-slate-600">{props.title}</span>
          <span className="font-bold text-orange-600">{props.rating}</span>
        </div>
      </Link>
    </div>
  );
}

export default Box;
