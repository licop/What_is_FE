var name = 'licop';
function  foo() {
    name = 'licop1'

    function baz() {
        let age = 18;
        console.log(name, age)
    }
    baz()
}
foo()

