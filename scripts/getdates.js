const today = new Date();

currentyear.innerHTML = today.getFullYear();

let lastModif = new Date(document.lastModified);

lastModified.innerHTML = `Last Modification: ${lastModif}`;