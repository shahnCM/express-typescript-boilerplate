import workerpool from "workerpool";

// Big Loop
export async function bigLoop (limit: number): Promise<number> {
    console.log('BIG LOOP')
    let n: number = 1

    for(let i = 0; i < limit; i++) {
        n+=i
    }

    console.log(n);
    return n;
}

workerpool.worker({
    bigLoop: bigLoop
})