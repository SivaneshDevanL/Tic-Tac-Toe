import React, { useState } from 'react';
import './TicTacToe.css'

var x=true
export default function App(){
    const [square,setSquare]=useState(Array(9).fill(null))
    const winner= checkresult()
    var turn
    if(winner)
    turn=winner +' is winner'
    else if(!square.includes(null))
    turn='Draw'
    else
    turn=x?'X Turn':'O Turn'
    function handleclick(i){
        if(square[i]!=null||winner) return
        const s=[...square]
        if(x) s[i]="X"
        else s[i]="O"
        setSquare(s)
        x=!x
    }
    function squarerender(i){
        return(
            <div id="s" onClick={()=>handleclick(i)}>{square[i]}</div>
        )
    }
    function checkresult(){
        const boxes=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1.4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<8;i++){
            const[a,b,c]=boxes[i]
            if(square[a]&&(square[a]===square[b])&&(square[a]===square[c])){
                return square[a]
            }
        }
        return null
    }
    function reset(){
        setSquare(Array(9).fill(null))
        turn='X Turn'
        x=true
    }
    return(
        <>
        <div id="turn">{turn}</div>
        <div id="main">
        <div className="row">
        {squarerender(0)}
        {squarerender(1)}
        {squarerender(2)}
        </div>
        <div className="row">
        {squarerender(3)}
        {squarerender(4)}
        {squarerender(5)}</div>
        <div className="row">
        {squarerender(6)}
        {squarerender(7)}
        {squarerender(8)}</div>
        </div>
        <button id="reset" onClick={reset}>Reset</button>
        </>
    )
}