let buttons = document.querySelectorAll("button");
var pictures = ['photo1.jpg', 'photo2.jpg']
for (btn of buttons) {
    if (btn.id == "findmore_button") {
        btn.addEventListener("click", function() {
            let view = document.querySelector('.row1');
            view.scrollIntoView(top, { behavior: 'smooth' });
            console.log(view);
        });
    }
    if (btn.id == 'arrow_right') {
        btn.addEventListener("click", function() {
            let imgreplace = document.querySelector('#firstpic')
            let name = imgreplace.getAttribute("src")
            console.log(name)
            let j = 0
            for (pic of pictures) {
                if (pic == name) {
                    if (j < pictures.length - 1) {
                        imgreplace.src = pictures[j + 1];
                    } else {
                        imgreplace.src = pictures[0];
                    }
                }
                j = j + 1;
            }
        });
    }

    if (btn.id == 'arrow_left') {
        btn.addEventListener("click", function() {
            let imgreplace = document.querySelector('#firstpic')
            let name = imgreplace.getAttribute("src")
            console.log(name)
            let i = 0
            for (pic of pictures) {
                if (pic == name) {
                    if (i > 0) {
                        return imgreplace.src = pictures[i - 1];
                    } else {
                        return imgreplace.src = pictures[pictures.length - 1];
                    }
                }
                i = i + 1
            }
        });
    }

}
const mediaQuery = window.matchMedia('(max-width: 1000px)')

function checkMedia(e) {
    if (e.matches) {
        document.querySelector("#hum2").addEventListener("click", function() {
            let disp = document.querySelector(".menu");
            let cont = document.querySelector(".topnav");
            if (disp.style.display == 'flex') {
                disp.style.display = 'none';
                cont.style.height = '10%';
            } else {
                cont.style.height = '350%';
                disp.style.display = 'flex';
            }
        }, false);

    }
}

mediaQuery.addListener(checkMedia)

// Initial check
checkMedia(mediaQuery)