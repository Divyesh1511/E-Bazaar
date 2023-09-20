const imagePickerELement = document.querySelector('#image-upload-control input');
const imagePreviewElement = document.querySelector('#image-upload-control img');

function updateImagePreview(){
    const files = imagePickerELement.files;

    if(!files || files.length === 0){
        imagePreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = files[0];

    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = 'block';
}

imagePickerELement.addEventListener('change', updateImagePreview);