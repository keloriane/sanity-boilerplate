'use client'
import React, { useEffect, useState } from 'react';
import { createClient } from "next-sanity";
import Image from "next/image";

const clientConfig = {
    projectId: 'ppg9rw56',
    dataset: 'dev',
    useCdn: true,
    customApiVersion: 'v2023-10-03',
}

const client = createClient(clientConfig);

const Blog: React.FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await client.fetch(`*[_type == "post"]{
                title, 
                "slug":slug.current,
                "mainImage": mainImage.asset->url,
                alt
                }`);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        getPosts().then(r => console.log(r));

        const url = (`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`);
    }, []);

    return (
        <div>
            <h1>Blog</h1>

            <div className="flex justify-center items-center">
                {posts.map((post: any) => (
                    <div key={post.title} className={' p-3 border border-solid rounded-2xl border-black'}>
                        <h3>{post.title}</h3>
                        <Image src={post.mainImage} alt={post.alt} loading={"lazy"} width={300} height={250}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Blog;