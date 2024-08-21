function reverseString(str){
    if(str === ""){
        return ""
    }
    console.log(reverseString(str.substring(1))+str.charAt(0),"return")
    console.log(str.substring(1),"sub-string")
    return reverseString(str.substring(1))+str.charAt(0)
}

console.log(reverseString("hello"))

