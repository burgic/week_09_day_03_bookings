use bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Clive Woodward",
        email: "cw@cw.com",
        checkedIn: true
    },
    {
        name: "Martin Johnston",
        email: "mj@mj.com",
        checkedIn: false
    },
    {
        name: "Chris Patterson",
        email: "cp@cp.com",
        checkedIn: true
    },
    {
        name: "Steffi Graaf",
        email: "sg@sg.com",
        checkedIn: false
    }
])