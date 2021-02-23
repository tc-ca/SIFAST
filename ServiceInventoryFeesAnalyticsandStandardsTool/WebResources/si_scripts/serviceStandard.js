"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path='../typings/XRM/dg.xrmquery.web.d.ts' />
var SIFAST;
(function (SIFAST) {
    var ServiceStandard;
    (function (ServiceStandard) {
        var Form;
        function SetNames(eContext) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var template, templateObject, templateValue, templateValueType, serviceTemplate, valueType;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            Form = eContext.getFormContext();
                            template = Form.getAttribute("si_template");
                            templateObject = template.getValue();
                            if (templateObject == null) {
                                return [2 /*return*/];
                            }
                            templateValue = Form.getAttribute("si_value").getValue();
                            if (templateValue == null) {
                                return [2 /*return*/];
                            }
                            templateValueType = Form.getAttribute("si_valuetype").getValue();
                            if (templateValueType == null) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, XrmQuery.retrieve(function (x) { return x.si_servicestandardtemplates; }, templateObject[0].id)
                                    .select(function (x) { return [x.si_englishname, x.si_frenchname]; })
                                    .promise()];
                        case 1:
                            serviceTemplate = _c.sent();
                            return [4 /*yield*/, XrmQuery.retrieve(function (x) { return x.si_servicestandardvaluetypes; }, templateValueType[0].id)
                                    .select(function (x) { return [x.si_valuetypeenm, x.si_valuetypefnm]; })
                                    .promise()];
                        case 2:
                            valueType = _c.sent();
                            if (valueType.si_valuetypeenm == null || valueType.si_valuetypefnm == null) {
                                return [2 /*return*/];
                            }
                            Form.getAttribute("si_nameen").setValue((_a = serviceTemplate.si_englishname) === null || _a === void 0 ? void 0 : _a.replace("{value}", templateValue.toString()).replace("{valuetype}", valueType.si_valuetypeenm));
                            Form.getAttribute("si_namefr").setValue((_b = serviceTemplate.si_frenchname) === null || _b === void 0 ? void 0 : _b.replace("{value}", templateValue.toString()).replace("{valuetype}", valueType.si_valuetypefnm));
                            return [2 /*return*/];
                    }
                });
            });
        }
        ServiceStandard.SetNames = SetNames;
    })(ServiceStandard = SIFAST.ServiceStandard || (SIFAST.ServiceStandard = {}));
})(SIFAST || (SIFAST = {}));
