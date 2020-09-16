// var mouse = {
//     name : 'mickey',
//     say :  function() { console.log("my name is", this.name)}
// }
// mouse.say()
// var cat = {
//     name : 'tom'
// }
// var tuan = mouse.say.bind(cat)
// tuan()

function run(cb) {
    console.log("run ...")
    cb()
}
var mouse = {
    name : 'mickey',
    say :  function() { console.log("my name is", this.name)}
}
run(mouse.say.bind(mouse))