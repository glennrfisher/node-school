function foo() {
    var bar = ''; // lexically scoped
    function zip() {
        var quux = 'hello'; // lexically scoped
    }
    quux = 'world';
}
