import Card from "./Card";
import { useState } from "react";
import LikeCount from "./LikeCount";
import { data } from "./data";

export default function CardContainer() {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const likeCount = likedPhotos.length;

  const searchResult = data.filter((data) =>
    data.title.toLowerCase().includes(searchInput)
  );
  const filteredCards = searchResult.map(
    (data: { id: number; title: string; url: string }) => {
      return (
        <Card
          id={data.id}
          title={data.title}
          url={data.url}
          likedPhotos={likedPhotos}
          setLikedPhotos={setLikedPhotos}
          isLiked={likedPhotos.includes(data.id)}
        />
      );
    }
  );
  const notFound = (
    <span className="text-2xl font-bold">
      The photo you're looking for doesn't exist
    </span>
  );

  return (
    <>
      <LikeCount value={likeCount} />
      <input
        type="text"
        className="bg-white text-black p-2 mb-4 w-[300px] rounded-xl placeholder:font-medium"
        placeholder="Search for photos..."
        onChange={handleSearchChange}
      ></input>

      {!searchInput ? (
        <div
          className="flex flex-wrap justify-center gap-4 my-4 "
          key={data.id}
        >
          {filteredCards}
        </div>
      ) : (
        <span className="text-4xl font-bold mb-4">
          The photo you're looking for doesn't exist
        </span>
      )}
    </>
  );
}
