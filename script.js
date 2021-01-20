

fetch("data.json")
.then(response => response.json())
.then(data => {

    renderProjects(data.projects)
   


});


function renderProjects(projects) {


    const projects_container= document.querySelector(".projects");
    projects_container.innerHTML = "";
    

    

    projects.forEach(element => {


        const project = createProjectElement();
        project.style ="padding: 15px;"
        project.querySelector("h2").innerText = element.name;
        project.querySelector("p").innerText = element.description;
        project.querySelector("div").innerText = "Tags: " + element.tags;
        projects_container.appendChild(project);
        
    });

}


function createProjectElement() {

    const container = document.createElement("div");

    const header = document.createElement("h2");
    const description = document.createElement("p");
    const img = document.createElement("img");
    const tags = document.createElement("div");

    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(description);
    container.appendChild(tags);

    return container;
}
