// Message the warnning cancel operation the register

document.getElementById('CancellUp_Profile').addEventListener('click', function () {
    let warningElement = document.createElement('p');
    warningElement.textContent = 'Cancelaste el Registro de tu cuenta...';
    warningElement.classList.add('WarningOperation');

    let confirmCancelElement = document.getElementById('ConfirmCancel');
    confirmCancelElement.innerHTML = ''; 
    confirmCancelElement.appendChild(warningElement);

    setTimeout(function() {
        window.location.href = '../../Components/LoginRegister-Farmer/Register-Farmer.html';
    }, 3000);
}); 

//Remove second filter
AddProducts.style.display = 'none';


function Up_Image_Profile(e) {
    let input = document.getElementById('inputGroupFile02'),
        ImageProfile = document.getElementById('ImageProfile'),
        progressOne = document.getElementById('progressOne'),
        AddProducts = document.getElementById('AddProducts');

    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            ImageProfile.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);

        const TimeNone = setTimeout(function () {
            progressOne.style.display = 'none';
            AddProducts.style.display = 'block';
            console.log(TimeNone);
        }, 3000);
    }
}

