import { data2000 } from "../data/2000.js"; //<2000
import { data2010 } from "../data/2010.js"; //2000-2010
import { data2015 } from "../data/2015.js"; //2010-2015
import { data2016 } from "../data/2016.js"; //2016
import { data2017 } from "../data/2017.js"; //2017
import { data2018 } from "../data/2018.js"; //2018
import { data2019 } from "../data/2019.js"; //2019
import { data2020 } from "../data/2020.js"; //2020
import { data2021 } from "../data/2021.js"; //2021
import { data2022 } from "../data/2022.js"; //2022
import { data2023 } from "../data/2023.js"; //2023
import { data2024 } from "../data/2024.js"; //2024 pain
import { data2025 } from "../data/2025.js"; //2025 even more pain thank you gork, nugget, monokuma and missingno
import { data2026 } from "../data/2026.js"; //2026 FREEDOM


let db = [
    { key: "data2000", entries: data2000 },
    { key: "data2010", entries: data2010 },
    { key: "data2015", entries: data2015 },
    { key: "data2016", entries: data2016 },
    { key: "data2017", entries: data2017 },
    { key: "data2018", entries: data2018 },
    { key: "data2019", entries: data2019 },
    { key: "data2020", entries: data2020 },
    { key: "data2021", entries: data2021 },
    { key: "data2022", entries: data2022 },
    { key: "data2023", entries: data2023 },
    { key: "data2024", entries: data2024 },
    { key: "data2025", entries: data2025 },
    { key: "data2026", entries: data2026 }
]

let databases = Array.from(db);

let savedX = null;
let savedY = null;

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.onmousedown = function (event) {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;

        document.onmousemove = function (event) {
            if (isDragging) {
                const newX = event.clientX - offsetX;
                const newY = event.clientY - offsetY;

                // Update the position of the element
                element.style.left = newX + 'px';
                element.style.top = newY + 'px';

                // Save the position in global variables
                savedX = newX;
                savedY = newY;
            }
        };

        document.onmouseup = function () {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };
}

const dashboardContainer = document.getElementById("dashboardContainer")
makeDraggable(dashboardContainer);

if (savedX !== null && savedY !== null) {
    dashboardContainer.style.left = savedX + 'px';
    dashboardContainer.style.top = savedY + 'px';
}
else {
    dashboardContainer.style.left = 1 + 'px';
    dashboardContainer.style.top = 0;
    savedX = dashboardContainer.getBoundingClientRect().left;
    savedY = dashboardContainer.getBoundingClientRect().top;
}

const modes = document.getElementById("dashboardModes");

//Character details printout
let characterIndex = 0;
const details = document.getElementById("dashboardDetails");

const characterDetails = [
    {
        "name": "SiIvaGunner",
        "classification": "STRENG GEHEIM",
        "first_mention": "January 9, 2016",
        "debut": "January 9, 2016",
        "last_appearance": "January 12, 2024",
        "status": "Awake; frozen due to narrative importance",
        "description": "The big man himself. SiIvaGunner is the in-universe being who ran the channel for the majority of Season 1 before going to sleep in <b>Title Theme & Ending - 7 GRAND DAD</b>. Despite this, he still technically 'ran' the channel in some form during Seasons 3 through 7 through 'Illucidity', an environment where HWC could harvest rips made in his dreams in order to improve the output of the SiIva AI. He finally awakened at the end of <b>One Last Chance</b>, having felt Grand Dad's pain during his fight against the Voice.",
        "image": "images/SiIvaGunner.png"
    },
    {
        "name": "Wood Man",
        "classification": "Virus/Figment hybrid",
        "first_mention": "June 21, 2016 (retroactively)",
        "debut": "October 19, 2016",
        "last_appearance": "February 1, 2023",
        "status": "Exiled in the Void",
        "description": "It cannot be stated enough that Wood Man is arguably the second-most important character in both SiIvaGunner's history and lore, but viewers back in 2016 could not have assumed that a crudely drawn Robot Master that only spoke in lowercase would do what we would eventually do: he acted as the channel's mascot for 4 seasons, played important parts in three seperate universes (the CCC, AIRTH and CCC-FOOLS) and became an esteemed film-maker and actor in his own right. However, his sins caught up to him during the events of DoomFes, and in act of personal atonement exiled himself to the Void, where he has remained since then.",
        "image": "images/Wood Man.jpg"
    },
    {
        "name": "The SiIva AI",
        "classification": "Artificial Intelligence",
        "first_mention": "January 21, 2018 (implied)",
        "debut": "March 24, 2019",
        "last_appearance": "January 12, 2024",
        "status": "Shut down; presumably dead.",
        "description": "Initially deployed at the beginning of Season 3 (albeit in a very haphazard manner), the SiIva AI's existence was kept a secret until <b>The Life and Times of Wade L.D.</b>, but like many other characters across SiIvaGunner's history, he was brushed aside and merely became a channel host, barely getting any attention in lore until his death in <b>One Last Chance</b>. The Susie ARG revealed that over his tenure as host, he had gained sentience and began to long for interaction and appreciation through his personal logs. Nowadays, he is remembered as a tragic figure.",
        "image": "images/SiIvaAI.jpg"
    },
    {
        "name": "The Joke-Explainer™ 7000",
        "classification": "Robot",
        "first_mention": "August 18, 2016",
        "debut": "April 24, 2017",
        "last_appearance": "N/A",
        "status": "Active as co-channel host",
        "description": "Originally a Youtube account created to explain the jokes of obscure rips, the Joke-Explainer™ 7000 was formally introduced into the CCC with the release of 'Loves the Ladies', but she was quickly relegated to being the occasional announcer of albums and channel events. That all changed when the SiIva AI died and Wood Man exiled himself to the Void; thus, the humble Joke-Explainer™ quickly rose to become the channel's main host for Season 7. In the time since then she has grown to become an in-universe surrogate for the channel's team and its main mascot.",
        "image": "images/JE.png"
    },
    {
        "name": "Dr. Andonuts",
        "classification": "Figment",
        "first_mention": "April 30, 2018",
        "debut": "December 31, 2020",
        "last_appearance": "N/A",
        "status": "Active as co-channel host",
        "description": "Dr. Andonuts currently serves as the head of Haltmann Works' R&D group, writing the FILEs that form the basis of <b>Haltmann's Archives</b>; like the Joke-Explainer™, he was a relatively minor side character before being thrust into the spotlight during the events of the Susie ARG, where he confronted his newfound meta-awareness alongside the Joke-Explainer™ in <b>Cognitive Dissonance</b>. He eventually recovered from the experience and volunteered to become a channel co-host in order to relieve the Joke-Explainer™ from hosting burnout.",
        "image": "images/Andonuts.jpg"
    },
    {
        "name": "Stingy Spoilero",
        "classification": "Figment",
        "first_mention": "Septmber 21, 2019",
        "debut": "February 7, 2025",
        "last_appearance": "November 10, 2025",
        "status": "Active as fallback channel host",
        "description": "At the beginning of Season 9, most SiIvaGunner fans expected a return to normalcy after the events of Season 8 and the Susie ARG. Stingy Spoilero - an obscure character from LazyTown known for <i>The Mine Song</i> - took those expectations and threw them out of the window, taking over the channel in what he termed as <i>Season Mine</i>. Despite his arrogant and self-centred nature, he mellowed out during the rest of Season 9 thanks to Dr. Andonuts, eventually joining both him and the Joke-Explainer™ as a substitue host.",
        "image": "images/Stingy.png"
    },
    {
        "name": "The Joke-Explainer™ 7000",
        "classification": "Robot",
        "first_mention": "March 24, 2019",
        "debut": "October 28, 2019",
        "last_appearance": "August 7, 2025",
        "status": "Unknown, presumably alive",
        "description": "If you're seeing double, don't worry - I'll explain. In [FILE-14], Dr. Andonuts reveals that The Joke-Explainer™ 7000 was one of his own personal projects; in reality, this was a replica built from materials requested from Wade L.D. during his employment at HWC, meant to prevent the original Joke-Explainer™ from being exploited by researchers. This Joke-Explainer™ took a bite of a replica Garlic Taco and got sent to AIRTH by accident, where she had many adventures of her own whilst relaying information about her surroundings back to HWC.",
        "image": "images/RepliJE.jpg"
    },
]

const CharacterAttributes = [
    "name",
    "classification",
    "first_mention",
    "debut",
    "last_appearance",
    "status",
    "description",
    "image"
]

let database = characterDetails;
let attributes = CharacterAttributes;
let index = characterIndex;

function initialiseDetails(database, attributes, index) {
    let entry = database[index];
    let src = entry["image"]
    let img = document.getElementById("image");
    img.src = src;
    for (let i = 1; i < attributes.length - 1; i++) {
        let attribute = attributes[i];
        let item_check = document.getElementById(attribute);
        if (!entry[attribute] || item_check) { //if the attribute does not exist, skip iterating
            continue;
        } else {
            let string = document.createElement("p");
            string.className = "details";
            string.id = attribute;
            string.innerHTML = attribute.split('_').join(' ').toUpperCase() + ": "
            details.appendChild(string)
        }
    }
}

function enterDetails(database, attributes, index) {
    let entry = database[index]
    let src = entry["image"]
    let img = document.getElementById("image");
    img.src = src;
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i]
        let check = document.getElementById(attribute);
        if (!check) {
            continue;
        } else {
            check.innerHTML = check.textContent + entry[attribute];
        }
    };
}

function resetContent(attributes) {
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        let item = document.getElementById(attribute);
        if (attribute == "name" || attribute == "description") {
            item.innerHTML = ""
        } else if (attribute == "img") {
            item.src = ""
        } else {
            item.textContent = attribute.split('_').join(' ').toUpperCase() + ": "
        }
    }
};

function nextEntry(database, attributes) {
    index++;
    if (index >= database.length) index = 0;
    characterParser(database, attributes, index);
}

function prevEntry(database, attributes) {
    index--;
    if (index < 0) index = database.length - 1;
    characterParser(database, attributes, index);
}

initialiseDetails(database, attributes, index);
characterParser(database, attributes, index)

function characterParser(database, attributes, index) {
    resetContent(attributes);
    enterDetails(database, attributes, index);
};


const forward = document.getElementById("forwardToggle");

const backward = document.getElementById("backwardToggle");

forward.addEventListener("click", () => {
    nextEntry(database, attributes);
});

backward.addEventListener("click", () => {
    prevEntry(database, attributes);
});

const closeButton = document.getElementById("closeToggle");

closeButton.addEventListener("click", function () {
    dashboardContainer.style.display = "none";
})

let tooltipList = [
    { searchString: "Stingy", characterIndex: 5 },
    { searchString: "The Joke-Explainer™ 7000", characterIndex: 3 },
    { searchString: "SiIva AI", characterIndex: 2 },
    { searchString: "Wood Man", characterIndex: 1 }
];

function getTooltips(str) {
    let matches = [];

    tooltipList.forEach((tooltip, index) => {
        // Adjust the regex to match searchString potentially surrounded by “ and followed by optional punctuation
        let regex = new RegExp(`(?<!\>)(?<=\\b|\\s|^|“)${tooltip.searchString}(?=[.,;!?]?\\b|\\s|”|$)(?!\<)`, 'g');

        let match;
        while ((match = regex.exec(str)) !== null) {
            matches.push({
                start: match.index + (match[0].startsWith('“') ? 1 : 0), // Adjust for potential starting “
                end: match.index + match[0].length - (match[0].endsWith('”') ? 1 : 0) - (match[2] ? 1 : 0),
                tooltipIndex: index
            });
        }
    });

    // Sort by starting position; if two start at the same position, longer match comes first
    matches.sort((a, b) => a.start - b.start || b.end - b.start - (a.end - a.start));

    // Filter out overlaps
    for (let i = 0; i < matches.length - 1;) {
        if (matches[i + 1].start < matches[i].end) {
            matches.splice(i + 1, 1); // Remove the next match since it overlaps
        } else {
            i++; // Move to next match
        }
    }

    return matches;
}

function applyTooltips(str) {
    const matches = getTooltips(str);
    let result = '';
    let lastIndex = 0;

    matches.forEach(match => {
        const tooltip = tooltipList[match.tooltipIndex];
        result += str.slice(lastIndex, match.start);
        result += `<span class='mytooltip' name='tooltip' tooltip-index='${tooltip.characterIndex}'>${tooltip.searchString}</span>`;
        lastIndex = match.end;
    });

    result += str.slice(lastIndex); // Add the remainder of the original string
    return result;
}

function applyTooltipsToObject(obj) {
    for (let key in obj) {
        if (key === "title") {continue;}
        if (typeof obj[key] === 'string') {
            obj[key] = applyTooltips(obj[key]);
        } else if (typeof obj[key] === 'object') {
            applyTooltipsToObject(obj[key]); // Recursive call
        }
    }
}

databases.forEach(entry => {
    applyTooltipsToObject(entry.entries);
})

function render_table() {
    const table = document.getElementById("timeline");
    table.innerHTML = ""; // clear old rows

    db.forEach(dataset => {
        const { entries } = dataset;
        entries.forEach(entry => {
            const row = document.createElement("tr");

            const year = document.createElement("h3");
            year.innerHTML = entry.year;
            year.style.marginBottom = "20px";
            row.appendChild(year);

            entry.events.forEach(event => {
                const obj = document.createElement("td");
                if (event.date) {
                    const date = document.createElement("p");
                    date.innerHTML = event.date + "&nbsp;";
                    date.className = "date";
                    obj.appendChild(date);
                }

                if (event.note) {
                    const note = document.createElement("p");
                    note.innerHTML = event.note;
                    note.className = "note";
                    obj.appendChild(note);
                }

                if (!event.title && event.time) {
                    const time = document.createElement("i");
                    time.innerHTML = "(" + event.time + ")";
                    time.className = event.timeclass;
                    obj.appendChild(time);
                }
                if (event.title) {
                    const title = document.createElement("em");
                    title.innerHTML = event.title + "&nbsp;";
                    title.className = "title";
                    if (event.time) {
                        const time = document.createElement("i");
                        time.innerHTML = "(" + event.time + ")";
                        time.className = event.timeclass;
                        title.append(time);
                    }
                    obj.appendChild(title);
                }


                if (event.content) {
                    const content = document.createElement("p");
                    content.className = "content";
                    if (event.class) {
                        content.classList.add(...event.class.split(/\s+/));
                    }
                    content.innerHTML = event.content;
                    obj.appendChild(content);
                }

                row.appendChild(obj);
            });
            table.appendChild(row);
        });
    });
}

render_table();

const form = document.getElementById("select");
let data_count = 0;
//initialise form
Array.from(form.elements).forEach((input) => {
    if (input.checked) {
        data_count += 1;
    }
});

Array.from(form.elements).forEach((input) => {
    const key = input.getAttribute("name");
    if (input.checked) {
        // Add dataset
        toggleDataset(key, true); // true = show
    } else {
        // Remove dataset
        toggleDataset(key, false); // false = hide
    }
});

form.querySelectorAll("label").forEach((label) => {
    label.classList.add("enabled_glow");
    label.addEventListener("click", function () {
        const key = this.htmlFor
        const associatedInput = document.getElementsByName(key)[0];

        if (associatedInput.checked == true) {
            if (data_count == 1) {
                console.log("You can't have an empty timeline!");
                return;
            } else {
                associatedInput.checked = false;
                label.classList.toggle("enabled_glow");
                toggleDataset(key, false);
                console.log("Deleted " + key + " from viewable list");
                data_count -= 1;
            };
        } else if (associatedInput.checked == false) {
            associatedInput.checked = true;
            label.classList.toggle("enabled_glow");
            toggleDataset(key, true);
            console.log("Added " + key + " to viewable list");
            data_count += 1;
        };
    });
});

function toggleDataset(key, show) {
    const indexInDb = db.findIndex(d => d.key == key);

    if (!show && indexInDb !== -1) {
        db.splice(indexInDb, 1);
    }
    else if (show && indexInDb == -1) {
        const originalIndex = databases.findIndex(d => d.key == key);

        const insertIndex = db.findIndex(d =>
            databases.findIndex(o => o.key === d.key) > originalIndex
        );

        if (insertIndex == -1) db.push(databases[originalIndex]);
        else db.splice(insertIndex, 0, databases[originalIndex]);
    }

    render_table();
}

function addEventListeners() {
    let strings = document.getElementsByName("tooltip");
    strings.forEach(string => {
        string.addEventListener("click", () => { testing(string.getAttribute("tooltip-index")) }, false)
    });
}

function testing(index) {
    console.log("please work")
    dashboardContainer.style.display = "block";
    characterParser(database, attributes, index);
}

addEventListeners();
