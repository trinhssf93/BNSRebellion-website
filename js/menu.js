function toggleMenu() {
console.log('menu toggle');

if ( document.getElementById("new-main-nav").classList.contains('open') )
{
document.getElementById("new-main-nav").classList.remove('open');
}
else
{
document.getElementById("new-main-nav").classList.add('open');
}

}