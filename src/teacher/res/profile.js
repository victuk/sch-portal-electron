const imageSrc = byID("image-src");
const personName = byID("person-name");

function getProfile() {
    fetch(baseUrl + "teacher/profile", {
        method: "GET",
        headers: {
            accesstoken
        }
    })
    .then(async (res) => {
        const data = await res.json();
        console.log(data);
        imageSrc.src = data.teacherDetails.passportPicture;
        personName.innerText = `${data.teacherDetails.firstName[0].toUpperCase() + data.teacherDetails.firstName.slice(1)} ${data.teacherDetails.surName[0].toUpperCase() + data.teacherDetails.surName.slice(1)}`;
    })
    .catch(e => {
        console.log(e);
    });
}

getProfile();

console.log(baseUrl);
console.log(accesstoken);
