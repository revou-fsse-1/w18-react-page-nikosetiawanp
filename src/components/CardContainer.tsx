import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LikeCount from "./LikeCount";
import { data } from "./data";

export default function CardContainer() {
  const [likeCount, setLikeCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const allCards = data.map(
    (data: { id: number; title: string; url: string }) => (
      <Card
        id={data.id}
        title={data.title}
        url={data.url}
        setLikeCount={setLikeCount}
      />
    )
  );

  const searchResult = data.filter((data) =>
    data.title.toLowerCase().includes(searchInput)
  );
  const filteredCards = searchResult.map(
    (data: { id: number; title: string; url: string }) => (
      <Card
        id={data.id}
        title={data.title}
        url={data.url}
        setLikeCount={setLikeCount}
      />
    )
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
      <div className="flex flex-wrap justify-center gap-4 my-4 " key={data.id}>
        {/* {!searchInput ? allCards : filteredCards} */}
        {!searchInput
          ? allCards
          : searchResult.length > 0
          ? filteredCards
          : notFound}
      </div>
    </>
  );
}
