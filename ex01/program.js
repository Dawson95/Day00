function isPalindrome(string){
    for(let i =0; i < string.length;i++){
        let temp = string.split('').reverse().join('');
        if(temp == string){
            return true;
        }else return false;
    
    }
    }