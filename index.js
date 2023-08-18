function receivesAFunction(chai){
    chai()
}

const returnsANamedFunction = () => {
    const namedFunction = () =>{

    }
    return namedFunction
}


const returnsAnAnonymousFunction = () => {
    return () =>{
        
    }
}