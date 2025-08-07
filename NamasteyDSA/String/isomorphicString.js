function isomorphic(s, v){
    if(s.length !== v.length) return false;

    let mapStoV = {};
    let mapVtoS = {};

    for(let i=0; i<s.length; i++){
        if(!mapStoV[s[i]] && !mapVtoS[v[i]]){
            mapStoV[s[i]] = v[i];
            mapVtoS[v[i]] = s[i]
        }
        else if(mapVtoS[v[i]] !== s[i] || mapStoV[s[i]] !== v[i]){
            return false
        }
    }
    return true;
}
let s = "paper";
let v = "title";

// let s = "foo";
// let v = "bar";

// let s = "far";
// let v = "boo";

// let s = "egg";
// let v = "add";

// let s = "code";
// let v = "javascript";

console.log(isomorphic(s,v));