const increamentCounter1 = {
    counter: 0
}

export const increamentCounter = () =>{
    return {
        type: "increament"
    }
}

export const decreamentCounter = () =>{
    return{
        type: "decreament"
    }
}
