const result = {
    success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
  
 var success=result.success
 var store=success.length
 for(var value in result){
    for(var x in result[value]){
        console.log(result[value][x])
    }
    // console.log(value)
    // console.log(success[value]);
}
 