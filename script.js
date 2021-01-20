

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

        project.children.header.innerText = element.name;
        project.children.description.innerText = element.description;
        
        projects_container.appendChild(container);
        
    });

}


function createProjectElement() {

    const container = document.createElement("div");
    const header = document.createElement("h2");
    const description = document.createElement("p");
    const img = document.createElement("img");

    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(description);

    return container;
}
