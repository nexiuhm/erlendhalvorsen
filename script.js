
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
        

        

        projects.forEach(projectdata => {


            const project = createProjectElement(projectdata);
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
    function createProjectElement(projectdata) {
        /* Wrapper */
        const container = document.createElement("div");
        container.className = "project";
        /* Title */
        const header = document.createElement("h2");
        header.className = "project-title";
        header.innerText = projectdata.name;
        /* Descripton */
        const description = document.createElement("p");
        description.className = "project-description"
        description.innerText = projectdata.description;
        /* Image */
        const img = document.createElement("img");
        img.className = "project-image";
        /* TODO IMG */
        /* Tags */
        const tags = document.createElement("div");
        tags.className = "project-tags";
        tags.innerText = projectdata.tags;

        /* Menu */
        const menu = document.createElement("ul");
        menu.className = "project-menu";

        /* Variable menu elements */


        if(projectdata.github) {


            const link = document.createElement("a");
            link.href = projectdata.github;
            link.target = "_blank";
            link.style = "display:block";
            link.innerText = "Github"
            const github = document.createElement("li");
            github.className = "project-menu-item";
            github.appendChild(link);
            menu.appendChild(github);


        }

        if(projectdata.video) {


            const link = document.createElement("a");
            link.href = projectdata.video;
            link.target = "_blank";
            link.style = "display:block";
            link.innerText = "Video"
            const video = document.createElement("li");
            video.className = "project-menu-item";
            video.appendChild(link);
            menu.appendChild(video);
        }


        container.appendChild(header);
        container.appendChild(img);
        container.appendChild(description);
        container.appendChild(tags);
        container.appendChild(menu);

        return container;
    }

}