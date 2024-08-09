const calculadora = (one, two) => {
    
     const calculadora = 'dividir';
    switch(calculadora){
        case 'soma':
            console.log(one + two);
        break;
        case 'menos':
            console.log(one - two);
        break;
        case 'vezes':
            console.log(one * two);
        break;
        case 'dividir':
            console.log(one / two);
        break;
        default:
            console.log('errou');
        break;
    }
    
}
calculadora(20,5);

