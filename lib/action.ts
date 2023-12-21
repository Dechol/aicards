"use server"

import OpenAI from "openai";
import { connectToDatabase } from "./mongoose";

const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_AI_KEY});


export async function testCall(){
    console.log('server test call')
}

export async function getData(formPrompt: string){
    try {

        const response = await openai.images.generate({ 
            model: "dall-e-3", 
            prompt: formPrompt
        });

        const image_url = response.data[0].url

        return image_url


        
    } catch (error) {
        console.log(error)

    }
}

export async function createNew(userPrompt: string){
    try {

        await connectToDatabase()

        const response = await openai.images.generate({
            model: "dall-e-3",
            style: 'vivid',
            quality: 'hd',
            prompt: userPrompt,
            n: 1,
            size: "1024x1024",
            response_format:'url',
            user:'dec'
          });

        console.log('the response:',response)

        const data = response.data[0];




        console.log('the image_url',data)

        return data

    } catch (error) {
        console.log(error)

    }
}

// export async function editImage(userPrompt:any, userImage:any){
//     try {

//         console.log('editing image on back end!!',userImage)

//         const response = await fetch(userImage)
//         if (!response.ok) {
//             throw new Error(`Failed to fetch ${userImage}: ${response.statusText}`);
//         }
//         console.log(response)

        

        // const formData = new FormData();
        // formData.append('image', response.body, {
        //     filename: 'image.jpg',
        //     contentType: 'image/jpeg'
        // });

        // console.log(formData)

        // const image = await openai.images.edit({
        //     image: userImage,
        //     prompt: userPrompt
        //     // image: fs.createReadStream("otter.png"),
        //     // mask: fs.createReadStream("mask.png"),
        //     // prompt: "A cute baby sea otter wearing a beret",
        //   });
        
        //   console.log('image',image);
        
    // } catch (error) {
    //     console.log(error)

    // }

    // revalidatePath('/')
// }

// export async function variationImage(formPrompt: string){
//     try {
//         const response = await openai.createImageVariation(
//             fs.createReadStream("corgi_and_cat_paw.png"),
//             "dall-e-2",
//             1,
//             "1024x1024"
//           );
//           image_url = response.data.data[0].url;

        
//     } catch (error) {
//         console.log(error)

//     }

    // revalidatePath('/')
// }