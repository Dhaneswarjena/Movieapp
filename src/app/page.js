import Link from "next/link";
import Cardcomp from "./Component/Cardcomp";

const API_KEY=process.env.API_KEY
const Home =async() => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  const data=await res.json();
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  const results=data.results
  return (
     <div className="bg-gray-800 min-h-[100vh] grid grid-cols-1">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <section className="py-4">
 <h1 className="text-3xl text-white">
      All Movies
    </h1>
    </section>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

   {results&&results.map((val,index)=>
   <Cardcomp key={index} id={val.id} imagepath={val.poster_path} title={val.original_title} desc={val.overview}/>
  )}
   
      
    </section>
   
    </div>
      
    </div>
  )
}

export default Home
