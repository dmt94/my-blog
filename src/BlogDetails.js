import { useParams } from "react-router-dom";
import useFetch from "./usefetch";

const BlogDetails = () => {
  //allows to grab parameters from route
  const { id } = useParams()
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  return ( 
  <div className="blog-details">
    { isPending && <div>Loading...</div>}  
    { error && <div>{ error }</div>}  
    { blog && (
      <article>
        <h2>{ blog.title }</h2>
        <p>By: { blog.author }</p>
        <div className="blog-div">
          <p>{ blog.body }</p>          
        </div>
      </article>
    )}  
  </div> );
}
 
export default BlogDetails;