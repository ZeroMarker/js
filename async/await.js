function promiseTimeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateLongOperation() {
    await promiseTimeout(2000);
    return 34;
}

async function run() {
    const answer = await simulateLongOperation();
    console.log(answer);
}

run();