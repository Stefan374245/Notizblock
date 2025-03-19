function noteTemplate (allNotes, i) {
    return `
    
            <div class="note-item">
                <h3>${allNotes.notesTitles[i]}</h3>
                <p>${allNotes.notes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'notes', 'trashNotes')">
                <img src="./assets/icons/delete.png" alt="In den Papierkorb" class="icon">In den Papierkorb</button>
                <button class="btn" onclick="moveNote(${i}, 'notes', 'archivNotes')">
                <img src="./assets/icons/archive.png" alt="In den Papierkorb" class="icon">Archivieren
                </button>
            </div>
        `;
}

function trashNotesTemplate( allNotes, i) {
    return `
            <div class="note-item">
                <h3>${allNotes.trashNotesTitles[i]}</h3>
                <p>${allNotes.trashNotes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'trashNotes', 'notes')">
                <img src="./assets/icons/undo_icon.png" alt="Wiederherstellen" class="icon">Wiederherstellen
                </button>
                <button class="btn" onclick="deleteTrash(${i})">
                <img src="./assets/icons/delete.png" alt="Löschen" class="icon">Löschen
                </button>
            </div>
        `;
}

function archiveNotes(allNotes, i) {
    return `
            <div class="note-item">
                <h3>${allNotes.archivNotesTitles[i]}</h3>
                <p>${allNotes.archivNotes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'archivNotes', 'notes')">
                <img src="./assets/icons/undo_icon.png" alt="Rückgängig" class="icon"> Rückgängig
            </button>
            </div>
        `;
}