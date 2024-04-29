// https://juejin.cn/post/7019108610332426248
function stack() {
    // Create a new Error object
    var err = new Error();

    // Capture the stack trace
    var stackTrace = err.stack;

    // Print or process the stack trace as needed
    console.log(stackTrace);

    console.trace();
}