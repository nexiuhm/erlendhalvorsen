

fetch("data.json")
.then(response => response.json())
.then(data => {

    renderProjects(data.projects)
   


});


function renderProjects(projects) {


    const projects_container= document.querySelector(".projects");
    projects_container.innerHTML = "";
    

    

    projects.forEach(element => {


        const container = document.createElement("div");
        const header = document.createElement("h2");
        const img = document.createElement("img");
        

        header.innerText = element.name;
        
        container.appendChild(header);
        container.appendChild(img);
        projects_container.appendChild(container);
        
    });

}

