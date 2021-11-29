function firstNonRepeatingCharacter(string) {
    let compteur=[];
    for(let i=0; i<string.length; i++){
    compteur[i]=0;
        for(let y=i+1; y<string.length; y++){
            if(string[i]==string[y]){
                compteur[i]++;
            }
    		}
        
        if(compteur[i]==0){
          	return i;
        }
    }
return -1;
}

  
    
    // Do not edit the line below.
    exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;