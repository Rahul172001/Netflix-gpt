import { GoogleGenAI } from "@google/genai"
import { API_Key } from "../../utils/firebase"

const ai = new GoogleGenAI({apiKey:API_Key})
export default ai
