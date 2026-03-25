// const stream = new ReadableStream();
//design a class based pub-sub decorator to read stream in chunks.
class StreamReader {
    constructor(originalData) {
        this.data = originalData,
            this.chunkSize = 2000;
        this.chunkedData = [];
    }
    on() {
        console.log("Data is being divided into chunks..........");
        while (this.data > 0) {
            this.chunkedData.push(this.chunkSize + "MB"); //reading one chunk of chunkSize
            this.data -= this.chunkSize; //next chunk
        }
        console.log("operation successful....");
    }
    end() {
        console.log("Data has been processed in chunks......")
        console.table(this.chunkedData)
    }
}

let fileData = 10000;
fileData = new StreamReader(fileData);
fileData.on();
fileData.end();
