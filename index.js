// create and append backgroundImage to body
const backgroundImage = document.createElement("div");
backgroundImage.classList.add("bg-image");
document.body.appendChild(backgroundImage);

window.addEventListener("scroll", () => {
    backgroundImage.style.opacity = 1 - window.pageYOffset / 900;
    backgroundImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
});

// create and append container to body 
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// create and append heading to container
const heading = document.createElement("h1");
heading.textContent = "Welcome to KTECH COLLEGE";
container.appendChild(heading);

const paragraphs = [
    "Đào tạo chuyên môn IT thực chiến.",
    "Tiếng Hàn cơ bản & văn hóa doanh nghiệp Hàn.",
    "Liên kết việc làm với doanh nghiệp tại Hàn Quốc.",
    "VISA cấp bởi Bộ ngoại giao Hàn Quốc."
];

// create and append paragraphs to container
// requirements 3: callback
paragraphs.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.appendChild(paragraph);
});