let mode = document.getElementById("darkmode")

        mode.addEventListener('click', () => {
            document.body.classList.toggle('dark')
            if(document.body.classList.contains('dark')){
                mode.src = "icon/toggle-off(1).svg";
            } else {
                mode.src = "icon/toggle-on.svg";
            } 
            
        })