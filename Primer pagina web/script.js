import {discografia} from './discografia.js';

let albumHtml = '';

discografia.forEach((album)=>{
    let html = `
                <div class="card" style="width: 18rem;">
                    <img src="${album.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">${album.title}</p>
                        <div class="social-media">
                            <a href="${album.stLink}" target="_blank" class="play"><img src="./Imagenes/174872.png" alt=""></a>
                            <a href="${album.ytLink}"  target="_blank" class="play"><img src="./Imagenes/174883.png" alt=""></a>
                            <a href="${album.apLink}" target="_blank" class="play"><img src="./Imagenes/Itunes-music-app-icon.png" alt=""></a>
                        </div>
                    </div>
                </div>`;
    albumHtml += html;
})

document.querySelector(".grid-container").innerHTML = albumHtml;