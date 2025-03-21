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
                 <button class="btn" onclick="editNote(${i}, 'notes')">
                <img src="./assets/icons/edit.png" alt="Bearbeiten" class="icon"> Bearbeiten
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
                 <button class="btn" onclick="editNote(${i}, 'trashNotes')">
                <img src="./assets/icons/edit.png" alt="Bearbeiten" class="icon"> Bearbeiten
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
             <button class="btn" onclick="editNote(${i}, 'archivNotes')">
                <img src="./assets/icons/edit.png" alt="Bearbeiten" class="icon"> Bearbeiten
            </button>
            </div>
        `;
}

function editFormTemplate(allNotes, index, category) {
    const { title, content } = checkCategory(allNotes, index, category);

    // Bearbeitungsformular zurückgeben
    return `
    <div class="edit-form">
        <h3>Notiz bearbeiten</h3>
        <label for="edit-title">Titel:</label>
        <input type="text" id="edit-title" value="${title}" />
        <label for="edit-content">Inhalt:</label>
        <textarea id="edit-content">${content}</textarea>
        <button onclick="saveEdit(${index}, '${category}')">Speichern</button>
        <button onclick="closeEditForm()">Abbrechen</button>
    </div>
    `;
}

function checkCategory(allNotes, index, category) {
    let title, content;

    // Titel und Inhalt basierend auf der Kategorie abrufen
    if (category === 'notes') {
        title = allNotes.notesTitles[index];
        content = allNotes.notes[index];
    } else if (category === 'trashNotes') {
        title = allNotes.trashNotesTitles[index];
        content = allNotes.trashNotes[index];
    } else if (category === 'archivNotes') {
        title = allNotes.archivNotesTitles[index];
        content = allNotes.archivNotes[index];
    }

    // Überprüfen, ob Titel und Inhalt existieren
    if (!title || !content) {
        console.error('Titel oder Inhalt konnte nicht gefunden werden.');
        return { title: '', content: '' };
    }

    return { title, content };
}