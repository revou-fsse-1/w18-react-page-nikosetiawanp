export default function LikeCount(props: { value: number }) {
  const likeCount = props.value;

  return (
    <>
      {likeCount > 0 ? (
        <div className="fixed z-50 top-0 right-0 text-md bg-green-700 py-2 px-4 rounded-bl-2xl ">
          My Liked Photos ({likeCount})
        </div>
      ) : (
        <div className="fixed z-50 top-0 right-0 text-md bg-green-700 py-2 px-4 rounded-bl-2xl ">
          You have no liked photos yet ☹
        </div>
      )}
    </>
  );
}
