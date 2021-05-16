import fs from 'fs';
import csvParse from 'csv-parse';

interface IHost {
    name: string,
}

function LoadHosts(file: Express.Multer.File): Promise<IHost[]> {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(file.path);
        const hosts: IHost[] = [];

        const parseFile = csvParse();

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            const [name] = line;

            hosts.push({
                name
            })
        })
            .on("end", () => {
                resolve(hosts);
            })
            .on("error", (err) => {
                reject(err)
            })
    })
}

export { LoadHosts }