const d = document,
$fetchAsync = d.getElementById("fetch-async")

export default function infoUrl(name) {
    const $send = d.getElementById(name);
   
    d.addEventListener("submit", e =>{
        if (e.target === $send) {
            e.preventDefault()
           async function obtenerDatos() {
                try {
                let response = await fetch("https://api.github.com/users/" + $send.nombre.value);
                let json = await response.json();
                console.log(json);
                console.log($send.nombre.value);
                if (!response.ok) throw {status: response.status, statusText: response.statusText}

                $fetchAsync.innerHTML =     
                `
                <div class="grid-container">
                    <div class="columns left">
                        <img src="${json.avatar_url}">
                        <p class="name">${json.name}</p>
                        <p class="username">${json.login}</p>
                        <p class="bio">${json.bio}</p>
                        <div class="follows">
                            <a href="https://github.com/${$send.nombre.value}?tab=followers"><span>${json.followers}</span> followers</a> . 
                            <a href="https://github.com/${$send.nombre.value}?tab=following"><span>${json.following}</span> following</a>
                        </div>
                    </div>
                    <div class="columns right">
                        <h2 class="location">Ubicación: ${json.location}</h2>
                        <h2 class="reps">Repositorios publicos: ${json.public_repos}</h2>
                        <a href="https://github.com/${$send.nombre.value}?tab=repositories" class="linkreps">Ver repositorios</a>
                        <a href="${json.blog}" class="blog">Blog: ${json.blog}</a>
                        <h2 class="compania">Compania: ${json.company}</h2>
                    </div>
                </div>
                `
                if (json.blog === "") {
                    d.querySelector(".blog").classList.add("none")
                } else{
                    d.querySelector(".blog").classList.remove("none")
                }
                if (json.company === null) {
                    d.querySelector(".compania").classList.add("none")
                } else{
                    d.querySelector(".compania").classList.remove("none")
                }
                if (json.bio === null) {
                    d.querySelector(".bio").classList.add("none")
                } else{
                    d.querySelector(".bio").classList.remove("none")
                }

            } catch (err) {
                $fetchAsync.innerHTML =
                `
                <div>Error al encontrar el usuario</div>
                `
            }
            }
            obtenerDatos()
        }
    })
            
            
};

