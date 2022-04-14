import Feed from "../../components/BlogFeed/Feed";
import Tags from "../../components/BlogFeed/Tags";


export default function FeedPage() {
  return (
    <>
      <div className="container py-5 grid md:grid-cols-6 gap-10">
        <div className="feed col-span-4">
          <Feed home/>
        </div>
        <div className="tags col-span-2">
          <Tags />
        </div>
      </div>

    </>
  )
}
