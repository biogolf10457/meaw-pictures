import { useState } from "react";
import LoadingIcon from "./LoadingIcon";

const LoadCatImage = ({
  id,
  url,
  addFavCat,
}: {
  id: string;
  url: string;
  addFavCat: (name: string, url: string) => void;
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="w-full aspect-square relative rounded-2xl bg-slate-200 shadow-md overflow-hidden">
      {!loaded && <LoadingIcon />}
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover"
        onLoad={() => setLoaded(true)}
      />
      {loaded && (
        <button
          className="btn absolute bg-green-400 top-2 right-2"
          onClick={() => addFavCat(id, url)}
        >
          +
        </button>
      )}
    </div>
  );
};

export default LoadCatImage;
