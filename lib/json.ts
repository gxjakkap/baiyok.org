import fsPromises from 'fs/promises'

export async function fetchJSON(filePath: string){
    const jsonData = await fsPromises.readFile(filePath)
    const objData = jsonData.toString()
    return JSON.parse(objData)
}