var deretAngka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log("Sebelumnya : ", deretAngka)

function desc(deret){
    return(deret.reverse())
}

function asc(deret){
    desc(deret)
    return(deret.sort())
}
function fil(deret){
    return(deret.filter(deret => deret > 10))
}

console.log("Ascending : ", asc(deretAngka))
console.log("Descending : ", desc(deretAngka))
console.log("Filter > 10 : ", fil(deretAngka))

