var turn=0;
var ties=0;
var player1=0;
var player2=0;
var board=["a","b","c","d","f","g","h","i","j"];
document.getElementById("player1").innerHTML=`Player X's Score:<br>${player1}`
document.getElementById("player2").innerHTML=`Player O's Score:<br> ${player2}`
document.getElementById("ties").innerHTML=`Ties: ${ties}`
document.getElementById("playerTurn").innerHTML=`Player X's Turn`;
function run(id){
    document.getElementById("playerTurn").innerHTML=`Player X's Turn`;
    if(turn%2==0){
        x=document.getElementById(id);
        x.innerText="X";
        x.disabled=true;
        turn++;
        board[id]="1"
        document.getElementById("playerTurn").innerHTML=`Player O's Turn`;
    }else{
        x=document.getElementById(id);
        x.innerText="O";
        x.disabled=true;
        turn++;
        board[id]="0"
        document.getElementById("playerTurn").innerHTML=`Player X's Turn`;
    }
    if(turn>=3){
        check();
    }
}
function check(){
    for(let i=0;i<board.length;i++){
        if(board[0]==board[1]&&board[0]==board[2]){
            if(board[0]=="1"){
                player1Win();
                break; 
            }
            if(board[0]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[3]==board[4]&&board[3]==board[5]){
            if(board[3]=="1"){
                player1Win();
                break; 
            }
            if(board[3]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[6]==board[7]&&board[6]==board[8]){
            if(board[6]=="1"){
                player1Win();
                break; 
            }
            if(board[6]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[0]==board[3]&&board[0]==board[6]){
            if(board[0]=="1"){
                player1Win();
                break; 
            }
            if(board[0]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[1]==board[4]&&board[1]==board[7]){
            if(board[1]=="1"){
                player1Win();
                break; 
            }
            if(board[1]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[2]==board[5]&&board[2]==board[8]){
            if(board[2]=="1"){
                player1Win();
                break; 
            }
            if(board[2]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[0]==board[4]&&board[0]==board[8]){
            if(board[0]=="1"){
                player1Win();
                break; 
            }
            if(board[0]=="0"){
                player2Win();
                break; 
            }
        }
        if(board[2]==board[4]&&board[2]==board[6]){
            if(board[2]=="1"){
                player1Win();
                break; 
            }
            if(board[2]=="0"){
                player2Win();
                break; 
            }
        }
        if(board.every(element => !isNaN(element))){
            ties++;
            document.getElementById("ties").innerHTML=`Ties: ${ties}`
            break;
        }
    }
}
function resetBoard(){
    board=["a","b","c","d","f","g","h","i","j"]
    x=document.getElementsByClassName("button");
    for(let i=0;i<x.length;i++){
        x[i].innerText="";
        x[i].disabled=false
        turn=0;
    }
    document.getElementById("playerTurn").innerHTML=`Player X's Turn`;
}
function resetGame(){
    location.reload();
}
function player1Win(){
    board=["a","b","c","d","f","g","h","i","j"]
    player1++;
    x=document.getElementsByClassName("button");
    turn=0;
    for(let i=0;i<x.length;i++){
        x[i].disabled=true
    }
    document.getElementById("player1").innerHTML=`Player X's Score:<br>${player1}`
    document.getElementById("playerTurn").innerHTML=`Please Reset Board`;
}
function player2Win(){
    board=["a","b","c","d","f","g","h","i","j"]
    player2++;
    x=document.getElementsByClassName("button");
    turn=0;
    for(let i=0;i<x.length;i++){
        x[i].disabled=true
    }
    document.getElementById("player2").innerHTML=`Player O's Score:<br>${player2}`
    document.getElementById("playerTurn").innerHTML=`Please Reset Board`;
}