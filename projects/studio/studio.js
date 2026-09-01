 const darkModeBtn = document.getElementById("darkMode");
        darkModeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");
            
            if(document.body.classList.contains("dark")){
                darkModeBtn.textContent = "LIGHT MODE"
            }else{
                darkModeBtn.textContent = "DARK MODE"
            }
        });

        const menuBtn = document.getElementById("menuBtn");
           menuBtn.addEventListener("mouseenter", () => {
           menuBtn.textContent = "OPEN"
           });
           menuBtn.addEventListener("mouseleave", () => {
           menuBtn.textContent = "MENU"

        });

        const contact = document.getElementById("contact")
        contact.addEventListener("mouseenter", () => {
           contact.textContent = "CONTACT US"
           });
           contact.addEventListener("mouseleave", () => {
           contact.textContent = "LET'S TALK"

        });

        const cursor_follow_container = document.querySelector(".cursor-follow-video-container")
            document.addEventListener("mousemove", (e) => {

            cursor_follow_container.style.top = `${e.clientY}px`
            cursor_follow_container.style.left = `${e.clientX}px`

        })