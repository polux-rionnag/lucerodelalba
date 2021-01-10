
function logout(){
    sessionStorage.removeItem('grado');
    sessionStorage.removeItem('persLogin');
    window.location.href='../index.html';
}