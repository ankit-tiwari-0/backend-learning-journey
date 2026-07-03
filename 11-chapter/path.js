const path = require("path")



console.log("FILE", __filename);
console.log("DIRNAME", __dirname);


/// school management ssystem

//folder/student/data.txt

//1 join

const filePath = path.join("folder", "student", "data.txt")

console.log(filePath);

const parsedDataPath = path.parse(filePath)
const resolvedPath = path.resolve(filePath)
const extname = path.extname(filePath)
const basename = path.basename(filePath)
const dirname = path.dirname(filePath)

console.log({
  parsedDataPath,
  resolvedPath,
  extname,
  basename,
  dirname,
})
