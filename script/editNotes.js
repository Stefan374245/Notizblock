function editNote(index, category) {
    // Finde die richtige Notiz basierend auf der Kategorie
    if (category === 'notes') {
        note = { title: allNotes.notesTitles[index], content: allNotes.notes[index] };
    } else if (category === 'trashNotes') {
        note = { title: allNotes.trashNotesTitles[index], content: allNotes.trashNotes[index] };
    } else if (category === 'archivNotes') {
        note = { title: allNotes.archivNotesTitles[index], content: allNotes.archivNotes[index] };
    }

    // Öffne ein Bearbeitungsformular
    const editForm = editFormTemplate(allNotes, index, category);

    // Füge das Formular zum DOM hinzu
    document.body.insertAdjacentHTML('beforeend', editForm);
}

function saveEdit(index, category) {
    // Speichere die Änderungen
    const newTitle = document.getElementById('edit-title').value;
    const newContent = document.getElementById('edit-content').value;

    if (category === 'notes') {
        allNotes.notesTitles[index] = newTitle;
        allNotes.notes[index] = newContent;
    } else if (category === 'trashNotes') {
        allNotes.trashNotesTitles[index] = newTitle;
        allNotes.trashNotes[index] = newContent;
    } else if (category === 'archivNotes') {
        allNotes.archivNotesTitles[index] = newTitle;
        allNotes.archivNotes[index] = newContent;
    }

    // Aktualisiere die Ansicht
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();

    // Schließe das Bearbeitungsformular
    closeEditForm();
}

function closeEditForm() {
    const editForm = document.querySelector('.edit-form');
    if (editForm) {
        editForm.remove();
    }
}