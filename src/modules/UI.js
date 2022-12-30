
// one instance of UI so I use module pattern
const UI = (() => {
    const hello = () => console.log("Hello");

    return {
        hello,
    }
})();


export default UI;