function Promedio_NumerosPositivos (prom,A,n, sum){
    negativo=0
    prom=0
    sum=0
    n=0

    for (let i=0; i< A.length; i++ ){
        if (A[i]<0) {
            negativo=1
        }
    }

    if(negativo=0){
        for (let j=0; A.length; j++){
            sum= A[j]+sum
            n=n+1
        }
        prom=sum/n
        console.log('el promedio es: ', prom)  
    }
    else{
        console.log('El arreglo tiene un número negativo')
    }
}