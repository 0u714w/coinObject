const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.

        this.state = (Math.floor(Math.random() * 2))
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.

        if (this.state === 0) {
            console.log("heads")
        } else if (this.state === 1) {
            console.log("tails")
        }
    },
    toHTML: function() {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.

        if (this.state === 0) {

            image.src = "images/heads.jpg"
            document.body.appendChild(image)
            document.write("heads")

        } else if (this.state === 1) {
            image.src = "images/tails.jpg"
            document.body.appendChild(image)
            document.write("tails")
        }

    }
};


for (let i = 0; i < 20; i++) {
    coin.flip()
    coin.toString()
    coin.toHTML()
    console.log(coin.state)
}