export default function LikeCount(props: { value: number }) {
  const likeCount = props.value;

  return (
    <div className="absolute z-50 top-0 right-0 text-md bg-green-700 py-2 px-4 rounded-bl-2xl transition-transform">
      {likeCount > 0
        ? `My Liked Photos (${likeCount})`
        : `You have no liked photos yet ☹`}
    </div>
  );
}
