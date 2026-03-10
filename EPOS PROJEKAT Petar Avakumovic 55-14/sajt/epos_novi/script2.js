function osveziPrikaz() {
  const izabranaVrednost = document.getElementById('navigator').value;
  const sveSekcije = document.querySelectorAll('.sekcija');

  // Prvo sakriva sve sekcije
  sveSekcije.forEach(sekcija => {
    sekcija.style.display = 'none';
  });

  // Zatim prikazuje samo onu koja je izabrana
  const aktivnaSekcija = document.getElementById(izabranaVrednost);
  if (aktivnaSekcija) {
    aktivnaSekcija.style.display = 'block';
  }
}