function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function changeLanguage() {
    var selectedLanguage = document.getElementById("language").value;
    var elements = {
        title: document.getElementById("form-title"),
        nameLabel: document.getElementById("name-label"),
        languageLabel: document.getElementById("language-label"),
        dobLabel: document.getElementById("dob-label"),
        stateLabel: document.getElementById("state-label"),
        cityLabel: document.getElementById("city-label"),
        districtLabel: document.getElementById("district-label"),
        phoneLabel: document.getElementById("phone-label"),
        aadhaarLabel: document.getElementById("aadhaar-label"),
        nextButton: document.getElementById("next-button")
    };

    switch (selectedLanguage) {
        case 'Hindi':
            elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
        case 'Tamil':
            elements.title.textContent = 'பயனர் விவரங்கள்';
            elements.nameLabel.textContent = 'பெயர்: *';
            elements.languageLabel.textContent = 'மொழி: *';
            elements.dobLabel.textContent = 'பிறந்த தேதி: *';
            elements.stateLabel.textContent = 'மாநிலம்: *';
            elements.cityLabel.textContent = 'நகரம்: *';
            elements.districtLabel.textContent = 'மாவட்டம்: *';
            elements.phoneLabel.textContent = 'பதிவுசெய்யப்பட்ட தொலைபேசி எண்: *';
            elements.aadhaarLabel.textContent = 'ஆதார் எண்: *';
            elements.nextButton.textContent = 'அடுத்த பக்கம்';
            break;
        // Add more languages as needed
        default:
            elements.title.textContent = 'ಬಳಕೆದಾರರ ವಿವರಗಳು';
            elements.nameLabel.textContent = 'ಹೆಸರು: *';
            elements.languageLabel.textContent = 'ಭಾಷೆ: *';
            elements.dobLabel.textContent = 'ಹುಟ್ಟಿದ ದಿನಾಂಕ: *';
            elements.stateLabel.textContent = 'ಹುಟ್ಟಿದ ದಿನಾಂಕ: *;
            elements.cityLabel.textContent = 'ನಗರ: *';
            elements.districtLabel.textContent = 'ಜಿಲ್ಲೆ: *';
            elements.phoneLabel.textContent = 'ನೋಂದಾಯಿತ ದೂರವಾಣಿ ಸಂಖ್ಯೆ: *';
            elements.aadhaarLabel.textContent = 'ಆಧಾರ್ ಸಂಖ್ಯೆ: *';
            elements.nextButton.textContent = 'ಮುಂದಿನ ಪುಟ;
    }
                 elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
    }
 elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
} elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
} elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
} elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
}
 elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
}
 elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;
} elements.title.textContent = 'उपयोगकर्ता विवरण';
            elements.nameLabel.textContent = 'नाम: *';
            elements.languageLabel.textContent = 'भाषा: *';
            elements.dobLabel.textContent = 'जन्म तिथि: *';
            elements.stateLabel.textContent = 'राज्य: *';
            elements.cityLabel.textContent = 'शहर: *';
            elements.districtLabel.textContent = 'जिला: *';
            elements.phoneLabel.textContent = 'पंजीकृत फ़ोन नंबर: *';
            elements.aadhaarLabel.textContent = 'आधार नंबर: *';
            elements.nextButton.textContent = 'अगला पृष्ठ';
            break;


// Populate the drag and drop lists for state, city, and district
// This example does not include the full implementation. 
// You'll need to populate these lists based on your data source.
