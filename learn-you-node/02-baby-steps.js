argc = process.argv.length;
var total = 0;
for (var i = 2; i < argc; i++) {
    total += Number(process.argv[i]);
}
console.log(total);
