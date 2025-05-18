document.getElementById('poptavkovy-formular')?.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Děkujeme za vaši poptávku!');
  this.reset();
});
