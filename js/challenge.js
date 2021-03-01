document.addEventListener("DOMContentLoaded", () => {
    // Defining the variables
    let counter = document.getElementById("counter");
    let minus = document.getElementById("minus");
    let plus = document.getElementById("plus");
    let heart = document.getElementById("heart")
    let pause = document.getElementById("pause")
    
    let likes = document.querySelector(".likes")
    
    let form = document.getElementById('comment-form')
    let commentList = document.getElementById('list')
    let ul = document.createElement('ul')
    commentList.appendChild(ul)

    // Functions - increases the counter 
    const intervalHandler = setInterval(() => {
        counter.innerText++;
      }, 1000);

    // EventListeners
    minus.addEventListener("click", () => counter.innerText--);
    plus.addEventListener("click", () => counter.innerText++);
    heart.addEventListener("click", () => {
    if (document.getElementById(counter.innerText) === null) 
    {
        // create li for counter innertext
        let li = document.createElement("li");
        li.id = counter.innerText;
        li.data = 1;
        li.innerHTML = counter.innerText + " has been liked " + li.data + " times";
        likes.appendChild(li);
    } 
    else 
    {
        let li = document.getElementById(counter.innerText);
        li.data++;
        li.innerHTML = counter.innerText + " has been liked " + li.data + " times";
    }
    }); 

    form.addEventListener('submit', e => {
        e.preventDefault()
        let input = e.target[0].value
        let li = document.createElement('li')
        li.innerText = input
        ul.appendChild(li)
        input.innerText = ''
    })

    pause.data = false;
    pause.addEventListener("click", () => {
        if (pause.data === false) 
        {
            pause.data = !pause.data;
            // change pause button text to resume button text
            pause.innerText = "resume";
            // pausing the counter interval
            window.clearInterval(intervalHandler);
            minus.disabled = true;
            plus.disabled = true;
            heart.disabled = true;
        } 
        else 
        {
            pause.data = !pause.data;
            pause.innerText = "pause";
            // need to work on how to allow counter to increase when resumed 
            minus.disabled = false;
            plus.disabled = false;
            heart.disabled = false;
        }
    });
});