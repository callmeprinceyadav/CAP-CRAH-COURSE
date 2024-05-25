import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true); // Set loading to true when fetching data
    try {
      let res = await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/posts`,
      });
      setPosts(res.data); // Update posts state with fetched data
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      setError(true); // Set error to true if there is an error fetching data
      setLoading(false); // Set loading to false even if there is an error
    }
  }

  useEffect(() => {
    fetchAndUpdateData(); // Fetch data when the component mounts
  }, []);

  if (loading) {
    return <LoadingIndicator />; // Display loading indicator if loading
  }

  if (error) {
    return <ErrorIndicator />; // Display error indicator if there is an error
  }

  return (
    <div>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <Post {...post} key={post.id} /> // Render Post component for each post
      ))}
    </div>
  );
}

export default Posts;
