//V1

//let cantReportes = 10

// for(i=0; i<=cantReportes; i++) {
//     setTimeout(function() {
//         setTimeout(function() {
//             let reporteARegenerar = document.getElementsByClassName("fa-refresh")[i];
//             reporteARegenerar.click();
//         }, 500);
//     let botonConfirm = document.getElementsByClassName("swal-button--confirm")
//     botonConfirm.click();
//     }, 500);
// }

//V2

// function clicker(){
//     set = setInterval(function() {
//         for (i=0; i<=10; i++) {
//             document.querySelector('[title="Regenerar Reporte"]'[i]).click();
//             document.getElementsByClassName("swal-button--confirm").click();
//             document.getElementsByClassName("swal-button--confirm").click();
//             };
//         }, 1000);  
// }

// clicker()

// function autoclicker(i){
//         document.getElementsByClassName('fa-refresh')[i].click();
//         document.getElementsByClassName('swal-button--confirm')[0].click();
//         document.getElementsByClassName('swal-button--confirm')[0].click();
//         i++;
// }


//setInterval(autoclicker(i), 5000);

//V3 FUNCIONAL

var i = 0;

function interval1(){
        document.getElementsByClassName('fa-refresh')[i].click();
}

function interval2(){
        document.getElementsByClassName('swal-button--confirm')[0].click();
}

function intervaloClicker(){
    setTimeout(interval1, 1000);
    setTimeout(interval2, 4000);
    setTimeout(interval2, 10000);
    i = i + 1;
    console.log(i)
    if (i == 100) {
        clearInterval(intervaloClicker);
    }
}

setInterval(intervaloClicker, 11000);

