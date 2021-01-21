
{   // anonomous namespace ES5 style


   
    let projects = null;



    /* Entrypoint*/
    document.addEventListener("DOMContentLoaded", () => {


         /* All data stored in a local json file, so its easier to implement a remote backend later */
        fetch("data.json")
        .then(response => response.json())
        .then(data => {
    
    
            projects = data.projects;
            renderProjects(projects)
        
    
    
        });
        
    })

  


    function renderProjects(projects) {


        const projects_container = document.querySelector(".projects");
        /* Empty container everytime for a clean re-render */
        projects_container.innerHTML = "";
        

        

        projects.forEach(element => {


            const project = createProjectElement();
            project.querySelector("project-title").innerText = element.name;
            project.querySelector("project-description").innerText = element.description;
            project.querySelector("project-tags").innerText = "Tags: " + element.tags;
            project.querySelector("project-github").innerText = "Github: " + element.github;
            projects_container.appendChild(project);
            
        });

    }

    /* Filter click handlers - todo */
    function onClickFilterByTag (e) {
        console.log("onClickFilterByTag called by element: " + e.target)

        const tag = "Programming" //test, fix later

        const filteredProjectArray = projects.filter(project => project.tags.include(tag))

        renderProjects(filteredProjectArray);
    }

    /* Creates the HTML structure for a single project "card" */
    function createProjectElement() {

        const container = document.createElement("div");
        container.className = "project";
        const header = document.createElement("h2");
        header.className = "project-title";
        const description = document.createElement("p");
        description.className = "project-description"
        const img = document.createElement("img");
        img.className = "project-image";
        const tags = document.createElement("div");
        tags.className = "project-tags";
        const github = document.createElement("div");
        github.className = "project-github";
        const video = document.createElement("div");
        video.className = "project-video";

        container.appendChild(header);
        container.appendChild(img);
        container.appendChild(description);
        container.appendChild(tags);
        container.appendChild(github);

        return container;
    }

}