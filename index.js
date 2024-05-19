const container = document.querySelector(".progress-bars");
const progress = document.querySelectorAll(".progress");
const percentage = document.querySelectorAll(".percentage");
let bol = false;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > container.offsetTop - 600 && bol === false) {
        for (let i = 0; i < progress.length; i++) {
            percentage[i].innerText = '0';
            let count = 0;
            const data = parseInt(progress[i].dataset.count);
            progress[i].style.transition = `width ${data * 50}ms`;
            progress[i].style.width = `${data}%`;

            function updateCount() {
                if (count < data) {
                    count++;
                    percentage[i].innerText = count + '%';
                    setTimeout(updateCount, 50);
                } else {
                    percentage[i].innerText = data + '%';
                }
            }
            updateCount();
        }
        bol = true;
    }
});
