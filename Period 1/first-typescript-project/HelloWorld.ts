class Startup {
    public static main(): number {
        console.log('Hello World');
        console.log('Hello Everyone');
        return 0;
    };
    static secondMain() {
        console.log('Hello Main');
        return 0;
    };
}

Startup.main();
Startup.secondMain();