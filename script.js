
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

    function removeElement(elem) {
        return elem.parentNode.removeChild(elem);
    }

    function showVideoPlayer(link) {

        <iframe width="560" height="315" src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        const videoplayer = document.createElement("iframe");
        videoplayer.width = "1280";
        videoplayer.height = "960";
        videoplayer.id = "video_player" + "?controls=0";
        videoplayer.setAttribute("frameborder", "0")
        videoplayer.setAttribute("allowfullscreen", "")
        videoplayer.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")

        videoplayer.src = link + "autoplay=1";

        document.body.style = "filter: blur(10px)"

        document.body.appendChild(videoplayer);

        const el = document.body.addEventListener("onclick", (e) => {

            document.removeElement(document.getElementById("video_player"));
            document.body.removeEventListener(el)
            document.body.style = "filter: none";

        })
    }

    
    /* Creates the HTML structure for a single project "card" */
    function createProjectElement(projectdata) {
        /* Wrapper */
        const container = document.createElement("div");
        container.classList.add("project");
        /* Border svg*/
        //const border = document.createElementNS("http://www.w3.org/2000/svg", "svg");

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


            const link = document.createElement("li");
            
            const video = document.createElement("button");
            video.innerText = "Video";
            video.className = "project-menu-item project-menu-item-button";
            video.onclick = () => { showVideoPlayer(projectdata.video) }
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