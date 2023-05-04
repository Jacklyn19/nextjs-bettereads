import path, { parse } from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
    const{title} = req.query
    const jsonDirectory = path.join(process.cwd(), 'json');

    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const data = JSON.parse(fileContents).filter(d => d.title === title)

    res.status(200).send(JSON.stringify(data, null, 2));
}