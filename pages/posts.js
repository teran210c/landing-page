import axios from "axios";
import { useState, useEffect } from "react";

export default function Post () {
    const [posts, setPost] = useState();

    // useEffect(() => {
       
    //    updataData();
    // }, []);

    const updataData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
        setPost(response.data);
       };

    const resetData = () => {
        setPost([]);
    };

    return (
        <div>
            <h1>Posts</h1>
            <button
                onClick={()=>resetData()}
            >Reset</button>
            <button
                onClick={()=>updataData()}
            >Cargar</button>
            {posts && posts?.length >0 && posts?.map( (post) => (                
                        <div key={post.id}>
                            <h2 className="tex-lg font bold">{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    
                ))}
        
        
        </div>
    );
}