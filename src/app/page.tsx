import Image from 'next/image'
import {schema} from "../../sanity/schema";
import {createClient, groq} from "next-sanity";

export default function Home() {

    return (
    <main className="">
        <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  )
}
