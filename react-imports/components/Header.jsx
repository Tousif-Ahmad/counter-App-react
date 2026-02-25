// default export => is me ek time me ek he export kr skte hain 
/* export default */ function Header(){
    return(
        <h1>Header he ye</h1>
    )
}

// named export => is me ek multiple export kr skte hain 
/* export */ function Card(){
    return(
        <h1>Card he ye</h1>
    )
}
/* export */ function Card2(){
    return(
        <h1>Card2 he ye</h1>
    )
}
export default Header

export{
    Card,
    Card2,
}
