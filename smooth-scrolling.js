// Skript für weiche Scroll-Animation bei seiteninternen Links
// Browser support: https://caniuse.com/scrollintoview

// Quelle: stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link#answer-7717572

// Anpassung zum Original:
// Es sollen ausschließlich die Anchor gematcht werden, deren Pfad dem aktuellen window.location.pathname entspricht
// Andernfalls würde versucht werden, andere Seiten mit ScrollIntoView aufzurufen. 
const siteSpecificAnchorSelector = `a[href^="${window.location.pathname}#"]`

document.querySelectorAll(siteSpecificAnchorSelector).forEach(anchor => {
  console.log(anchor)
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // weil der Pfadname mit in der href mit auftaucht, muss ID extra ausgelesen werden 
    const anchorTargetId = this.getAttribute('href').split('#')[1]
    document.getElementById(anchorTargetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});