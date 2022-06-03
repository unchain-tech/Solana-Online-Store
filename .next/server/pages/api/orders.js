"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "(api)/./pages/api/orders.js":
/*!*****************************!*\
  !*** ./pages/api/orders.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _orders_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.json */ \"(api)/./pages/api/orders.json\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n// このAPIエンドポイントを使用すると、ユーザーはデータをPOSTしてレコードを追加し、GETで取得できます\n\n\nfunction get(req, res) {\n    const { buyer  } = req.query;\n    // Check if this address has any orders\n    const buyerOrders = _orders_json__WEBPACK_IMPORTED_MODULE_0__.filter((order)=>order.buyer === buyer\n    );\n    if (buyerOrders.length === 0) {\n        // 204 =リクエストを正常に処理し、コンテンツを返しません\n        res.status(204).send();\n    } else {\n        res.status(200).json(buyerOrders);\n    }\n}\nasync function post(req, res) {\n    console.log(\"Received add order request\", req.body);\n    // 新しい注文をorders.jsonに追加します\n    try {\n        const newOrder = req.body;\n        // このアドレスがこのアイテムを購入していない場合は、orders.jsonに注文を追加します\n        if (!_orders_json__WEBPACK_IMPORTED_MODULE_0__.find((order)=>order.buyer === newOrder.buyer.toString() && order.itemID === newOrder.itemID\n        )) {\n            _orders_json__WEBPACK_IMPORTED_MODULE_0__.push(newOrder);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_1__.writeFile)(\"./pages/api/orders.json\", JSON.stringify(_orders_json__WEBPACK_IMPORTED_MODULE_0__, null, 2));\n            res.status(200).json(_orders_json__WEBPACK_IMPORTED_MODULE_0__);\n        } else {\n            res.status(400).send(\"Order already exists\");\n        }\n    } catch (err) {\n        res.status(400).send(err);\n    }\n}\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            get(req, res);\n            break;\n        case \"POST\":\n            await post(req, res);\n            break;\n        default:\n            res.status(405).send(`Method ${req.method} not allowed`);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNtQztBQUNLO0FBRXhDLFNBQVNFLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDckIsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRTNCLHVDQUF1QztJQUN2QyxNQUFNQyxXQUFXLEdBQUdQLGdEQUFhLENBQUMsQ0FBQ1MsS0FBSyxHQUFLQSxLQUFLLENBQUNKLEtBQUssS0FBS0EsS0FBSztJQUFBLENBQUM7SUFDbkUsSUFBSUUsV0FBVyxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzVCO1FBQ2dETixHQUE3QyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBRSxDQUFDO0tBQ3hCLE1BQU07UUFDTFIsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ04sV0FBVyxDQUFDLENBQUM7S0FDbkM7Q0FDRjtBQUVELGVBQWVPLElBQUksQ0FBQ1gsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUJXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFYixHQUFHLENBQUNjLElBQUksQ0FBQyxDQUFDO0lBQ3BEO0lBQ3dCLElBQXBCO1FBQ0YsTUFBTUMsUUFBUSxHQUFHZixHQUFHLENBQUNjLElBQUk7UUFFekI7UUFDQSxJQUFJLENBQUNqQiw4Q0FBVyxDQUFDLENBQUNTLEtBQUssR0FBS0EsS0FBSyxDQUFDSixLQUFLLEtBQUthLFFBQVEsQ0FBQ2IsS0FBSyxDQUFDZSxRQUFRLEVBQUUsSUFBSVgsS0FBSyxDQUFDWSxNQUFNLEtBQUtILFFBQVEsQ0FBQ0csTUFBTTtRQUFBLENBQUMsRUFBRTtZQUMxR3JCLDhDQUFXLENBQUNrQixRQUFRLENBQUMsQ0FBQztZQUN0QixNQUFNakIsc0RBQVMsQ0FBQyx5QkFBeUIsRUFBRXNCLElBQUksQ0FBQ0MsU0FBUyxDQUFDeEIseUNBQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RUksR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ2IseUNBQU0sQ0FBQyxDQUFDO1NBQzlCLE1BQU07WUFDTEksR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQzlDO0tBQ0YsQ0FBQyxPQUFPYSxHQUFHLEVBQUU7UUFDWnJCLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNhLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFYyxlQUFlQyxPQUFPLENBQUN2QixHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxPQUFRRCxHQUFHLENBQUN3QixNQUFNO1FBQ2hCLEtBQUssS0FBSztZQUNSekIsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULE1BQU1VLElBQUksQ0FBQ1gsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1I7WUFDRUEsR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRVQsR0FBRyxDQUFDd0IsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDNUQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItbmV4dGpzLXN0YXJ0ZXIvLi9wYWdlcy9hcGkvb3JkZXJzLmpzPzFhODkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g44GT44GuQVBJ44Ko44Oz44OJ44Od44Kk44Oz44OI44KS5L2/55So44GZ44KL44Go44CB44Om44O844K244O844Gv44OH44O844K/44KSUE9TVOOBl+OBpuODrOOCs+ODvOODieOCkui/veWKoOOBl+OAgUdFVOOBp+WPluW+l+OBp+OBjeOBvuOBmVxyXG5pbXBvcnQgb3JkZXJzIGZyb20gXCIuL29yZGVycy5qc29uXCI7XHJcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gXCJmcy9wcm9taXNlc1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBidXllciB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGlzIGFkZHJlc3MgaGFzIGFueSBvcmRlcnNcclxuICBjb25zdCBidXllck9yZGVycyA9IG9yZGVycy5maWx0ZXIoKG9yZGVyKSA9PiBvcmRlci5idXllciA9PT0gYnV5ZXIpO1xyXG4gIGlmIChidXllck9yZGVycy5sZW5ndGggPT09IDApIHtcclxuICAgIC8vIDIwNCA944Oq44Kv44Ko44K544OI44KS5q2j5bi444Gr5Yem55CG44GX44CB44Kz44Oz44OG44Oz44OE44KS6L+U44GX44G+44Gb44KTXHJcbiAgICByZXMuc3RhdHVzKDIwNCkuc2VuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihidXllck9yZGVycyk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwb3N0KHJlcSwgcmVzKSB7XHJcbiAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBhZGQgb3JkZXIgcmVxdWVzdFwiLCByZXEuYm9keSk7XHJcbiAgLy8g5paw44GX44GE5rOo5paH44KSb3JkZXJzLmpzb27jgavov73liqDjgZfjgb7jgZlcclxuICB0cnkge1xyXG4gICAgY29uc3QgbmV3T3JkZXIgPSByZXEuYm9keTtcclxuXHJcbiAgICAvLyDjgZPjga7jgqLjg4njg6zjgrnjgYzjgZPjga7jgqLjgqTjg4bjg6DjgpLos7zlhaXjgZfjgabjgYTjgarjgYTloLTlkIjjga/jgIFvcmRlcnMuanNvbuOBq+azqOaWh+OCkui/veWKoOOBl+OBvuOBmVxyXG4gICAgaWYgKCFvcmRlcnMuZmluZCgob3JkZXIpID0+IG9yZGVyLmJ1eWVyID09PSBuZXdPcmRlci5idXllci50b1N0cmluZygpICYmIG9yZGVyLml0ZW1JRCA9PT0gbmV3T3JkZXIuaXRlbUlEKSkge1xyXG4gICAgICBvcmRlcnMucHVzaChuZXdPcmRlcik7XHJcbiAgICAgIGF3YWl0IHdyaXRlRmlsZShcIi4vcGFnZXMvYXBpL29yZGVycy5qc29uXCIsIEpTT04uc3RyaW5naWZ5KG9yZGVycywgbnVsbCwgMikpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJPcmRlciBhbHJlYWR5IGV4aXN0c1wiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGVycik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgIGdldChyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgYXdhaXQgcG9zdChyZXEsIHJlcyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDUpLnNlbmQoYE1ldGhvZCAke3JlcS5tZXRob2R9IG5vdCBhbGxvd2VkYCk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm9yZGVycyIsIndyaXRlRmlsZSIsImdldCIsInJlcSIsInJlcyIsImJ1eWVyIiwicXVlcnkiLCJidXllck9yZGVycyIsImZpbHRlciIsIm9yZGVyIiwibGVuZ3RoIiwic3RhdHVzIiwic2VuZCIsImpzb24iLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJuZXdPcmRlciIsImZpbmQiLCJ0b1N0cmluZyIsIml0ZW1JRCIsInB1c2giLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyIiwiaGFuZGxlciIsIm1ldGhvZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders.json":
/*!*******************************!*\
  !*** ./pages/api/orders.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"buyer":"2TmQsWGFh5vhqJdDrG6uA2MRstGrUwUCiiThyHL9HaMe","orderID":"9GAFQg6tqoYgpkkoW7gijyz3xQKa9YENJyjgrvKuzrhR","itemID":1},{"buyer":"2TmQsWGFh5vhqJdDrG6uA2MRstGrUwUCiiThyHL9HaMe","orderID":"DEVh3m5KpdQsL273HJc49KpoD7wdU127FjFfiNfsHbhe","itemID":4},{"buyer":"2TmQsWGFh5vhqJdDrG6uA2MRstGrUwUCiiThyHL9HaMe","orderID":"2nwEwB1Yi26i3QdKsUcZZB28r3UyxSswARRbBWwVJoKF","itemID":5}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders.js"));
module.exports = __webpack_exports__;

})();