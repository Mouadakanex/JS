let username
try {
    console.log(username);
} catch (error) {
    console.log("Something went wrong");
}

try {
    console.log("Hello");
} catch (error) {
    console.log("Error");
} finally {
    console.log("Finished");
}
try {
    console.log(username);
} catch (error) {
    console.log("Error");
} finally {
    console.log("Finished");
}