var users = [
    {
        username: "admin",
        password: "123",
        permission: "admin"
    },
    {
        username: "minhhung@tlu.edu.vn",
        password: "123",
        permission: "user"
    },
    {
        username: "kimbau@tlu.edu.vn",
        password: "123",
        permission: "user"
    },
]

function check_user(username, password, permission){
    for (i in users) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}

function login(){
    event.preventDefault();
    var username = document.getElementById('txtEmail').value;
    var password = document.getElementById('txtPW').value

    var val = check_user(username, password, users);
    if(val != false){
        var date = new Date();
        exp_date = date.getTime() + 10 * 24 * 60 * 60 * 1000;
        date.setTime(exp_date);
        document.cookie = "username=" + val.username + ";expires=" + date;
        document.cookie = "permission=" + val.permission + ";expires=" + date;
        if (val.permission == "admin") {
            location.href = '../../admin/admin.html';
        } else if (val.permission == "user") {
            // location.href = "../../admin/user.html";
            alert("Đăng nhập với người dùng")
        } else{
            alert("username must contant '@' and '_'");
        }
    }
}