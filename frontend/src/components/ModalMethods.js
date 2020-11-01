
export const colors = ["yellow", "pink", "green", "blue", "orange"]

export const handleContentChange = (event,setText) => setText(event.target.value);

export const handleTitleChange = (event,setTitle) => setTitle(event.target.value);

export  const isAColor = (colorACompare,colorToCompare) => {
    return colorACompare.toLowerCase() === colorToCompare.toLowerCase()
}

export const clearFields = (field1,field2,field3) => {
    field1("");
    field2("");
    field3("");
}



export const closeAndClean = (close,clean) => {
    close()
    clean()
}

