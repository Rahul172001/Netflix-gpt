import OpenAI from "openai";
import { groq_API_Key } from "../../utils/firebase";

const groq = new OpenAI({
    apiKey: groq_API_Key,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true

});

export default groq