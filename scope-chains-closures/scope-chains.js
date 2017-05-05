function foo() {
    var bar = ''; // lexically scoped
    function zip() {
        var quux = ''; // lexically scoped
    }
}
