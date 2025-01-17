import axios from "axios";
import { useState, useEffect } from "react";

export default function Post () {
    const [posts, setPost] = useState();

    useEffect(() => {
       const updataData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
        setPost(response.data);
       };
       updataData();
    }, []);
    // const resetData = () => {
    //     setPost([]);
    // };
    return (
        <div>
            <h1>Posts</h1>
            {posts && posts?.length >0 && posts?.map( (post) => (                
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    
                ))}
        
        
        </div>
    );
}