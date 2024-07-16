import PostCard from "./PostCard.jsx";
const PostSection = () => {
  const post = {
    postcontent: "This is a sample post content.",
    conditions: "New",
    user_id: "user123",
    created_at: "2024-06-27",
  };

  return (
    <div className="m-4 w-60% h-[100vh] grid grid-cols-[1fr_50%_1fr] gap-4">
      <div className="bg-slate-100 flex h-full rounded-lg p-4">
        This part can either be used as a sidebar or some carded sections with
        posts like top posts of the week or just ads
      </div>
      <div className="bg-slate-100 rounded-lg p-4">
        <h2 className="text-3xl font-semibold">Posts</h2>
        <PostCard
          postcontent={post.postcontent}
          conditions={post.conditions}
          user_id={post.user_id}
          created_at={post.created_at}
        />
      </div>
      <div className="bg-slate-100 rounded-lg"></div>
    </div>
  );
};

export default PostSection;
