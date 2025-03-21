

/**
 * Initializes the application by performing the following actions:
 * - Checks the storage and updates the necessary data.
 * - Renders the notes.
 * - Renders the notes in the trash.
 * - Renders the archived notes.
 */
function init() {
    checkStorageAndUpdate();
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
}

/**
 * Adds a new note to the list of notes.
 */
function addNote() {
    let titleInputRef = document.getElementById('note-title');
    let noteInputRef = document.getElementById('note-content');
    let noteTitle = titleInputRef.value.trim();
    let noteContent = noteInputRef.value.trim();

    allNotes.notesTitles.push(noteTitle);
    allNotes.notes.push(noteContent);

    saveToLocalStorage();
    renderNotes();

    titleInputRef.value = "";
    noteInputRef.value = "";
   setTimeout(() => {
        scrollToLastNote('content'); // 'content' ist die ID des Containers für Notizen
    }, 100);
}

/**
 * Scrollt zur letzten Notiz im angegebenen Container.
 * @param {string} containerId - Die ID des Containers, der die Notizen enthält.
 */
function scrollToLastNote(containerId) {
    const notesContainer = document.getElementById(containerId); // Container für die Notizen
    if (notesContainer) {
        const lastNote = notesContainer.lastElementChild; // Letzte Notiz im Container
        if (lastNote) {
            lastNote.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/**
 * Moves a note from one category to another.
 */
function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);
    let notesTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(notesTitle[0]);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderArchivNotes();
    scrollToSection(destinationKey);
}

/**
 * Scrollt zum Zielbereich basierend auf dem Zielschlüssel.
 * @param {string} destinationKey - Der Schlüssel des Zielbereichs (z. B. 'archivNotes', 'trashNotes', 'notes').
 */
function scrollToSection(destinationKey) {
    let sectionId = '';

    if (destinationKey === 'archivNotes') {
        sectionId = 'archiv-content';
    } else if (destinationKey === 'trashNotes') {
        sectionId = 'trash-content';
    } else if (destinationKey === 'notes') {
        sectionId = 'content';
    }

    if (sectionId) {
        location.href = `#${sectionId}`; // Scrollt zum entsprechenden Bereich
    }
}

/**
 * Deletes a note permanently from the trash.
 */
function deleteTrash(indexTrashNote) {
    let confirmDelete = window.confirm("Möchten Sie diese Notiz wirklich endgültig löschen?");
    if (confirmDelete) {
        allNotes.trashNotes.splice(indexTrashNote, 1);
        allNotes.trashNotesTitles.splice(indexTrashNote, 1);
        saveToLocalStorage();
        renderTrashNotes();
    }
}

/**
 * Saves all notes to local storage.
 */
function saveToLocalStorage() {
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("archivNotesTitles", JSON.stringify(allNotes.archivNotesTitles));
    localStorage.setItem("archivNotes", JSON.stringify(allNotes.archivNotes));
}

/**
 * Checks the localStorage for saved notes and updates the `allNotes` object.
 */
function checkStorageAndUpdate() {
    let savedNotesTitles = JSON.parse(localStorage.getItem("notesTitles")) || [];
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    let savedTrashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles")) || [];
    let savedTrashNotes = JSON.parse(localStorage.getItem("trashNotes")) || [];
    let savedArchivNotesTitles = JSON.parse(localStorage.getItem("archivNotesTitles")) || [];
    let savedArchivNotes = JSON.parse(localStorage.getItem("archivNotes")) || [];

    allNotes.notesTitles = savedNotesTitles;
    allNotes.notes = savedNotes;
    allNotes.trashNotesTitles = savedTrashNotesTitles;
    allNotes.trashNotes = savedTrashNotes;
    allNotes.archivNotesTitles = savedArchivNotesTitles;
    allNotes.archivNotes = savedArchivNotes;
}

