const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dae4sosbl/image/upload';
const cloudinaryPreset = 'school-portal';

const uploadImage = async (file) => {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryPreset);

    try {
        let response = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData
            });
        
            let data = await response.json();
        
            return data;
    } catch (error) {
        console.log(error);
    }

}
