function additems1() {
    studentName();
    studentid();
    SubjectHTML();
    StudentCSS();
    StudentJAVASCRIPT();
    StudentBOOTSTRAP();
    TotalMarks();
}
// 11111
function studentName(){
    var input1=document.getElementById('ipt0').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr1');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt0').value="";
}
///2222
function studentid(){
    var input1=document.getElementById('ipt1').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr2');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt1').value="";
}
///3333
function SubjectHTML(){
    var input1=document.getElementById('ipt2').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr3');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt2').value="";
}
////4444
function StudentCSS(){
    var input1=document.getElementById('ipt3').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr4');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt3').value="";
}
////5555
function StudentJAVASCRIPT(){
    var input1=document.getElementById('ipt4').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr5');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt4').value="";
}
///66666
function StudentBOOTSTRAP(){
    var input1=document.getElementById('ipt5').value;
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr6');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt5').value="";
}
//7777
function TotalMarks(){
    var input1=document.getElementById('ipt6').value=['ipt2'+'ipt3'+'ipt4'+'ipt5'];
    var list=document.getElementById('customers');
    var tr=document.getElementById('list');
    var td=document.getElementById('tr7');
    td.innerHTML=input1;
    list.appendChild(td);
    document.getElementById('ipt6').value="";
}