const main = document.getElementsByTagName("main")[0];
for (fig in data) {
    // Creation of the div who contents the fig
    const div = document.createElement("div");
    div.classList.add("figure-style");
    main.appendChild(div);


    // Add elements in the div
    const h2 = document.createElement("h2");
    const def = document.createElement("p");
    const ex = document.createElement("p");

    h2.textContent = data[fig].name;
    def.textContent = data[fig].def;
    ex.innerHTML = " " + data[fig].ex;
    
    div.appendChild(h2);
    div.appendChild(def);
    div.appendChild(ex);

};