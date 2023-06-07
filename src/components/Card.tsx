import { useState } from "react";
import LikeButton from "./LikeButton";

export default function Card(props: {
  title: string;
  url: string;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <div className="relative w-[200px] h-[270px] rounded-xl overflow-hidden bg-black hover:scale-105 transition-transform">
      <img
        className="object-cover w-full h-full"
        src={props.url}
        alt={props.title}
      />
      <LikeButton setLikeCount={props.setLikeCount} />
      <h3 className="absolute bottom-1 left-0 right-0 font-semibold text-lg text-center">
        {props.title}
      </h3>
    </div>
  );
}
