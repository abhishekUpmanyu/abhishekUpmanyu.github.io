function sectionClickHandler(id) {
    var section = document.getElementById(id);
    console.log(section.style.display);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
    section.scrollIntoView({behavior: "smooth"});
}

function setSkillMeters() {
    console.log('HIHI');
    var skills = {
        'cpp-progress': 70,
        'python-progress': 100,
        'dart-progress': 90,
        'javascript-progress': 80,
        'flutter-progress': 100,
        'react-progress': 80,
        'angular-progress': 70,
        'pandas-numpy-progress': 70,
        'matplotlib-progress': 60,
        'scikit-learn-progress': 40,
        'firebase-progress': 80,
    };
    var width = 0;
    function animate() {
        flag = true;
        width++;
        for (let skill in skills) {
            if (width<=skills[skill]) {
                flag = false;
                document.getElementById(skill).style.width = width + "%";
            }
        }
        if (flag) {
            clearInterval(interval);
        }
    }
    var interval = setInterval(animate, 10)
}