import {Worker} from "worker_threads"
import path from "path";

const workerFile = __dirname + './../workers/worker.js'

const worker1 = new Worker(workerFile)
const worker2 = new Worker(workerFile)

//Listen for a message from worker
worker1.on("message", (result: any) => {
  console.log(`${worker1.threadId}: ${result.num}th Fibonacci Number: ${result.fib}`);
});

worker1.on("error", (error: Error) => {
  console.log(error);
});

worker1.on("exit", (msg: string) => {
  console.log('Exit ' + msg);
});

worker2.on("message", (result: any) => {
  console.log(`${worker2.threadId}: ${result.num}th Fibonacci Number: ${result.fib}`);
});

worker2.on("error", (error: Error) => {
  console.log(error);
});

worker2.on("exit", (msg: string) => {
  console.log('Exit ' + msg);
});

export async function executeOnThread (fistNum: number, secondNum: number): Promise<void> {
  worker1.postMessage({
    num: fistNum
  })

  worker2.postMessage({
    num: secondNum
  })
}



