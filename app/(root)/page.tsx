
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

 export default async function Home({searchParams}:{searchParams:Promise<{query?:string}>}) {

const query=(await searchParams).query;

const posts=[{

_createdAt:new Date(),  
views:55,
author:{_id:1,name:'Nayem'},
_id:1,
description:'this is a description',
image:"https://unsplash.com/t/architecture-interior?modal=%5B%22Subscribe%22%2C%5B%22DownloadImage%22%2C%7B%22referrer%22%3A%5B%22Asset%22%2C%5B%22Photos%22%2C%7B%22slug%22%3A%22a-laptop-computer-sitting-on-top-of-a-wooden-desk-xiZNd4g3LL0%22%7D%5D%5D%2C%22sourceAsset%22%3A%5B%22Photos%22%2C%7B%22slug%22%3A%22a-laptop-computer-sitting-on-top-of-a-wooden-desk-xiZNd4g3LL0%22%7D%5D%7D%5D%5D",
category:"Robots",
title:"We Robots"

}]


  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch Your startup,<br />  connect with,Entrepreneuers</h1>
    <p className="sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and get Noticed in Virtual, Competitions.
    </p>
<SearchForm query={query}/>
    </section>
    
  <section className="section_container">
    
  <p className="text-30-semibold ">
    
    { query ? `search results for ${query}` : 'All Startups' }
  
    </p>  
  <ul className="mt-7 card_grid">
{posts?.length>0 ? (
  posts.map((post:StartupCardType, index:number)=>(
    <StartupCard key={post?._id} post={post} />))) :(

   <p className="no-results">No Startup found </p> 
  
)}

  </ul>

    </section>  


    </>
  );
}
