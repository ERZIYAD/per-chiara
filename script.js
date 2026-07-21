function openSection(sectionId) {
    // Nasconde tutte le sezioni
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostra la sezione selezionata
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

// Gestione delle lettere
const lettereTesti = {
    triste: "Se oggi le cose sembrano storte o pesanti, ricordati che è solo una giornata no. Tu sei forte, bellissima e capace di superare qualsiasi cosa. Io tifo sempre per te! ❤️",
    manco: "Anche tu mi manchi tantissimo in questo momento! Guarda le nostre foto, ascolta la nostra canzone e pensa che presto saremo di nuovo insieme ad abbracciarci. 🫂",
    ansia: "Fermati un attimo. Fai tre respiri profondi. Non devi fare tutto subito. Risolviamo una cosa alla volta, insieme. Io sono qui con te, non sei sola. 🌸",
    felice: "Vedere il tuo sorriso è la cosa più bella del mondo! Custodisci questa felicità e ricordati di questo momento bello. Ti amo! ✨"
};

function showLetter(tipo) {
    const box = document.getElementById('letterContent');
    const text = document.getElementById('letterText');
    
    text.innerText = lettereTesti[tipo];
    box.classList.remove('hidden');
}

// Testo dinamico per la respirazione (Inspira / Espira)
setInterval(() => {
    const breathText = document.getElementById('breathText');
    if (breathText) {
        if (breathText.innerText === "Inspira...") {
            breathText.innerText = "Ed espira lentamente...";
        } else {
            breathText.innerText = "Inspira...";
        }
    }
}, 4000);
