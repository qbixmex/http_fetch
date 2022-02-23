import { getJoke } from "./http-provider";

const app = document.querySelector("#app");

/** @type { HTMLButtonElement | null } */
let getJokeBtn;

/** @type { HTMLButtonElement | null } */
let clearBtn;

/** @type { HTMLOListElement | null } */
let list;

/** @type { number } */
let counter = 0

/**
 * Creates HTML Structure to #app div
 * @returns {void}
 */
const createJokeHTML = () => {
    const html = `
        <h1 class="mt-4 green center">Chuck Norris Jokes API</h1>
        <hr>

        <div class="center mb-4">
            <button id="getJokeBtn" class="btn btn-primary me-2">Next Joke</button>
            <button id="clearBtn" class="btn btn-primary">Clear Jokes</button>
        </div>

        <ol id="list" class="list-group"></ol>
    `;

    const divJokes = document.createElement("div");

    divJokes.innerHTML = html;

    app?.append( divJokes );
}

/**
 * Launches Page Events.
 * @returns {void}
 */
const events = () => {
    getJokeBtn = document.querySelector("#getJokeBtn") ?? null;
    list = document.querySelector("#list");
    clearBtn = document.querySelector("#clearBtn") ?? null;

    getJokeBtn?.addEventListener("click", async () => {
        try {           
            const { id, value } = await getJoke();

            getJokeBtn && ( getJokeBtn.disabled = true );
           
            drawJoke({ id, value });
          
            getJokeBtn && ( getJokeBtn.disabled = false );

        } catch (error) {
            throw error;
        }
    });

    clearBtn?.addEventListener("click", () => {
        if (list?.hasChildNodes) {
            list && ( list.innerHTML = "" );
            counter = 0;
        }        
    });
};

/**
 * Insert Joke as li item to ordered list.
 * @param {{ id: string, value: string }} joke
 * @returns {void}
 */
const drawJoke = ({ id, value }) => {
    counter++;
    const item = document.createElement("li");
    item.innerHTML = `<b>${ counter }.</b> ${ value }`;
    item.setAttribute("data-id", `${ id }`);
    item.classList.add("list-group-item");
    list?.append( item );
};

export const init = () => {
    createJokeHTML();
    events()
};