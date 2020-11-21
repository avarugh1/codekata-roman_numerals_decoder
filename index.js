function solution(roman){
// complete the solution by transforming the 
// string roman numeral into an integer  
    let lookup = new Map();
    lookup.set("I", 1);
    lookup.set("V", 5);
    lookup.set("X", 10);
    lookup.set("L", 50);
    lookup.set("C", 100);
    lookup.set("D", 500);
    lookup.set("M", 1000);

    let num = 0;

    for(let i = 0;i<roman.length;i++){
        let c = roman.charAt(i);
        let cplusplus = roman.charAt(i+1);

        if( (lookup.get(cplusplus) > lookup.get(c))){
            num += (lookup.get(cplusplus) - lookup.get(c));
            i++;
        }else{
            num += lookup.get(c);
        }
    }

    return num;

}
console.log(solution('X')); // 21
console.log(solution('XXI')); // 21
console.log(solution('MCMXC')); // 1990
console.log(solution('MDCCCLXXXV')); // 1885
