function foo() {
    var bar = ''; // lexically scoped
    function zip() {
        var quux = 'hello'; // lexically scoped
        bar = true;
    }
    quux = 'world';
    return zip;
}
