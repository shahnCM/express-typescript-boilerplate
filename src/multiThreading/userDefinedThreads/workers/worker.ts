import { exit } from "process";
import {parentPort} from "worker_threads";

parentPort.on("message", (data: any) => {
  parentPort.postMessage({
    num: data.num,
    fib: getFib(data.num),
  })
})

function getFib(num: number): any {

  if(num > 45) { 
    exit()
  }
  
  if (num === 0 || num === 1) {
    return num;
  }
  else {
    return getFib(num - 1) + getFib(num - 2);
  }
}




