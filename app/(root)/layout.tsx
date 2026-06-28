import Navbar from "@/components/navbar";
import {Suspense} from "react"

export default function Layout({children}:Readonly <{children:React.ReactNode}>){

    return (

<main className="font-work-sans ">
<Suspense fallback={<p>loading...</p>}>
<Navbar/>
</Suspense>   

{children}

    </main>    
    
)

}