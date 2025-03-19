function noteTemplate (allNotes, i) {
    return `
    
            <div class="note-item">
                <h3>${allNotes.notesTitles[i]}</h3>
                <p>${allNotes.notes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'notes', 'trashNotes')">In den Papierkorb</button>
                <button class="btn" onclick="moveNote(${i}, 'notes', 'archivNotes')">Archivieren</button>
            </div>
        `;
}

function trashNotesTemplate( allNotes, i) {
    return `
            <div class="note-item">
                <h3>${allNotes.trashNotesTitles[i]}</h3>
                <p>${allNotes.trashNotes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'trashNotes', 'notes')">Wiederherstellen</button>
                <button class="btn" onclick="deleteTrash(${i})">Löschen</button>
            </div>
        `;
}

function archiveNotes(allNotes, i) {
    return `
            <div class="note-item">
                <h3>${allNotes.archivNotesTitles[i]}</h3>
                <p>${allNotes.archivNotes[i]}</p>
                <button class="btn" onclick="moveNote(${i}, 'archivNotes', 'notes')">Wiederherstellen</button>
            </div>
        `;
}