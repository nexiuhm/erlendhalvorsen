

fetch("data.json")
.then(response => response.json())
.then(data => {

    renderProjects(data.projects)
   


});


renderProjects(projects) {


    const projects_container= document.getElementByClassName("projects");
    projects_container.innerHTML = "";
    

    

    projects.forEach(element => {


        const container = document.createElement("div");
        const header = document.createElement("h2");
        const img = document.createElement("img");
        

        header.innerText = element.name;
        
        container.addChild(header);
        container.addChild(img);
        projects_container.addChild(container);
        
    });

}

