function buttonClick(button) {
	if (button.value === "Submit") {
        // google.script.run.[insert gs function here]()


        let table = document.getElementById("tableRows");
        let ret = ""
        let depth = "";
        let tabs = "";

        //gets rows of table
        let rowLength = table.rows.length;

        //loops through rows    
        for (i = 0; i < rowLength; i++){

            //gets cells of current row
            let oCells = table.rows.item(i).cells;

            //gets amount of cells of current row
            let cellLength = oCells.length;

            //loops through each cell in current row
            for(let j = 0; j < cellLength; j++){
                let cell = oCells[j];
                let cellText = "";
                
                if(cell.textContent != "" && strip(cell.textContent) != "") {
                    cellText = cell.textContent;
                    if(cell.className == "") {
                        depth = cell.firstElementChild.className;
                        tabs = addTabs(depth[depth.indexOf("depth-") + "depth-".length]);
                    }
                    else {
                        depth = cell.className;
                        tabs = addTabs(depth[depth.indexOf("depth-") + "depth-".length]);
                    }

                    if(cellText != "Add Child" && cellText != "Add Spouse" && cellText != "") {
                        ret += "\n" + tabs + cellText;
                    }

                }
                else if (cell.firstElementChild != null && cell.firstElementChild.value != undefined && strip(cell.firstElementChild.value) != "") {
                    cellText = cell.firstElementChild.value;
                    depth = cell.firstElementChild.className;
                    tabs = addTabs(depth[depth.indexOf("depth-") + "depth-".length]);

                    if(cellText != "Add Child" && cellText != "Add Spouse" && cellText != "") {
                        ret += "\n" + tabs + cellText;
                    }
                }
            }
        }

        console.log(ret);


        
	} else if(button.value == "Add Spouse") {
        let depth = parseInt(button.className.split(" ")[1].split("-")[1]);

        button.style.display = "none";

        let html = addTD(depth - 1) + '<td><h5 class="depth-' + depth + '">Spouse</h5></td>';
        label = document.createElement("tr");
        label.innerHTML = html;

        html = addTD(depth - 1) + '<td><input class="inputCell depth-' + depth + '" type="text" placeholder="Name"></td>';
        let tr1 = document.createElement("tr");
        tr1.innerHTML = html;

        html = addTD(depth - 1) + '<td><textarea class="inputCell depth-' + depth + '" type="text" placeholder="Details" rows=3></textarea></td>';
        let tr2 = document.createElement("tr");
        tr2.innerHTML = html;  

        html = addTD(depth - 1) + '<td><input class="inputButton depth-' + depth + ' btn btn-primary" type="button" value="Add Child" onclick="buttonClick(this)"></td>';
        let new_button = document.createElement("tr");
        new_button.innerHTML = html;
        if (button.parentNode.parentNode.nextSibling != null) {
            button.parentNode.parentNode.parentNode.insertBefore(new_button, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(tr2, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(tr1, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(label, button.parentNode.parentNode.nextSibling);
        }
        else {
            button.parentNode.parentNode.parentNode.appendChild(label, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(tr1, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(tr2, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(new_button, button.parentNode.parentNode.nextSibling);
        }

    } else if(button.value == "Add Child") {
        let depth = parseInt(button.className.split(" ")[1].split("-")[1]);

        let html = addTD(depth) + '<td><h5 class="depth-' + (depth + 1) + '">Child</h5></td>';
        label = document.createElement("tr"); 
        label.innerHTML = html;

        html = addTD(depth) + '<td><input class="inputCell depth-' + (depth + 1) + '" type="text" placeholder="Name"></td>';
        let tr1 = document.createElement("tr");
        tr1.innerHTML = html;

        html = addTD(depth) + '<td><textarea class="inputCell depth-' + (depth + 1) + '" type="text" placeholder="Details" rows=3></textarea></td>';
        let tr2 = document.createElement("tr");
        tr2.innerHTML = html;

        html = addTD(depth) + '<td><input class="inputButton depth-' + (depth + 1) + ' btn btn-primary" type="button" value="Add Spouse" onclick="buttonClick(this)"></td>';
        let new_button = document.createElement("tr");
        new_button.innerHTML = html;
        
        if (button.parentNode.parentNode.nextSibling != null) {
            button.parentNode.parentNode.parentNode.insertBefore(new_button, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(tr2, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(tr1, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.insertBefore(label, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.nextSibling = label;
        }
        else {
            button.parentNode.parentNode.parentNode.appendChild(label, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(tr1, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(tr2, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.parentNode.appendChild(new_button, button.parentNode.parentNode.nextSibling);
            button.parentNode.parentNode.nextSibling = label;
        }

    } else {
		let row = document.createElement("tr");
        let input = [];
        
		for (let i = 0; i < 4; i++) {
			let inner = document.createElement("td");
			let inner_input = document.createElement("input");
			inner_input.setAttribute("class", "inputCell");
			inner_input.setAttribute("type", "text");
			inner.appendChild(inner_input);
			input.push(inner);
        }
        
		let x;
		for (x of input) {
			row.appendChild(x);
		}

		document.getElementById("tableBody").appendChild(row);

	}
}

function addTD(num) {
    let ret = "";
    for(let i = 0; i < num; i++) {
        ret += "<td>&nbsp;</td>";
    }
    return ret;
}

function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

function addTabs(num) {
    let int_num = parseInt(num) - 1;
    let ret = "";

    for(let i = 0; i < int_num; i++) {
        ret += "\t";
    }

    return ret;
}