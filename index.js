var OutputComponent = document.getElementById('output');
var InputComponent = document.getElementById('input');
var InputFieldComponent = document.getElementById('inputField');
var CurrentTheme = 2;

var _commands = {
  help: '\nCommands list:\n\nWHOIS - Show information about me.\nTRACEROUTE - Show my professional experiences.\nTOP - Show my computer skills.\nMAIL - Contact me.\nCLEAR - Clear terminal.\n',
  whois: "\nHi, my name is Paulo Corazza but my friends call me Paulinho. \nI'm 28 years old and i have been a developer since I was 25.\nMy main focus is on fullstack development.\nIn 2020 due to the corona-virus pandemic, i decided to have my own business, Then CorazzaTI - Soluções em Informática has born\nNowadays i am working as IT Analyst on big company in my hometown and i do a few things\nfrom software development to hardware maintenance and network administration.\nI also like to spend free time listening to rock n roll songs, play Magic:The gathering and have barbecue with my friends and family \n",
  traceroute: "\nExperiences \n(CURRENT) Tramar Condutores Especiais LTDA - IT Assistant - Java, Oracle, SPL(Senior Programming Language)\n(CURRENT) CORAZZATI - CEO - Software Development - PHP,MySQL,JS, HTML,CSS,jquery. \n(OUTDATED):\n\nSuperSmart (Nov/2019 - Mar/2020):\n Visual Basic 6.\n\nCarmel Indústria e Comércio (Mar/2019 - Oct/2020):\nIT Analyst -\n\nInnovareTI (Mar/2018 - Oct/2018):\nVue, jQuery, NodeJS,FLUIG \n\nFor more details visit http://linkedin.com/in/corazzapaulo\n",
  top: "\nComputer Skills:\n\n[▓▓      ] Javascript\n[▓▓      ] NodeJS\n[▓▓      ] CSS\n[▓▓      ] HTML5\n[▓▓      ] Java\n[▓▓      ] PHP\n[▓▓      ] SQL\n[▓▓      ] Git \n\nFor more details visit http://github.com/paulocorazza\n",
  mail: function () {
    submitOutput('\nOpenning mail client...\n');
    window.location = 'mailto:corazza.paulovinicius@gmail.com';
    return;
  },

  clear: function () {
    OutputComponent.innerHTML = '';
    return;
  }
};

var clearInput = function () {
  InputComponent.value = '';
};

var submitInput = function () {
  var input = InputComponent.value.toLowerCase();
  if (typeof _commands[input] === 'undefined') {
    submitOutput('\nCommand not found :(\n');
  } else if (typeof _commands[input] === 'function') {
    _commands[input].call();
  } else {
    submitOutput(_commands[input]);
  }

  scrollDown();
};

var clearOutput = function () {
  OutputComponent.innerHTML = '';
}

var submitOutput = function (output) {
  var typeIndex = 0;
  InputFieldComponent.setAttribute('data-hidden', true);

  var typeWritter = setInterval(function () {
    if (typeIndex < output.length) {
      OutputComponent.innerHTML += output[typeIndex];
      typeIndex++;
      scrollDown();
      focus();
    } else {
      InputFieldComponent.setAttribute('data-hidden', false);
      clearInterval(typeWritter);
      scrollDown();
      focus();
    }
  }, 3);
};

var changeTheme = function (theme) {
  document.body.setAttribute('data-theme', theme);
};

var scrollDown = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

InputComponent.onkeypress = function (event) {

  if (event.key === 'Enter' || event.keyCode === 13) {
    submitInput();
    clearInput();
  }
};

var focus = function () {
  InputComponent.focus();
}

document.onclick = function () {
  focus();
};

focus();