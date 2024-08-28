
document.addEventListener('DOMContentLoaded', () => {

    const blogContainer = document.querySelector(".blog")

    fetch ("https://notpadd.vercel.app/api/public",
        {
            headers : {
            USER_KEY:'dXNlcl8ybEZIWDNIa1BTcThUdWJXczdidGpRRFdzaFI', 
            USER_SECRET:'M2NiZWNjZTktYjY1ZC00ZWNmLWE1ZGEtYjhjYTVjMDg0MWJm',
            public_only: true
            }
        })
        .then(response => {
        if (!response.ok) {
            throw new Error('error occured')
        }

        return response.json()
    })
    .then(data => {

        const blogElement = document.createElement("div")
        data.forEach(item => {
            blogElement.classList.add("item")
            blogElement.innerHTML = `<img src="${item.displayImage}"/> <h3>${item.title}</h3> <p>${item.descriptin} </p>`
        })
        blogContainer.appendChild(blogElement)
        
        console.log(data);
        
    })
    .catch(error => {
         blogContainer.innerHTML = `<p>Something went wrong ${error}</p>`
    })    
    
})