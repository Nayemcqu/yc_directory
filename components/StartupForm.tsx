'use client'
import React from 'react'
import {Input} from '@/components/ui/input'
import { useState } from 'react';
import { Textarea } from './ui/textarea';
import MDEditor, { TextAreaTextApi } from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
const StartupForm = () => {

const [errors,setErrors] =useState<Record<string, string>>({});
const [pitch,setPitch] =useState<string>('');

const isPending=false;

return <form  action={()=>{}} className="startup-form">
<div>
<label htmlFor="title" className="startup-form_label"> Title</label>
<Input id="title"  name='title' className="startup-form_input" placeholder="Enter startup title" required/>

{errors.title &&<p className='startup-form_error'>{errors.title}</p>}
</div>

<div>
<label htmlFor="description" className="startup-form_label"> Description</label>
<Textarea id="description"  name='description' className="startup-form_textarea" placeholder="Enter startup description" required/>

{errors.description &&<p className='startup-form_error'>{errors.description}</p>}
</div>

<div>
<label htmlFor="category" className="startup-form_label"> Category</label>
<Input id="category"  name='category' className="startup-form_textarea" placeholder="Enter startup category" required/>

{errors.category &&<p className='startup-form_error'>{errors.category}</p>}
</div>

<div>
<label htmlFor="link" className="startup-form_label"> Image URL</label>
<Input id="link"  name='link' className="startup-form_input" placeholder="Enter image URL" required/>

{errors.link &&<p className='startup-form_error'>{errors.link}</p>}
</div>

<div data-color-mode="dark">
<label htmlFor="pitch" className="startup-form_label"> Pitch</label>
<MDEditor
value={pitch}
onChange={(value) => setPitch(value as string)}
id="pitch"
preview="edit"
height={300}
style={{borderRadius:20, overflow:"hidden"}}
textareaProps={{
  placeholder:"Briefly describe your idea what problem it solves"  
}}
/>
{errors.pitch &&<p className='startup-form_error'>{errors.pitch}</p>}
</div>

<Button type='submit' className='startup-form_btn !rounded-full border-8 border-primary
 hover:border-black text-white text-xl' 
disabled={isPending}
>
{isPending ? 'Submitting...' : 'Submit your Pitch'}
<Send className='size-6 ml-2'/>
</Button>

  </form>
}

export default StartupForm