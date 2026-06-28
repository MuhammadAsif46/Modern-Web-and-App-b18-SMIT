let imageInput = document.getElementById("imageInput")
let previewImage = document.getElementById("previewImage")
let uploadBtn = document.getElementById("uploadBtn")
let uploadedImage = document.getElementById("uploadedImage")


imageInput.addEventListener("change", function () {
    // console.log("Image selected");
    // console.log(imageInput.files[0]);

    const file = imageInput.files[0]
    console.log(file);

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function (event) {
        // Access file contents using event.target.result or reader.result
        const fileContent = event.target.result;
        console.log("File read successfully:", fileContent);
        previewImage.src = fileContent
        previewImage.style.display = "block"
    };

    uploadBtn.disabled = false

})

uploadBtn.addEventListener("click", uploadImage)

async function uploadImage() {
    const file = imageInput.files[0]
    console.log(file);

    let formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", "smit-b18")

    const response = await fetch("https://api.cloudinary.com/v1_1/lfej1duu/image/upload",
        {
            method: "POST",
            body: formData
        }

    );

    console.log("image uploaded successfully");
    const data = await response.json();
    console.log(data);
    console.log(data.secure_url);

    uploadedImage.src = data.secure_url;
    uploadedImage.style.display = "block"

    // email: email.value,
    // password: password.value,
    // imageUrl: data.secure_url
    
}