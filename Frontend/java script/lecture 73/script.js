function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr
    if(views<1000000){
        viewstr = views;
    }
    else if (views > 1000000) {
        viewstr = views/1000000 + "M";
    }
    else {
        viewstr = views/1000 + "K";
    }
    let html = `<div class="card">
            <div class="Image">
                <img src="${thumbnail}" alt="" width=220px>
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views. ${monthsOld} month ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev  #13", "RytnixR", 560000, 7, "31:22", "https://miro.medium.com/v2/resize:fit:1200/1*Lqt-b5pgymx3EOqcG9aJsw.png")

createCard("Introduction to Backend | Sigma Web Dev  #13", "RytnixR", 560000, 7, "31:22", "https://miro.medium.com/v2/resize:fit:1200/1*Lqt-b5pgymx3EOqcG9aJsw.png")
