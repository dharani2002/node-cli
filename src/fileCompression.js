import fs from "fs";
import pako from "pako";

const compressFile=(inputPath, outputPath)=>{
    const input= fs.readFileSync(inputPath,"utf-8");
    const compressed=pako.deflate(input);
    fs.writeFileSync(outputPath,compressed);
    console.log(`File compressed to ${outputPath}`);
}

const decompressFile=(inputPath, outputPath)=>{
    const input= fs.readFileSync(inputPath,"utf-8");
    const decompressed=pako.inflate(input);
    fs.writeFileSync(outputPath,decompressed);
    console.log(`File decompressed to ${outputPath}`);
}

export {compressFile , decompressFile};