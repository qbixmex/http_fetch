const app = document.getElementById("app");

/** @type {HTMLInputElement|null} */
let inputFile;

/** @type {HTMLImageElement|null} */
let imgPicture;

const createInputFileHTML = () => {
    const html = `
        <h2 class="mb-2">Upload File</h2>

        <input class="form-control mb-4" type="file" accept="image/png, image/jpeg" />

        ${ (imgPicture) ? `<img id="image" class="img-thumbnail" src="" alt="image" />` : ""  }
    `;

    const div = document.createElement("div");
    div.innerHTML = html;
    app?.append(div);
    inputFile = document.querySelector("input");
    imgPicture = document.querySelector("#image");
};

const events = () => {
    inputFile?.addEventListener("change", (event) => {
        // @ts-ignore
        const file = event?.target?.files[0];

        console.table( file );
    });
};

const init = () => {
    createInputFileHTML();
    events();
};

export default init;