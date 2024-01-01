function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(() => {
        console.log('2秒経過');
        // 2秒後に実行される処理
        promiseTimeout(3000);
    })
    .then(() => {
        console.log('Also done!');
        // 3秒後に実行される処理
        return Promise.resolve(43);
    })
    .then(result => {
        console.log(result);
    })
    .catch(() => {
        // エラーハンドリング
        console.log('error');
    })