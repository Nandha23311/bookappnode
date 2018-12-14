exports.restoreBook =function(){
    var array =[
        {
            bookName: "Ponniyin Selvan",
            authorName: "Kalki",
            description: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
            url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg",
            isBooked : ""
        },
        {
            bookName: "Parthiban kanavu",
            authorName: "Kalki",
            description: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
            url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
        },
        {
            bookName: "Ponniyin Selvan",
            authorName: "Kalki",
            description: " Ponniyin Selvan Author	Kalki Krishnamurthy Country	India Language	Tamil Genre	Historical, Romance, Espionage, Thriller, Novel Published	1951–1954 (Kalki) Ponniyin Selvan (English: The Son of Kaveri) is a historical novel by Kalki Krishnamurthy, written in Tamil. In five volumes, or about 2400 pages, it tells the story of Arulmozhivarman, who later became the Chola king Rajaraja Chola I). The book took more than three years to write Kalki visited Sri Lanka three times to gather information for it.",
            url: "https://n3.sdlcdn.com/imgs/d/n/3/Ponniyin-Selvan-Vol-1-5-SDL892179572-1-81398.jpg"
        },
        {
            bookName: "Parthiban kanavu",
            authorName: "Kalki",
            description: "In the seventh century the Cholas are vassals of the Pallavas. Parthiban conveys his dream of the Chola dynasty regaining its glory – which he believes is lost since they are no longer the independent rulers – to his young son Vikraman",
            url: "https://images-eu.ssl-images-amazon.com/images/I/61L-m7FSsWL.jpg"
        }
    ]

    var Book = require('../models/books')
    Book.find({},function(err,book){
        if(book.length ==0){
            Book.collection.insert(array,function(er,saved){
                console.log("book ",saved)
            })
        }
    })
}
