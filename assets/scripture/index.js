 const WEBAPI = [
    {
        question: "What is REST in the context of web APIs?",
        studyGuideInformation: "REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol -- typically HTTP. In REST, resources are manipulated using HTTP verbs (GET, POST, PUT, DELETE).",
        correctAnswer: "An architectural style for designing networked applications",
        incorrectAnswers: [
          "A JavaScript library for building user interfaces",
          "A protocol for securing web APIs",
          "A type of web service that requires SOAP"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Glossary/REST"
      },
      {
        question: "What is an API key?",
        studyGuideInformation: "An API key is a code passed in by computer programs calling an API (application programming interface) to identify the calling program, its developer, or its user to the website.",
        correctAnswer: "A code to identify the calling program or user to the website",
        incorrectAnswers: [
          "A unique identifier for a database record",
          "A security protocol used in APIs",
          "A type of data structure used in web development"
        ],
        resources: "https://cloud.google.com/docs/authentication/api-keys"
      },
      {
        question: "What is OAuth used for in web APIs?",
        studyGuideInformation: "OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential.",
        correctAnswer: "Allowing authenticated access to assets without sharing the initial logon credential",
        incorrectAnswers: [
          "Encrypting data before it is sent over the Internet",
          "Compressing data to improve API response times",
          "Validating XML documents against a schema"
        ],
        resources: "https://oauth.net/"
      },
      {
        question: "What does JSONP stand for, and why is it used?",
        studyGuideInformation: "JSONP (JSON with Padding) is a method used to request data from a server residing in a different domain than the client. It is an alternative to a more common approach known as CORS. JSONP works by making a request to a cross-origin domain via a <script> tag and usually includes a callback function.",
        correctAnswer: "JSON with Padding, used for cross-domain requests",
        incorrectAnswers: [
          "JavaScript Object Notation Processed",
          "Just Simple Object Protocol",
          "Java Secure Object Pathway"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSONP"
      },
      {
        question: "What does JSONP stand for, and why is it used?",
        studyGuideInformation: "JSONP (JSON with Padding) is a method used to request data from a server residing in a different domain than the client. It is an alternative to a more common approach known as CORS. JSONP works by making a request to a cross-origin domain via a <script> tag and usually includes a callback function.",
        correctAnswer: "JSON with Padding, used for cross-domain requests",
        incorrectAnswers: [
          "JavaScript Object Notation Processed",
          "Just Simple Object Protocol",
          "Java Secure Object Pathway"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSONP"
      },
      {
        question: "What is a web API?",
        studyGuideInformation: "A web API is a set of rules and protocols that allow one software application to communicate with another. The API defines the correct way for a developer to write a program that requests services from an operating system or other application.",
        correctAnswer: "A set of rules and protocols for one software application to communicate with another",
        incorrectAnswers: [
          "A type of web server used to host websites",
          "A programming language used to create web applications",
          "A type of web browser that supports HTML5"
        ],
        resources: "https://www.mulesoft.com/resources/api/what-is-an-api"
      },
      {
        question: "What is a kwyboard event?",
        studyGuideInformation: "A keyboard event is an event that is triggered when a user interacts with the keyboard. It can be used to detect when a key is pressed, released, or held down.",
        correctAnswer: "An event that is triggered when a user interacts with the keyboard",
        incorrectAnswers: [
          "A type of computer keyboard used for gaming",
          "A type of computer keyboard used for typing",
          "A type of computer keyboard used for programming"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent"
      },
      {
        question: "What is a DOM?",
        studyGuideInformation: "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.",
        correctAnswer: "A programming interface for web documents",
        incorrectAnswers: [
          "A type of web browser used to view web pages",
          "A type of web server used to host web pages",
          "A type of web application used to create web pages"
        ],
        resources: "https://www.mulesoft.com/resources/api/what-is-an-api"
      },
      {
        question: "what syntax is used to set attributes of DOM elements?",
        studyGuideInformation: "The setAttribute() method is used to set the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.",
        correctAnswer: "setAttribute()",
        incorrectAnswers: [
          "setAttributeValue()",
          "setAttr()",
          "setAttrValue()"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute"
        },
        {
           question: "what is an event listener?",
           studyGuideInformation: "An event listener is a procedure or function in a computer program that waits for an event to occur. It is programmed to react to an input or signal from another process or thread.",
           correctAnswer: "A procedure or function that waits for an event to occur",
           incorrectAnswers: [
             "A type of computer program used to create web pages",
             "A type of computer program used to host web pages",
             "A type of computer program used to view web pages"
           ],
           resources: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
        },
        {
            question: "what is meant by prevent default and how does it work?",
            studyGuideInformation: "The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a 'Submit' button, prevent it from submitting a form.",
            correctAnswer: "Cancels the event if it is cancelable",
            incorrectAnswers: [
              "Stops the event from occurring",
              "Prevents the event from being triggered",
              "Disables the event from being triggered"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault"
        },
        {
            question: "how can an object be stored and pulled from local storage?",
            studyGuideInformation: "The setItem() method of the Storage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists. The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist.",
            correctAnswer: "setItem() and getItem()",
            incorrectAnswers: [
              "store() and retrieve()",
              "save() and load()",
              "put() and get()"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem"
        },
        {
            question: "What is a local storage object?",
            studyGuideInformation: "The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.",
            correctAnswer: "An object that stores data with no expiration date",
            incorrectAnswers: [
              "An object that stores data with an expiration date",
              "An object that stores data in a database",
              "An object that stores data in a file"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
        },                
    ];

 const thirdPartyAPIs = [
    {
        question: "What is JQuery?",
        studyGuideInformation: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler with an easy-to-use API that works across a multitude of browsers.",
        correctAnswer: "A fast, small, and feature-rich JavaScript library",
        incorrectAnswers: [
          "A type of web server used to host websites",
          "A programming language used to create web applications",
          "A type of web browser that supports HTML5"
        ],
        resources: "https://jquery.com/"
    },
    {
        question: "What is Bootstrap?",
        studyGuideInformation: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
        correctAnswer: "A free and open-source CSS framework",
        incorrectAnswers: [
          "A type of web server used to host websites",
          "A programming language used to create web applications",
          "A type of web browser that supports HTML5"
        ],
        resources: "https://getbootstrap.com/"
    },
    {
        question: "what is a click event?",
        studyGuideInformation: "A click event is an event that is triggered when a user clicks on an element. It can be used to detect when a user clicks on a button, link, or other element.",
        correctAnswer: "An event that is triggered when a user clicks on an element",
        incorrectAnswers: [
          "A type of computer keyboard used for gaming",
          "A type of computer keyboard used for typing",
          "A type of computer keyboard used for programming"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event"
    },
    {
        question: "what are form elements?",
        studyGuideInformation: "Form elements are elements that allow users to input data into a form. They include input, textarea, select, and button elements.",
        correctAnswer: "Elements that allow users to input data into a form",
        incorrectAnswers: [
          "Elements that allow users to view data in a form",
          "Elements that allow users to submit data from a form",
          "Elements that allow users to delete data from a form"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
    },
    {
        question: "Using a form and checkbox input elements, how can you grab the value of all the checked checkboxes?",
        studyGuideInformation: "You can grab the value of all the checked checkboxes by using the querySelectorAll() method to select all the checked checkboxes, and then looping through the selected checkboxes to get their values.",
        correctAnswer: "var checkedEl = document.querySelectorAll('input:checked'",
        incorrectAnswers: [
          "var checkedEl = document.querySelector('input:checked')",
          "var checkedEl = document.getElementbyId('input: true')",
          "let checkedEl = document.getElementByProperty('input:checked')"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll"
    },
    {
        question: "how can an html element be stored as a variable?",
        studyGuideInformation: "An HTML element can be stored as a variable by using the getElementById() method to select the element, and then storing the element in a variable.",
        correctAnswer: "var element = document.getElementById('id')",
        incorrectAnswers: [
          "var element = document.getElementByProperty('id')",
          "var element = document.querySelector('id')",
          "let element = document.getElementByProperty('id')"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById"
    },
    {
        quesion: "what is the crossorigin attribute used for?",
        studyGuideInformation: "The crossorigin attribute is used to indicate that the resource is to be used in a cross-origin request. It is used to request the resource with CORS disabled.",
        correctAnswer: "Indicates that the resource is to be used in a cross-origin request",
        incorrectAnswers: [
          "Indicates that the resource is to be used in a same-origin request",
          "Indicates that the resource is to be used in a cross-domain request",
          "Indicates that the resource is to be used in a cross-site request"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin"
    },
    {
        question: "what is a cdn and how is it used in web development?",
        studyGuideInformation: "A CDN (Content Delivery Network) is a network of servers that deliver web content to users based on their geographic location. It is used in web development to improve the performance and security of web applications.",
        correctAnswer: "A network of servers that deliver web content to users based on their geographic location",
        incorrectAnswers: [
          "A network of servers that deliver web content to users based on their internet connection",
          "A network of servers that deliver web content to users based on their device type",
          "A network of servers that deliver web content to users based on their browser type"
        ],
        resources: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/"
    },
    {
        question: 'what is the difference between inline script and external script?',
        studyGuideInformation: "An inline script is a script that is written directly in the HTML document, while an external script is a script that is written in a separate file and linked to the HTML document.",
        correctAnswer: "An inline script is written directly in the HTML document, while an external script is written in a separate file and linked to the HTML document",
        incorrectAnswers: [
          "An inline script is written in a separate file and linked to the HTML document, while an external script is written directly in the HTML document",
          "An inline script is written directly in the HTML document, while an external script is written in a separate file and embedded in the HTML document",
          "An inline script is written in a separate file and embedded in the HTML document, while an external script is written directly in the HTML document"
        ],
        resources: "https://www.w3schools.com/js/js_whereto.asp"
    },
    {
        question: "how can day.js be used to format a date?",
        studyGuideInformation: "Day.js can be used to format a date by using the format() method to specify the format of the date.",
        correctAnswer: "dayjs(date).format('YYYY-MM-DD')",
        incorrectAnswers: [
          "dayjs(date).format('MM-DD-YYYY')",
          "dayjs(date).format('DD-MM-YYYY')",
          "dayjs(date).format('YYYY-DD-MM')"
        ],
        resources: "https://day.js.org/docs/en/display/format"
    },
    { 
        question: "how can a developer include a third party api in a web application?",
        studyGuideInformation: "A developer can include a third party API in a web application by using the <script> tag to link to the API's source file, and then using the API's methods and properties in the application.",
        correctAnswer: "Using the <script> tag to link to the API's source file",
        incorrectAnswers: [
          "Using the <link> tag to link to the API's source file",
          "Using the <style> tag to link to the API's source file",
          "Using the <img> tag to link to the API's source file"
        ],
        resources: "https://www.w3schools.com/js/js_whereto.asp"
    },
    {
        question: "what are the benefits of using a third party API in a web application?",
        studyGuideInformation: "The benefits of using a third party API in a web application include saving time and resources, improving functionality, and enhancing user experience.",
        correctAnswer: "Saving time and resources, improving functionality, and enhancing user experience",
        incorrectAnswers: [
          "Saving money and resources, improving functionality, and enhancing user experience",
          "Saving time and money, improving functionality, and enhancing user experience",
          "Saving time and resources, improving performance, and enhancing user experience"
        ],
        resources: "https://www.entrepreneur.com/article/285491"
    },
    {
        question: "what method can be used to clear the local storage?",
        studyGuideInformation: "The clear() method of the Storage interface, when invoked, clears all keys stored in a given Storage object.",
        correctAnswer: "localStorage.clear()",
        incorrectAnswers: [
          "localStorage.remove()",
          "localStorage.delete()",
          "localStorage.empty()"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear"
    },
    {
        question: "what is the difference between a web API and a third party API?",
        studyGuideInformation: "A web API is an interface that allows one software application to communicate with another, while a third party API is an API that is provided by a third party service or vendor.",
        correctAnswer: "A web API is an interface that allows one software application to communicate with another, while a third party API is an API that is provided by a third party service or vendor",
        incorrectAnswers: [
            "A web API is an interface that allows one software application to communicate with another, while a third party API is an API that is provided by a web service",
            "A web API is an interface that allows one software application to communicate with another, while a third party API is an API that is provided by a web server",
            "A web API is an interface that allows one software application to communicate with another, while a third party API is an API that is provided by a web application"
            ],
        resources: "https://www.mulesoft.com/resources/api/what-is-an-api"
    },
];

 const serverSideAPIs = [
    {
        question: "What is a server-side API?",
        studyGuideInformation: "A server side API is an interface that allows one software application to communicate with another, where the server is responsible for processing the request and returning the response.",
        correctAnswer: "An interface that allows one software application to communicate with another",
        incorrectAnswers: [
          "A type of web server used to host websites",
          "A programming language used to create web applications",
          "A type of web browser that supports HTML5"
        ],
        resources: "https://www.mulesoft.com/resources/api/what-is-an-api"
    },
    {
        question: "What is Curl used for?",
        studyGuideInformation: "Curl is a command-line tool used to transfer data to or from a server, using one of the supported protocols (HTTP, HTTPS, FTP, FTPS, SCP, SFTP, TFTP, DICT, TELNET, LDAP or FILE).",
        correctAnswer: "Transferring data to or from a server",
        incorrectAnswers: [
          "Creating web applications",
          "Hosting websites",
          "Viewing web pages"
        ],
        resources: "https://curl.se/"
    },
    {
        question: "What is the fetch() method used for?",
        studyGuideInformation: "The fetch() method is used to make network requests similar to XMLHttpRequest. It is a modern replacement for XMLHttpRequest.",
        correctAnswer: "Making network requests",
        incorrectAnswers: [
          "Creating web applications",
          "Hosting websites",
          "Viewing web pages"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    {
        question: "what are the different methods used in the fetch() method?",
        studyGuideInformation: "The fetch() method supports several different methods, including GET, POST, PUT, DELETE, and PATCH.",
        correctAnswer: "GET, POST, PUT, DELETE, and PATCH",
        incorrectAnswers: [
          "GET, POST, PUT, DELETE, and UPDATE",
          "GET, POST, PUT, DELETE, and MODIFY",
          "GET, POST, PUT, DELETE, and CHANGE"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    {
        question: "what is the difference between the fetch() method and the XMLHttpRequest object?",
        studyGuideInformation: "The fetch() method is a modern replacement for the XMLHttpRequest object. It is more powerful and flexible, and provides a simpler and more consistent interface for making network requests.",
        correctAnswer: "The fetch() method is a modern replacement for the XMLHttpRequest object",
        incorrectAnswers: [
          "The fetch() method is a modern alternative to the XMLHttpRequest object",
          "The fetch() method is a modern update to the XMLHttpRequest object",
          "The fetch() method is a modern version of the XMLHttpRequest object"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    {
        question: "what is an ajax request and how does it compare to a fetch request?",
        studyGuideInformation: "An AJAX request is a request made using the XMLHttpRequest object, while a fetch request is a request made using the fetch() method. Both are used to make network requests, but fetch is a modern replacement for XMLHttpRequest.",
        correctAnswer: "An AJAX request is a request made using the XMLHttpRequest object",
        incorrectAnswers: [
          "An AJAX request is a request made using the fetch() method",
          "An AJAX request is a request made using the fetch API",
          "An AJAX request is a request made using the XMLHttpRequest method"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
    },
    {
        question: "What is the purpose of the .json() method and why is it used?",
        studyGuideInformation: "The .json() method is used to extract the JSON body content from the response. It is used to parse the response as JSON and return the result as a promise.",
        correctAnswer: "To extract the JSON body content from the response",
        incorrectAnswers: [
          "To extract the JSON body content from the request",
          "To parse the JSON body content from the response",
          "To parse the JSON body content from the request"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Body/json"
    },
    {
        question: "what is the difference between the .parse and the .stringify methods?",
        studyGuideInformation: "The .parse() method is used to parse a JSON string and convert it to a JavaScript object, while the .stringify() method is used to convert a JavaScript object to a JSON string.",
        correctAnswer: "The .parse() method is used to parse a JSON string and convert it to a JavaScript object, while the .stringify() method is used to convert a JavaScript object to a JSON string",
        incorrectAnswers: [
          "The .parse() method is used to convert a JavaScript object to a JSON string, while the .stringify() method is used to parse a JSON string and convert it to a JavaScript object",
          "The .parse() method is used to convert a JSON string to a JavaScript object, while the .stringify() method is used to convert a JavaScript object to a JSON string",
          "The .parse() method is used to convert a JSON string to a JavaScript object, while the .stringify() method is used to parse a JSON string and convert it to a JavaScript object"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
    },
    {
        question: "What is the difference between the .then and the .catch methods?",
        studyGuideInformation: "The .then() method is used to handle the resolved value of a promise, while the .catch() method is used to handle the rejected value of a promise.",
        correctAnswer: "The .then() method is used to handle the resolved value of a promise, while the .catch() method is used to handle the rejected value of a promise",
        incorrectAnswers: [
          "The .then() method is used to handle the rejected value of a promise, while the .catch() method is used to handle the resolved value of a promise",
          "The .then() method is used to handle the resolved value of a promise, while the .catch() method is used to handle the resolved value of a promise",
          "The .then() method is used to handle the rejected value of a promise, while the .catch() method is used to handle the rejected value of a promise"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"
    },
    {
        question: "what is the difference between the .append and .createElement methods?",
        studyGuideInformation: "The .append() method is used to insert content at the end of an element, while the .createElement() method is used to create a new element.",
        correctAnswer: "The .append() method is used to insert content at the end of an element, while the .createElement() method is used to create a new element",
        incorrectAnswers: [
          "The .append() method is used to create a new element, while the .createElement() method is used to insert content at the end of an element",
          "The .append() method is used to create a new element, while the .createElement() method is used to insert content at the end of an element",
          "The .append() method is used to insert content at the beginning of an element, while the .createElement() method is used to create a new element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Element/append"
    },
    {
        question: "what are headers in the network tab of the browser developer tools?",
        studyGuideInformation: "Headers in the network tab of the browser developer tools are used to display information about the request and response, including the request and response headers, status code, and content type.",
        correctAnswer: "Information about the request and response",
        incorrectAnswers: [
          "Information about the request",
          "Information about the response",
          "Information about the request and response headers"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor/request_details"
    },
    {
        question: "what is the purpose of the .status method and how is it used?",
        studyGuideInformation: "The .status method is used to get the status code of the response. It is used to check if the request was successful or not.",
        correctAnswer: "To get the status code of the response",
        incorrectAnswers: [
          "To get the status code of the request",
          "To check if the request was successful",
          "To check if the request was unsuccessful"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Response/status"
    },
    {
        question: "what are the different types of status codes and what do they mean?",
        studyGuideInformation: "The different types of status codes include informational, success, redirection, client error, and server error. They are used to indicate the status of the request and response.",
        correctAnswer: "Informational, success, redirection, client error, and server error",
        incorrectAnswers: [
          "Informational, success, error, client error, and server error",
          "Informational, success, redirection, error, and server error",
          "Informational, success, redirection, client error, and error"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
    },
    {
        question: "how is the headers object used in the fetch() method?",
        studyGuideInformation: "The headers object is used to set the headers of the request, including the content type, authorization, and other custom headers.",
        correctAnswer: "To set the headers of the request",
        incorrectAnswers: [
          "To get the headers of the response",
          "To set the headers of the response",
          "To get the headers of the request"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Headers"
    },
    {
        question: "What are some examples of the fetch options and how are they used?",
        studyGuideInformation: "Some examples of the fetch options include method, headers, body, mode, cache, credentials, redirect, referrer, and integrity. They are used to configure the request and response.",
        correctAnswer: "Method, headers, body, mode, cache, credentials, redirect, referrer, and integrity",
        incorrectAnswers: [
          "Method, headers, body, mode, cache, credentials, redirect, referrer, and security",
          "Method, headers, body, mode, cache, credentials, redirect, referrer, and validation",
          "Method, headers, body, mode, cache, credentials, redirect, referrer, and encryption"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch"
    },
    {
        question: "what is the document location object and how is it used?",
        studyGuideInformation: "The document location object is used to get or set the location of the current document. It is used to navigate to a new page, reload the current page, or get information about the current page.",
        correctAnswer: "To get or set the location of the current document",
        incorrectAnswers: [
          "To get the location of the first 5 document",
          "To set the location of the previous document",
          "To create a document in the current location"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/API/Location"
    },
];

 const jsQuestions = [
    {
      question: "What is JavaScript?",
      studyGuideInformation:
        "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
      correctAnswer: "object-oriented programming language",
      incorrectAnswers: [
        "a static markup language",
        "a style sheet language for webpages",
        "a serever-side scripting language",
      ],
      resources:
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    },
    {
      question: "what is the difference between JavaScript and Java?",
      studyGuideInformation:
        "Java is an OOP programming language while Java Script is an OOP scripting language. Java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only.",
      correctAnswer:
        "java creates applications that run in a virtual machine or browser while JavaScript code is run on a browser only",
      incorrectAnswers: [
        "javascript is primarily used for backend development, while java is used for frontend development",
        "java is a dialect of javascript for smaller applications",
        "There is no difference, they are the same language",
      ],
      resources:
        "https://www.geeksforgeeks.org/difference-between-java-and-javascript/",
    },
    {
      question: "what are the different data types present in JavaScript?",
      studyGuideInformation:
        "String- This data type is used to represent a sequence of characters. Number- This data type is used to represent numeric values. Boolean- This data type is used to represent only one of two values: true or false. Object- This data type is used to represent a collection of data. symbol- This data type is used to represent unique values. null- This data type is used to represent the intentional absence of an object value. undefined- This data type is used to represent the value that is not assigned.",
      correctAnswer: "string, number, boolean, object, symbol, null, undefined",
      incorrectAnswers: [
        "integer, float, character, pointer, reference",
        "decimal, double, byte, short, long",
        "vector, array, record, enumeration, uniion",
      ],
      resources: "https://www.javatpoint.com/javascript-data-types",
    },
    {
      question: "How can you create an object in JavaScript?",
      studyGuideInformation:
        "object literals, object constructors, objects create method, function constructor, function constructor with prototype, objects assign method, singleton pattern and ES6 class",
      correctAnswer:
        "Using object literals, object constructors, the Object.create method, function constructors, the Object.assign method, singleton pattern, or ES6 class syntax.",
      incorrectAnswers: [
        "by declaring a class using the class keyword, similar to java or C#",
        "Using sql-like synta to define object properties and their values",
        "by instantiating types defined in external libraries only",
      ],
      resources: "https://www.javatpoint.com/javascript-create-object",
    },
    {
      question: "what is an anonymous function?",
      studyGuideInformation:
        "an anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation. it is often used as an argument to other functions or as a temporary function.",
      correctAnswer:
        "an unnamed function that is created using the function keyword",
      incorrectAnswers: [
        "a function that automatically deletes itself after execution",
        "a predefined gunction in Javascript that hides the identity of the user",
        "a special function in javascript that can only be called once",
      ],
      resources: "https://www.w3schools.com/js/js_function_definition.asp",
    },
    {
      question: "how can you manipulate an array in JavaScript?",
      studyGuideInformation:
        "manipulating arrays in JavaScript is done through the use of methods that are available to the array object. some of the most commonly used methods include: push, pop, shift, unshift, splice, slice, concat, join, reverse, sort, and forEach",
      correctAnswer: "utilizing the array object's methods",
      incorrectAnswers: [
        "by directly modifying the array length property only",
        "using css selectors to target and change array elements",
        "manipulating arrays exclusively through the html and dom methods",
      ],
      resources: "https://www.w3schools.com/js/js_array_methods.asp",
    },
    {
      question: "what is argument objects in JavaScript?",
      studyGuideInformation:
        "argument objects are array-like objects that are available in functions. they contain the values of the arguments passed to the function. the argument object is a local variable available within all non-arrow functions. you can refer to a function's arguments inside that function by using the arguments object.",
      correctAnswer:
        "array like objects that contain the values of the arguments passed to the function",
      incorrectAnswers: [
        "A collection of key-value pairs stored in the browser's local storage.",
        "Special variables that automatically store user inputs from web forms.",
        "JavaScript functions that validate arguments passed to other functions",
      ],
      resources: "https://www.w3schools.com/js/js_function_parameters.asp",
    },
    {
      question: "what are the scopes of a variable in JavaScript?",
      studyGuideInformation:
        "the scopes of a variable differ by there usage. there are three types of scopes in JavaScript: global scope, local scope, and block scope.",
      correctAnswer: "global, local, and block scope",
      incorrectAnswers: [
        "Public, private, and protected scopes.",
        "Static, dynamic, and lexical scopes.",
        "Constant, mutable, and immutable scopes.",
      ],
      resources: "https://www.w3schools.com/js/js_scope.asp",
    },
    {
      question: "What is callback function in JavaScript?",
      studyGuideInformation:
        "a callback function is a function that is passed as an argument to another function. this type of function is often used to handle events and asynchronous operations such as reading files and making HTTP requests.",
      correctAnswer:
        "a function that is passed as an argument to another function",
      incorrectAnswers: [
        "A function that automatically calls itself repeatedly at set intervals.",
        "A predefined function that exists in JavaScript for debugging purposes.",
        "The first function that is called when a JavaScript file loads.",
      ],
      resources: "https://www.w3schools.com/js/js_callback.asp",
    },
    {
      question: "what is closure in JavaScript?",
      studyGuideInformation:
        "Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.",
      correctAnswer:
        "created whenever a variable that is defined outside the current scope is accessed from within some inner scope",
      incorrectAnswers: [
        "A method used to close all running functions and clear memory.",
        "A syntax for encapsulating all JavaScript code within a single file.",
        "A feature that automatically stops the execution of JavaScript code after a set time.",
      ],
      resources: "https://www.w3schools.com/js/js_function_closures.asp",
    },
    {
      question: "What is an operator in JavaScript?",
      studyGuideInformation:
        "An operator is a special symbol that is used to perform operations on variables and values. JavaScript has a wide range of operators that are used to perform different operations. Some of the most commonly used operators include: arithmetic, assignment, comparison, logical, bitwise, string, and conditional operators.",
      correctAnswer:
        "a special symbol that is used to perform operations on variables and values",
      incorrectAnswers: [
        "A built-in JavaScript function for error handling.",
        "A tool for connecting to databases from JavaScript code.",
        "A component that enables event-driven programming in JavaScript.",
      ],
      resources: "https://www.w3schools.com/js/js_operators.asp",
    },
    {
      question: "What is hoisting in JavaScript?",
      studyGuideInformation:
        "In JavaScript, hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Hoisting applies to variable declarations and function declarations. This means that no matter where the variables and functions are declared, they are moved to the top of their scope regardless of whether their scope is global or local.",
      correctAnswer:
        "Process of moving all the declarations to the top of the scope before code execution",
      incorrectAnswers: [
        "A technique for dynamically loading JavaScript files into a webpage.",
        "The action of removing unused variables and functions from the code during runtime.",
        "A method for encrypting sensitive information within JavaScript code.",
      ],
      resources: "https://www.w3schools.com/js/js_hoisting.asp",
    },
    {
      question: "What is the use of the isNaN function in JavaScript?",
      studyGuideInformation:
        "the isNaN function is used to determine whether a value is an illegal number. This function returns true if the value is NaN, and false if not.",
      correctAnswer: "used to determine whether a value is an illegal number",
      incorrectAnswers: [
        "To check if a variable exists and has been initialized.",
        "To convert a string into a number type.",
        "To validate email addresses and other user inputs.",
      ],
      resources: "https://www.w3schools.com/jsref/jsref_isnan.asp",
    },
    {
      question: "What is the purpose of the 'this' operator in JavaScript?",
      studyGuideInformation:
        "the 'this' operator refers to the object it belongs to. It has different values depending on where it is used: in a method, this refers to the owner object. Alone",
      correctAnswer: "to refer to the object it belongs to",
      incorrectAnswers: [
        "To increment numerical values by one.",
        "To check the type of a JavaScript object.",
        "To explicitly set the scope of a function globally.",
      ],
      resources: "https://www.w3schools.com/js/js_this.asp",
    },
    {
      question:
        "what is the difference between attribute and property in JavaScript?",
      studyGuideInformation:
        "attributes are defined by HTML, while properties are defined by the DOM. attributes are the initial values of the HTML elements, while properties are the current values of the HTML elements. attributes are used to initialize the DOM properties, while properties are used to represent the current state of the DOM.",
      correctAnswer:
        "attributes provide more detail of an html element like type value name, while properties are the current values of the html elements like type= text, value= hello, name= name",
      incorrectAnswers: [
        "Attributes are JavaScript variables, while properties are CSS styles.",
        "Attributes can only be strings, whereas properties can be of any data type.",
        "Attributes are used in HTML and properties in SVG.",
      ],
      resources: "https://www.w3schools.com/js/js_htmldom_attributes.asp",
    },
    {
      question: "what is a higher order function in Javascript?",
      studyGuideInformation:
        "A higher order function is a function that takes another function as an argument, or returns a function. All other functions are first order functions. Some examples of high order functions are factory functions, map, filter, and reduce.",
      correctAnswer:
        "a function that takes another function as an argument, or returns a function",
      incorrectAnswers: [
        "A function that is executed at the beginning of the script loading.",
        "A function that can only operate on numeric values.",
        "A deprecated function type that was removed in ES6.",
      ],
      resources: "https://www.w3schools.com/js/js_function_closures.asp",
    },
    {
      question:
        "what is the difference between local and session storage in JavaScript?",
      studyGuideInformation:
        "Local Storage - The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) - reducing the amount of traffic between client and server. It will stay until it is manually cleared through settings or program. Session Storage - It is similar to local storage; the only difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends. Session Storage will leave when the browser is closed.",
      correctAnswer:
        "the difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends",
      incorrectAnswers: [
        "Local storage is secure, whereas session storage is not.",
        "Local storage can store larger amounts of data than session storage.",
        "Session storage is faster because it is stored in the user's CPU.",
      ],
      resources:
        "https://www.geeksforgeeks.org/difference-between-local-storage-and-session-storage/",
    },
    {
      question: "What is currying in javasript?",
      studyGuideInformation:
        "Currying is a JavaScript functional programming approach that converts a function with many parameters into a succession of functions that each take one argument. It allows you to use only a portion of the inputs, allowing you to create functions that may be used several times and are specialized.",
      correctAnswer:
        "Currying converts a function with many parameters into a succession of functions that each take one argument",
      incorrectAnswers: [
        "A method for sorting arrays based on their string values.",
        "The process of sending JavaScript functions over the network.",
        "A technique for compressing JavaScript files to reduce load times.",
      ],
      resources: "https://www.geeksforgeeks.org/what-is-currying-in-javascript/",
    },
    {
      question: "What is a javascript framework?",
      studyGuideInformation:
        "a javascript framework is a pre-written javascript code that helps developers to build web applications. it provides a standard way to build and deploy applications. some of the most popular javascript frameworks include: angular, react, vue, ember, backbone, and meteor.",
      correctAnswer:
        "a pre-written javascript code that helps developers to build web applications",
      incorrectAnswers: [
        "A tool for automatically optimizing JavaScript performance.",
        "A database management system implemented in JavaScript.",
        "A standard set of JavaScript coding conventions.",
      ],
      resources: "https://www.geeksforgeeks.org/what-is-a-javascript-framework/",
    },
    {
      question: "What is an event bubbling in JavaScript?",
      studyGuideInformation:
        "Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy until it reaches the outermost DOM element.",
      correctAnswer:
        "An event that propagates from the innermost target element to the outermost DOM element",
      incorrectAnswers: [
        "A method for creating custom event listeners.",
        "A technique for preventing default event actions.",
        "The process of manually triggering events on multiple elements simultaneously.",
      ],
      resources: "https://www.geeksforgeeks.org/event-bubbling-in-javascript/",
    },
    {
      question:
        "Explain the concept of 'truthy' and 'falsy' values in JavaScript.",
      studyGuideInformation:
        "In JavaScript, truthy and falsy values are used to evaluate a non-boolean value in a boolean context. Falsy values include false, 0, '', null, undefined, and NaN. All other values are considered truthy, meaning they evaluate to true in boolean contexts.",
      correctAnswer:
        "Values that are evaluated as true or false in a boolean context, with false, 0, '', null, undefined, and NaN being falsy.",
      incorrectAnswers: [
        "A specific type of boolean value",
        "Error handling mechanisms in JavaScript",
        "Data types that can only be true or false",
      ],
      resources:
        "https://www.geeksforgeeks.org/truthy-and-falsy-values-in-javascript/",
    },
    {
      question: "What is event delegation in JavaScript?",
      studyGuideInformation:
        "Event delegation is a technique involving adding a single event listener to a parent element that fires for all descendants matching a selector, regardless of whether those descendants exist now or are added in the future.",
      correctAnswer:
        "A technique of handling events by adding a single event listener to a parent element instead of multiple listeners to individual child elements.",
      incorrectAnswers: [
        "A method to directly bind an event to a specific element",
        "A way to delegate tasks to the browser for optimized performance",
        "The process of cloning events across multiple elements",
      ],
      resources: "https://www.geeksforgeeks.org/event-delegation-in-javascript/",
    },
    {
      question: "Describe the difference between == and === in JavaScript.",
      studyGuideInformation:
        "In JavaScript, '==' is the loose equality operator that converts the operands to the same type before making the comparison. '===' is the strict equality operator that does not perform type conversion; if the operands are of different types, it directly evaluates to false.",
      correctAnswer:
        "'==' performs type coercion before comparison, while '===' checks both value and type without converting.",
      incorrectAnswers: [
        "There is no difference, both are used for equality checks",
        "'===' is used only for numeric comparisons",
        "'==' checks types, while '===' does not",
      ],
      resources:
        "https://www.geeksforgeeks.org/difference-between-and-operators-in-javascript/",
    },
    {
      question: "What are Promises in JavaScript and how do they work?",
      studyGuideInformation:
        "Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation, and its resulting value. They allow you to attach callbacks to handle the fulfillment or rejection of asynchronous operations.",
      correctAnswer:
        "Objects representing the eventual completion or failure of an asynchronous operation.",
      incorrectAnswers: [
        "Syntax for creating threads in JavaScript",
        "Functions that automatically retry an operation on failure",
        "Callbacks passed to asynchronous functions to handle success",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-promises/",
    },
    {
      question: "Explain the concept of modules in JavaScript.",
      studyGuideInformation:
        "Modules in JavaScript are reusable pieces of code that can be exported from one program and imported for use in another program. Modules allow for a cleaner, more maintainable codebase by encapsulating functionality.",
      correctAnswer:
        "Reusable pieces of code that can be exported from one program and imported for use in another.",
      incorrectAnswers: [
        "Pre-built functions in JavaScript",
        "JavaScript libraries like jQuery",
        "Templates for building user interfaces",
      ],
      resources: "https://www.geeksforgeeks.org/modules-in-javascript/",
    },
    {
      question:
        "What is the 'spread operator' in JavaScript and give an example of its use?",
      studyGuideInformation:
        "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It can also be used to spread objects into a new object.",
      correctAnswer:
        "An operator that expands an iterable's elements into individual elements.",
      incorrectAnswers: [
        "A method to concatenate arrays",
        "A syntax for spreading values into a function as parameters",
        "A tool to increase the size of an array dynamically",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-spread-operator/",
    },
    {
      question: "Explain 'destructuring assignment' in JavaScript.",
      studyGuideInformation:
        "Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
      correctAnswer:
        "A JavaScript expression that allows unpacking of values from arrays or properties from objects into distinct variables.",
      incorrectAnswers: [
        "A technique for assigning default values to variables",
        "A method for deep cloning objects and arrays",
        "A pattern for creating multiple variables from a string",
      ],
      resources:
        "https://www.geeksforgeeks.org/javascript-destructuring-assignment/",
    },
    {
      question: "What are template literals in JavaScript?",
      studyGuideInformation:
        "Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They are enclosed by the backtick (` `) character instead of double or single quotes.",
      correctAnswer:
        "String literals that allow embedded expressions and multi-line strings, enclosed by backticks.",
      incorrectAnswers: [
        "A way to write functions inside strings",
        "HTML templates used in JavaScript frameworks",
        "Variables that automatically adjust based on the template used",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-template-literals/",
    },
    {
      question: "How does JavaScript handle asynchronous operations?",
      studyGuideInformation:
        "JavaScript handles asynchronous operations using callbacks, promises, and async/await syntax. These tools help manage operations that take time to complete, such as fetching data from a server, without blocking the main thread.",
      correctAnswer:
        "Using callbacks, promises, and async/await syntax to manage operations without blocking the main thread.",
      incorrectAnswers: [
        "By automatically creating new threads for each operation",
        "Using a special JavaScript engine that supports multi-threading",
        "Pausing the execution of the entire program until the operation completes",
      ],
      resources: "https://www.geeksforgeeks.org/asynchronous-javascript/",
    },
    {
      question:
        "What is the 'nullish coalescing operator' in JavaScript and how is it used?",
      studyGuideInformation:
        "The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It provides a way to handle default values.",
      correctAnswer:
        "A logical operator that returns its right-hand operand when the left-hand operand is null or undefined, otherwise the left-hand operand.",
      incorrectAnswers: [
        "An operator that checks if a value is either null or undefined and returns boolean",
        "A method for concatenating strings when one might be null",
        "A syntax for defining optional parameters in functions",
      ],
      resources:
        "https://www.geeksforgeeks.org/javascript-nullish-coalescing-operator/",
    },
    {
      question: "What is 'event looping' in JavaScript, and how does it work?",
      studyGuideInformation:
        "Event loop is a programming construct that waits for and dispatches events or messages in a program. In JavaScript, the event loop enables asynchronous operations by periodically checking the queue of pending operations and executing them when they are completed.",
      correctAnswer:
        "A mechanism that checks and executes tasks in a queue, allowing JavaScript to perform non-blocking asynchronous operations.",
      incorrectAnswers: [
        "A loop that repeatedly listens for the same event to occur",
        "A method to create multiple loops for event handling",
        "A feature that allows events to be executed in parallel",
      ],
      resources: "https://www.geeksforgeeks.org/event-loop-in-javascript/",
    },
    {
      question:
        "Explain the difference between 'var', 'let', and 'const' declarations in JavaScript.",
      studyGuideInformation:
        "In JavaScript, 'var' declares a variable globally or locally to an entire function regardless of block scope. 'Let' allows you to declare variables that are limited in scope to the block, statement, or expression where they are used. 'Const' is similar to 'let', but the variable you declare must be immediately initialized with a value, which can't be re-assigned.",
      correctAnswer:
        "'Var' has function or global scope, 'let' and 'const' have block scope, but 'const' cannot be re-assigned.",
      incorrectAnswers: [
        "'Var' and 'let' are interchangeable, while 'const' is for constant values",
        "'Let' is for global variables, 'var' for local, and 'const' for constants",
        "'Const' declarations can be updated, but not re-declared, unlike 'var' and 'let'",
      ],
      resources:
        "https://www.geeksforgeeks.org/difference-between-var-let-and-const-in-javascript/",
    },
    {
      question: "What is a 'promise chain' in JavaScript?",
      studyGuideInformation:
        "A promise chain is a sequence of operations based on promises that are linked together. Each promise in the chain executes asynchronously and returns another promise, allowing you to perform complex asynchronous operations in a more readable manner.",
      correctAnswer:
        "A sequence of asynchronous operations linked together, where each promise returns another promise.",
      incorrectAnswers: [
        "A method of executing promises in parallel",
        "A collection of unresolved promises",
        "A technique for interrupting the execution of a promise",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-promise-chain/",
    },
    {
      question: "Describe the 'Module Pattern' in JavaScript.",
      studyGuideInformation:
        "The Module Pattern is a design pattern used in JavaScript to encapsulate a group of related functions, variables, or both into a single object or module. It allows for private and public members, helping to organize code and prevent global namespace pollution.",
      correctAnswer:
        "A design pattern that encapsulates related functions and variables into a single object, allowing for private and public members.",
      incorrectAnswers: [
        "A syntax for importing and exporting functions",
        "A feature that automatically separates JavaScript code into modules",
        "A library for managing JavaScript applications",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-module-pattern/",
    },
    {
      question:
        "Explain 'arrow functions' in JavaScript and mention any differences they have compared to traditional functions.",
      studyGuideInformation:
        "Arrow functions, introduced in ES6, provide a concise syntax for writing function expressions. They don't have their own 'this', 'arguments', 'super', or 'new.target', and are not suitable for methods that require an object context. Arrow functions are often used for non-method functions.",
      correctAnswer:
        "A concise syntax for function expressions without their own 'this', not suitable for methods requiring object context.",
      incorrectAnswers: [
        "A syntax for functions that automatically bind 'this' to the window object",
        "Functions that can't return values",
        "A type of function that doesn't support asynchronous operations",
      ],
      resources: "https://www.geeksforgeeks.org/arrow-functions-in-javascript/",
    },
    {
      question:
        "What is the 'prototype' property in JavaScript and how is it used?",
      studyGuideInformation:
        "The prototype property is used primarily for inheritance in JavaScript. It allows you to add properties and methods to an object's prototype, which are then accessible by all instances of that object. It is used to share properties and methods across multiple objects.",
      correctAnswer:
        "A property used for inheritance, allowing you to share properties and methods across multiple objects.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/prototype-in-javascript/",
    },
    {
      question:
        "What is the 'async/await' syntax in JavaScript and how does it work?",
      studyGuideInformation:
        "The async/await syntax is a feature introduced in ES2017 that allows you to write asynchronous code that looks synchronous. The 'async' keyword is used to define an asynchronous function, and the 'await' keyword is used to pause the execution of the function until a promise is resolved.",
      correctAnswer:
        "A feature for writing asynchronous code that looks synchronous, using 'async' and 'await' keywords.",
      incorrectAnswers: [
        "A method for handling errors in asynchronous operations",
        "A way to execute multiple asynchronous functions in parallel",
        "A syntax for defining the order of asynchronous operations",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-async-await/",
    },
    {
      question: "What is the 'fetch' API in JavaScript and how is it used?",
      studyGuideInformation:
        "The fetch API is a modern interface for fetching resources across the network. It is based on promises and provides a more powerful and flexible feature set than the older XMLHttpRequest object. It is commonly used to make HTTP requests in JavaScript.",
      correctAnswer:
        "A modern interface for fetching resources across the network, based on promises.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-fetch-api/",
    },
    {
      question: "What is the 'Map' object in JavaScript and how is it used?",
      studyGuideInformation:
        "The Map object is a collection of key-value pairs where both the keys and values can be of any type. It provides a way to store and retrieve data based on keys, and is often used for tasks that require frequent data lookups.",
      correctAnswer:
        "A collection of key-value pairs used for storing and retrieving data based on keys.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-map/",
    },
    {
      question: "What is the 'Set' object in JavaScript and how is it used?",
      studyGuideInformation:
        "The Set object is a collection of unique values where each value may occur only once. It provides a way to store and retrieve distinct values, and is often used for tasks that require maintaining a list of unique items.",
      correctAnswer:
        "A collection of unique values used for storing and retrieving distinct values.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-set/",
    },
    {
      question: "What is the 'WeakMap' object in JavaScript and how is it used?",
      studyGuideInformation:
        "The WeakMap object is a collection of key-value pairs where the keys are weakly referenced. This means that if the key is no longer reachable, the entry in the WeakMap will be garbage collected. It is often used for associating metadata with objects without interfering with garbage collection.",
      correctAnswer:
        "A collection of key-value pairs where the keys are weakly referenced, often used for associating metadata with objects.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-weakmap/",
    },
    {
      question: "What is the 'WeakSet' object in JavaScript and how is it used?",
      studyGuideInformation:
        "The WeakSet object is a collection of objects where each object may occur only once. It provides a way to store and retrieve distinct objects, and is often used for tasks that require maintaining a list of unique items without interfering with garbage collection.",
      correctAnswer:
        "A collection of objects used for storing and retrieving distinct objects without interfering with garbage collection.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-weakset/",
    },
    {
      question: "What is the 'Proxy' object in JavaScript and how is it used?",
      studyGuideInformation:
        "The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, and more. It allows you to intercept and customize the behavior of an object, providing a powerful way to implement meta-programming features.",
      correctAnswer:
        "An object used to define custom behavior for fundamental operations on another object.",
      incorrectAnswers: [
        "A method for creating new objects from existing ones",
        "A feature for defining private members in an object",
        "A way to access the internal state of an object",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-proxy/",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript functions?",
      studyGuideInformation:
        "The 'this' keyword in JavaScript functions refers to the object that the function is a property of. The value of 'this' is determined by the invocation context of the function and may vary depending on how the function is called.",
      correctAnswer:
        "The object that the function is a property of, determined by the function's invocation context.",
      incorrectAnswers: [
        "Always refers to the global object",
        "Refers to the function itself",
        "The DOM element that triggered the event",
      ],
      resources: "https://www.geeksforgeeks.org/this-keyword-in-javascript/",
    },
    {
      question:
        "How do you ensure a function runs after the completion of an asynchronous operation in JavaScript?",
      studyGuideInformation:
        "To ensure a function runs after the completion of an asynchronous operation in JavaScript, you can use callbacks, promises followed by '.then()' method, or async/await syntax in modern JavaScript.",
      correctAnswer:
        "Use callbacks, promises with '.then()', or async/await syntax.",
      incorrectAnswers: [
        "Using a 'setTimeout' with a delay",
        "Call the function before the asynchronous operation",
        "Use a 'for' loop to check the operation's completion status",
      ],
      resources:
        "https://www.geeksforgeeks.org/javascript-callbacks-promises-and-async-await/",
    },
    {
      question: "What is 'JSON' and how is it used in JavaScript?",
      studyGuideInformation:
        "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is used in JavaScript to represent data as structured text and to exchange data between a browser and a server.",
      correctAnswer:
        "A lightweight data-interchange format used to represent structured data and exchange data between browser and server.",
      incorrectAnswers: [
        "A type of JavaScript object",
        "A method for storing JavaScript functions",
        "A library for data validation in JavaScript",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-json/",
    },
    {
      question: "Explain the concept of 'higher-order functions' in JavaScript.",
      studyGuideInformation:
        "Higher-order functions are functions that can take other functions as arguments or return them as results. This concept is a cornerstone of functional programming in JavaScript, enabling powerful techniques like composition, currying, and decorators.",
      correctAnswer:
        "Functions that can take other functions as arguments or return them, fundamental in functional programming.",
      incorrectAnswers: [
        "Functions that are executed in a specific order",
        "Functions that can only be called within other functions",
        "Built-in JavaScript functions that handle asynchronous operations",
      ],
      resources:
        "https://www.geeksforgeeks.org/higher-order-functions-javascript/",
    },
    {
      question:
        "What are 'service workers' and how are they used in web applications?",
      studyGuideInformation:
        "Service workers are a type of web worker that act as a proxy between a web application and the network. They are used to enable offline experiences, intercept network requests, and cache resources, thereby improving performance and reliability of web applications.",
      correctAnswer:
        "Scripts that act as a proxy between web applications and the network, used for caching resources and enabling offline experiences.",
      incorrectAnswers: [
        "Background scripts for data processing",
        "Libraries for building user interfaces",
        "Server-side scripts that handle client requests",
      ],
      resources: "https://www.geeksforgeeks.org/service-workers-in-javascript/",
    },
    {
      question: "what is the proper syntax of an arrow function in JavaScript?",
      studyGuideInformation: "Arrow functions are a more concise way to write function expressions in JavaScript. They are written using the arrow (=>) syntax, and can have either a single or multiple parameters, and a single or multiple expressions in the function body.",
      correctAnswer: "(param1, param2) => { // function body }",
      incorrectAnswers: [
        "(param1, param2) { // function body }",
        "function(param1, param2) => { // function body }",
        "(param1, param2) => // function body",
      ],
      resources: "https://www.geeksforgeeks.org/arrow-functions-in-javascript/",
    },
    {
      question: "what is a functional loop in JavaScript?",
      studyGuideInformation: "A functional loop is a loop that is written using a functional programming approach, often using higher-order functions like 'map', 'filter', 'reduce', and 'forEach' to perform iterations over arrays or other collections.",
      correctAnswer: "A loop written using higher-order functions like 'map', 'filter', 'reduce', and 'forEach'.",
      incorrectAnswers: [
        "A loop that uses the 'function' keyword to define the iteration logic",
        "A loop that automatically handles asynchronous operations",
        "A loop that is executed in parallel with other code",
      ],
      resources: "https://www.geeksforgeeks.org/loops-in-javascript/",
    },
    {
      question: "what is a template literal in JavaScript?",
      studyGuideInformation: "A template literal is a string literal that allows for embedded expressions and multi-line strings. It is enclosed by backticks (` `) instead of single or double quotes, and can contain placeholders for variables or expressions.",
      correctAnswer: "A string literal that allows for embedded expressions and multi-line strings, enclosed by backticks.",
      incorrectAnswers: [
        "A string that is automatically updated based on a template",
        "A type of JavaScript function",
        "A syntax for defining HTML templates",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-template-literals/",
    },
    {
      question: "what is a ternary operator in JavaScript?",
      studyGuideInformation: "The ternary operator is a conditional operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is true, and a colon (:) followed by an expression to execute if the condition is false.",
      correctAnswer: "A conditional operator that takes three operands: condition ? expr1 : expr2",
      incorrectAnswers: [
        "A method for concatenating three strings together",
        "A type of JavaScript function",
        "A syntax for defining HTML templates",
      ],
      resources: "https://www.geeksforgeeks.org/javascript-ternary-operator/",
    },
      {
          question: "what is a for of loop in JavaScript?",
          studyGuideInformation: "The for...of loop is used to iterate over the values of an iterable object, such as an array, string, or other collection. It provides a more concise and readable syntax for iterating over elements compared to traditional for loops.",
          correctAnswer: "A loop used to iterate over the values of an iterable object, providing a more concise syntax.",
          incorrectAnswers: [
              "A loop that only iterates over the keys of an object",
              "A loop that is executed in parallel with other code",
              "A loop that automatically handles asynchronous operations",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-for-of/",
      },
      {
          question: "what is a rest operator in JavaScript?",
          studyGuideInformation: "The rest operator (...) is used to represent an indefinite number of arguments as an array. It allows you to pass a variable number of arguments to a function, and is often used in conjunction with the spread operator to manipulate arrays.",
          correctAnswer: "An operator used to represent an indefinite number of arguments as an array.",
          incorrectAnswers: [
              "An operator that removes the last element from an array",
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-rest-operator/",
      },
      {
          question: "what is a spread operator in JavaScript?",
          studyGuideInformation: "The spread operator (...) is used to expand an iterable (e.g., an array) into individual elements. It is commonly used to create copies of arrays, merge arrays, and pass multiple arguments to functions.",
          correctAnswer: "An operator used to expand an iterable into individual elements.",
          incorrectAnswers: [
              "An operator that concatenates two arrays",
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-spread-operator/",
      },
      {
          question: "How can a rest operator store multiple arguments in a single variable?",
          studyGuideInformation: "The rest operator (...) is used to represent an indefinite number of arguments as an array. When used as a function parameter, it collects all remaining arguments into a single array variable.",
          correctAnswer: "By using the rest operator (...) as a function parameter.",
          incorrectAnswers: [
              "By using the spread operator (...) as a function parameter.",
              "By using the 'arguments' object provided by JavaScript.",
              "By manually concatenating the arguments into a single string.",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-rest-operator/",
      },
      {
          question: "what is object destructuring in JavaScript?",
          studyGuideInformation: "Object destructuring is a JavaScript expression that makes it possible to unpack values from objects into distinct variables. It provides a more concise and readable syntax for extracting properties from objects.",
          correctAnswer: "An expression that unpacks values from objects into distinct variables.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-object-destructuring/",
      },
      {
          question: "What is a syntax example of a constructor function in JavaScript?",
          studyGuideInformation: "A constructor function in JavaScript is used to create and initialize objects. It is defined using the 'function' keyword and is typically named with an initial capital letter to distinguish it from regular functions.",
          correctAnswer: "function Car(make, model, year) { this.make = make; this.model = model; this.year = year; }",
          incorrectAnswers: [
              "function car{make, model, year} { this.make = make; this.model = model; this.year = year; }",
              "function createCar[make, model, year] { this.make = make; this.model = model; this.year = year; }",
              "function newCar<make, model, year> { this.make = make; this.model = model; this.year = year; }",
          ],
          resources: "https://www.geeksforgeeks.org/constructor-functions-in-javascript/",
      },
      {
          question: "what is a .prototype property in JavaScript?",
          studyGuideInformation: "The .prototype property in JavaScript is used to add properties and methods to a constructor function. It allows you to define shared properties and methods that are accessible by all instances of the constructor function.",
          correctAnswer: "A property used to add properties and methods to a constructor function.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
          resources: "https://www.geeksforgeeks.org/prototype-in-javascript/",
      },
      {
          question: "what is a 'class' in JavaScript?",
          studyGuideInformation: "A class in JavaScript is a type of function that defines a blueprint for creating objects. It provides a more structured and organized way to create objects and define their properties and methods.",
          correctAnswer: "A type of function that defines a blueprint for creating objects.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-classes/",
      },
      {
          question: "what is inheritance in JavaScript?",
          studyGuideInformation: "Inheritance in JavaScript is the process by which one class can inherit properties and methods from another class. It allows you to create a hierarchy of classes and reuse code across different classes.",
          correctAnswer: "The process by which one class can inherit properties and methods from another class.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
      },
      {
          question: "What is polymorphism in JavaScript?",
          studyGuideInformation: "Polymorphism in JavaScript refers to the ability of different objects to respond to the same method or property in different ways. It allows you to use a single interface to represent different types of objects.",
          correctAnswer: "The ability of different objects to respond to the same method or property in different ways.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
          resources: "https://www.geeksforgeeks.org/polymorphism-in-javascript/",
      },
      {
          question: "What is the super() keyword used for in JavaScript?",
          studyGuideInformation: "The super() keyword is used to call the constructor of a parent class from within a child class. It is used to access and execute the parent class's constructor function.",
          correctAnswer: "To call the constructor of a parent class from within a child class.",
          incorrectAnswers: [
              "To access the internal state of an object",
              "To define private members in an object",
              "To create new objects from existing ones",
          ],
          resources: "https://www.geeksforgeeks.org/super-keyword-in-javascript/",
      },
      {
          question: "what is a uuid in JavaScript?",
          studyGuideInformation: "A UUID (Universally Unique Identifier) is a 128-bit number used to uniquely identify information. It is often used to generate unique identifiers for objects, elements, or entities in JavaScript applications.",
          correctAnswer: "A 128-bit number used to uniquely identify information.",
          incorrectAnswers: [
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
              "A way to access the internal state of an object",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-uuid/",
      },
      {
          question: "what is a static method in JavaScript?",
          studyGuideInformation: "A static method in JavaScript is a method that is associated with the class itself, rather than with instances of the class. It is called on the class itself, rather than on an instance of the class.",
          correctAnswer: "A method associated with the class itself, rather than with instances of the class.",
          incorrectAnswers: [
              "A method that automatically handles asynchronous operations",
              "A method for creating new objects from existing ones",
              "A feature for defining private members in an object",
          ],
          resources: "https://www.geeksforgeeks.org/static-methods-in-javascript/",
      },
      {
          question: "what is the .trim() method used for in JavaScript?",
          studyGuideInformation: "The .trim() method in JavaScript is used to remove whitespace from both ends of a string. It is often used to clean up user input or data retrieved from external sources.",
          correctAnswer: "To remove whitespace from both ends of a string.",
          incorrectAnswers: [
              "To convert a string to uppercase",
              "To convert a string to lowercase",
              "To split a string into an array of substrings",
          ],
          resources: "https://www.geeksforgeeks.org/javascript-string-trim-method/",
      },
      
  
  ];

 const nodeQuestions = [
{
question: "What is Node.js?",
studyGuideInformation: "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
correctAnswer: "JavaScript runtime environment",
incorrectAnswers: [
"A JavaScript framework for frontend development",
"A library for creating mobile applications",
"A protocol for real-time web communication"
],
resources: "https://nodejs.org/en/about/"
},
{
question: "What module system does Node.js use to import packages?",
studyGuideInformation: "Node.js uses the CommonJS module system for importing packages. Modules are encapsulated pieces of code that can be exported from one file and imported for use in another file using the require() function.",
correctAnswer: "CommonJS",
incorrectAnswers: [
"AMD",
"ES6 Modules",
"SystemJS"
],
resources: "https://nodejs.org/api/modules.html"
},
{
question: "What tool is used to manage Node.js packages?",
studyGuideInformation: "npm (Node Package Manager) is the world's largest software registry and is used to manage Node.js packages. Developers use npm to share and borrow packages, and also manage dependencies in their projects.",
correctAnswer: "npm",
incorrectAnswers: [
"Yarn",
"Bower",
"Webpack"
],
resources: "https://www.npmjs.com/"
},
{
question: "What is an event loop in Node.js?",
studyGuideInformation: "The event loop is a programming construct that waits for and dispatches events or messages in a program. In Node.js, the event loop allows JavaScript code to perform non-blocking operations by offloading operations to the system kernel whenever possible.",
correctAnswer: "Allows non-blocking operations",
incorrectAnswers: [
"A loop that handles event listeners in the DOM",
"A debugging tool for Node.js applications",
"A way to create asynchronous HTTP requests"
],
resources: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"
},
{
question: "How do you start a Node.js server?",
studyGuideInformation: "To start a Node.js server, you typically create a file (for example, server.js) that uses the HTTP module to create a server that listens on a specific port. You can start the server using the Node.js runtime by running a command like 'node server.js' in your terminal.",
correctAnswer: "Using the HTTP module and running 'node server.js'",
incorrectAnswers: [
"By compiling JavaScript to machine code",
"Using the 'npm start' command without any additional setup",
"Through a web interface provided by Node.js"
],
resources: "https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/"
},
{
question: "what is the purpose of the 'fs' module in Node.js?",
studyGuideInformation: "The 'fs' module in Node.js is used to interact with the file system on your computer. It provides functions for reading, writing, and manipulating files and directories.",
correctAnswer: "Interacting with the file system",
incorrectAnswers: [
"Creating and managing web servers",
"Encrypting and decrypting data",
"Handling HTTP requests and responses"
],
resources: "https://nodejs.org/api/fs.html"
},
{
question: "What is the purpose of the 'path' module in Node.js?",
studyGuideInformation: "The 'path' module in Node.js provides utilities for working with file and directory paths. It can be used to resolve and normalize paths, join paths together, and extract specific parts of a path.",
correctAnswer: "Working with file and directory paths",
incorrectAnswers: [
"Creating and managing web servers",
"Interacting with the file system",
"Handling HTTP requests and responses"
],
resources: "https://nodejs.org/api/path.html"
},
{
question: "what is the use of process.argv in Node.js?",
studyGuideInformation: "The process.argv property in Node.js is an array containing the command-line arguments passed when the Node.js process was launched. It can be used to access and parse command-line arguments in a Node.js application.",
correctAnswer: "Accessing command-line arguments",
incorrectAnswers: [
"Reading and writing files",
"Handling HTTP requests and responses",
"Creating and managing web servers"
],
resources: "https://nodejs.org/docs/latest/api/process.html#process_process_argv"
},
{
question: "How can i use process.argv to assign a value to a variable?",
studyGuideInformation: "You can use process.argv to access command-line arguments and assign them to variables by using array indexing. For example, if you want to assign the first command-line argument to a variable named 'input', you can use 'const input = process.argv[2];'.",
correctAnswer: "By using array indexing",
incorrectAnswers: [
"By using the process.argv function",
"By using the require() function",
"By using the process.env object"
],
resources: "https://nodejs.org/docs/latest/api/process.html#process_process_argv"
},
{
question: "What is the purpose of the 'http' module in Node.js?",
studyGuideInformation: "The 'http' module in Node.js provides functionality for creating and interacting with HTTP servers and clients. It allows you to handle incoming HTTP requests, send HTTP responses, and make HTTP requests to other servers.",
correctAnswer: "Creating and interacting with HTTP servers and clients",
incorrectAnswers: [
"Interacting with the file system",
"Working with file and directory paths",
"Accessing command-line arguments"
],
resources: "https://nodejs.org/api/http.html"
},
{
question: "What is the purpose of the 'express' module in Node.js?",
studyGuideInformation: "The 'express' module in Node.js is a web application framework that provides a set of features for building web applications and APIs. It simplifies the process of creating routes, handling requests and responses, and managing middleware.",
correctAnswer: "Building web applications and APIs",
incorrectAnswers: [
"Interacting with the file system",
"Creating and interacting with HTTP servers and clients",
"Accessing command-line arguments"
],
resources: "https://expressjs.com/"
},
{
question: "What is middleware in the context of Node.js and Express?",
studyGuideInformation: "Middleware in Node.js and Express refers to functions that have access to the request and response objects in an HTTP request-response cycle. Middleware functions can perform tasks such as parsing request bodies, authenticating users, and handling errors.",
correctAnswer: "Functions that have access to request and response objects",
incorrectAnswers: [
"A type of database used in web applications",
"A way to create and manage web servers",
"A method for handling HTTP requests and responses"
],
resources: "https://expressjs.com/en/guide/using-middleware.html"
},
{
question: "What is the purpose of the 'body-parser' middleware in Express?",
studyGuideInformation: "The 'body-parser' middleware in Express is used to parse the body of incoming HTTP requests. It can parse different types of request bodies, such as JSON, URL-encoded, and raw data, and make the parsed data available on the request object.",
correctAnswer: "Parsing the body of incoming HTTP requests",
incorrectAnswers: [
"Creating and managing web servers",
"Handling HTTP requests and responses",
"Interacting with the file system"
],
resources: "https://www.npmjs.com/package/body-parser"
},
{
question: "What is the purpose of the 'mongoose' module in Node.js?",
studyGuideInformation: "The 'mongoose' module in Node.js is an Object Data Modeling (ODM) library for MongoDB. It provides a way to model application data, define schemas, and interact with a MongoDB database using JavaScript objects.",
correctAnswer: "Object Data Modeling for MongoDB",
incorrectAnswers: [
"Creating and managing web servers",
"Handling HTTP requests and responses",
"Interacting with the file system"
],
resources: "https://mongoosejs.com/"
},
{
question: "how can the fs module be used to read and write to a file in Node.js?",
studyGuideInformation: "The fs module in Node.js provides functions for reading and writing to files. You can use the fs.readFile() function to read the contents of a file, and the fs.writeFile() function to write data to a file.",
correctAnswer: "Using fs.readFile() and fs.writeFile()",
incorrectAnswers: [
"Using the fs.read() and fs.write() functions",
"Using the fs.open() and fs.close() functions",
"Using the fs.createReadStream() and fs.createWriteStream() functions"
],
resources: "https://nodejs.org/api/fs.html"
},
{
question: "What is the difference between writeFile and appendFile in the fs module?",
studyGuideInformation: "The fs.writeFile() function is used to write data to a file, replacing the file if it already exists. The fs.appendFile() function is used to append data to a file, creating the file if it does not exist.",
correctAnswer: "writeFile replaces the file, appendFile appends to the file",
incorrectAnswers: [
"writeFile creates the file, appendFile replaces the file",
"writeFile and appendFile are used for different file types",
"writeFile and appendFile are interchangeable"
],
resources: "https://nodejs.org/api/fs.html"
},
{
question: "How is the module.exports object used in Node.js?",
studyGuideInformation: "The module.exports object in Node.js is used to define what a module exports. It can be used to export functions, objects, or other values from a module, making them available for use in other files.",
correctAnswer: "Defining what a module exports",
incorrectAnswers: [
"Importing modules from other files",
"Creating and managing web servers",
"Handling HTTP requests and responses"
],
resources: "https://nodejs.org/api/modules.html"
},
{
question: "How can you access other js files across a directory?",
studyGuideInformation: "You can access other JavaScript files across a directory using the require() function in Node.js. When you require a file, Node.js will look for the file in the specified directory and import its contents.",
correctAnswer: "Using the require() function",
incorrectAnswers: [
"Using the import keyword",
"Using the include() function",
"Using the load() function"
],
resources: "https://nodejs.org/api/modules.html"
},
{
question: "what is the difference between require and import in Node.js?",
studyGuideInformation: "The require() function is used to import modules in Node.js, while the import keyword is used to import modules in JavaScript. require() is a CommonJS feature, while import is an ES6 feature.",
correctAnswer: "require() is used in Node.js, import is used in JavaScript",
incorrectAnswers: [
    "require() is used for frontend, import is used for backend",
    "require() is used for ES6, import is used for CommonJS",
    "require() is used for server-side, import is used for client-side"
],
resources: "https://nodejs.org/api/modules.html"
},
{
question: "What is the switch statement in JavaScript?",
studyGuideInformation: "The switch statement is used to perform different actions based on different conditions. It evaluates an expression and compares it with multiple cases, executing the code block for the first matching case.",
correctAnswer: "A statement for performing different actions based on different conditions",
incorrectAnswers: [
    "A statement for creating loops",
    "A statement for defining functions",
    "A statement for handling errors"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
},
{
question: "What keywords are used to change the switch statement or to return a value if no switch is operable?",
studyGuideInformation: "The break keyword is used to change the switch statement, the case keyword identifies different cases, and the default keyword is used to return a value if no switch is operable.",
correctAnswer: "break, case, and default",
incorrectAnswers: [
    "stop, condition, and else",
    "end, if, and return",
    "exit, when, and else"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch"
},
{
question: "what is a package.json file in Node.js?",
studyGuideInformation: "The package.json file in Node.js is a metadata file that contains information about a Node.js project, such as its name, version, dependencies, and scripts. It is used to manage the project's dependencies and define various project settings.",
correctAnswer: "A metadata file for a Node.js project",
incorrectAnswers: [
    "A configuration file for the Node.js runtime",
    "A file containing JavaScript code",
    "A database file for storing project data"
],
resources: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json"
},
{
question: "What is the purpose of the 'scripts' field in the package.json file?",
studyGuideInformation: "The 'scripts' field in the package.json file is used to define custom scripts that can be run using the npm run command. These scripts can be used to perform various tasks, such as starting a server, running tests, or building the project.",
correctAnswer: "Defining custom scripts for npm run",
incorrectAnswers: [
    "Defining dependencies for the project",
    "Defining project metadata",
    "Defining project settings"
],
resources: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json"
},
{
question: "What is the purpose of the 'dependencies' field in the package.json file?",
studyGuideInformation: "The 'dependencies' field in the package.json file is used to specify the dependencies required by a Node.js project. These dependencies are installed using the npm install command and are necessary for the project to run properly.",
correctAnswer: "Specifying required dependencies for the project",
incorrectAnswers: [
    "Specifying project metadata",
    "Specifying project settings",
    "Specifying custom scripts for npm run"
],
resources: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json"
},
{
question: "what is the difference between dependencies and devDependencies in the package.json file?",
studyGuideInformation: "The 'dependencies' field is used to specify the dependencies required by a Node.js project for production use, while the 'devDependencies' field is used to specify dependencies required for development and testing purposes.",
correctAnswer: "dependencies are for production, devDependencies are for development",
incorrectAnswers: [
    "dependencies are for development, devDependencies are for production",
    "dependencies are for frontend, devDependencies are for backend",
    "dependencies are for testing, devDependencies are for production"
],
resources: "https://docs.npmjs.com/cli/v7/configuring-npm/package-json"
},
{
question: "What does npm stand for in Node.js?",
studyGuideInformation: "npm stands for Node Package Manager. It is a package manager for JavaScript that is used to install, manage, and share packages and dependencies for Node.js projects.",
correctAnswer: "Node Package Manager",
incorrectAnswers: [
    "Node Project Manager",
    "Node Package Module",
    "Node Project Module"
],
resources: "https://www.npmjs.com/"
},
{
question: "what is the difference between npm i and yarn add in Node.js?",
studyGuideInformation: "npm i and yarn add are both commands used to install packages and dependencies for a Node.js project. npm i is the shorthand for npm install, while yarn add is used with the yarn package manager.",
correctAnswer: "npm i is shorthand for npm install, yarn add is used with yarn package manager",
incorrectAnswers: [
    "npm i is used for development, yarn add is used for production",
    "npm i is used for production, yarn add is used for development",
    "npm i is used for frontend, yarn add is used for backend"
],
resources: "https://classic.yarnpkg.com/en/docs/cli/add/"
},
{
question: "what is the npm inquirer package used for in Node.js?",
studyGuideInformation: "The npm inquirer package is used to create interactive command-line interfaces in Node.js. It provides a set of functions for prompting users for input, validating responses, and handling user interactions in a terminal environment.",
correctAnswer: "Creating interactive command-line interfaces",
incorrectAnswers: [
    "Creating web applications",
    "Managing project dependencies",
    "Handling HTTP requests and responses"
],
resources: "https://www.npmjs.com/package/inquirer"
},
{
question: "How can you the inquirer package to prompt a user for input in Node.js?",
studyGuideInformation: "You can use the inquirer package to prompt a user for input by creating a list of questions using the inquirer.prompt() function. Each question can have a type, message, name, and other properties to customize the prompt and follows this syntax iquirer.prompt([{type: 'input', message:'what is your username', name:'username'}]).",
correctAnswer: "By creating a list of questions using inquirer.prompt()",
incorrectAnswers: [
    "By using the inquirer.input() function",
    "By using the inquirer.create() function",
    "By using the inquirer.ask() function"
],
},
{
question: "What is the purpose of the 'dotenv' package in Node.js?",
studyGuideInformation: "The 'dotenv' package in Node.js is used to load environment variables from a .env file into the process.env object. It allows you to define environment-specific configuration settings without hardcoding them in your code.",
correctAnswer: "Loading environment variables from a .env file",
incorrectAnswers: [
    "Creating web applications",
    "Managing project dependencies",
    "Handling HTTP requests and responses"
],
resources: "https://www.npmjs.com/package/dotenv"
},
{
question: "What is jest in Node.js?",
studyGuideInformation: "Jest is a JavaScript testing framework that is used to test JavaScript code, including Node.js applications. It provides a set of features for writing and running tests, including assertions, mocking, and code coverage.",
correctAnswer: "A JavaScript testing framework",
incorrectAnswers: [
    "A JavaScript package manager",
    "A JavaScript web framework",
    "A JavaScript build tool"
],
resources: "https://jestjs.io/"
},
{
question: "What is a promise chain in JavaScript?",
studyGuideInformation: "A promise chain in JavaScript is a series of asynchronous operations that are executed in sequence, with each operation depending on the result of the previous one. It is used to handle asynchronous code and avoid callback hell.",
correctAnswer: "A series of asynchronous operations executed in sequence",
incorrectAnswers: [
    "A series of synchronous operations executed in sequence",
    "A series of asynchronous operations executed in parallel",
    "A series of synchronous operations executed in parallel"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
},
{
question: "what is a promise catch block in JavaScript?",
studyGuideInformation: "A promise catch block in JavaScript is used to handle errors that occur during the execution of a promise. It is used to catch and handle any errors that occur in the promise chain.",
correctAnswer: "A block used to handle errors in a promise chain",
incorrectAnswers: [
    "A block used to handle successful promises",
    "A block used to handle rejected promises",
    "A block used to handle resolved promises"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch"
},
{
question: "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
studyGuideInformation: "The 'async' and 'await' keywords in JavaScript are used to handle asynchronous code in a synchronous manner. The 'async' keyword is used to define an asynchronous function, while the 'await' keyword is used to wait for a promise to resolve before continuing execution.",
correctAnswer: "Handling asynchronous code in a synchronous manner",
incorrectAnswers: [
    "Handling synchronous code in an asynchronous manner",
    "Handling asynchronous code in an asynchronous manner",
    "Handling synchronous code in a synchronous manner"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"
},
{
question: "What is the new Promise() syntax in JavaScript?",
studyGuideInformation: "The new Promise() syntax in JavaScript is used to create a new promise object. It takes a function as an argument, with resolve and reject parameters, and is used to handle asynchronous operations.",
correctAnswer: "Creating a new promise object",
incorrectAnswers: [
    "Creating a new asynchronous function",
    "Creating a new asynchronous operation",
    "Creating a new asynchronous promise"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
},
{
question: "How are the req, res, next parameters used in an Express middleware function?",
studyGuideInformation: "The req, res, and next parameters are used in an Express middleware function to handle incoming HTTP requests and send HTTP responses. The req parameter contains information about the request, the res parameter is used to send the response, and the next parameter is used to pass control to the next middleware function.",
correctAnswer: "To handle incoming HTTP requests and send HTTP responses",
incorrectAnswers: [
    "To define middleware functions",
    "To manage project dependencies",
    "To create and manage web servers"
],
resources: "https://expressjs.com/en/guide/using-middleware.html"
},
{
question: "What is the purpose of the 'cors' middleware in Express?",
studyGuideInformation: "The 'cors' middleware in Express is used to enable Cross-Origin Resource Sharing (CORS) in an Express application. It allows you to define which origins are allowed to access your server's resources, and handles CORS preflight requests.",
correctAnswer: "Enabling Cross-Origin Resource Sharing",
incorrectAnswers: [
    "Enabling secure HTTP connections",
    "Enabling HTTP request and response handling",
    "Enabling user authentication and authorization"
],
resources: "https://www.npmjs.com/package/cors"
},
{
question: "What are the benefits of a server.js file in Node.js?",
studyGuideInformation: "A server.js file in Node.js is used to define and start a server for a Node.js application. It allows you to configure routes, handle HTTP requests, and listen for incoming connections.",
correctAnswer: "Defining and starting a server for a Node.js application",
incorrectAnswers: [
    "Defining and starting a database for a Node.js application",
    "Defining and starting a client for a Node.js application",
    "Defining and starting a user interface for a Node.js application"
],
resources: "https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/"
},
{
question: "how can express be used to create a basic server in Node.js?",
studyGuideInformation: "Express can be used to create a basic server in Node.js by defining routes and handling HTTP requests. You can use the app.get() function to define routes and the app.listen() function to start the server.",
correctAnswer: "By defining routes and handling HTTP requests",
incorrectAnswers: [
    "By defining middleware functions",
    "By managing project dependencies",
    "By creating and managing web servers"
],
resources: "https://expressjs.com/en/starter/hello-world.html"
},
{
question: "What does the app = express() syntax do in an Express application?",
studyGuideInformation: "The app = express() syntax in an Express application is used to create an instance of the Express application. It initializes the app object, which is used to define routes, handle requests, and configure middleware.",
correctAnswer: "Creating an instance of the Express application",
incorrectAnswers: [
    "Creating a new route in the Express application",
    "Creating a new middleware function in the Express application",
    "Creating a new HTTP request in the Express application"
],
resources: "https://expressjs.com/en/starter/hello-world.html"
},
{
question: "what is port used for in Node.js?",
studyGuideInformation: "The port in Node.js is used to specify the port number on which a server will listen for incoming connections. It is used to route incoming requests to the correct server process.",
correctAnswer: "Specifying the port number for incoming connections",
incorrectAnswers: [
    "Specifying the protocol for incoming connections",
    "Specifying the domain for incoming connections",
    "Specifying the path for incoming connections"
],
resources: "https://nodejs.org/api/net.html#net_server_listen"
},
{
question: "How can express be used to create a route in Node.js?",
studyGuideInformation: "Express can be used to create a route in Node.js by using the app.get(), app.post(), app.put(), app.delete(), and other HTTP methods to define routes for handling different types of requests.",
correctAnswer: "By using app.get(), app.post(), app.put(), app.delete(), and other HTTP methods",
incorrectAnswers: [
    "By using app.route()",
    "By using app.use()",
    "By using app.listen()"
],
resources: "https://expressjs.com/en/guide/routing.html"
},
{
question: "what will app.use(express.static('public')) do in an Express application?",
studyGuideInformation: "The app.use(express.static('public')) syntax in an Express application is used to serve static files from the 'public' directory. It allows you to serve HTML, CSS, JavaScript, images, and other static assets to clients.",
correctAnswer: "Serving static files from the 'public' directory",
incorrectAnswers: [
    "Serving dynamic files from the 'public' directory",
    "Serving encrypted files from the 'public' directory",
    "Serving compressed files from the 'public' directory"
],
resources: "https://expressjs.com/en/starter/static-files.html"
},
{
question: 'what will app.use(express.json()) do in an Express application?',
studyGuideInformation: "The app.use(express.json()) syntax in an Express application is used to parse incoming JSON data from HTTP requests. It allows you to access the JSON data in your request handlers using the req.body property.",
correctAnswer: "Parsing incoming JSON data from HTTP requests",
incorrectAnswers: [
    "Parsing incoming HTML data from HTTP requests",
    "Parsing incoming XML data from HTTP requests",
    "Parsing incoming CSV data from HTTP requests"
],
resources: "https://expressjs.com/en/api.html#express.json"
},
{ 
question: "What does the syntax res.sendFile(path.join(__dirname, 'public/index.html')) do in an Express application?",
studyGuideInformation: " The res.sendFile(path.join(__dirname, 'public/index.html')) syntax in an Express application is used to send a file as the response to an HTTP request. It allows you to serve an HTML file to clients when they access a specific route.",
correctAnswer: "Sending a file as the response to an HTTP request",
incorrectAnswers: [
    "Sending a JSON object as the response to an HTTP request",
    "Sending a string as the response to an HTTP request",
    "Sending a number as the response to an HTTP request"
],
resources: "https://expressjs.com/en/api.html#res.sendFile"
},
{
question: "what does the app.listen(3000, () => console.log('Server running on port 3000')) syntax do in an Express application?",
studyGuideInformation: "The app.listen(3000, () => console.log('Server running on port 3000')) syntax in an Express application is used to start the server and listen for incoming connections on port 3000. It logs a message to the console when the server is running.",
correctAnswer: "Starting the server and listening for incoming connections on port 3000",
incorrectAnswers: [
    "Starting the server and listening for incoming connections on port 3000",
    "Starting the server and logging a message to the console",
    "Logging a message to the console when the server is running"
],
resources: "https://expressjs.com/en/starter/hello-world.html"
},
{
question: "what are request parameters in an Express application?",
studyGuideInformation: "Request parameters in an Express application are used to extract data from the URL of an incoming HTTP request. They are defined in the route path and can be accessed using the req.params object in the request handler.",
correctAnswer: "Data extracted from the URL of an incoming HTTP request",
incorrectAnswers: [
    "Data sent in the body of an incoming HTTP request",
    "Data sent in the headers of an incoming HTTP request",
    "Data sent in the query string of an incoming HTTP request"
],
resources: "https://expressjs.com/en/guide/routing.html"   
},
{
question: "What is a statc file in an Express application?",
studyGuideInformation: "A static file in an Express application is a file that is served directly to clients without any processing by the server. Examples of static files include HTML, CSS, JavaScript, images, and other assets.",
correctAnswer: "A file served directly to clients without processing by the server",
incorrectAnswers: [
    "A file served with processing by the server",
    "A file served with encryption by the server",
    "A file served with compression by the server"
],
resources: "https://expressjs.com/en/starter/static-files.html"
},
{
question: "how can the req.body be used to create a destructured object in an Express application?",
studyGuideInformation: "The req.body object in an Express application contains the parsed data from the body of an incoming HTTP request. You can use object destructuring to extract specific properties from the req.body object and assign them to variables.",
correctAnswer: "const { property1, property2 } = req.body",
incorrectAnswers: [
    "const { req.body } = object",
    "const { property1, property2 } = object",
    "const { req.body.property1, req.body.property2 } = object"
],
resources: "https://expressjs.com/en/api.html#req.body"
},
{
question: "What is the purpose of the 'bcrypt' package in Node.js?",
studyGuideInformation: "The 'bcrypt' package in Node.js is used to hash and compare passwords. It provides a way to securely store and validate user passwords in a Node.js application.",
correctAnswer: "Hashing and comparing passwords",
incorrectAnswers: [
    "Encrypting and decrypting data",
    "Creating and managing web servers",
    "Handling HTTP requests and responses"
],
resources: "https://www.npmjs.com/package/bcrypt"
},
{
question: "what does var variable = require('express').Router() do in an Express application?",
studyGuideInformation: "The var variable = require('express').Router() syntax in an Express application is used to create a new router object. It allows you to define routes and middleware for a specific subset of routes in your application.",
correctAnswer: "Creating a new router object",
incorrectAnswers: [
    "Creating a new route in the Express application",
    "Creating a new middleware function in the Express application",
    "Creating a new HTTP request in the Express application"
],
resources: "https://expressjs.com/en/guide/routing.html",
},
{
question: "What is modular routing in an Express application?",
studyGuideInformation: "Modular routing in an Express application is the practice of organizing routes and middleware into separate modules. It allows you to create reusable route handlers and middleware functions that can be used across different parts of your application.",
correctAnswer: "Organizing routes and middleware into separate modules",
incorrectAnswers: [
    "Organizing routes and middleware into a single module",
    "Organizing routes and middleware into separate applications",
    "Organizing routes and middleware into separate servers"
],
resources: "https://expressjs.com/en/guide/routing.html"
},
{
question: "Explain the reason for the index.js file in an express application that uses modular routing?",
studyGuideInformation: "The index.js file in an Express application that uses modular routing is used to define and export the router object for a specific subset of routes. It allows you to organize and manage routes and middleware in a separate module.",
correctAnswer: "Defining and exporting the router object",
incorrectAnswers: [
    "Defining and exporting the route handlers",
    "Defining and exporting the middleware functions",
    "Defining and exporting the HTTP requests"
],
resources: "https://expressjs.com/en/guide/routing.html"
},
{
question: "What does the syntax const middlewareFunction = require('./path') and router.use('/path', middlewareFunction) do in an Express application?",
studyGuideInformation: "The const middlewareFunction = require('./path') syntax in an Express application is used to import a middleware function from another module, and the router.use('/path', middlewareFunction) syntax is used to apply the middleware to a specific subset of routes.",
correctAnswer: "Importing and applying a middleware function to a specific subset of routes",
incorrectAnswers: [
    "Importing and applying a route handler to a specific subset of routes",
    "Importing and applying a route to a specific subset of routes",
    "Importing and applying a middleware to all routes"
],
resources: "https://expressjs.com/en/guide/routing.html"
},
{
question: "what is a helper function in an Express application?",
studyGuideInformation: "A helper function in an Express application is a function that is used to perform a specific task or provide a specific functionality. It is often used to encapsulate common operations and make them reusable across different parts of the application.",
correctAnswer: "A function used to perform a specific task or provide a specific functionality",
incorrectAnswers: [
    "A function used to define routes",
    "A function used to define middleware",
    "A function used to handle HTTP requests"
],
resources: "https://expressjs.com/en/guide/routing.html"
},
{
question: "What are the benefits of custom middleware in an Express application?",
studyGuideInformation: "Custom middleware in an Express application allows you to define and use custom functions to handle incoming HTTP requests. It provides a way to encapsulate common operations and make them reusable across different parts of the application.",
correctAnswer: "Encapsulating common operations and making them reusable",
incorrectAnswers: [
    "Defining and using custom routes",
    "Defining and using custom route handlers",
    "Defining and using custom HTTP requests"
],
resources: "https://expressjs.com/en/guide/using-middleware.html"
},
{
question: "how can a mysql database be connected to an Express application?",
studyGuideInformation: "A MySQL database can be connected to an Express application using the mysql package to create a connection to the database, and then using the connection to execute SQL queries and interact with the database.",
correctAnswer: "Using the mysql package to create a connection and execute SQL queries",
incorrectAnswers: [
    "Using the express package to create a connection and execute SQL queries",
    "Using the sequelize package to create a connection and execute SQL queries",
    "Using the mongodb package to create a connection and execute SQL queries"
],
resources: "https://www.npmjs.com/package/mysql"
},
{
question: "What does the mysql.createConnection() syntax do in a Node.js application?",
studyGuideInformation: "The mysql.createConnection() syntax in a Node.js application is used to create a new connection to a MySQL database. It allows you to specify the database host, user, password, and other connection options.",
correctAnswer: "Creating a new connection to a MySQL database",
incorrectAnswers: [
    "Creating a new connection to a MongoDB database",
    "Creating a new connection to a PostgreSQL database",
    "Creating a new connection to a SQLite database"
],
resources: "https://www.npmjs.com/package/mysql"
},
{
question:"what properties are used to configure a connection to a MySQL database in a Node.js application?",
studyGuideInformation: "The properties used to configure a connection to a MySQL database in a Node.js application include the host, user, password, database, port, and other connection options.",
correctAnswer: "host, user, password, database, port, and other connection options",
incorrectAnswers: [
    "host, application, password, database, and port",
    "host, user, password, purpose, and database",
    "host, user, and password, tablename, database"
],
resources: "https://www.npmjs.com/package/mysql"
},
{
question: "what does the db.query('SELECT * FROM table', (err, results) => {}) syntax do in a Node.js application?",
studyGuideInformation: "The db.query('SELECT * FROM table', (err, results) => {}) syntax in a Node.js application is used to execute an SQL query on a MySQL database. It allows you to retrieve data from the database and handle the results in a callback function.",
correctAnswer: "Executing an SQL query on a MySQL database",
incorrectAnswers: [
    "Executing an SQL query on a MongoDB database",
    "Executing an SQL query on a PostgreSQL database",
    "Executing an SQL query on a SQLite database"
],
resources: "https://www.npmjs.com/package/mysql"
},
{
question: "What does app.use(urlencoded({ extended: true })) do in an Express application?",
studyGuideInformation: "The app.use(urlencoded({ extended: true })) syntax in an Express application is used to parse incoming URL-encoded data from HTTP requests. It allows you to access the parsed data in your request handlers using the req.body property.",
correctAnswer: "Parsing incoming URL-encoded data from HTTP requests",
incorrectAnswers: [
    "Parsing incoming JSON data from HTTP requests",
    "Parsing incoming XML data from HTTP requests",
    "Parsing incoming CSV data from HTTP requests"
],
resources: "https://expressjs.com/en/api.html#express.urlencoded"
},
{
question: "what is the difference between npm run and npm start in a Node.js application?",
studyGuideInformation: "npm run is used to run custom scripts defined in the package.json file, while npm start is used to run the start script defined in the package.json file. The start script is a special script that is used to start the application.",
correctAnswer: "npm run is used for custom scripts, npm start is used for the start script",
incorrectAnswers: [
    "npm run is used for the start script, npm start is used for custom scripts",
    "npm run is used for development, npm start is used for production",
    "npm run is used for production, npm start is used for development"
],
resources: "https://docs.npmjs.com/cli/v7/commands/npm-run-script"
},
{
question: "How would a developer create a new instance of sequelize in a Node.js application?",
studyGuideInformation: "A developer would create a new instance of sequelize in a Node.js application by requiring the sequelize package and using the Sequelize constructor to create a new instance of the Sequelize class.",
correctAnswer: "By requiring the sequelize package and using the Sequelize constructor",
incorrectAnswers: [
    "By requiring the sequelize package and using the sequelize constructor",
    "By requiring the sequelize package and using the instance constructor",
    "By requiring the sequelize package and using the instance method"
],
resources: "https://sequelize.org/master/manual/getting-started.html"
},
{
question: "What is the purpose of the 'sequelize' package in a Node.js application?",
studyGuideInformation: "The 'sequelize' package in a Node.js application is an Object-Relational Mapping (ORM) library for JavaScript. It provides a way to interact with a database using JavaScript objects and models.",
correctAnswer: "An Object-Relational Mapping (ORM) library for JavaScript",
incorrectAnswers: [
    "A JavaScript testing framework",
    "A JavaScript web framework",
    "A JavaScript build tool"
],
resources: "https://sequelize.org/master/manual/getting-started.html"
},
{
question: "what will const sequelize = new Sequelize('database', 'username', 'password', { dialect: 'mysql' }) do in a Node.js application?",
studyGuideInformation: " The const sequelize = new Sequelize syntax in a Node.js application is used to create a new instance of the Sequelize class. It allows you to specify the database, username, password, and other connection options.", 
correctAnswer: "Creating a new instance of the Sequelize class",
incorrectAnswers: [
    "Creating a new instance of the sequelize class",
    "Creating a new instance of the database class",
    "Creating a new instance of the connection class"
],
resources: "https://sequelize.org/master/manual/getting-started.html"
},
{
question: "what is the purpose of the .gitignore file in a Node.js application?",
studyGuideInformation: "The .gitignore file in a Node.js application is used to specify files and directories that should be ignored by the Git version control system. It allows you to exclude certain files from being tracked by Git.",
correctAnswer: "Specifying files and directories to be ignored by Git",
incorrectAnswers: [
    "Specifying files and directories to be tracked by Git",
    "Specifying files and directories to be committed by Git",
    "Specifying files and directories to be pushed by Git"
],
resources: "https://git-scm.com/docs/gitignore"
},
{
question: "what is the purpose of the .env file in a Node.js application?",
studyGuideInformation: "The .env file in a Node.js application is used to store environment-specific configuration settings, such as API keys, database credentials, and other sensitive information. It allows you to define and manage environment variables for your application.",
correctAnswer: "Storing environment-specific configuration settings",
incorrectAnswers: [
    "Storing application code",
    "Storing database data",
    "Storing project metadata"
],
resources: "https://www.npmjs.com/package/dotenv"
},
{
question: "what are some common files you may find in a .gitignore file in a Node.js application?",
studyGuideInformation: "Some common files you may find in a .gitignore file in a Node.js application include node_modules, .env, .DS_Store, and other files and directories that should be excluded from version control.",
correctAnswer: "node_modules, .env, .DS_Store, and other files and directories",
incorrectAnswers: [
    "package.json, package-lock.json, .env, and other files and directories",
    "index.js, server.js, .env, and other files and directories",
    "app.js, config.js, .env, and other files and directories"
],
resources: "https://git-scm.com/docs/gitignore"
},
{
question: "what is a basic file structure for a Node.js application?",
studyGuideInformation: "A basic file structure for a Node.js application may include files such as package.json, index.js, server.js, .env, .gitignore, and other files and directories for organizing code, configuration, and dependencies.",
correctAnswer: "package.json, index.js, server.js, .env, .gitignore, and other files and directories",
incorrectAnswers: [
    "app.js, config.js, .env, .gitignore, and other files and directories",
    "server.js, config.js, .env, .gitignore, and other files and directories",
    "index.js, app.js, .env, .gitignore, and other files and directories"
],
resources: "https://nodejs.dev/learn/the-package-json-guide"
},
{
question: "what do the process.env.DB_HOST, process.env.DB_USER, and process.env.DB_PASSWORD properties do in a Node.js application?",
studyGuideInformation: "The process.env.DB_HOST, process.env.DB_USER, and process.env.DB_PASSWORD properties in a Node.js application are used to access environment variables. They allow you to define and manage configuration settings for your application.",
correctAnswer: "Accessing environment variables",
incorrectAnswers: [
    "Defining environment variables",
    "Managing environment variables",
    "Setting environment variables"
],
resources: "https://nodejs.dev/learn/the-package-json-guide"
},
{
question: "What benefit does seperating the environment variables and the new sequelize instance provide in a Node.js application?",
studyGuideInformation: "Separating the environment variables and the new sequelize instance in a Node.js application allows you to define and manage configuration settings separately from the code. It provides a way to keep sensitive information separate from the application logic.",
correctAnswer: "Keeping sensitive information separate from the application logic",
incorrectAnswers: [
    "Keeping sensitive information in the application logic",
    "Keeping sensitive information in the environment variables",
    "Keeping sensitive information in the database instance"
],
resources: "https://nodejs.dev/learn/the-package-json-guide"
},
{
question: "what does sequelize.sync() do in a Node.js application?",
studyGuideInformation: "The sequelize.sync() syntax in a Node.js application is used to synchronize the database schema with the models defined in the application. It creates or updates database tables based on the model definitions.",
correctAnswer: "Synchronizing the database schema with the models",
incorrectAnswers: [
    "Synchronizing the models with the database schema",
    "Synchronizing the database with the model definitions",
    "Synchronizing the model definitions with the database"
],
resources: "https://sequelize.org/master/manual/getting-started.html"
},
{
question: "How can bcrypt be used to hash a password in a Node.js application?",
studyGuideInformation: "Bcrypt can be used to hash a password in a Node.js application by using the bcrypt.hash() function to generate a hash of the password, and then storing the hash in the database.",
correctAnswer: "Using the bcrypt.hash() function to generate a hash of the password",
incorrectAnswers: [
    "Using the bcrypt.compare() function to generate a hash of the password",
    "Using the bcrypt.hash() function to compare a hash of the password",
    "Using the bcrypt.compare() function to compare a hash of the password"
],
resources: "https://www.npmjs.com/package/bcrypt"
},
{
question: "What does the bcrypt.compare() function do in a Node.js application?",
studyGuideInformation: "The bcrypt.compare() function in a Node.js application is used to compare a plain-text password with a hashed password. It returns a boolean value indicating whether the passwords match.",
correctAnswer: "Comparing a plain-text password with a hashed password",
incorrectAnswers: [
    "Comparing a hashed password with a plain-text password",
    "Comparing a hashed password with another hashed password",
    "Comparing a plain-text password with another plain-text password"
],
resources: "https://www.npmjs.com/package/bcrypt"
},
];

 const HTMLquestions = [
{
question: "What does HTML stand for?",
studyGuideInformation: "HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It structures web content through elements represented by tags.",
correctAnswer: "HyperText Markup Language",
incorrectAnswers: [
    "Hyperlink and Text Markup Language",
    "HyperTool Markup Language",
    "HighText Machine Language"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/HTML"
},
{
question: "What is the purpose of the `<a>` tag in HTML?",
studyGuideInformation: "The `<a>` tag in HTML is used to define hyperlinks, which allow users to jump from one document or page to another. The `href` attribute specifies the URL of the page the link goes to.",
correctAnswer: "To define hyperlinks",
incorrectAnswers: [
    "To emphasize text",
    "To create a checkbox",
    "To insert an image"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
},
{
question: "What does the `<div>` tag represent in HTML?",
studyGuideInformation: "The `<div>` tag in HTML is used as a container for other HTML elements. It does not inherently represent anything but can be styled with CSS or manipulated with JavaScript, serving as a block-level element in web design.",
correctAnswer: "A container for other HTML elements",
incorrectAnswers: [
    "Defines a section in a document",
    "Creates a dividing line",
    "Specifies a directory list"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"
},
{
question: "How do you make a list that lists items with bullets in HTML?",
studyGuideInformation: "In HTML, an unordered list is used to display items with bullets. This is achieved by using the `<ul>` tag to create the list, with each item within the list marked up using the `<li>` tag.",
correctAnswer: "Using the `<ul>` tag with `<li>` tags for each item",
incorrectAnswers: [
    "Using the `<ol>` tag",
    "Using the `<dl>` tag",
    "Using the `<list>` tag"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"
},
{
question: "What attribute specifies the URL in the `<a>` tag for the hyperlink's destination?",
studyGuideInformation: "The `href` attribute in the `<a>` tag specifies the URL of the page the link points to. It stands for 'hypertext reference' and is essential for creating functional hyperlinks in HTML documents.",
correctAnswer: "`href` attribute",
incorrectAnswers: [
    "`src` attribute",
    "`link` attribute",
    "`url` attribute"
],
resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
},
{
    question: "What does the `<img>` tag represent in HTML?",
    studyGuideInformation: "The `<img>` tag in HTML is used to embed an image in a web page. It is a self-closing tag and requires the `src` attribute to specify the image file's URL and the `alt` attribute to provide alternative text for screen readers and in case the image fails to load.",
    correctAnswer: "An image",
    incorrectAnswers: [
        "A video",
        "A link",
        "A paragraph"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
},
{
    question: "What does the `<p>` tag represent in HTML?",
    studyGuideInformation: "The `<p>` tag in HTML is used to define a paragraph of text. It is a block-level element and is commonly used to structure and format text content on web pages.",
    correctAnswer: "A paragraph",
    incorrectAnswers: [
        "A page",
        "A post",
        "A point"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"
},
{
    question: "What does the `<h1>` tag represent in HTML?",
    studyGuideInformation: "The `<h1>` tag in HTML is used to define the most important heading on a web page. It is a block-level element and is typically used for the main title or headline of the page's content.",
    correctAnswer: "A top-level heading",
    incorrectAnswers: [
        "A horizontal rule",
        "A hyperlink",
        "A highlighted text"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1"
},
{
    question: "What does the `<table>` tag represent in HTML?",
    studyGuideInformation: "The `<table>` tag in HTML is used to create a table, which organizes data into rows and columns. It is a block-level element and can be styled with CSS to control its appearance and layout.",
    correctAnswer: "A table",
    incorrectAnswers: [
        "A tab",
        "A tabbed interface",
        "A tabular data"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
},
{
    question: "What does the `<form>` tag represent in HTML?",
    studyGuideInformation: "The `<form>` tag in HTML is used to create an interactive form for user input. It can contain various input elements, such as text fields, checkboxes, and buttons, and is submitted to a server for processing.",
    correctAnswer: "A form for user input",
    incorrectAnswers: [
        "A format for text",
        "A formula for calculations",
        "A forum for discussion"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
},
{
    question: "what are some of the different attributes of an input tag?",
    studyGuideInformation: "The `<input>` tag in HTML is used to create various types of input fields, such as text fields, checkboxes, and radio buttons. It can have attributes such as `type`, `name`, `value`, and `placeholder` to specify the input's behavior and appearance.", 
    correctAnswer: "Type, name, value, placeholder",
    incorrectAnswers: [
        "Size, color, font, style",
        "Submit, reset, clear, cancel",
        "Width, height, border, padding"
    ], 
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
},
{
    question: "what is the difference between the href and src attributes?",
    studyGuideInformation: "The `href` attribute is used in the `<a>` tag to specify the URL of the page the link points to, while the `src` attribute is used in the `<img>` tag to specify the URL of the image file to be displayed.",
    correctAnswer: "The href attribute is used for hyperlinks, while the src attribute is used for image sources.",
    incorrectAnswers: [
        "The href attribute is used for images, while the src attribute is used for hyperlinks.",
        "The href attribute is used for headings, while the src attribute is used for paragraphs.",
        "The href attribute is used for text, while the src attribute is used for videos."
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
},
{
    question: "What does the `<head>` tag represent in HTML?",
    studyGuideInformation: "The `<head>` tag in HTML is used to contain meta-information about the document, such as its title, links to stylesheets, and scripts. It is not displayed on the web page itself but is essential for defining the document's structure and properties.",
    correctAnswer: "Meta-information about the document",
    incorrectAnswers: [
        "The main content of the document",
        "The header of the document",
        "The navigation links of the document"
    ],
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"
},
];
    
 const CSSquestions = [
        {
            question: "What does CSS stand for?",
            studyGuideInformation: "CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of web pages.",
            correctAnswer: "Cascading Style Sheets",
            incorrectAnswers: [
                "Cascading Style Syntax",
                "Cascading Style Scripts",
                "Cascading Style Structures"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
        {
            question: "what is the difference between color, background-color, and border-color in CSS?",
            studyGuideInformation: "The `color` property in CSS is used to set the text color of an element, while the `background-color` property is used to set the background color of an element. The `border-color` property is used to set the color of an element's border.",
            correctAnswer: "Color sets the text color, background-color sets the background color, and border-color sets the border color.",
            incorrectAnswers: [
                "Color sets the background color, background-color sets the text color, and border-color sets the border color.",
                "Color sets the border color, background-color sets the background color, and border-color sets the text color.",
                "Color sets the text color, background-color sets the border color, and border-color sets the background color."
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value, https://developer.mozilla.org/en-US/docs/Web/CSS/background-color, https://developer.mozilla.org/en-US/docs/Web/CSS/border-color"
        },
        {
            question: "What does the `font-family` property in CSS do?",
            studyGuideInformation: "The `font-family` property in CSS is used to specify the font family or typeface used for text within an element. It allows you to define a prioritized list of font family names and generic family names to be used for rendering text content.",
            correctAnswer: "Specifies the font family or typeface for text",
            incorrectAnswers: [
                "Specifies the font size for text",
                "Specifies the font weight for text",
                "Specifies the font style for text"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/font-family"   
        },
        {
            question: "What does the `margin` property in CSS do?",
            studyGuideInformation: "The `margin` property in CSS is used to create space around an element's border. It can be set to different values to control the spacing on each side of the element, and can be used to create visual separation between elements on a web page.",
            correctAnswer: "Creates space around an element's border",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
        },
        {
            question: "What does the `padding` property in CSS do?",
            studyGuideInformation: "The `padding` property in CSS is used to create space around an element's content, inside the element's border. It can be set to different values to control the spacing on each side of the element, and can be used to create visual separation between an element's content and its border.",
            correctAnswer: "Creates space around an element's content",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding"
        },
        {
            question: "What does the `display` property in CSS do?",
            studyGuideInformation: "The `display` property in CSS is used to control the layout and rendering of an element. It can be used to change an element's default display behavior, such as making an inline element behave like a block-level element or hiding an element from the page layout.",
            correctAnswer: "Controls the layout and rendering of an element",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
        },
        {
            question: "What does the `float` property in CSS do?",
            studyGuideInformation: "The `float` property in CSS is used to specify whether an element should float to the left or right within its containing element. It is commonly used for creating multi-column layouts and positioning elements within a web page.",      
            correctAnswer: "Specifies whether an element should float to the left or right",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/float"
        },
        {
            question: "what some of the units for the height and width properties in CSS?",
            studyGuideInformation: "The `height` and `width` properties in CSS can be set using various units of measurement, such as pixels, percentages, ems, or viewport units. They can also be set to `auto` to allow the browser to calculate the element's dimensions based on its content and other factors.",
            correctAnswer: "Pixels, percentages, ems, viewport units",
            incorrectAnswers: [
                "Inches, centimeters, millimeters, points",
                "Kilometers, miles, yards, feet",
                "Seconds, minutes, hours, days"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/height, https://developer.mozilla.org/en-US/docs/Web/CSS/width"
        },
        {
            question: "What does the `position` property in CSS do?",
            studyGuideInformation: "The `position` property in CSS is used to specify the positioning method for an element. It can be set to `static`, `relative`, `absolute`, `fixed`, or `sticky` to control how an element is positioned within the document's layout.",
            correctAnswer: "Specifies the positioning method for an element",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
        },
        {
            question: "what is the difference between class and id in CSS?",
            studyGuideInformation: "In CSS, a class is a reusable identifier that can be applied to multiple elements, while an id is a unique identifier that can only be applied to a single element within a document. Classes are denoted by a period `.` in CSS, while ids are denoted by a hash `#`.",
            correctAnswer: "A (.) class can be applied to multiple elements, while an (#) id can only be applied to a single element.",
            incorrectAnswers: [
                "A class is denoted by a hash `#`, while an id is denoted by a period `.`",
                "A (#) class is a unique identifier, while an (.) id is a reusable identifier",
                "A (.) class can only be applied to a single element, while an (#) id can be applied to multiple elements."
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors, https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors"
        },
        {
            question: "what is a selector in CSS?",
            studyGuideInformation: "In CSS, a selector is a pattern used to select and style elements within a document. It can target specific elements, classes, ids, or other attributes, and can be combined to create complex selection criteria for styling web pages.",
            correctAnswer: "A pattern used to select and style elements",
            incorrectAnswers: [
                "A property used to define styles",
                "A value used to set dimensions",
                "A method used to position elements"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
        },
        {
            question: "what is are the different types of selectors in CSS?",
            studyGuideInformation: "In CSS, there are various types of selectors, including element selectors, class selectors, id selectors, attribute selectors, and pseudo-class selectors. These selectors allow you to target specific elements or groups of elements for styling.",
            correctAnswer: "Element, universal, class, id, attribute, pseudo-class",
            incorrectAnswers: [
                "Width, height, color, font, style",
                "Paragraph, heading, link, image, table",
                "Static, relative, absolute, fixed, sticky"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
        },
        {
            question: "what is the difference between padding and margin in CSS?",
            studyGuideInformation: "In CSS, `padding` is the space between an element's content and its border, while `margin` is the space between an element's border and its surrounding elements. Padding creates space inside the element, while margin creates space outside the element.",
            correctAnswer: "Padding is the space inside an element, while margin is the space outside an element.",
            incorrectAnswers: [
                "Padding is the space outside an element, while margin is the space inside an element.",
                "Padding is the width of an element, while margin is the height of an element.",
                "Padding is the color of an element, while margin is the background color of an element."
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding, https://developer.mozilla.org/en-US/docs/Web/CSS/margin"
        },
        {
            question: "What is the display property in CSS?",
            studyGuideInformation: "The `display` property in CSS is used to control the layout and rendering of an element. It can be used to change an element's default display behavior, such as making an inline element behave like a block-level element or hiding an element from the page layout.",
            correctAnswer: "Controls the layout and rendering of an element",
            incorrectAnswers: [
                "Sets the width of an element",
                "Sets the height of an element",
                "Sets the color of an element"
            ],
            resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
        },
        {
        question: "what is the difference between the `display: block;` and `display: inline;` properties in CSS?",
        studyGuideInformation: "The `display: block;` property in CSS makes an element behave like a block-level element, taking up the full width of its parent container and stacking vertically, while the `display: inline;` property makes an element behave like an inline-level element, flowing within the text and stacking horizontally.",
        correctAnswer: "Block-level elements stack vertically, while inline-level elements stack horizontally.",
        incorrectAnswers: [
            "Block-level elements stack horizontally, while inline-level elements stack vertically.",
            "Block-level elements take up the full width, while inline-level elements take up the full height.",
            "Block-level elements flow within the text, while inline-level elements take up the full width."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"  
    },
    {
        question: "what is the difference between display: none and visibility: hidden in CSS?",
        studyGuideInformation: "The `display: none;` property in CSS removes an element from the page layout, causing it to be hidden and not take up any space, while the `visibility: hidden;` property hides an element from view but still occupies space within the layout.",
        correctAnswer: "Display: none removes the element from the layout, while visibility: hidden hides the element but still occupies space.",
        incorrectAnswers: [
            "Display: none hides the element but still occupies space, while visibility: hidden removes the element from the layout.",
            "Display: none and visibility: hidden have the same effect on the layout.",
            "Display: none and visibility: hidden both remove the element from the layout."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/display, https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
    },
    {
        question: "what is the difference between the `position: relative;`, `position: absolute;`, and `position: fixed;` properties in CSS?",
        studyGuideInformation: "The `position: relative;` property in CSS positions an element relative to its normal position within the document's layout, while the `position: absolute;` property positions an element relative to its closest positioned ancestor. The `position: fixed;` property positions an element relative to the browser window and keeps it in a fixed position as the user scrolls.",
        correctAnswer: "Relative positions an element within its normal layout, absolute positions an element within its closest positioned ancestor, and fixed positions an element relative to the browser window.",
        incorrectAnswers: [
            "Relative positions an element relative to the browser window, absolute positions an element within its normal layout, and fixed positions an element within its closest positioned ancestor.",
            "Relative positions an element within its closest positioned ancestor, absolute positions an element relative to the browser window, and fixed positions an element within its normal layout.",
            "Relative positions an element within its normal layout, absolute positions an element relative to the browser window, and fixed positions an element within its closest positioned ancestor."
        ], 
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
    },
    {
        question: "what is the difference between the `border` and `outline` properties in CSS?",
        studyGuideInformation: "The `border` property in CSS is used to create a border around an element, specifying its width, style, and color, while the `outline` property is used to create a visible outline around an element, which is typically used for highlighting or focus effects.",
        correctAnswer: "Border creates a border around an element, while outline creates a visible outline around an element.",
        incorrectAnswers: [
            "Border creates a visible outline around an element, while outline creates a border around an element.",
            "Border and outline have the same effect on an element's appearance.",
            "Border and outline are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/border, https://developer.mozilla.org/en-US/docs/Web/CSS/outline"   
    },
    {
        question: "what is the difference between the `background` and `background-color` properties in CSS?",
        studyGuideInformation: "The `background` property in CSS is used to set multiple background properties in a single declaration, such as background color, image, position, and repeat, while the `background-color` property is used to set the background color of an element.",
        correctAnswer: "Background sets multiple background properties, while background-color sets the background color.",
        incorrectAnswers: [
            "Background-color sets multiple background properties, while background sets the background color.",
            "Background and background-color have the same effect on an element's appearance.",
            "Background and background-color are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/background, https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
    },
    {
        question: "What is a media query in CSS?",
        studyGuideInformation: "A media query in CSS is a technique used to apply different styles to an element based on the device's characteristics, such as screen size, resolution, or orientation. It allows web developers to create responsive designs that adapt to various devices and screen sizes.",
        correctAnswer: "A technique used to apply different styles based on device characteristics",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    },
    {
        question: "What is a pseudo-class in CSS?",
        studyGuideInformation: "A pseudo-class in CSS is a keyword added to a selector that specifies a special state of the selected element. Pseudo-classes are used to style elements based on user interaction, such as links, form elements, or the element's position within the document's structure.",
        correctAnswer: "A keyword added to a selector that specifies a special state of the selected element",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
    },
    {
        question: "What is a pseudo-element in CSS?",
        studyGuideInformation: "A pseudo-element in CSS is a keyword added to a selector that specifies a special part of the selected element. Pseudo-elements are used to style specific parts of an element, such as the first letter, first line, or before and after content.",
        correctAnswer: "A keyword added to a selector that specifies a special part of the selected element",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
    },
    { 
        question: "What does the `@media` rule in CSS do?",
        studyGuideInformation: "The `@media` rule in CSS is used to apply different styles to an element based on the device's characteristics, such as screen size, resolution, or orientation. It allows web developers to create responsive designs that adapt to various devices and screen sizes.",
        correctAnswer: "Applies different styles based on device characteristics",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries"
    },
    {
        question: "what is the flexbox layout model in CSS?",
        studyGuideInformation: "The flexbox layout model in CSS is a one-dimensional layout method for creating flexible and efficient designs. It allows elements to be aligned and distributed within a container, and can be used to create complex and responsive layouts with minimal code.",
        correctAnswer: "A one-dimensional layout method for creating flexible designs",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
    },
    {
        question: "what are the properties for flexbox in CSS?",
        studyGuideInformation: "The properties for flexbox in CSS include `display`, `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, and `align-content`. These properties are used to control the layout and alignment of flexbox items within a container.",
        correctAnswer: "Display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content",
        incorrectAnswers: [
            "Width, height, color, font, style",
            "Paragraph, heading, link, image, table",
            "Static, relative, absolute, fixed, sticky"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
    },
    {
        question: "what is the box-sizing property in CSS?",
        studyGuideInformation: "The `box-sizing` property in CSS is used to control how an element's total width and height are calculated, including its content, padding, and border. It can be set to `content-box` or `border-box` to change the box model used for sizing elements.",
        correctAnswer: "Controls how an element's total width and height are calculated",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
    },
    {
        question: "what is the difference between the justify and align properties in CSS?",
        studyGuideInformation: "In CSS, the `justify` properties are used to align flex items along the main axis, while the `align` properties are used to align flex items along the cross axis. This allows for precise control over the layout and alignment of flexbox items within a container.",
        correctAnswer: "Justify aligns along the main axis, while align aligns along the cross axis.",
        incorrectAnswers: [
            "Justify aligns along the cross axis, while align aligns along the main axis.",
            "Justify and align have the same effect on the layout.",
            "Justify and align are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
    },
    {
        question: "what is the difference between the `flex` and `grid` layout models in CSS?",
        studyGuideInformation: "The `flex` layout model in CSS is a one-dimensional layout method for creating flexible and efficient designs, while the `grid` layout model is a two-dimensional layout method for creating complex and responsive layouts with precise control over rows and columns.",
        correctAnswer: "Flex is one-dimensional, while grid is two-dimensional.",
        incorrectAnswers: [
            "Flex is two-dimensional, while grid is one-dimensional.",
            "Flex and grid have the same layout capabilities.",
            "Flex and grid are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox, https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout"
    },
    {
        question: "what is the difference between the `flex-direction` and `flex-wrap` properties in CSS?",
        studyGuideInformation: "The `flex-direction` property in CSS is used to specify the direction in which flex items are placed within a flex container, while the `flex-wrap` property is used to control whether flex items are forced onto a single line or can wrap onto multiple lines.",
        correctAnswer: "Flex-direction specifies item placement direction, while flex-wrap controls item wrapping behavior.",
        incorrectAnswers: [
            "Flex-direction controls item wrapping behavior, while flex-wrap specifies item placement direction.",
            "Flex-direction and flex-wrap have the same effect on the layout.",
            "Flex-direction and flex-wrap are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
    },
    {
        question: "what is the transform property in CSS?",
        studyGuideInformation: "The `transform` property in CSS is used to modify the appearance and position of an element using 2D or 3D transformations. It can be used to rotate, scale, skew, or translate elements, creating visual effects and animations.",
        correctAnswer: "Modifies the appearance and position of an element using 2D or 3D transformations",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
    },
    {
        question: "what are some of the different types of transformations that can be applied using the transform property in CSS?",
        studyGuideInformation: "The `transform` property in CSS can be used to apply various types of transformations, including rotation, scaling, skewing, and translating. It can also be used to apply 3D transformations, such as perspective and matrix transformations.",
        correctAnswer: "Rotation, scaling, skewing, translating",
        incorrectAnswers: [
            "Width, height, color, font, style",
            "Paragraph, heading, link, image, table",
            "Static, relative, absolute, fixed, sticky"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
    },
    {
        question: "what is the transition property in CSS?",
        studyGuideInformation: "The `transition` property in CSS is used to create smooth and gradual transitions between different styles applied to an element. It allows you to specify the duration, timing function, delay, and property to transition, creating animated effects when elements change state.",
        correctAnswer: "Creates smooth and gradual transitions between different styles",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
    },
    {
        question: "what is the animation property in CSS?",
        studyGuideInformation: "The `animation` property in CSS is used to create complex and customized animations for elements. It allows you to define keyframes, duration, timing function, delay, and iteration count, creating dynamic and interactive effects within web pages.",
        correctAnswer: "Creates complex and customized animations for elements",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
    },
    {
        question: "what is the difference between the transition and animation properties in CSS?",
        studyGuideInformation: "The `transition` property in CSS is used to create smooth and gradual transitions between different styles applied to an element, while the `animation` property is used to create complex and customized animations for elements, allowing for more dynamic and interactive effects.",
        correctAnswer: "Transition creates smooth transitions, while animation creates complex and customized effects.",
        incorrectAnswers: [
            "Transition and animation have the same effect on an element's appearance.",
            "Transition creates complex and customized effects, while animation creates smooth transitions.",
            "Transition and animation are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/transition, https://developer.mozilla.org/en-US/docs/Web/CSS/animation"
    },
    {
        question: "what is the difference between the `transform` and `transition` properties in CSS?",
        studyGuideInformation: "The `transform` property in CSS is used to modify the appearance and position of an element using 2D or 3D transformations, while the `transition` property is used to create smooth and gradual transitions between different styles applied to an element.",
        correctAnswer: "Transform modifies appearance and position, while transition creates smooth transitions.",
        incorrectAnswers: [
            "Transform and transition have the same effect on an element's appearance.",
            "Transform creates smooth transitions, while transition modifies appearance and position.",
            "Transform and transition are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/transform, https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
    },
    {
        question: "what is the difference between the `animation` and `transition` properties in CSS?",
        studyGuideInformation: "The `animation` property in CSS is used to create complex and customized animations for elements, while the `transition` property is used to create smooth and gradual transitions between different styles applied to an element.",
        correctAnswer: "Animation creates complex and customized effects, while transition creates smooth transitions.",
        incorrectAnswers: [
            "Animation and transition have the same effect on an element's appearance.",
            "Animation creates smooth transitions, while transition creates complex and customized effects.",
            "Animation and transition are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation, https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
    },
    {
        question: "what is a reset.css file and how can it be beneficial for web development?",
        studyGuideInformation: "A reset.css file is a CSS file that resets the default styles provided by web browsers, ensuring a consistent and predictable baseline for styling web pages. It can be beneficial for web development by eliminating browser-specific differences and providing a clean slate for applying custom styles.",
        correctAnswer: "Resets default browser styles for consistent styling",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://meyerweb.com/eric/tools/css/reset/"
    },
    {
        question: "what are some examples of a pseudo-class in CSS?",
        studyGuideInformation: "Some examples of pseudo-classes in CSS include `:hover`, `:active`, `:focus`, `:first-child`, `:last-child`, and `:nth-child()`. These pseudo-classes are used to style elements based on user interaction, position within the document, or other special states.",
        correctAnswer: ":hover, :active, :focus, :first-child, :last-child, :nth-child()",
        incorrectAnswers: [
            ":before, :after, :first-letter, :first-line, :selection",
            ":link, :visited, :not, :empty, :target ",
            ":root, :nth-of-type(), :nth-last-of-type(), :only-of-type(), :only-child"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
    },
    {
        question: "what are some examples of a pseudo-element in CSS?",
        studyGuideInformation: "Some examples of pseudo-elements in CSS include `::before`, `::after`, `::first-letter`, `::first-line`, and `::selection`. These pseudo-elements are used to style specific parts of an element, such as adding content before or after an element, styling the first letter or line of text, or highlighting selected text.",
        correctAnswer: "::before, ::after, ::first-letter, ::first-line, ::selection",
        incorrectAnswers: [
            "::hover, ::active, ::focus, ::first-child, ::last-child",
            "::link, ::visited, ::not, ::empty, ::target",
            "::root, ::nth-of-type(), ::nth-last-of-type(), ::only-of-type(), ::only-child"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
    },
    {
        question: "what css property can be used to generate content before or after an element?",
        studyGuideInformation: "The `content` property in CSS can be used to generate content before or after an element, such as adding text, images, or other visual elements to the page. It is commonly used with the `::before` and `::after` pseudo-elements to create decorative or informational content.",
        correctAnswer: "Content",
        incorrectAnswers: [
            "Display",
            "Position",
            "Transform"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/content"
    },
    {
        question: "what is the cursor property in CSS?",
        studyGuideInformation: "The `cursor` property in CSS is used to specify the type of cursor to be displayed when the mouse pointer is over an element. It can be set to various values, such as `pointer`, `default`, `crosshair`, or `text`, to provide visual feedback to users when interacting with web pages.",
        correctAnswer: "Specifies the type of cursor to be displayed",
        incorrectAnswers: [
            "Sets the width of an element",
            "Sets the height of an element",
            "Sets the color of an element"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"
    },
    {
        question: "what is the difference between the `overflow` and `overflow-wrap` properties in CSS?",
        studyGuideInformation: "The `overflow` property in CSS is used to control how content that overflows its container is handled, such as clipping, scrolling, or displaying a scrollbar, while the `overflow-wrap` property is used to specify whether or how to break lines within words when they overflow their container.",
        correctAnswer: "Overflow controls how content is handled, while overflow-wrap specifies line breaking behavior.",
        incorrectAnswers: [
            "Overflow-wrap controls how content is handled, while overflow specifies line breaking behavior.",
            "Overflow and overflow-wrap have the same effect on an element's appearance.",
            "Overflow and overflow-wrap are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/overflow, https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
    },
    {
        question: "what is a combinator in CSS?",
        studyGuideInformation: "In CSS, a combinator is a symbol used to combine two or more selectors to create more specific selection criteria. Combinators include the descendant combinator ` `, the child combinator `>`, the adjacent sibling combinator `+`, and the general sibling combinator `~`.",
        correctAnswer: "A symbol used to combine selectors",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
    },
    {
        question: "what is the difference between the `>` and `+` combinators in CSS?",
        studyGuideInformation: "The `>` combinator in CSS is used to select direct child elements of a parent, while the `+` combinator is used to select adjacent sibling elements that come immediately after the specified element.",
        correctAnswer: "> selects direct child elements, while + selects adjacent sibling elements.",
        incorrectAnswers: [
            "> selects adjacent sibling elements, while + selects direct child elements.",
            "> and + have the same effect on the layout.",
            "> and + are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
    },
    {
        question: "what are some of the different combinators in CSS?",
        studyGuideInformation: "Some of the different combinators in CSS include the descendant combinator ` `, the child combinator `>`, the adjacent sibling combinator `+`, and the general sibling combinator `~`. These combinators are used to create more specific selection criteria by combining different selectors.",
        correctAnswer: "Descendant, child, adjacent sibling, general sibling",
        incorrectAnswers: [
            "Width, height, color, font, style",
            "Paragraph, heading, link, image, table",
            "Static, relative, absolute, fixed, sticky"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
    },
    {
        question: "what is the difference between the `:first-child` and `:first-of-type` pseudo-classes in CSS?",
        studyGuideInformation: "The `:first-child` pseudo-class in CSS is used to select an element that is the first child of its parent, while the `:first-of-type` pseudo-class is used to select the first element of its type within its parent.",
        correctAnswer: ":first-child selects the first child, while :first-of-type selects the first of its type.",
        incorrectAnswers: [
            ":first-child selects the first of its type, while :first-of-type selects the first child.",
            ":first-child and :first-of-type have the same effect on the layout.",
            ":first-child and :first-of-type are used for the same purpose in CSS."
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child, https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type"
    },
    {
        question: "what is a css variable?",
        studyGuideInformation: "A CSS variable is a custom property that can be defined and reused throughout a stylesheet. It allows you to store and reuse values, such as colors, font sizes, or spacing, making it easier to maintain and update styles across a web page.",
        correctAnswer: "A custom property that can be defined and reused",
        incorrectAnswers: [
            "A method used to position elements",
            "A property used to define styles",
            "A value used to set dimensions"
        ],
        resources: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
    }
];

 const MySQLquestions = [
    {
        question: "What is MySQL?",
        studyGuideInformation: "MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). It is used for a wide variety of applications, from web databases to data warehousing and logging applications.",
        correctAnswer: "An open-source relational database management system",
        incorrectAnswers: [
            "A NoSQL database for high-volume web applications",
            "A programming language used for data analysis",
            "A web server software"
        ],
        resources: "https://dev.mysql.com/doc/"
        },
        {
        question: "What is the primary function of the PRIMARY KEY in a MySQL table?",
        studyGuideInformation: "The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain unique values, and cannot contain NULL values. A table can have only one primary key, which may consist of single or multiple fields.",
        correctAnswer: "Uniquely identifies each record in a table",
        incorrectAnswers: [
            "Sorts the table in alphabetical order",
            "Ensures that all records are accessible via SQL queries",
            "Encrypts the data stored in the table for security"
        ],
        resources: "https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html"
        },
        {
            question: "What is the primary function of the PRIMARY KEY in a MySQL table?",
            studyGuideInformation: "The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain unique values, and cannot contain NULL values. A table can have only one primary key, which may consist of single or multiple fields.",
            correctAnswer: "Uniquely identifies each record in a table",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Ensures that all records are accessible via SQL queries",
                "Encrypts the data stored in the table for security"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html"
            },
            {
            question: "What does SQL stand for in the context of MySQL?",
            studyGuideInformation: "SQL, used in the context of MySQL, stands for Structured Query Language. It is a standardized programming language that is used to manage relational databases and perform various operations on the data stored in them.",
            correctAnswer: "Structured Query Language",
            incorrectAnswers: [
                "Simple Query List",
                "Secure Query Language",
                "Sequential Query Logic"
            ],
            resources: "https://www.mysql.com/"
            },
            {
            question: "How do you retrieve all rows from a table named 'customers' in MySQL?",
            studyGuideInformation: "To retrieve all rows from a table in MySQL, you use the SELECT statement followed by an asterisk (*) to denote all columns, from the specific table. For example, to retrieve all rows from the 'customers' table, you would use the query 'SELECT * FROM customers;'.",
            correctAnswer: "SELECT * FROM customers;",
            incorrectAnswers: [
                "FETCH ALL FROM customers;",
                "GET ALL ROWS FROM customers;",
                "RETRIEVE * FROM customers;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
            },
            {
            question: "What is a JOIN clause used for in MySQL?",
            studyGuideInformation: "A JOIN clause is used in MySQL to combine rows from two or more tables, based on a related column between them. It allows for the querying of data that exists across multiple tables, facilitating a relational database's ability to store data in separate tables for efficiency.",
            correctAnswer: "To combine rows from two or more tables, based on a related column",
            incorrectAnswers: [
                "To duplicate the rows in a table for backup purposes",
                "To increment the values in one table based on values in another",
                "To restrict user access to certain tables"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/join.html"
            },
            {
            question: "How would a developer access the MySQL command-line interface?",
            studyGuideInformation: "To access the MySQL command-line interface, a developer would use the mysql command followed by the appropriate options and arguments. For example, to access the command-line interface with a specific user and database, the developer would use the command 'mysql -u username -p database_name'.",
            correctAnswer: "mysql -u username -p",
            incorrectAnswers: [
                "cmd mysql",
                "mysql -connect",
                "mysql -access"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/mysql.html"
            },
        {
            question: "what command is used to create a new database in MySQL?",    
            studyGuideInformation: "The CREATE DATABASE statement is used to create a new database in MySQL. The syntax for this command is 'CREATE DATABASE database_name;'.",
            correctAnswer: "CREATE DATABASE database_name;",
            incorrectAnswers: [
                "NEW DATABASE database_name;",
                "ADD DATABASE database_name;",
                "MAKE DATABASE database_name;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-database.html"
        },
        {
            question: "what command is used to execute a stored procedure in MySQL?",
            studyGuideInformation: "The CALL statement is used to execute a stored procedure in MySQL. The syntax for this command is 'CALL procedure_name();'.",
            correctAnswer: "CALL procedure_name();",
            incorrectAnswers: [
                "EXECUTE procedure_name();",
                "RUN procedure_name();",
                "START procedure_name();"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/call.html"
        },
        {
            question: "what is a schema.sql file used for in MySQL?",
            studyGuideInformation: "A schema.sql file is used to define the structure of a database in MySQL. It contains the SQL commands necessary to create the tables, columns, indexes, and other database objects required for a specific application or system.",
            correctAnswer: "To define the structure of a database",
            incorrectAnswers: [
                "To store user credentials",
                "To log database transactions",
                "To define the data types of columns"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table.html"
        },
        {
            question: "what command is used to execute a schema.sql file in MySQL?",
            studyGuideInformation: "The SOURCE command is used to execute a schema.sql file in MySQL. The syntax for this command is 'SOURCE file_path;'.",
            correctAnswer: "SOURCE file_path;",
            incorrectAnswers: [
                "EXECUTE file_path;",
                "RUN file_path;",
                "START file_path;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/source.html"
        },
        {
            question: "what command is used to create a table in MySQL?",
            studyGuideInformation: "The CREATE TABLE statement is used to create a new table in MySQL. The syntax for this command is 'CREATE TABLE table_name (column1 datatype, column2 datatype, ...);'.",
            correctAnswer: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...);",
            incorrectAnswers: [
                "NEW TABLE table_name (column1 datatype, column2 datatype, ...);",
                "ADD TABLE table_name (column1 datatype, column2 datatype, ...);",
                "MAKE TABLE table_name (column1 datatype, column2 datatype, ...);"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table.html"
        },
        {
            question: "what does the command 'SHOW TABLES;' do in MySQL?",
            studyGuideInformation: "The SHOW TABLES command is used to display a list of all tables in the current database in MySQL.",
            correctAnswer: "Displays a list of all tables in the current database",
            incorrectAnswers: [
                "Creates a new table in the current database",
                "Deletes all tables in the current database",
                "Updates the structure of all tables in the current database"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/show-tables.html"
        },
        {
            question: "what does the command 'select * from table_name;' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name command is used to retrieve all rows and columns from a specific table in MySQL.",
            correctAnswer: "Retrieves all rows and columns from a specific table",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what does the command 'INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);' do in MySQL?",
            studyGuideInformation: "The INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...); command is used to add new rows of data to a specific table in MySQL.",
            correctAnswer: "Adds new rows of data to a specific table",
            incorrectAnswers: [
                "Deletes rows of data from a specific table",
                "Updates rows of data in a specific table",
                "Retrieves rows of data from a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/insert.html"
        },
        {
            question: "how would a developer delete a table or database in MySQL?",
            studyGuideInformation: "To delete a table in MySQL, a developer would use the DROP TABLE statement followed by the table name. To delete a database, the developer would use the DROP DATABASE statement followed by the database name.",
            correctAnswer: "DROP TABLE table_name; or DROP DATABASE database_name;",
            incorrectAnswers: [
                "DELETE TABLE table_name; or DELETE DATABASE database_name;",
                "REMOVE TABLE table_name; or REMOVE DATABASE database_name;",
                "ERASE TABLE table_name; or ERASE DATABASE database_name;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/drop-table.html"
        },
        {
            question: "What will the command CREATE TABLE table_name (column1 datatype, column2 datatype, ...); do in MySQL?",
            studyGuideInformation: "The CREATE TABLE statement is used to create a new table in MySQL. The syntax for this command is 'CREATE TABLE table_name (column1 datatype, column2 datatype, ...);'.",
            correctAnswer: "Create a new table",
            incorrectAnswers: [
                "Insert new rows into an existing table",
                "Update the structure of an existing table",
                "Delete an existing table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table.html"
        },
        {
            question: "what are the data types that can be used for columns in a MySQL table?",
            studyGuideInformation: "The data types that can be used for columns in a MySQL table include: INTEGER, FLOAT, DOUBLE, DECIMAL, CHAR, VARCHAR, TEXT, DATE, TIME, and more.",
            correctAnswer: "INTEGER, FLOAT, DOUBLE, DECIMAL, CHAR, VARCHAR, TEXT, DATE, TIME, and more",
            incorrectAnswers: [
                "STRING, BOOLEAN, ARRAY, OBJECT, FUNCTION",
                "NUMBER, STRING, BOOLEAN, DATE, TIME",
                "INT, FLOAT, STRING, DATE, TIME"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/data-types.html"
        },
        {
            question: "what is the purpose of the FOREIGN KEY constraint in MySQL?",
            studyGuideInformation: "The FOREIGN KEY constraint is used to enforce referential integrity in MySQL. It ensures that the values in a specific column or columns of a table match the values in a column or columns of another table.",
            correctAnswer: "Enforces referential integrity",
            incorrectAnswers: [
                "Encrypts the data stored in a table for security",
                "Sorts the table in alphabetical order",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"
        },
        {
            question: "what command is used to remove data from a table in MySQL?",
            studyGuideInformation: "The DELETE FROM statement is used to remove data from a table in MySQL. The syntax for this command is 'DELETE FROM table_name WHERE condition;'.",
            correctAnswer: "DELETE FROM table_name WHERE condition;",
            incorrectAnswers: [
                "REMOVE FROM table_name WHERE condition;",
                "ERASE FROM table_name WHERE condition;",
                "DROP FROM table_name WHERE condition;"
            ],
        },
        {
            question: "what command is used to update data in a table in MySQL?",
            studyGuideInformation: "The UPDATE statement is used to update data in a table in MySQL. The syntax for this command is 'UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;'.",
            correctAnswer: "UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
            incorrectAnswers: [
                "MODIFY table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
                "CHANGE table_name SET column1 = value1, column2 = value2, ... WHERE condition;",
                "ALTER table_name SET column1 = value1, column2 = value2, ... WHERE condition;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/update.html"
        },
        {
            question: "What does not null mean in MySQL?",
            studyGuideInformation: "The NOT NULL constraint in MySQL ensures that a column cannot contain NULL values. It enforces that every row in the table must have a value for that column.",
            correctAnswer: "The column cannot contain NULL values",
            incorrectAnswers: [
                "The column must contain NULL values",
                "The column must contain unique values",
                "The column must contain non-unique values"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html"
        },
        {
            question: "What is the purpose of the UNIQUE constraint in MySQL?",
            studyGuideInformation: "The UNIQUE constraint in MySQL ensures that all values in a column or a group of columns are unique. It prevents duplicate values from being inserted into the table.",
            correctAnswer: "Ensures that all values in a column or a group of columns are unique",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/constraint-primary-key.html"
        },
        {
            question: "What is the purpose of the AUTO_INCREMENT attribute in MySQL?",
            studyGuideInformation: "The AUTO_INCREMENT attribute in MySQL is used to generate a unique, sequential number for a column. It is often used with the PRIMARY KEY constraint to automatically generate a unique identifier for each row in a table.",
            correctAnswer: "Generates a unique, sequential number for a column",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/example-auto-increment.html"
        },
        {
            question: "What is the purpose of the DEFAULT constraint in MySQL?",
            studyGuideInformation: "The DEFAULT constraint in MySQL is used to specify a default value for a column. If a new row is inserted into the table and no value is provided for the column, the default value will be used instead.",
            correctAnswer: "Specifies a default value for a column",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table.html"
        },
        {
            question: "How would a developer add a new column to an existing table in MySQL?",
            studyGuideInformation: "To add a new column to an existing table in MySQL, a developer would use the ALTER TABLE statement followed by the ADD COLUMN clause and the new column definition.",
            correctAnswer: "ALTER TABLE table_name ADD COLUMN column_name datatype;",
            incorrectAnswers: [
                "MODIFY TABLE table_name ADD COLUMN column_name datatype;",
                "CHANGE TABLE table_name ADD COLUMN column_name datatype;",
                "UPDATE TABLE table_name ADD COLUMN column_name datatype;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/alter-table.html"
        },
        {
            question: "how would a developer create a reference to a primary key in another table in MySQL?",
            studyGuideInformation: "To create a reference to a primary key in another table in MySQL, a developer would use the FOREIGN KEY constraint followed by the REFERENCES clause and the table and column being referenced.",
            correctAnswer: "FOREIGN KEY (column_name) REFERENCES other_table(other_column);",
            incorrectAnswers: [
                "REFERENCE KEY (column_name) TO other_table(other_column);",
                "LINK KEY (column_name) TO other_table(other_column);",
                "CONNECT KEY (column_name) TO other_table(other_column);"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"
        },
        {
            question: "What is the purpose of the ON DELETE CASCADE clause in MySQL?",
            studyGuideInformation: "The ON DELETE CASCADE clause in MySQL is used to specify that when a row in the parent table is deleted, the corresponding rows in the child table should also be deleted.",
            correctAnswer: "Specifies that when a row in the parent table is deleted, the corresponding rows in the child table should also be deleted",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"
        },
        {
            question: "What is the purpose of the ON UPDATE CASCADE clause in MySQL?",
            studyGuideInformation: "The ON UPDATE CASCADE clause in MySQL is used to specify that when a row in the parent table is updated, the corresponding rows in the child table should also be updated.",
            correctAnswer: "Specifies that when a row in the parent table is updated, the corresponding rows in the child table should also be updated",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"
        },
        {
            question: "What is the purpose of the ON DELETE SET NULL clause in MySQL?",
            studyGuideInformation: "The ON DELETE SET NULL clause in MySQL is used to specify that when a row in the parent table is deleted, the corresponding foreign key values in the child table should be set to NULL.",
            correctAnswer: "Specifies that when a row in the parent table is deleted, the corresponding foreign key values in the child table should be set to NULL",
            incorrectAnswers: [
                "Sorts the table in alphabetical order",
                "Encrypts the data stored in a table for security",
                "Ensures that all records are accessible via SQL queries"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html"
        },
        {
            question: "What is a prepared statement in MySQL?",
            studyGuideInformation: "A prepared statement in MySQL is a feature that allows developers to execute the same SQL statement repeatedly with high efficiency. It is particularly useful for queries that are executed multiple times with different parameter values.",
            correctAnswer: "A feature that allows developers to execute the same SQL statement repeatedly with high efficiency",
            incorrectAnswers: [
                "A feature that allows developers to execute SQL statements without parameters",
                "A feature that allows developers to execute SQL statements with low efficiency",
                "A feature that allows developers to execute SQL statements with high security"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html"
        },
        {
            question: "what is the syntax for a prepared statement in MySQL?",
            studyGuideInformation: "The syntax for a prepared statement in MySQL is 'PREPARE statement_name FROM sql_statement;'.",
            correctAnswer: "PREPARE statement_name FROM sql_statement;",
            incorrectAnswers: [
                "EXECUTE statement_name FROM sql_statement;",
                "RUN statement_name FROM sql_statement;",
                "START statement_name FROM sql_statement;"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html"
        },
        {
            question: "what will select columnName, COUNT(id) AS 'Count' from tableName GROUP BY columnName; do in MySQL?",
            studyGuideInformation: "The SELECT columnName, COUNT(id) AS 'Count' FROM tableName GROUP BY columnName; command is used to retrieve the count of unique values in a specific column of a table in MySQL.",
            correctAnswer: "Retrieves the count of unique values in a specific column of a table",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what will select columnName, SUM(id) AS 'Sum' from tableName GROUP BY columnName; do in MySQL?",
            studyGuideInformation: "The SELECT columnName, SUM(id) AS 'Sum' FROM tableName GROUP BY columnName; command is used to retrieve the sum of values in a specific column of a table in MySQL.",
            correctAnswer: "Retrieves the sum of values in a specific column of a table",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what are some alternatives for the count and sum functions in MySQL?",
            studyGuideInformation: "Some alternatives for the count and sum functions in MySQL include: AVG, MIN, MAX, and more.",
            correctAnswer: "AVG, MIN, MAX, and more",
            incorrectAnswers: [
                "SORT, FILTER, GROUP, and more",
                "ADD, SUBTRACT, MULTIPLY, and more",
                "CREATE, READ, UPDATE, DELETE, and more"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/group-by-functions.html"
        },
        {
            question: "What does the command 'SELECT * FROM table_name WHERE column_name LIKE 'value%';' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name WHERE column_name LIKE 'value%'; command is used to retrieve all rows from a specific table where the value in a specific column starts with a specified string.",
            correctAnswer: "Retrieves all rows from a specific table where the value in a specific column starts with a specified string",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/string-comparison-functions.html"
        },
        {
            question: "what does the JOIN clause do in MySQL?",
            studyGuideInformation: "The JOIN clause in MySQL is used to combine rows from two or more tables, based on a related column between them. It allows for the querying of data that exists across multiple tables, facilitating a relational database's ability to store data in separate tables for efficiency.",
            correctAnswer: "Combines rows from two or more tables, based on a related column",
            incorrectAnswers: [
                "Duplicates the rows in a table for backup purposes",
                "Increments the values in one table based on values in another",
                "Restricts user access to certain tables"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/join.html"
        },
        {
            question: "what does the command 'SELECT * FROM table_name ORDER BY column_name;' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name ORDER BY column_name; command is used to retrieve all rows from a specific table and order them based on the values in a specific column.",
            correctAnswer: "Retrieves all rows from a specific table and orders them based on the values in a specific column",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what does the command 'SELECT * FROM table_name LIMIT 10;' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name LIMIT 10; command is used to retrieve the first 10 rows from a specific table in MySQL.",
            correctAnswer: "Retrieves the first 10 rows from a specific table",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what does the command 'SELECT * FROM table_name OFFSET 10;' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name OFFSET 10; command is used to retrieve all rows from a specific table, starting from the 11th row.",
            correctAnswer: "Retrieves all rows from a specific table, starting from the 11th row",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what does the command 'SELECT * FROM table_name LIMIT 10 OFFSET 10;' do in MySQL?",
            studyGuideInformation: "The SELECT * FROM table_name LIMIT 10 OFFSET 10; command is used to retrieve 10 rows from a specific table, starting from the 11th row.",
            correctAnswer: "Retrieves 10 rows from a specific table, starting from the 11th row",
            incorrectAnswers: [
                "Deletes all rows and columns from a specific table",
                "Updates all rows and columns in a specific table",
                "Inserts new rows and columns into a specific table"
            ],
            resources: "https://dev.mysql.com/doc/refman/8.0/en/select.html"
        },
        {
            question: "what is an ORM in the context of MySQL?",
            studyGuideInformation: "ORM, used in the context of MySQL, stands for Object-Relational Mapping. It is a programming technique for converting data between incompatible systems using object-oriented programming languages.",
            correctAnswer: "Object-Relational Mapping",
            incorrectAnswers: [
                "Object-Related Mapping",
                "Object-Resource Mapping",
                "Object-Record Mapping"
            ],
            resources: "https://en.wikipedia.org/wiki/Object-relational_mapping"
        },
        {
            question: "What is sequelize in the context of MySQL?",
            studyGuideInformation: "Sequelize is a promise-based Node.js ORM for MySQL that provides an easy-to-use API for interacting with MySQL databases. It supports the dialects of MySQL, MariaDB, SQLite, and PostgreSQL.",
            correctAnswer: "A promise-based Node.js ORM for MySQL",
            incorrectAnswers: [
                "A programming language used for data analysis",
                "A web server software",
                "A NoSQL database for high-volume web applications"
            ],
            resources: "https://sequelize.org/"
        },
        {
            question: "What is a model in a Node.js application?",
            studyGuideInformation: "A model in a Node.js application is a JavaScript class that represents a table in a database. It provides a way to interact with the database using JavaScript objects and methods.",
            correctAnswer: "A JavaScript class that represents a table in a database",
            incorrectAnswers: [
                "A JavaScript object that represents a table in a database",
                "A JavaScript function that represents a table in a database",
                "A JavaScript method that represents a table in a database"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "How would a model be created in a Node.js application using sequelize?",
            studyGuideInformation: "A model would be created in a Node.js application using sequelize by defining a new JavaScript class that extends the Sequelize.Model class. This class represents a table in the database and provides a way to interact with the data.",
            correctAnswer: "By defining a new JavaScript class that extends the Sequelize.Model class",
            incorrectAnswers: [
                "By defining a new JavaScript object that extends the Sequelize.Model object",
                "By defining a new JavaScript function that extends the Sequelize.Model function",
                "By defining a new JavaScript method that extends the Sequelize.Model method"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What will const {model, dataTypes} = require('sequelize'); do in a Node.js application?",
            studyGuideInformation: "The const {model, dataTypes} = require('sequelize'); statement in a Node.js application is used to import the model and data types from the sequelize library. This allows the developer to define new models and data types for use in the application.",
            correctAnswer: "Imports the model and data types from the sequelize library",
            incorrectAnswers: [
                "Exports the model and data types from the sequelize library",
                "Defines the model and data types for use in the application",
                "Initializes the model and data types for use in the application"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what does class User extends Model {} User.init() do in a Node.js application using sequelize?",
            studyGuideInformation: "The class User extends Model {} User.init() statement in a Node.js application using sequelize is used to define a new model for the User table in the database. It extends the Sequelize.Model class and initializes the model with the appropriate attributes and options.",
            correctAnswer: "Defines a new model for the User table in the database",
            incorrectAnswers: [
                "Exports a new model for the User table in the database",
                "Initializes a new model for the User table in the database",
                "Imports a new model for the User table in the database"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what does User.init({}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The User.init({}) statement in a Node.js application using sequelize is used to initialize the User model with the appropriate attributes and options. This includes defining the columns of the table and specifying any constraints or settings for the model.",
            correctAnswer: "Initializes the User model with the appropriate attributes and options",
            incorrectAnswers: [
                "Exports the User model with the appropriate attributes and options",
                "Defines the User model with the appropriate attributes and options",
                "Imports the User model with the appropriate attributes and options"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the difference between user.create() and user.build() in a Node.js application using sequelize?",
            studyGuideInformation: "The user.create() method in a Node.js application using sequelize is used to create a new row in the User table with the specified data. The user.build() method, on the other hand, is used to create a new instance of the User model with the specified data, but does not save it to the database.",
            correctAnswer: "user.create() is used to create a new row in the User table, while user.build() is used to create a new instance of the User model",
            incorrectAnswers: [
                "user.create() is used to create a new instance of the User model, while user.build() is used to create a new row in the User table",
                "user.create() is used to create a new row in the User table, while user.build() is used to create a new row in the User model",
                "user.create() is used to create a new instance of the User model, while user.build() is used to create a new instance of the User table"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does user.bulkCreate() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.bulkCreate() method in a Node.js application using sequelize is used to create multiple new rows in the User table with the specified data. This can be more efficient than creating each row individually.",
            correctAnswer: "Creates multiple new rows in the User table with the specified data",
            incorrectAnswers: [
                "Creates a new row in the User table with the specified data",
                "Creates a new instance of the User model with the specified data",
                "Creates a new row in the User model with the specified data"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does user.findAll() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.findAll() method in a Node.js application using sequelize is used to retrieve all rows from the User table that match the specified criteria. This allows the developer to query the database and retrieve the data they need.",
            correctAnswer: "Retrieves all rows from the User table that match the specified criteria",
            incorrectAnswers: [
                "Deletes all rows from the User table that match the specified criteria",
                "Updates all rows in the User table that match the specified criteria",
                "Inserts new rows into the User table that match the specified criteria"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does user.findOne() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.findOne() method in a Node.js application using sequelize is used to retrieve the first row from the User table that matches the specified criteria. This allows the developer to query the database and retrieve a single row of data.",
            correctAnswer: "Retrieves the first row from the User table that matches the specified criteria",
            incorrectAnswers: [
                "Deletes the first row from the User table that matches the specified criteria",
                "Updates the first row in the User table that matches the specified criteria",
                "Inserts a new row into the User table that matches the specified criteria"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does user.update() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.update() method in a Node.js application using sequelize is used to update one or more rows in the User table that match the specified criteria. This allows the developer to modify the data in the database.",
            correctAnswer: "Updates one or more rows in the User table that match the specified criteria",
            incorrectAnswers: [
                "Deletes one or more rows from the User table that match the specified criteria",
                "Inserts one or more new rows into the User table that match the specified criteria",
                "Retrieves one or more rows from the User table that match the specified criteria"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does user.destroy() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.destroy() method in a Node.js application using sequelize is used to delete one or more rows from the User table that match the specified criteria. This allows the developer to remove data from the database.",
            correctAnswer: "Deletes one or more rows from the User table that match the specified criteria",
            incorrectAnswers: [
                "Updates one or more rows in the User table that match the specified criteria",
                "Inserts one or more new rows into the User table that match the specified criteria",
                "Retrieves one or more rows from the User table that match the specified criteria"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what does user.findbyPk() do in a Node.js application using sequelize?",
            studyGuideInformation: "The user.findByPk() method in a Node.js application using sequelize is used to retrieve a row from the User table with the specified primary key. This allows the developer to query the database and retrieve a specific row of data.",
            correctAnswer: "Retrieves a row from the User table with the specified primary key",
            incorrectAnswers: [
                "Deletes a row from the User table with the specified primary key",
                "Updates a row in the User table with the specified primary key",
                "Inserts a new row into the User table with the specified primary key"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "How can the request body be used to find a specific row in a Node.js application using sequelize?",
            studyGuideInformation: "The request body can be used to find a specific row in a Node.js application using sequelize by passing the primary key value from the request body to the findByPk() method of the User model.",
            correctAnswer: "Model.findByPk(req.body.id)",
            incorrectAnswers: [
                "Model.findByPk(req.body)",
                "Model.findByPk(req.params.id)",
                "Model.findByPk(req.query.id)"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "How can the request body be used to create a new row in a Node.js application using sequelize?",
            studyGuideInformation: "The request body can be used to create a new row in a Node.js application using sequelize by passing the data from the request body to the create() method of the User model.",
            correctAnswer: "Model.create(req.body)",
            incorrectAnswers: [
                "Model.create(req.body.id)",
                "Model.create(req.params)",
                "Model.create(req.query)"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "What does the order:, where:, and limit: options do in a Node.js application using sequelize?",
            studyGuideInformation: "The order:, where:, and limit: options in a Node.js application using sequelize are used to specify the order of the rows, the conditions for selecting rows, and the maximum number of rows to retrieve, respectively.",
            correctAnswer: "Specify the order of the rows, the conditions for selecting rows, and the maximum number of rows to retrieve",
            incorrectAnswers: [
                "Specify the columns to retrieve, the conditions for selecting rows, and the maximum number of rows to retrieve",
                "Specify the order of the columns, the conditions for selecting columns, and the maximum number of columns to retrieve",
                "Specify the order of the rows, the conditions for selecting columns, and the maximum number of columns to retrieve"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "How can the attributes: option be used to minimize the data retrieved from a table in a Node.js application using sequelize?",
            studyGuideInformation: "The attributes: option in a Node.js application using sequelize is used to specify the columns to retrieve or not to retrieve from the table. This allows the developer to minimize the amount of data retrieved from the database.",
            correctAnswer: "Model.findAll({ attributes: { exclude: ['column1', 'column2']} })",
            incorrectAnswers: [
                "Model.findAll({ attributes: { include: ['column1', 'column2']} })",
                "Model.findAll({ attributes: ['column1', 'column2'] })",
                "Model.findAll({ attributes: { exclude: ['column1', 'column2']} })"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the validate: option used for in a Node.js application using sequelize?",
            studyGuideInformation: "The validate: option in a Node.js application using sequelize is used to specify validation rules for the data being inserted or updated in the table. This allows the developer to enforce data integrity and consistency.",
            correctAnswer: "Model.init({ validate: {}})",
            incorrectAnswers: [
                "Model.init({ validate: { rules: {}})",
                "Model.init({ validate: { constraints: {}})",
                "Model.init({ validate: { integrity: {}})"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the paranoid: option used for in a Node.js application using sequelize?",
            studyGuideInformation: "The paranoid: option in a Node.js application using sequelize is used to specify that rows should not be deleted from the table, but instead marked as deleted. This allows the developer to maintain a history of changes in the database.",
            correctAnswer: "Model.init({ paranoid: true })",
            incorrectAnswers: [
                "Model.init({ paranoid: false })",
                "Model.init({ deleted: true })",
                "Model.init({ deleted: false })"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the timestamps: option used for in a Node.js application using sequelize?",
            studyGuideInformation: "The timestamps: option in a Node.js application using sequelize is used to specify that the createdAt and updatedAt columns should be automatically added to the table. This allows the developer to track when rows were created and last updated.",
            correctAnswer: "Model.init({ timestamps: true })",
            incorrectAnswers: [
                "Model.init({ timestamps: false })",
                "Model.init({ created: true })",
                "Model.init({ updated: true })"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the freezeTableName: option used for in a Node.js application using sequelize?",
            studyGuideInformation: "The freezeTableName: option in a Node.js application using sequelize is used to specify that the table name should not be pluralized. This allows the developer to use a custom table name without modification.",
            correctAnswer: "Model.init({ freezeTableName: true })",
            incorrectAnswers: [
                "Model.init({ freezeTableName: false })",
                "Model.init({ pluralizeTableName: true })",
                "Model.init({ pluralizeTableName: false })"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what is the underscored: option used for in a Node.js application using sequelize?",
            studyGuideInformation: "The underscored: option in a Node.js application using sequelize is used to specify that the column names should be converted to snake_case. This allows the developer to use a consistent naming convention for the columns in the table.",
            correctAnswer: "Model.init({ underscored: true })",
            incorrectAnswers: [
                "Model.init({ underscored: false })",
                "Model.init({ camelCase: true })",
                "Model.init({ camelCase: false })"
            ],
            resources: "https://sequelize.org/master/manual/getting-started.html"
        },
        {
            question: "what are hooks in the context of a Node.js application using sequelize?",
            studyGuideInformation: "Hooks, in the context of a Node.js application using sequelize, are functions that are called before or after certain operations are performed on the model. They allow the developer to execute custom logic at specific points in the data lifecycle.",
            correctAnswer: "Functions that are called before or after certain operations are performed on the model",
            incorrectAnswers: [
                "Functions that are called before or after the model is initialized",
                "Functions that are called before or after the model is defined",
                "Functions that are called before or after the model is created"
            ],
            resources: "https://sequelize.org/master/manual/hooks.html"
        },
        {
            question: "how can the beforeCreate() or beforeUpdate() hooks be beneficial in a Node.js application using sequelize?",
            studyGuideInformation: "The beforeCreate() or beforeUpdate() hooks in a Node.js application using sequelize can be beneficial by allowing the developer to perform custom logic before a new row is created or an existing row is updated in the table. This can be useful for tasks such as data validation or manipulation.",
            correctAnswer: "By allowing the developer to perform custom logic before a new row is created or an existing row is updated in the table",
            incorrectAnswers: [
                "By allowing the developer to perform custom logic before the model is created or updated",
                "By allowing the developer to perform custom logic before the row is created or updated",
                "By allowing the developer to perform custom logic before the data is created or updated"
            ],
            resources: "https://sequelize.org/master/manual/hooks.html"
        },
        {
            question: "What is an instance method in the context of a Node.js application using sequelize?",
            studyGuideInformation: "An instance method, in the context of a Node.js application using sequelize, is a method that is defined on the model's prototype and can be called on instances of the model. It allows the developer to encapsulate logic related to a specific row in the table.",
            correctAnswer: "A method that is defined on the model's prototype and can be called on instances of the model",
            incorrectAnswers: [
                "A method that is defined on the model's instance and can be called on instances of the model",
                "A method that is defined on the model's prototype and can be called on the model",
                "A method that is defined on the model's instance and can be called on the model"
            ],
            resources: "https://sequelize.org/master/manual/instance-methods.html"
        },
        {
            question: "what is a one-to-one relationship in the context of a Node.js application using sequelize?",
            studyGuideInformation: "A one-to-one relationship, in the context of a Node.js application using sequelize, is a type of association between two models where each instance of one model is associated with exactly one instance of the other model. This is typically represented by a foreign key in one of the tables.",
            correctAnswer: "A type of association between two models where each instance of one model is associated with exactly one instance of the other model",
            incorrectAnswers: [
                "A type of association between two models where each instance of one model is associated with multiple instances of the other model",
                "A type of association between two models where each instance of one model is associated with zero instances of the other model",
                "A type of association between two models where each instance of one model is associated with one or more instances of the other model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what is a one-to-many relationship in the context of a Node.js application using sequelize?",
            studyGuideInformation: "A one-to-many relationship, in the context of a Node.js application using sequelize, is a type of association between two models where each instance of one model is associated with multiple instances of the other model. This is typically represented by a foreign key in one of the tables.",
            correctAnswer: "A type of association between two models where each instance of one model is associated with multiple instances of the other model",
            incorrectAnswers: [
                "A type of association between two models where each instance of one model is associated with exactly one instance of the other model",
                "A type of association between two models where each instance of one model is associated with zero instances of the other model",
                "A type of association between two models where each instance of one model is associated with one or more instances of the other model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what is a many-to-many relationship in the context of a Node.js application using sequelize?",
            studyGuideInformation: "A many-to-many relationship, in the context of a Node.js application using sequelize, is a type of association between two models where each instance of one model is associated with multiple instances of the other model, and vice versa. This is typically represented by a join table that contains foreign keys to both models.",
            correctAnswer: "A type of association between two models where each instance of one model is associated with multiple instances of the other model, and vice versa",
            incorrectAnswers: [
                "A type of association between two models where each instance of one model is associated with exactly one instance of the other model",
                "A type of association between two models where each instance of one model is associated with zero instances of the other model",
                "A type of association between two models where each instance of one model is associated with one or more instances of the other model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does model.hasOne(model2, {foreignKey: 'column_name'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.hasOne(model2, {foreignKey: 'column_name'}) statement in a Node.js application using sequelize is used to define a one-to-one relationship between the two models, with the specified foreign key column in the second model.",
            correctAnswer: "Defines a one-to-one relationship between the two models, with the specified foreign key column in the second model",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified foreign key column in the first model",
                "Defines a one-to-many relationship between the two models, with the specified foreign key column in the second model",
                "Defines a many-to-many relationship between the two models, with the specified foreign key column in the second model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            quesstion: "what does model.belongsTo(model2, {foreignKey: 'column_name'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.belongsTo(model2, {foreignKey: 'column_name'}) statement in a Node.js application using sequelize is used to define a one-to-one relationship between the two models, with the specified foreign key column in the first model.",
            correctAnswer: "Defines a one-to-one relationship between the two models, with the specified foreign key column in the first model",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified foreign key column in the second model",
                "Defines a one-to-many relationship between the two models, with the specified foreign key column in the first model",
                "Defines a many-to-many relationship between the two models, with the specified foreign key column in the first model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does model.hasMany(model2, {foreignKey: 'column_name'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.hasMany(model2, {foreignKey: 'column_name'}) statement in a Node.js application using sequelize is used to define a one-to-many relationship between the two models, with the specified foreign key column in the second model.",
            correctAnswer: "Defines a one-to-many relationship between the two models, with the specified foreign key column in the second model",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified foreign key column in the second model",
                "Defines a one-to-one relationship between the two models, with the specified foreign key column in the first model",
                "Defines a many-to-many relationship between the two models, with the specified foreign key column in the second model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"   
        },
        {
            question: "what does model.belongsToMany(model2, {through: 'join_table'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.belongsToMany(model2, {through: 'join_table'}) statement in a Node.js application using sequelize is used to define a many-to-many relationship between the two models, with the specified join table.",
            correctAnswer: "Defines a many-to-many relationship between the two models, with the specified join table",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified join table",
                "Defines a one-to-many relationship between the two models, with the specified join table",
                "Defines a many-to-many relationship between the two models, with the specified foreign key column in the first model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name'}) statement in a Node.js application using sequelize is used to define a many-to-many relationship between the two models, with the specified join table and foreign key column in the first model.",
            correctAnswer: "Defines a many-to-many relationship between the two models, with the specified join table and foreign key column in the first model",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified join table and foreign key column in the first model",
                "Defines a one-to-many relationship between the two models, with the specified join table and foreign key column in the first model",
                "Defines a many-to-many relationship between the two models, with the specified join table and foreign key column in the second model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name', otherKey: 'column_name'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name', otherKey: 'column_name'}) statement in a Node.js application using sequelize is used to define a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, and foreign key column in the second model.",
            correctAnswer: "Defines a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, and foreign key column in the second model",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified join table, foreign key column in the first model, and foreign key column in the second model",
                "Defines a one-to-many relationship between the two models, with the specified join table, foreign key column in the first model, and foreign key column in the second model",
                "Defines a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, and foreign key column in the second model"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name', otherKey: 'column_name', as: 'alias'}) do in a Node.js application using sequelize?",
            studyGuideInformation: "The model.belongsToMany(model2, {through: 'join_table', foreignKey: 'column_name', otherKey: 'column_name', as: 'alias'}) statement in a Node.js application using sequelize is used to define a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, foreign key column in the second model, and an alias for the association.",
            correctAnswer: "Defines a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, foreign key column in the second model, and an alias for the association",
            incorrectAnswers: [
                "Defines a one-to-one relationship between the two models, with the specified join table, foreign key column in the first model, foreign key column in the second model, and an alias for the association",
                "Defines a one-to-many relationship between the two models, with the specified join table, foreign key column in the first model, foreign key column in the second model, and an alias for the association",
                "Defines a many-to-many relationship between the two models, with the specified join table, foreign key column in the first model, foreign key column in the second model, and an alias for the association"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        }  ,
        {
            question: "What does the onCascade: 'DELETE' option do in a Node.js application using sequelize?",
            studyGuideInformation: "The onCascade: 'DELETE' option in a Node.js application using sequelize is used to specify that when a row in the associated table is deleted, the associated rows in the current table should also be deleted. This allows the developer to maintain data integrity and consistency.",
            correctAnswer: "Specifies that when a row in the associated table is deleted, the associated rows in the current table should also be deleted",
            incorrectAnswers: [
                "Specifies that when a row in the associated table is deleted, the associated rows in the current table should be updated",
                "Specifies that when a row in the associated table is updated, the associated rows in the current table should also be updated",
                "Specifies that when a row in the associated table is updated, the associated rows in the current table should be deleted"
                ],
            resources: "https://sequelize.org/master/manual/associations.html"
        },
        {
            question: "what does sequelize.literal('expression') do in a Node.js application using sequelize?",
            studyGuideInformation: "The sequelize.literal('expression') statement in a Node.js application using sequelize is used to specify a raw SQL expression that can be used in queries. This allows the developer to include custom SQL code in their queries.",
            correctAnswer: "Specifies a raw SQL expression that can be used in queries",
            incorrectAnswers: [
                "Specifies a raw SQL expression that can be used in models",
                "Specifies a raw SQL expression that can be used in migrations",
                "Specifies a raw SQL expression that can be used in hooks"
                ],
            resources: "https://sequelize.org/master/manual/raw-queries.html"
        },

];

