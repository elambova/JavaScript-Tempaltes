define(function () {
    var data = (function () {
        var people = [
            {id: 1, name: "Megan Fox", age: 29, avatarUrl: ".//images/megan.jpg"},
            {id: 2, name: "Brad Pitt", age: 51, avatarUrl: ".//images/brad.jpg"},
            {id: 3, name: "Angelina Jolye", age: 40, avatarUrl: ".//images/angelina.jpg"},
            {id: 4, name: "Brett Dalton", age: 32, avatarUrl: ".//images/brett.jpg"},
            {id: 5, name: "Julia Roberts", age: 47, avatarUrl: ".//images/julia.jpg"},
            {id: 6, name: "Kyra Sedgwick", age: 49, avatarUrl: ".//images/kyra.jpg"},
            {id: 7, name: "Robert Pattinson", age: 29, avatarUrl: ".//images/robert.jpg"},
            {id: 8, name: "Taylor Lautner", age: 22, avatarUrl: ".//images/taylor.jpg"}];
        return {
            people: people
        };
    }());
    return data;
});