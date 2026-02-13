fetch('content.json')
.then(res => res.json())
.then(data => {

document.getElementById("title").innerText = data.name;
document.getElementById("name").innerText = data.name;
document.getElementById("headline").innerText = data.headline;
document.getElementById("about").innerText = data.about;
document.getElementById("profileImage").src = data.profileImage;

let linksHTML = "";
data.links.forEach(l => {
linksHTML += `<a href="${l.url}" target="_blank">${l.name}</a> `;
});
document.getElementById("links").innerHTML = linksHTML;

let skillsHTML = "";
data.skills.forEach(s => {
skillsHTML += `<img src="${s.icon}" title="${s.name}">`;
});
document.getElementById("skills").innerHTML = skillsHTML;

let projectHTML = "";
data.projects.forEach(p => {
projectHTML += `
<div class="project-card">
<h3>${p.title}</h3>
<p>${p.description}</p>
<img src="${p.image}" width="100%">
</div>`;
});
document.getElementById("projects").innerHTML = projectHTML;

});
