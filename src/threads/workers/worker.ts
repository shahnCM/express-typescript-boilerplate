import {parentPort} from "worker_threads";

parentPort.on("message", (data: any) => {
  parentPort.postMessage({
    num: data.num,
    fib: getFib(data.num)
  })
})

function getFib(num: number): number {
  if (num === 0) {
    return 0;
  }
  else if (num === 1) {
    return 1;
  }
  else {
    return getFib(num - 1) + getFib(num - 2);
  }
}
