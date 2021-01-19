

fetch("data.json")
.then(response => response.json())
.then(data => {


    data.projects.forEach(element => {

        console.log(element)
        
    });


});

