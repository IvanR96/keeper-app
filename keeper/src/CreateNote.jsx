import Note from "./Note";


export const createNote = (notes) =>{
    return(
        <Note 
        key={notes.key}
        id={notes.key}
        title={notes.title}
        content={notes.content}
        />
    );
}