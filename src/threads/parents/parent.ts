import {Worker} from "worker_threads"
import path from "path";

const workerFile = __dirname + './../workers/worker.js'

const worker = new Worker(workerFile)

//Listen for a message from worker
worker.on("message", (result: any) => {
  console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
});

worker.on("error", (error: Error) => {
  console.log(error);
});

// worker.on("exit", (msg: string) => {
//   console.log('Exit ' + msg);
// });

export const executeOnThread = (fistNum: number, secondNum: number) => {
  worker.postMessage({
    num: fistNum
  })

  worker.postMessage({
    num: secondNum
  })
}



