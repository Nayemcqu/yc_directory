import React from 'react'
import Ping from './ping'
import { STARTUPS_VIEWS_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { formatViews } from '@/lib/utils';
const View = async ({ id }:{id:string}) => {

const {views:totalViews} =await client.withConfig({useCdn: false}).fetch(STARTUPS_VIEWS_QUERY,{id}) || {views:0};
const formatedViews = formatViews(totalViews);
  return (
    <div className="view-container">
<div className="absolute -top-2 -right-2">

  <Ping/> 

</div>
  <p className="view-text">
    <span className="font-black">
{formatedViews}
    </span>
  </p>
    </div>
  )
}

export default View 