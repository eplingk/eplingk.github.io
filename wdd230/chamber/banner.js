const day = new Date().getDay();

if (day == 1 || day == 2) {
    const banner = document.querySelector(".banner");
    let para = document.createElement("p");
    para.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 pm!";
    banner.appendChild(para);
}