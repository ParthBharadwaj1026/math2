p1_n=localStorage.getItem('player1');
p2_n=localStorage.getItem('player2');

p1_s=0;
p2_s=0;

document.getElementById('player1_name').innerHTML=p1_n+' : ';
document.getElementById('player2_name').innerHTML=p2_n+' : ';

document.getElementById('player1_score').innerHTML=p1_s;
document.getElementById('player2_score').innerHTML=p2_s;

document.getElementById('player_q').innerHTML="Question Turn : "+p1_n;
document.getElementById('player_a').innerHTML="Answer Turn : "+p2_n;

function send(){
    first_n=parseInt(document.getElementById('first_n').value);
    second_n=parseInt(document.getElementById('second_n').value);

    question=first_n+' x '+second_n;
    display_question='<h4 id="q_dis">Question : '+question+'</h4>';
    answer_input='<br> Answer : <input type="text" id="input_check">';
    button_send='<br><br><button class="btn btn-info" onclick="check()">Check Answer</button>';

    row=display_question+answer_input+button_send;
    document.getElementById('output').innerHTML=row;
}