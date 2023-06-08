import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";
import LikeCount from "./LikeCount";
import { data } from "./data";

export default function CardContainer() {
  const [likeCount, setLikeCount] = useState(0);

  const cards = data.map((data: { id: number; title: string; url: string }) => (
    <Card
      id={data.id}
      title={data.title}
      url={data.url}
      setLikeCount={setLikeCount}
    />
  ));

  return (
    <>
      <LikeCount value={likeCount} />
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-4 my-4 " key={data.id}>
        {cards}
      </div>
    </>
  );
}
