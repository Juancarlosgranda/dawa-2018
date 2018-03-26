function mes (n){
    if(n<=7){
    if(n%2!=0){
        return "El primer dia es: 1, y el ultimo: 31";
    }
        else{
        return "El primer dia es: 1, y el ultimo: 30";
        }
    }else{
        if(n%2==0){
        return "El primer dia es: 1, y el ultimo: 31";
    }
        else{
        return "El primer dia es: 1, y el ultimo: 30";
        }
    }
}