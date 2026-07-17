import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filepath = path.join(__dirname, "data", "tasks.json")

export const readTask = ()=>{
    try{
        ensureFileExists();
        const data = fs.readFileSync(filepath, "utf-8");
        return JSON.parse(data || "[]");
    } catch (error){
       console.log("Error reading tasks:", error);
       return [];
    }
}
export const writeTask = (tasks)=>{
     try {
    fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing tasks:", error);
  }
};

const ensureFileExists = () => {
  try {
    if (!fs.existsSync(filepath)) {
      fs.mkdirSync(path.dirname(filepath), { recursive: true }); // Ensure the directory exists
      fs.writeFileSync(filepath, "[]", "utf-8"); // Create an empty JSON file
    }
  } catch (error) {
    console.error("Error ensuring file exists:", error);
  }
}