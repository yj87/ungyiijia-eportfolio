function formValidator() {
    var fname = document.getElementById('name');

    if (isAlphabet(fname, "Please enter only letters for your name")) {
        if (phoneValidator()) {
            if (emailValidator()) {
                return true;
            }
        }
    }
        return false;
    }

function isAlphabet(elem, helperMsg) {
    var alphaExp = /^[a-zA-Z\s]+$/;
    if (elem.value.length > 0 && elem.value.match(alphaExp)) {
        document.getElementById('fullname_err').innerHTML = 'Valid name ✓';
        document.getElementById('fullname_err').style.color = "#00AF33";
        return true;
    } else {
        document.getElementById('fullname_err').innerHTML = helperMsg;
        document.getElementById('fullname_err').style.color = "#FF0000";
        elem.focus();
        return false;
    }
}

function phoneValidator() {
    var phoneNum = document.getElementById('phoneNumber');
    var numericExpression = /^[0-9]+$/;

    if (phoneNum.value.length > 0 && phoneNum.value.match(numericExpression)) {
        document.getElementById('phone_err').innerHTML = 'Valid phone number ✓';
        document.getElementById('phone_err').style.color = "#00AF33";
        return true;
    } else {
        document.getElementById('phone_err').innerHTML =
        phoneNum.value.length === 0 ? 'Phone number is required.' : 'Please enter numbers only.';
        document.getElementById('phone_err').style.color = "#FF0000";
        phoneNum.focus();
        return false;
    }
}

function emailValidator() {
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var email_name = document.getElementById("email");
    var email_value = email_name.value;

    if (!email_value.match(emailExp) || email_value.length === 0) {
        document.getElementById('email_err').innerHTML = 'This is not a valid email format.';
        document.getElementById('email_err').style.color = "#FF0000";
        email_name.focus();
        return false;
    } else {
        document.getElementById('email_err').innerHTML = 'Valid email format ✓';
        document.getElementById('email_err').style.color = "#00AF33";
        return true;
    }
}