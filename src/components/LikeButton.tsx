import { useState } from "react";

export default function LikeButton(props: {
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <>
      {!isLiked ? (
        <button
          type="button"
          onClick={() => {
            toggleLike();
            props.setLikeCount((prevLikeCount) => prevLikeCount + 1);
          }}
          className="absolute top-1 right-1 bg-white rounded-lg py-1 w-[75px] text-black text-sm font-bold"
        >
          LIKE
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            toggleLike();
            props.setLikeCount((prevLikeCount) => prevLikeCount - 1);
          }}
          className="absolute top-1 right-1 bg-green-600 rounded-lg py-1 w-[75px] text-white text-center text-sm font-bold"
        >
          LIKED
        </button>
      )}
    </>
  );
}
