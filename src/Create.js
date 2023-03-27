import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('daevah');
  const [isPending, setIsPending] = useState(false);
  //go back history/redirect
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //blog object
    const blog = {title, body, author};

    setIsPending(true);
    
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      //pass object we want to turn into JSON string, the blog
      //stringify (object => JSON)
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      //go back to where user was previously
      // navigate.go(-1);
      //go to homepage
      navigate('/');
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog Title</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></textarea>
        <label>
          Blog author:
        </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="daevah">daevah</option>
          <option value="maries">maries</option>
        </select>
        {!isPending && <button>Add Blog</button>}
      </form>
    </div>
   );
}
 
export default Create;