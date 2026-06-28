import React from 'react'
import {auth} from "@/auth"
const ProfileHeader = async ({id}:{id:string}) => {
    const session = await auth();

  return (
    <p>
      {session?.id === id ? "Your" : "All"} Startups
    </p>
  );
  
  
}

export default ProfileHeader