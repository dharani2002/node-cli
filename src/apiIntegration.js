import axios from "axios";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const jokeGenerator =async ()=>{
    try{
        const response= await axios.get(`https://official-joke-api.appspot.com/random_joke`)
        console.log(`Joke: ${response.data.setup} - ${response.data.punchline}`);
    }
    catch(error){
        console.log("Error fetching joke",error.message)
    }

}

export {jokeGenerator}