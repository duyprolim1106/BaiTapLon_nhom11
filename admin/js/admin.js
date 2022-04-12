function adds(){
    var userName = document.getElementById('username').value
    var email = document.getElementById('email').value
    var passWord = document.getElementById('password').value


    document.querySelector('#data_user').insertAdjacentHTML(
        'afterbegin',
        `<div class="table_items1">${userName}</div>
        <div class="table_items1 table_items_border">${email}</div>
        <div class="table_items1 table_items_border">${passWord}</div>`
    )
}

let email = document.getElementById('email')
let txtNotifiesEmail = document.getElementById('txtNotificationEmail')

let inputEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
email.addEventListener("focusout", checkEmail)

function checkEmail(){
    if (inputEmail.test(email.value)){
        txtNotifiesEmail.textContent = 'Email hợp lệ'
        txtNotifiesEmail.style.color = 'green'
        txtNotifiesEmail.style.fontSize = '13px'
    }
    else{
        txtNotifiesEmail.textContent = 'Email không hợp lệ'
        txtNotifiesEmail.style.color = 'red'
        txtNotifiesEmail.style.fontSize = '13px'
    }
}

let userName = document.getElementById('username')
let txtNotifiesUsername = document.getElementById('txtNotificationUsername')

let inputUserName = /^[a-z0-9_-]{3,16}$/
userName.addEventListener("focusout", checkUsername)

function checkUsername(){
    if (inputUserName.test(userName.value)){
        txtNotificationUsername.textContent = 'Username hợp lệ'
        txtNotificationUsername.style.color = 'green'
        txtNotificationUsername.style.fontSize = '13px'
    }
    else{
        txtNotificationUsername.textContent = 'Username không hợp lệ'
        txtNotificationUsername.style.color = 'red'
        txtNotificationUsername.style.fontSize = '13px'
    }
}

let txtCheckPW = document.getElementById('password')
let txtNotifiesPW = document.getElementById('txtNotificationPW')

txtCheckPW.addEventListener('focusout', checkPW)

function checkPW(){
    if(txtCheckPW.value.length >= 7 && txtCheckPW.value.length <=12){
        txtNotifiesPW.textContent = 'Password hợp lệ'
        txtNotifiesPW.style.color = 'green'
        txtNotifiesPW.style.fontSize = '13px'
    }
    else{
        txtNotifiesPW.textContent = 'Password không hợp lệ (7 - 12 ký tự)'
        txtNotifiesPW.style.color = 'red'
        txtNotifiesPW.style.fontSize = '13px'
    }
}

function refresh(){
    document.location.reload()
}