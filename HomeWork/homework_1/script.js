function compare_numbers(a, b) {
    if (a < b)
        return -1
    else if (a > b)
        return 1
    else
        return 0
}

function factorial(n) {
    if (n == 1)
       return n
    else
       return n * factorial(n-1)
}

function create_number(a, b, c) {
    var number = +(String(a) + String(b) + String(c))
    return number
}

function area(a, b = null) {
    if (b)
        return a * b
    else
        return a * a
}

function perfect_number(n) {
    var sum = 0
    for (var i = 1; i < n; i++) {
        if (n % i == 0)
            sum += i
    }
    return sum == n
}

function perfect_number_in_range(start, end) {
    for (var i = start; i <= end; i++) {
        if (perfect_number(i))
            alert("Number " + i + " is the perfect")
    }
}

function time_to_string(hours, minutes = null, seconds = null) {
    if (!minutes)
        minutes = "00"
    else if (minutes < 10)
        minutes = "0" + String(minutes)

    if (!seconds)
        seconds = "00"
    else if (seconds < 10)
        seconds = "0" + String(seconds)

    if (hours < 10)
        hours = "0" + String(hours)
    return hours + ":" + minutes + ":" + seconds
}

function get_time_in_seconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds
}

function get_time_from_seconds(seconds) {
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor(seconds % 3600 / 60)
    seconds = seconds % 3600 % 60
    if (hours < 10)
        hours = "0" + String(hours)
    if (minutes < 10)
        minutes = "0" + String(minutes)
    if (seconds < 10)
        seconds = "0" + String(seconds)
    return hours + ":" + minutes + ":" + seconds
}

function get_the_difference_between_the_two_dates(day_1, month_1, year_1, day_2, month_2, year_2) {
    var time_1 = Math.round((new Date(year_1, month_1 - 1, day_1)).getTime() / 1000)
    var time_2 = Math.round((new Date(year_2, month_2 - 1, day_2)).getTime() / 1000)
    var difference = time_2 - time_1
    return get_time_from_seconds(difference)
}




function execute_task_1() {
    var num_1 = +prompt("Enter the first number")
    var num_2 = +prompt("Enter the second number")
    alert("Answer: " + compare_numbers(num_1, num_2))
}

function execute_task_2() {
    var num = +prompt("Enter the number")
    alert("The factorial of the number " + num + " is equal to: " + factorial(num))
}

function execute_task_3() {
    var num_1 = +prompt("Enter the first number")
    var num_2 = +prompt("Enter the second number")
    var num_3 = +prompt("Enter the third number")
    alert("Your new number: " + create_number(num_1, num_2, num_3))
}

function execute_task_4() {
    var height = +prompt("Enter the height")
    var weight = +prompt("Enter the weight (not necessary if you want to calculate the area of ​​a square)")
    if (weight)
        alert("The area of ​​the rectangle: " + area(height, weight))
    else
        alert("The area of the square: " + area(height))
}

function execute_task_5() {
    var num = +prompt("Enter the number")
    if (perfect_number(num))
        alert("Number " + num + " is the perfect")
    else
        alert("Number " + num + " isn't the perfect")
}

function execute_task_6() {
    var start = +prompt("Enter the start of range")
    var end = +prompt("Enter the end of range")
    perfect_number_in_range(start, end)
}

function execute_task_7() {
    var hours = +prompt("Enter the hours")
    var minutes = +prompt("Enter the minutes")
    var seconds = +prompt("Enter the seconds")
    alert(time_to_string(hours, minutes, seconds))
}

function execute_task_8() {
    var hours = +prompt("Enter the hours")
    var minutes = +prompt("Enter the minutes")
    var seconds = +prompt("Enter the seconds")
    alert(hours + ":" + minutes + ":" + seconds + " in seconds: " + get_time_in_seconds(hours, minutes, seconds))
}

function execute_task_9() {
    var seconds = +prompt("Enter the seconds")
    alert(seconds + " -> " + get_time_from_seconds(seconds))
}

function execute_task_10() {
    day_1 = +prompt("Enter the day")
    month_1 = +prompt("Enter the month")
    year_1 = +prompt("Enter the year")
    day_2 = +prompt("Enter the day")
    month_2 = +prompt("Enter the month")
    year_2 = +prompt("Enter the year")
    alert("The difference between " + day_1 + "-" + month_1 + "-" + year_1 + " and " + day_2 + "-" + month_2 + "-" + year_2 + ": " + get_the_difference_between_the_two_dates(day_1, month_1, year_1, day_2, month_2, year_2))
}
