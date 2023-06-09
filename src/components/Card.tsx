export default function Card(props: {
  key: number;
  title: string;
  url: string;
  likedPhotos: number[];
  setLikedPhotos: React.Dispatch<React.SetStateAction<number[]>>;
  handleLike: (id: number) => void;
}) {
  const likedPhotos = props.likedPhotos;
  const setLikedPhotos = props.setLikedPhotos;

  const handleLike = (id: number) => {
    if (likedPhotos.includes(id)) {
      setLikedPhotos(likedPhotos.filter((likedId) => likedId !== props.id));
    } else {
      setLikedPhotos([...likedPhotos, props.id]);
    }
  };

  return (
    <div className="relative w-[200px] h-[270px] rounded-xl overflow-hidden bg-black hover:scale-105 transition-transform">
      <img
        className="object-cover w-full h-full"
        src={props.url}
        alt={props.title}
      />
      <h3 className="absolute bottom-1 left-0 right-0 font-semibold text-lg text-center">
        {props.title}
      </h3>
      {!likedPhotos.includes(props.id) ? (
        <button
          type="button"
          onClick={() => {
            props.setLikedPhotos;
            handleLike(props.id);
          }}
          className="absolute top-1 right-1 bg-white rounded-lg py-1 w-[75px] text-black text-sm font-bold"
        >
          LIKE
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            props.setLikedPhotos;
            handleLike(props.id);
          }}
          className="absolute top-1 right-1 bg-green-600 rounded-lg py-1 w-[75px] text-white text-center text-sm font-bold"
        >
          LIKED
        </button>
      )}
    </div>
  );
}
