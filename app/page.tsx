"use client"

import { Textarea } from "@/components/ui/textarea";
import { createNew } from "../lib/action";
import Image from 'next/image'
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [ imageUrl, setImageUrl ] = useState()
  const [ userPrompt, setUserPrompt] = useState('humanoid christmas tree riding a bike')
  const [ userMessage, setUserMessage] = useState('')

  async function handleSubmit(e:any){
    e.preventDefault()
    console.log('handle submit')

    // attach state

    const data = await createNew(userPrompt)

    console.log(data)

    setImageUrl( data.url)
    setUserPrompt( data.revised_prompt)
  }

  async function handleNew(e: any){
    e.preventDefault()

    const formData = new FormData(e.target.form);
    const prompt = formData.get("prompt");

    console.log('prompt:',typeof(prompt))

    if(typeof(prompt) === 'string'){
      console.log('yes string poassed')

      testCall()
      // const image_url = await createNew(prompt)

      // console.log('image_url:',image_url)

      // setImageUrl(image_url)
    }
  }

  async function handleEdit(e:any){
    e.preventDefault()

    console.log('EDIT')

    const formData = new FormData(e.target.form);
    const prompt = formData.get("prompt");

    console.log('edit prompt', prompt)

    testCall()

    // const image_url = await editImage( prompt, imageUrl)

    // console.log(image_url)


  }

  async function handleVariation(e:any){
    e.preventDefault()

    console.log('VARIATION')
  }

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
              <span className="sr-only">Toggle user menu</span>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    <main className="flex flex-row min-h-screen items-center justify-between p-24">

      {imageUrl && <Image alt='openAi image' src={imageUrl} width={1024} height={1024}/>}

      {imageUrl && (
        <form className='flex flex-col'>

          <label className="m-2 p-2 flex flex-col">Prompt:
            <Textarea name="prompt" rows={12} cols={60} value={userPrompt} onChange={e => setUserPrompt(e.target.value)} />
          </label>
          <label className="m-2 p-2 flex flex-col">
            <span className="text-bold">Would you like to add a message?</span>
            <Textarea name="prompt" rows={2} cols={60} value={userMessage} onChange={e => setUserMessage(e.target.value)} />
          </label>

          <Button type='button' className='border border-black m-2 p-2' onClick={handleSubmit}>Create New</Button>
          
        </form>  
      )}

      {!imageUrl && (
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label>Prompt:
            <Textarea name="prompt" rows={4} value={userPrompt} onChange={e => setUserPrompt(e.target.value)} />
          </label>
          <label>Message:
            <textarea name="prompt" rows={4} value={userPrompt} onChange={e => setUserPrompt(e.target.value)} />
          </label>          
          <Button className='border border-black'>Create Image</Button>
        </form>  
      )}
 
    </main>
    </>
  )
}
