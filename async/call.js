// 定义返回 Promise 的函数
function getData(a) {
    return new Promise((resolve, reject) => {
        if (a > 2) {
            resolve(a);
        } else {
            reject('不大于2');
        }
    });
}

async function fetchData() {
    try {
        let a = await getData(1).catch(res => {
            console.log(res); // 输出：不大于2
        });
        console.log(a); // 输出：undefined

        a = await getData(3); // 这里不再需要 catch，因为上面已经 catch 过了
        console.log(a); // 输出：3
    } catch (error) {
        console.error(error);
    }
}

// 调用包含异步操作的函数
fetchData();
