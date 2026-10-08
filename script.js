const btn=document.getElementById('menuBtn');const nav=document.querySelector('nav');
btn.addEventListener('click',()=>{const open=nav.classList.toggle('show');if(open){nav.style.cssText='display:flex;position:absolute;top:62px;right:5vw;background:#f4f4f1;border:1px solid #111;padding:18px;flex-direction:column;z-index:30;gap:18px'}else nav.removeAttribute('style')});
function tampilkanGambar(img, placeholder){img.addEventListener('load',()=>{if(img.naturalWidth>0){img.style.opacity='1';if(placeholder)placeholder.style.display='none'}});if(img.complete&&img.naturalWidth>0){img.style.opacity='1';if(placeholder)placeholder.style.display='none'}}
tampilkanGambar(document.querySelector('.banner img'),document.querySelector('.banner-placeholder'));
document.querySelectorAll('.project-visual img').forEach(img=>tampilkanGambar(img,null));
const logo=document.getElementById('logoImg'), fallback=document.querySelector('.logo-fallback');logo.addEventListener('load',()=>{if(logo.naturalWidth>0){logo.style.display='block';fallback.style.display='none'}});if(logo.complete&&logo.naturalWidth>0){logo.style.display='block';fallback.style.display='none'}
