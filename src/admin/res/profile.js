const imageSrc = byID("image-src");
const personName = byID("person-name");

function getProfile() {
    fetch(baseUrl + "student/profile", {
        method: "GET",
        headers: {
            accesstoken
        }
    })
    .then(async (res) => {
        const data = await res.json();
        console.log(data);
        imageSrc.src = data.studentDetails.passportPicture;
        personName.innerText = `${data.studentDetails.firstName[0].toUpperCase() + data.studentDetails.firstName.slice(1)} ${data.studentDetails.surName[0].toUpperCase() + data.studentDetails.surName.slice(1)}`;
    })
    .catch(e => {
        console.log(e);
    });
}

getProfile();

console.log(baseUrl);
console.log(accesstoken);
