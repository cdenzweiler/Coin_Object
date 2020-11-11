console.log("Let's go!")

let coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random());
        return this.state
    },

    toString: function () {
        //Code borrowed from: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
        const newDiv = document.createElement("div");
        const currentDiv = document.getElementById("div1");
        coin.flip()
        if (coin.state == 0) {
            newContent = document.createTextNode("Heads!")
        } else {
            newContent = document.createTextNode("Tails!")
        }
        newDiv.appendChild(newContent)
        document.body.insertBefore(newDiv, currentDiv)
        return coin.state
    },

    toHTML: function () {
        let image = document.createElement("img");
        // document.body.appendChild(image)
        coin.flip()
        if (coin.state == 0) {
            image.src = "./images/coin_heads.jpg"
            document.body.appendChild(image)
        } else {
            image.src = "./images/coin_tails.jpg"
            document.body.appendChild(image)
        }
        return image
    }
}


function display20Flips() {
    for (i = 0; i < 20; i++) {
        coin.toString()
        /*- display the result of each flip as a string on the page (make use of your toString() method)
        */
    }
    return i
}

function display20Images() {

    for (i = 0; i < 20; i++) {
        coin.flip()
        coin.toHTML()

    }

    /*using a loop to flip the coin 20 times
    display the result of each flip as an HTML IMG element
    using document.createElement and ParentNode.append&*/
    return i
}