function openSection(sectionId) {
    // Nasconde tutte le sezioni
    const sections = document.querySelectorAll('.card');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostra solo quella cliccata
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}

