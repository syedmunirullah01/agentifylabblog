import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import LatestBlogs from "@/components/LatestBlog";
import Tech from "@/components/Tech";


export default function Home() {
  return (
    <>
      <Banner />
      <LatestBlogs />
      <Featured />
      <Tech />
      
    </>
  );
}
