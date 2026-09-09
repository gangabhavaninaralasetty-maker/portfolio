// Small entrance animation
document.querySelectorAll('.section, .hero-text, .photo-wrap').forEach((el,i)=>{
  el.style.opacity='0';
  el.style.transform='translateY(18px)';
  el.style.transition='opacity .7s ease, transform .7s ease';
  setTimeout(()=>{el.style.opacity='1';el.style.transform='translateY(0)'},120+i*80);
});
