import data from "./data.json" with {type: "json"};
import archived_data from "./archived_data.json" with {type: "json"};

function display_layer(id) {
    let div = document.createElement("div");
    div.id = `layer_${id}`;
    div.className = "layer";
    document.getElementById("content").appendChild(div);

    let title = document.createElement("h2");
    title.innerHTML = `(${id}) ${data.names[id]} Layer.`;
    div.appendChild(title);

    let progress = document.createElement("p");
    div.appendChild(progress);

    let container = document.createElement("div");
    container.className = "layer_container";
    div.appendChild(container);


    for (let i in data.content[id]) {
        let ore_div = document.createElement("div");
        ore_div.id = `ore_${id}-${i}`;
        ore_div.className = "ore";
        container.appendChild(ore_div);

        let ore_img = document.createElement("img");
        ore_img.src = `assets/${data.content[id][i].image}`;
        ore_img.height = 128;
        ore_img.width = 128;
        ore_div.appendChild(ore_img);

        let ore_title = document.createElement("h3");
        ore_title.innerHTML = `[T${data.content[id][i].tier}] ${data.content[id][i].name}`;
        ore_div.appendChild(ore_title);

        let ore_health = document.createElement("p");
        ore_health.innerHTML = `Health: ${data.content[id][i].health}`;
        ore_div.appendChild(ore_health);

        let ore_value = document.createElement("p");
        ore_value.innerHTML = `Value: $${data.content[id][i].value}`;
        ore_div.appendChild(ore_value);

        let ore_spot = document.createElement("p");
        ore_spot.innerHTML = `T${data.content[id][i].tier} #${data.content[id][i].list_spot} in list and #${data.content[id][i].index_spot} in index.`;
        ore_div.appendChild(ore_spot);

        let ore_by = document.createElement("p");
        ore_by.innerHTML = `Submitted by ${data.content[id][i].by}`;
        ore_div.appendChild(ore_by);
    }

    progress.innerHTML = `[${data.content[id].length}/${data.max[id]}]`;


    return div;
}

for (let id in data.content) { display_layer(id); }