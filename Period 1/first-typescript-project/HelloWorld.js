var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        console.log('Hello Everyone');
        return 0;
    };
    ;
    Startup.secondMain = function () {
        console.log('Hello Main');
        return 0;
    };
    ;
    return Startup;
}());
Startup.main();
Startup.secondMain();
//# sourceMappingURL=HelloWorld.js.map