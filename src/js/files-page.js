import { uploadImage } from "./http-provider";

const app = document.getElementById("app");

/** @type {HTMLInputElement|null} */
let inputFile;

/** @type {HTMLImageElement|null} */
let imgPicture;

const createInputFileHTML = () => {
    const html = `
        <h2 class="mb-2">Upload File</h2>

        <input class="form-control mb-4" type="file" accept="image/png, image/jpeg" />

        <img id="image" class="img-thumbnail d-none" src="" alt="image" style="width: 200px;" />
    `;

    const div = document.createElement("div");
    div.innerHTML = html;
    app?.append(div);
    inputFile = document.querySelector("input");    
};

const events = () => {
    inputFile?.addEventListener("change", (event) => {
        // @ts-ignore
        const file = event?.target?.files[0];

        imgPicture = document.querySelector("#image");

        uploadImage( file ).then( url => imgPicture && ( imgPicture.src = url ));

        setTimeout(() => imgPicture?.classList.remove("d-none"), 1000);
    });
};

const init = () => {
    createInputFileHTML();
    events();
};

export default init;