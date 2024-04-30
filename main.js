let tim = new Date();

function getTime(){
    let ora = tim.getHours().toString().padStart(2, "0")
    let per = tim.getMinutes().toString().padStart(2, "0")
    
    return ora + ":" + per
}
let most = getTime()
let bellShedule = [ ]
document.querySelector("h1").innerHTML = most
function info() {
    let cur = bellShedule.find(ez=> most >= ez.from && most <= ez.to)
    let infoStr = ""
    if(cur){
        if(cur.id == 1){
            infoStr = `
            Most az ${cur.id}. óra van és a ${cur.to}-ig tart
        ` 
        }
        else{
            infoStr = `
                Most a ${cur.id}. óra van és a ${cur.to}-ig tart
            `
        }
    }
    else{
        let next = bellShedule.find(ez=> most  <ez.from)
        if(next) {
            infoStr = `Szünet van...., a következő óra ${next.from}-tól kezdődik`
        }
        else{
            infoStr = "Nincs adat"
        }
    }
    return infoStr  
}
document.querySelector(".info").innerHTML= info()

function refresh(){
    let sel = document.querySelector("input[name='duration']:checked").value
    bellShedule = bellShedules[sel]
    document.querySelector("h1").innerHTML = most
    document.querySelector(".info").innerHTML= info()
    
}