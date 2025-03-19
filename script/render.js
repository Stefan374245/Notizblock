/**
 * Renders the notes.
 */
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    if (allNotes.notes.length === 0) { 
        contentRef.innerHTML = "<p>Keine Notizen vorhanden.</p>";
        return;
    }

    for (let i = 0; i < allNotes.notes.length; i++) {
        contentRef.innerHTML += noteTemplate(allNotes, i);
    }
}

/**
 * Renders the trash notes.
 */
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash-content');
    trashContentRef.innerHTML = "";

    if (allNotes.trashNotes.length === 0) {
        trashContentRef.innerHTML = "<p>Keine Notizen im Papierkorb.</p>";
        return;
    }

    for (let i = 0; i < allNotes.trashNotes.length; i++) {
        trashContentRef.innerHTML += trashNotesTemplate( allNotes, i);
    }
}

/**
 * Renders the archived notes.
 */
function renderArchivNotes() {
    let archivContentRef = document.getElementById('archiv-content');
    archivContentRef.innerHTML = "";

    if (allNotes.archivNotes.length === 0) {
        archivContentRef.innerHTML = "<p>Keine Notizen im Archiv.</p>";
        return;
    }

    for (let i = 0; i < allNotes.archivNotes.length; i++) {
        archivContentRef.innerHTML += archiveNotes(allNotes, i);
    }
}