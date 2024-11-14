import Loader from "@/components/shared/Loader"

const Home = () => {
  // const { data: posts, isPending: isPostLoading, isError: isPostError } = useQuery("posts", getPosts, {
  //   refetchOnWindowFocus: false,
  // })
  return (

    <div className="flex flex-1">
      <div className="home-container">
        <div className="homt-post">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {/* {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: any) => (
                <PostCard post={post} />
              )}
            </ul>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default Home