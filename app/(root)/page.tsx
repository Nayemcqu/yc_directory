
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
image:"https://images.stockcake.com/public/f/c/8/fc8a990a-5fea-47ff-9ab6-ba5dea628759_large/cute-robotic-companion-stockcake.jpg",
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
