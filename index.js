let request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
let gitObj;
let login;

let imgDiv = document.getElementById('img');
let nameDiv = document.getElementById('name');
let loginDiv = document.getElementById('login');
let urlDiv = document.getElementById('url');
let blogDiv = document.getElementById('blog');
let cityDiv = document.getElementById('city');
let emailDiv = document.getElementById('email');
let followDiv = document.getElementById('follow');

$('button').on('click', function() {
    login = $('input').val();

    request.open("GET", `https://api.github.com/users/${login}`);
    request.onload = function() {
        if (request.status === 200) {
            gitObj = JSON.parse(request.response);
            console.log(gitObj);
            let avatarObj = gitObj.avatar_url;
            let nameObj = gitObj.name;
            let loginObj = gitObj.login;
            let urlObj = gitObj.html_url;
            let blogObj = gitObj.blog;
            let locationObj = gitObj.location;
            let emailObj = gitObj.email;
            let followersObj = gitObj.followers;

            let avatarElem = document.createElement('img');
            let nameElem = document.createElement('p');
            let loginElem = document.createElement('p');
            let urlElem = document.createElement('a');
            let blogElem = document.createElement('p');
            let locationElem = document.createElement('p');
            let emailElem = document.createElement('p');
            let followersElem = document.createElement('p');

            avatarElem.src = avatarObj;
            nameElem.textContent = nameObj;
            loginElem.textContent = loginObj;
            urlElem.href = urlObj;
            urlElem.textContent = urlObj;
            if (blogElem.textContent == "") {
                blogElem.textContent = "No Blog";
            } else {
                blogElem.textContent = blogObj;
            }
            locationElem.textContent = locationObj;
            if (emailElem.textContent == "") {
                emailElem.textContent = "No Email";
            } else {
                emailElem.textContent = emailObj;
            }
            followersElem.textContent = followersObj;

            imgDiv.appendChild(avatarElem);
            nameDiv.appendChild(nameElem);
            loginDiv.appendChild(loginElem);
            urlDiv.appendChild(urlElem);
            blogDiv.appendChild(blogElem);
            cityDiv.appendChild(locationElem);
            emailDiv.appendChild(emailElem);
            followDiv.appendChild(followersElem);
        }
    }
    request.send();
});