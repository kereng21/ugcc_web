
    document.getElementById('joinForm').addEventListener('submit', function(e){
        e.preventDefault();
        const fullName= document.getElementById('name').value.trim();
        const email=document.getElementById('email').value.trim();
        const interest=document.getElementById('interest').value.trim();

        if(fullName && email && interest) {
            alert("Thank you for Submitting,"+ fullName + "! we'll be in touch via email.");
            this.reset();
        } else{
            alert("Please fill out all fields");
        }

    });
