const boxes = document.querySelectorAll(".row");

const checkBoxes = () => {
    const TiggerBottom = (window.innerHeight /5) * 4;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < TiggerBottom) box.classList.add("show")
        else box.classList.remove("show");
    });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes()