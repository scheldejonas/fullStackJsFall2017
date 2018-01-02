/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	// XMLHttpRequest wrapper using callbacks
	var request = function request(obj, successHandler, errorHandler) {
	    var xhr = new XMLHttpRequest();
	    xhr.open(obj.method || "GET", obj.url);
	    if (obj.headers) {
	        Object.keys(obj.headers).forEach(function (key) {
	            xhr.setRequestHeader(key, obj.headers[key]);
	        });
	    }
	    xhr.onload = function () {
	        if (xhr.status >= 200 && xhr.status < 300) {
	            successHandler(xhr.response);
	        } else {
	            errorHandler(xhr.statusText);
	        }
	    };
	    xhr.onerror = function () {
	        return errorHandler(xhr.statusText);
	    };
	    xhr.send(obj.body);
	};
	
	request({ url: "employees.json" }, function (data) {
	    var employees = JSON.parse(data);
	    var html = "";
	    employees.forEach(function (employee) {
	        html += "\n                <div>\n                    <img src='" + employee.picture + "'/>\n                    <div>\n                        " + employee.firstName + " " + employee.lastName + "\n                        <p>" + employee.phone + "</p>\n                    </div>\n                </div>";
	    });
	    document.getElementById("list").innerHTML = html;
	}, function (error) {
	    console.log(error);
	});

/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map