const square = function(x) {
    return x * x
}

console.log(square(3))

const square2 = (x) => { return x * x }

console.log(square2(4))

const square3 = (x) => x * x 

console.log(square3(5))

const event = {
    name: 'Birthday Party',
    // printGuestList: function() {
    //     console.log('Guest list for ' + this.name)
    // }
    //printGuestList: () => console.log('Guest list for ' + this.name) >> this.name is undefined
    guestList: ['Andrew', "Jen', 'Mike"],
    printGuestList() { 

        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            //console.log(guest + ' is attending ' + this.name)
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()