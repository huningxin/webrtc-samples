/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tensorflow/tfjs-core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tensorflow/tfjs-core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tf = global.tf || {}, global.tf));
}(this, (function (exports, tf) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return n;
    }

    var tf__namespace = /*#__PURE__*/_interopNamespace(tf);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ENV = tf.env();
    /** The batched dispatching calls size in the device queue. */
    ENV.registerFlag('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE', function () { return 15; });
    /**
     * Whether we forward execution to the CPU backend if tensors are small and
     * reside on the CPU.
     */
    ENV.registerFlag('WEBGPU_CPU_FORWARD', function () { return true; });
    /**
     * Thread register block size for matmul kernel.
     */
    ENV.registerFlag('WEBGPU_MATMUL_WORK_PER_THREAD', function () { return 4; });
    /**
     * Whether to use conv2d_naive which directly implement the conv2d logic rather
     * than using a matmul to simulate.
     * Note that NCHW is not supported.
     */
    ENV.registerFlag('WEBGPU_USE_NAIVE_CONV2D', function () { return false; });
    /**
     * Whether to use conv2dTranspose_naive which directly implement the
     * conv2dTranspose logic rather than using a matmul to simulate.
     */
    ENV.registerFlag('WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE', function () { return false; });
    /**
     * Whether we will run im2col as a separate shader for convolution.
     * Note that NCHW is not supported.
     */
    ENV.registerFlag('WEBGPU_CONV_SEPARATE_IM2COL_SHADER', function () { return false; });
    /**
     * Whether we use low power GPU. Otherwise, a high performance GPU will be
     * requested.
     */
    ENV.registerFlag('WEBGPU_USE_LOW_POWER_GPU', function () { return false; });
    /**
     * Threshold for input tensor size that determines whether WebGPU backend will
     * delegate computation to CPU.
     *
     * Default value is 1000.
     */
    ENV.registerFlag('WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD', function () { return 1000; });
    /**
     * Whether to use a dummy canvas to make profiling tools like PIX work with
     * TFJS webgpu backend.
     */
    ENV.registerFlag('WEBGPU_USE_PROFILE_TOOL', function () { return false; });
    /**
     * Whether to use import API.
     */
    ENV.registerFlag('WEBGPU_USE_IMPORT', function () { return false; });

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BinaryOpType;
    (function (BinaryOpType) {
        BinaryOpType[BinaryOpType["MUL"] = 0] = "MUL";
        BinaryOpType[BinaryOpType["ADD"] = 1] = "ADD";
        BinaryOpType[BinaryOpType["SUB"] = 2] = "SUB";
        BinaryOpType[BinaryOpType["DIV"] = 3] = "DIV";
        BinaryOpType[BinaryOpType["EQUAL"] = 4] = "EQUAL";
        BinaryOpType[BinaryOpType["GREATER"] = 5] = "GREATER";
        BinaryOpType[BinaryOpType["GREATER_EQUAL"] = 6] = "GREATER_EQUAL";
        BinaryOpType[BinaryOpType["LESS"] = 7] = "LESS";
        BinaryOpType[BinaryOpType["LESS_EQUAL"] = 8] = "LESS_EQUAL";
        BinaryOpType[BinaryOpType["LOGICAL_AND"] = 9] = "LOGICAL_AND";
        BinaryOpType[BinaryOpType["NOT_EQUAL"] = 10] = "NOT_EQUAL";
        BinaryOpType[BinaryOpType["SQUARED_DIFFERENCE"] = 11] = "SQUARED_DIFFERENCE";
        BinaryOpType[BinaryOpType["INT_DIV"] = 12] = "INT_DIV";
        BinaryOpType[BinaryOpType["POW"] = 13] = "POW";
        BinaryOpType[BinaryOpType["PRELU"] = 14] = "PRELU";
        BinaryOpType[BinaryOpType["MAX"] = 15] = "MAX";
        BinaryOpType[BinaryOpType["MIN"] = 16] = "MIN";
        BinaryOpType[BinaryOpType["COMPLEX_MULTIPLY_REAL"] = 17] = "COMPLEX_MULTIPLY_REAL";
        BinaryOpType[BinaryOpType["COMPLEX_MULTIPLY_IMAG"] = 18] = "COMPLEX_MULTIPLY_IMAG";
    })(BinaryOpType || (BinaryOpType = {}));
    var ADD = 'return a + b;';
    // (Ar + Ai)(Br + Bi) =
    // ArBr + ArBi + AiBr + AiBi = ArBr - AB + ArBi + AiBr
    // Yr = ArBr - AB
    // Yi = ArBi + AiBr
    var COMPLEX_MULTIPLY_REAL = 'return areal * breal - aimag * bimag;';
    var COMPLEX_MULTIPLY_IMAG = 'return areal * bimag + aimag * breal;';
    var DIV = 'return a / b;';
    var MUL = 'return a * b;';
    var SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
    var SUB = 'return a - b;';
    var EQUAL = 'return f32(a == b);';
    var EQUAL_VEC4 = 'return vec4<f32>(a == b);';
    var GREATER = 'return f32(a > b);';
    var GREATER_VEC4 = 'return vec4<f32>(a > b);';
    var GREATER_EQUAL = 'return f32(a >= b);';
    var GREATER_EQUAL_VEC4 = 'return vec4<f32>(a >= b);';
    var LESS = 'return f32(a < b);';
    var LESS_VEC4 = 'return vec4<f32>(a < b);';
    var LESS_EQUAL = 'return f32(a <= b);';
    var LESS_EQUAL_VEC4 = 'return vec4<f32>(a <= b);';
    var LOGICAL_AND = 'return f32(f32(a) >= 1.0 && f32(b) >= 1.0);';
    var LOGICAL_AND_VEC4 = "return (vec4<f32>(a >= vec4<f32>(1.0)) *\n  vec4<f32>(b >= vec4<f32>(1.0)));";
    var CHECK_NAN_SNIPPET = "\n  if (isnan(a)) { return a; }\n  if (isnan(b)) { return b; }\n  ";
    var CHECK_NAN_SNIPPET_VEC4 = "\n  if (isNaN.r) {\n    resultTemp.r = uniforms.NAN;\n  }\n  if (isNaN.g) {\n    resultTemp.g = uniforms.NAN;\n  }\n  if (isNaN.b) {\n    resultTemp.b = uniforms.NAN;\n  }\n  if (isNaN.a) {\n    resultTemp.a = uniforms.NAN;\n  }\n  ";
    var INT_DIV = "\n  let s = sign(a) * sign(b);\n  let ia = i32(round(a));\n  let ib = i32(round(b));\n  return f32(idiv(ia, ib, s));\n  ";
    var INT_DIV_VEC4 = "\n  let ia = vec4<i32>(round(a));\n  let ib = vec4<i32>(round(b));\n  let cond = ib != vec4<i32>(0);\n  var resultTemp = vec4<i32>(0);\n  let s = sign(a) * sign(b);\n\n  // Windows (D3D) wants guaranteed non-zero int division at compile-time.\n  if (cond[0]) {\n    resultTemp[0] = idiv(ia[0], ib[0], s[0]);\n  }\n  if (cond[1]) {\n    resultTemp[1] = idiv(ia[1], ib[1], s[1]);\n  }\n  if (cond[2]) {\n    resultTemp[2] = idiv(ia[2], ib[2], s[2]);\n  }\n  if (cond[3]) {\n    resultTemp[3] = idiv(ia[3], ib[3], s[3]);\n  }\n  return vec4<f32>(resultTemp);\n  ";
    var NOT_EQUAL = 'return f32(a != b);';
    var NOT_EQUAL_VEC4 = 'return vec4<f32>(a != b);';
    var POW = "\n  if(a < 0.0 && floor(b) < b) {\n    return uniforms.NAN;\n  }\n  if (b == 0.0) {\n    return 1.0;\n  }\n  if (round(abs(b) % 2.0) != 1.0) {\n    return pow(abs(a), b);\n  }\n  return sign(a) * pow(abs(a), b);\n  ";
    var POW_VEC4 = "\n  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);\n  let isModRound1 = vec4<f32>(isModRound1Bool);\n  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);\n  var resultTemp = multiplier * pow(abs(a), b);\n\n  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS\n  let isExpZero = b == vec4<f32>(0.0);\n  if (isExpZero.r) {\n    resultTemp.r = 1.0;\n  }\n  if (isExpZero.g) {\n    resultTemp.g = 1.0;\n  }\n  if (isExpZero.b) {\n    resultTemp.b = 1.0;\n  }\n  if (isExpZero.a) {\n    resultTemp.a = 1.0;\n  }\n  let isNaN = a < vec4<f32>(0.0) & floor(b) < b;\n  " + CHECK_NAN_SNIPPET_VEC4 + "\n  return resultTemp;\n  ";
    var PRELU = "if (a < 0.0) { return b * a; }  return a;";
    var PRELU_VEC4 = "\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n  ";
    function getMinMaxString(op, useVec4) {
        var checkNanSnippet = useVec4 ? CHECK_NAN_SNIPPET_VEC4 : CHECK_NAN_SNIPPET;
        return useVec4 ? "\n    var resultTemp = vec4<f32>(" + op + "(a, b));\n    let isNaN = isnanVec4(a) | isnanVec4(b);\n    " + checkNanSnippet +
            "\n    return resultTemp;\n  " :
            checkNanSnippet + ("\n    return " + op + "(a, b);\n  ");
    }
    function getBinaryOpString(type, useVec4) {
        switch (type) {
            case BinaryOpType.MUL:
                return MUL;
            case BinaryOpType.ADD:
                return ADD;
            case BinaryOpType.SUB:
                return SUB;
            case BinaryOpType.DIV:
                return DIV;
            case BinaryOpType.EQUAL:
                return useVec4 ? EQUAL_VEC4 : EQUAL;
            case BinaryOpType.GREATER:
                return useVec4 ? GREATER_VEC4 : GREATER;
            case BinaryOpType.GREATER_EQUAL:
                return useVec4 ? GREATER_EQUAL_VEC4 : GREATER_EQUAL;
            case BinaryOpType.LESS:
                return useVec4 ? LESS_VEC4 : LESS;
            case BinaryOpType.LESS_EQUAL:
                return useVec4 ? LESS_EQUAL_VEC4 : LESS_EQUAL;
            case BinaryOpType.LOGICAL_AND:
                return useVec4 ? LOGICAL_AND_VEC4 : LOGICAL_AND;
            case BinaryOpType.NOT_EQUAL:
                return useVec4 ? NOT_EQUAL_VEC4 : NOT_EQUAL;
            case BinaryOpType.SQUARED_DIFFERENCE:
                return SQUARED_DIFFERENCE;
            case BinaryOpType.INT_DIV:
                return useVec4 ? INT_DIV_VEC4 : INT_DIV;
            case BinaryOpType.PRELU:
                return useVec4 ? PRELU_VEC4 : PRELU;
            case BinaryOpType.MAX:
                return getMinMaxString('max', useVec4);
            case BinaryOpType.MIN:
                return getMinMaxString('min', useVec4);
            case BinaryOpType.POW:
                return useVec4 ? POW_VEC4 : POW;
            case BinaryOpType.COMPLEX_MULTIPLY_REAL:
                return COMPLEX_MULTIPLY_REAL;
            case BinaryOpType.COMPLEX_MULTIPLY_IMAG:
                return COMPLEX_MULTIPLY_IMAG;
            default:
                throw new Error("BinaryType " + type + " is not implemented!");
        }
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var UnaryOpType;
    (function (UnaryOpType) {
        UnaryOpType[UnaryOpType["ABS"] = 0] = "ABS";
        UnaryOpType[UnaryOpType["CEIL"] = 1] = "CEIL";
        UnaryOpType[UnaryOpType["COS"] = 2] = "COS";
        UnaryOpType[UnaryOpType["COSH"] = 3] = "COSH";
        UnaryOpType[UnaryOpType["ELU"] = 4] = "ELU";
        UnaryOpType[UnaryOpType["EXP"] = 5] = "EXP";
        UnaryOpType[UnaryOpType["EXPM1"] = 6] = "EXPM1";
        UnaryOpType[UnaryOpType["FLOOR"] = 7] = "FLOOR";
        UnaryOpType[UnaryOpType["LINEAR"] = 8] = "LINEAR";
        UnaryOpType[UnaryOpType["LOG"] = 9] = "LOG";
        UnaryOpType[UnaryOpType["LOGICAL_NOT"] = 10] = "LOGICAL_NOT";
        UnaryOpType[UnaryOpType["NEG"] = 11] = "NEG";
        UnaryOpType[UnaryOpType["RELU"] = 12] = "RELU";
        UnaryOpType[UnaryOpType["RELU6"] = 13] = "RELU6";
        UnaryOpType[UnaryOpType["LEAKYRELU"] = 14] = "LEAKYRELU";
        UnaryOpType[UnaryOpType["RSQRT"] = 15] = "RSQRT";
        UnaryOpType[UnaryOpType["SIN"] = 16] = "SIN";
        UnaryOpType[UnaryOpType["SINH"] = 17] = "SINH";
        UnaryOpType[UnaryOpType["SIGMOID"] = 18] = "SIGMOID";
        UnaryOpType[UnaryOpType["SQRT"] = 19] = "SQRT";
        UnaryOpType[UnaryOpType["SQUARE"] = 20] = "SQUARE";
        UnaryOpType[UnaryOpType["TANH"] = 21] = "TANH";
        UnaryOpType[UnaryOpType["TO_INT"] = 22] = "TO_INT";
    })(UnaryOpType || (UnaryOpType = {}));
    var ABS = "return abs(a);";
    var CEIL = "return ceil(a);";
    var COS = "return cos(a);";
    var COSH = "\n  let e2x = exp(-a);\n  return (e2x + 1.0 / e2x) / 2.0;\n";
    var EXPM1 = "return exp(a) - 1.0;";
    var ELU = "if (a >= 0.0) { return a; }  return (exp(a) - 1.0);";
    var ELU_VEC4 = "\n  var resFloat = exp(a) - vec4<f32>(1.0);\n  if (a.r >= 0.0) {\n    resFloat.r = a.r;\n  }\n  if (a.g >= 0.0) {\n    resFloat.g = a.g;\n  }\n  if (a.b >= 0.0) {\n    resFloat.b = a.b;\n  }\n  if (a.a >= 0.0) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n";
    var EXP = "return exp(a);";
    var FLOOR = "return floor(a);";
    var LINEAR = "return a;";
    var LOG = "if (a < 0.0) { return 1.0/0.0; }\n  return log(a);";
    var LOGICAL_NOT = "return f32(!(a >= 1.0));";
    var NEG = "return -a;";
    var LEAKYRELU = "if (a < 0.0) { return uniforms.alpha * a; } return a;";
    var LEAKYRELU_VEC4 = "\n  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));\n  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);\n";
    var RELU = "if(a < 0.0) { return 0.0; } return a;";
    var RELU6 = 'return clamp(a, 0.0, 6.0);';
    var RELU6_VEC4 = 'return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));';
    var RELU_VEC4 = "\n  var resFloat = a * vec4<f32>(a >= vec4<f32>(0.0));\n  let isNaN = isnanVec4(a);\n\n  if (isNaN.r) {\n    resFloat.r = a.r;\n  }\n  if (isNaN.g) {\n    resFloat.g = a.g;\n  }\n  if (isNaN.b) {\n    resFloat.b = a.b;\n  }\n  if (isNaN.a) {\n    resFloat.a = a.a;\n  }\n  return resFloat;\n";
    var RSQRT = "return 1.0/sqrt(a);";
    var SIGMOID = "return 1.0 / (1.0 + exp(-1.0 * a));";
    var SIN = "return sin(a);";
    var SINH = "\n  let e2x = exp(a);\n  return (e2x - 1.0 / e2x) / 2.0;\n";
    var SQRT = "return sqrt(a);";
    var SQUARE = "return a * a;";
    var TANH = "\n  let e2x = exp(-2.0 * abs(a));\n  return sign(a) * (1.0 - e2x) / (1.0 + e2x);\n";
    var TO_INT = "return f32(i32((a)));";
    function getUnaryOpString(type, useVec4) {
        switch (type) {
            case UnaryOpType.ABS:
                return ABS;
            case UnaryOpType.COS:
                return COS;
            case UnaryOpType.COSH:
                return COSH;
            case UnaryOpType.CEIL:
                return CEIL;
            case UnaryOpType.ELU:
                return useVec4 ? ELU_VEC4 : ELU;
            case UnaryOpType.EXP:
                return EXP;
            case UnaryOpType.EXPM1:
                return EXPM1;
            case UnaryOpType.FLOOR:
                return FLOOR;
            case UnaryOpType.LINEAR:
                return LINEAR;
            case UnaryOpType.LOG:
                return LOG;
            case UnaryOpType.LOGICAL_NOT:
                return LOGICAL_NOT;
            case UnaryOpType.NEG:
                return NEG;
            case UnaryOpType.LEAKYRELU:
                return useVec4 ? LEAKYRELU_VEC4 : LEAKYRELU;
            case UnaryOpType.RELU:
                return useVec4 ? RELU_VEC4 : RELU;
            case UnaryOpType.RELU6:
                return useVec4 ? RELU6_VEC4 : RELU6;
            case UnaryOpType.RSQRT:
                return RSQRT;
            case UnaryOpType.SIGMOID:
                return SIGMOID;
            case UnaryOpType.SIN:
                return SIN;
            case UnaryOpType.SINH:
                return SINH;
            case UnaryOpType.SQRT:
                return SQRT;
            case UnaryOpType.SQUARE:
                return SQUARE;
            case UnaryOpType.TANH:
                return TANH;
            case UnaryOpType.TO_INT:
                return TO_INT;
            default:
                throw new Error("BinaryType " + type + " is not implemented!");
        }
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function mapActivationToShaderProgram(activation, packed) {
        if (packed === void 0) { packed = false; }
        if (activation === null) {
            return null;
        }
        else if (activation === 'linear') {
            return getUnaryOpString(UnaryOpType.LINEAR);
        }
        else if (activation === 'relu') {
            return getUnaryOpString(UnaryOpType.RELU, packed);
        }
        else if (activation === 'elu') {
            return getUnaryOpString(UnaryOpType.ELU, packed);
        }
        else if (activation === 'relu6') {
            return getUnaryOpString(UnaryOpType.RELU6, packed);
        }
        else if (activation === 'prelu') {
            return getBinaryOpString(BinaryOpType.PRELU, packed);
        }
        else if (activation === 'sigmoid') {
            return getUnaryOpString(UnaryOpType.SIGMOID, packed);
        }
        else if (activation === 'leakyrelu') {
            return getUnaryOpString(UnaryOpType.LEAKYRELU, packed);
        }
        throw new Error("Activation " + activation + " has not been implemented for the WebGPU backend.");
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    // Generates GLSL that computes strides.
    function symbolicallyComputeStrides(indicesArr, variableName) {
        if (Math.max.apply(Math, __spread(indicesArr)) > 3) {
            throw new Error('Cannot symbolically compute strides for rank > 4 tensor.');
        }
        var numCoords = indicesArr.length;
        var shape = indicesArr.map(function (d) { return variableName + "[" + d + "]"; });
        var strides = new Array(numCoords - 1);
        strides[numCoords - 2] = shape[numCoords - 1];
        for (var i = numCoords - 3; i >= 0; --i) {
            strides[i] = "(" + strides[i + 1] + " * " + shape[i + 1] + ")";
        }
        return strides;
    }

    function getCoordsDataType(rank) {
        if (rank <= 1) {
            return 'i32';
        }
        else if (rank === 2) {
            return "vec2<i32>";
        }
        else if (rank === 3) {
            return "vec3<i32>";
        }
        else if (rank === 4) {
            return "vec4<i32>";
        }
        else if (rank === 5) {
            return "vec5";
        }
        else if (rank === 6) {
            return "vec6";
        }
        else {
            throw Error("GPU for rank " + rank + " is not yet supported");
        }
    }
    function getCoordsXYZ(index) {
        if (index === 0) {
            return 'x';
        }
        else if (index === 1) {
            return 'y';
        }
        else if (index === 2) {
            return 'z';
        }
        else if (index === 3) {
            return 'w';
        }
        else if (index === 4) {
            return 'u';
        }
        else if (index === 5) {
            return 'v';
        }
        else {
            throw Error("Index " + index + " is not yet supported");
        }
    }
    function mapToWgslTypes(type, isVec4) {
        if (type === 'float32') {
            return isVec4 ? 'vec4<f32>' : 'f32';
        }
        else if (type === 'int32') {
            return isVec4 ? 'vec4<i32>' : 'i32';
        }
        else if (type === 'bool') {
            // Type 'bool' cannot be used in storage class,
            // https://www.w3.org/TR/WGSL/#host-shareable-types.
            return isVec4 ? 'vec4<i32>' : 'i32';
        }
        return type;
    }
    function getWorkGroupSizeString() {
        return "\n  @stage(compute) @workgroup_size(workGroupSizeX, workGroupSizeY, workGroupSizeZ)\n";
    }
    function getMainHeaderString() {
        return "\n  " + getWorkGroupSizeString() + "\n  fn main(@builtin(local_invocation_id) LocalId : vec3<u32>,\n          @builtin(global_invocation_id) GlobalId : vec3<u32>,\n          @builtin(num_workgroups) NumWorkgroups: vec3<u32>) {\n    localId = LocalId;\n    globalId = GlobalId;\n    numWorkgroups = NumWorkgroups;\n";
    }
    function getMainHeaderAndGlobalIndexString() {
        return "\n    " + getMainHeaderString() + "\n      let index = getGlobalIndex();\n";
    }
    function makeShader(inputInfo, outputData, program, isFromPixel) {
        if (isFromPixel === void 0) { isFromPixel = false; }
        var prefixSnippets = [];
        prefixSnippets.push("\n    let workGroupSizeX = " + program.workGroupSize[0] + "u;\n    let workGroupSizeY = " + program.workGroupSize[1] + "u;\n    let workGroupSizeZ = " + program.workGroupSize[2] + "u;\n\n    var<private> localId: vec3<u32>;\n    var<private> globalId: vec3<u32>;\n    var<private> numWorkgroups: vec3<u32>;\n\n    // Only used when the y/z dimension of workgroup size is 1.\n    fn getGlobalIndex() -> i32 {\n      if (numWorkgroups.y == 1u && numWorkgroups.z == 1u) {\n        return i32(globalId.x);\n      }\n\n      let localInvocationIndex = localId.z * workGroupSizeX * workGroupSizeY +\n          localId.y * workGroupSizeX + localId.x;\n      let workGroupID = (globalId - localId)/vec3<u32>(\n          workGroupSizeX, workGroupSizeY, workGroupSizeZ);\n\n      return i32((workGroupID.z * numWorkgroups.x * numWorkgroups.y +\n        workGroupID.y * numWorkgroups.x + workGroupID.x) *\n        (workGroupSizeX * workGroupSizeY * workGroupSizeZ) +\n        localInvocationIndex);\n    }\n  ");
        if (isFromPixel === true) {
            prefixSnippets.push("\n      struct Uniform {\n        size            : i32,\n        numChannels     : i32,\n        outShapeStrides : vec2<i32>,\n        dispatchSize    : vec3<u32>,\n      };\n\n      @group(0) @binding(0) var<storage, write> result: array<" + mapToWgslTypes(outputData.dtype, program.isVec4) + ">;\n      @group(0) @binding(2) var<uniform> uniforms: Uniform;\n    ");
            return [
                commonSnippet,
                prefixSnippets.join('\n'),
                getCoordsFromIndexSnippet(outputData.shape),
                program.getUserCode(),
            ].join('\n');
        }
        var preMemberIsStruct = false;
        var currentMemberIsStruct = false;
        var uniformDeclaration = 'struct Uniforms { NAN : f32, ';
        program.variableNames.forEach(function (x, i) {
            var perDataType = getCoordsDataType(inputInfo[i].shape.length);
            if (perDataType === 'vec5' || perDataType === 'vec6') {
                currentMemberIsStruct = true;
            }
            if (preMemberIsStruct || currentMemberIsStruct) {
                uniformDeclaration += "@align(16) ";
            }
            preMemberIsStruct = currentMemberIsStruct;
            uniformDeclaration +=
                x.charAt(0).toLowerCase() + x.slice(1) + "Shape : " + perDataType + ", ";
        });
        var outputDataType = getCoordsDataType(outputData.shape.length);
        currentMemberIsStruct =
            outputDataType === 'vec5' || outputDataType === 'vec6';
        if (preMemberIsStruct || currentMemberIsStruct) {
            uniformDeclaration += "@align(16) ";
        }
        preMemberIsStruct = currentMemberIsStruct;
        uniformDeclaration += "outShape : " + outputDataType + ", ";
        var stridesLength = outputData.shape.length - 1;
        var stridesDataType = getCoordsDataType(stridesLength);
        currentMemberIsStruct =
            stridesDataType === 'vec5' || stridesDataType === 'vec6';
        if (preMemberIsStruct || currentMemberIsStruct) {
            uniformDeclaration += "@align(16) ";
        }
        preMemberIsStruct = currentMemberIsStruct;
        uniformDeclaration += "\n       outShapeStrides: " + stridesDataType + ", ";
        if (program.size) {
            if (preMemberIsStruct) {
                uniformDeclaration += "@align(16) ";
            }
            preMemberIsStruct = false;
            uniformDeclaration += 'size : i32, ';
        }
        if (program.uniforms) {
            if (preMemberIsStruct) {
                uniformDeclaration += "@align(16) ";
            }
            uniformDeclaration += program.uniforms;
        }
        uniformDeclaration += '};';
        prefixSnippets.push(uniformDeclaration);
        // Output buffer.
        if (program.atomic) {
            prefixSnippets.push("\n    @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;\n  ");
        }
        else {
            prefixSnippets.push("\n    @group(0) @binding(0) var<storage, write> result: array<" + mapToWgslTypes(outputData.dtype, program.isVec4) + ">;\n  ");
        }
        program.variableNames.forEach(function (x, i) {
            prefixSnippets.push("\n    @group(0) @binding(" + (1 + i) + ") var<storage, read> " + x + ": array<" + mapToWgslTypes(inputInfo[i].dtype, program.isVec4) + ">;\n    ");
        });
        if (uniformDeclaration !== '') {
            prefixSnippets.push("\n    @group(0) @binding(" + (1 + program.variableNames.length) + ") var<uniform> uniforms: Uniforms;\n    ");
        }
        var _a = __read(getOutputCoordsSnippet(outputData.shape, program.dispatchLayout), 2), coordsSnippet = _a[0], dispatchLayoutRank = _a[1];
        var sources = [
            commonSnippet, prefixSnippets.join('\n'),
            getCoordsFromIndexSnippet(outputData.shape), coordsSnippet,
            getOutputIndexFromCoordsSnippet(outputData.shape.length)
        ];
        if (!program.atomic) {
            sources.push(setOutputSnippet(outputData.shape, outputData.dtype, program.isVec4));
        }
        if (dispatchLayoutRank === outputData.shape.length) {
            // Input snippet is only meaningful when the output isn't getting
            // implicitly reshaped (like it does in conv2d_matmul).
            var inputSnippet = inputInfo
                .map(function (x) { return getInputSnippet(x, outputData.shape, program.isVec4, program.dispatchLayout.x.length ===
                outputData.shape.length); })
                .join('\n');
            sources.push(inputSnippet);
        }
        sources.push(program.getUserCode());
        var source = sources.join('\n');
        return source;
    }
    var commonSnippet = "\n  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};\n  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};\n\n  // Checks whether coordinates lie within the bounds of the shape.\n  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {\n    return all(coord >= vec2<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {\n    return all(coord >= vec3<i32>(0)) && all(coord < shape);\n  }\n  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {\n    return all(coord >= vec4<i32>(0)) && all(coord < shape);\n  }\n\n  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {\n    return coord;\n  }\n  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {\n    return dot(coords, vec2<i32>(shape.y, 1));\n  }\n  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {\n    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));\n  }\n  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {\n    return dot(coords, vec4<i32>(\n        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));\n  }\n  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {\n    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;\n  }\n  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {\n    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);\n    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;\n  }\n\n  fn idiv(a: i32, b: i32, sign: f32) -> i32 {\n    var res: i32 = a / b;\n    let mod: i32 = a % b;\n    if (sign < 0. && mod != 0) {\n      res = res - 1;\n    }\n    return res;\n  }\n\n  // NaN defination in IEEE 754-1985 is :\n  //   - sign = either 0 or 1.\n  //   - biased exponent = all 1 bits.\n  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).\n  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers\n  fn isnan(val: f32) -> bool {\n    let floatToUint: u32 = bitcast<u32>(val);\n    return (floatToUint & 0x7fffffffu) > 0x7f800000u;\n  }\n  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {\n    return vec4<bool>(isnan(val[0]), isnan(val[1]), isnan(val[2]), isnan(val[3]));\n  }\n";
    function getOutputIndexFromCoordsSnippet(outRank) {
        var snippet = '';
        switch (outRank) {
            case 0:
            case 1:
                snippet += "\n        fn getOutputIndexFromCoords(coords : i32) -> i32 {\n          return coords;\n        }\n        ";
                break;
            case 2:
                snippet += "\n        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {\n          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));\n        }\n        ";
                break;
            case 3:
                snippet += "\n        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {\n          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));\n        }\n        ";
                break;
            case 4:
                snippet += "\n        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {\n          return dot(coords, vec4<i32>(\n            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));\n        }\n        ";
                break;
            case 5:
                snippet += "\n        fn getOutputIndexFromCoords(coords : vec5) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u;\n        }\n        ";
                break;
            case 6:
                snippet += "\n        fn getOutputIndexFromCoords(coords : vec6) -> i32 {\n          return coords.x * uniforms.outShapeStrides.x +\n              coords.y * uniforms.outShapeStrides.y +\n              coords.z * uniforms.outShapeStrides.z +\n              coords.w * uniforms.outShapeStrides.w +\n              coords.u * uniforms.outShapeStrides.u +\n              coords.v;\n        }\n        ";
                break;
            default:
                tf.util.assert(false, function () { return "Unsupported " + outRank + "D shape"; });
                break;
        }
        return snippet;
    }
    function setOutputSnippet(outShape, outBufferType, isVec4) {
        var outRank = outShape.length;
        var wgslType = mapToWgslTypes(outBufferType, isVec4);
        var snippet;
        if (isVec4) {
            snippet = "fn setOutputAtIndex(flatIndex : i32, value : vec4<f32>) {\n      result[flatIndex] = " + wgslType + "(value);\n    }\n    fn setOutputAtIndexI32(flatIndex : i32, value : vec4<i32>) {\n      result[flatIndex] = " + wgslType + "(value);\n    }";
        }
        else {
            snippet = "fn setOutputAtIndex(flatIndex : i32, value : f32) {\n      result[flatIndex] = " + wgslType + "(value);\n    }\n    fn setOutputAtIndexI32(flatIndex : i32, value : i32) {\n      result[flatIndex] = " + wgslType + "(value);\n    }";
        }
        if (outRank >= 2) {
            var dims = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'].slice(0, outRank);
            var type = getCoordsDataType(outRank);
            if (isVec4) {
                snippet += "\n      fn setOutputAtCoords(" + dims.map(function (d) { return d + " : i32"; }).join(', ') + ", value : vec4<f32>) {\n        let flatIndex = getOutputIndexFromCoords(" + type + "(" + dims.join(', ') + "));\n        setOutputAtIndex(flatIndex / 4, value);\n      }\n      fn setOutputAtCoordsI32(" + dims.map(function (d) { return d + " : i32"; }).join(', ') + ", value : vec4<i32>) {\n        let flatIndex = getOutputIndexFromCoords(" + type + "(" + dims.join(', ') + "));\n        setOutputAtIndexI32(flatIndex / 4, value);\n      }\n    ";
            }
            else {
                snippet += "\n      fn setOutputAtCoords(" + dims.map(function (d) { return d + " : i32"; }).join(', ') + ", value : f32) {\n        let flatIndex = getOutputIndexFromCoords(" + type + "(" + dims.join(', ') + "));\n        setOutputAtIndex(flatIndex, value);\n      }\n      fn setOutputAtCoordsI32(" + dims.map(function (d) { return d + " : i32"; }).join(', ') + ", value : i32) {\n        let flatIndex = getOutputIndexFromCoords(" + type + "(" + dims.join(', ') + "));\n        setOutputAtIndexI32(flatIndex, value);\n      }\n    ";
            }
        }
        return snippet;
    }
    function getInputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout) {
        var res = getInputAtCoordsSnippet(inputInfo, isVec4);
        var inShape = inputInfo.shape;
        if (inShape.length <= outShape.length) {
            res += getInputByOutputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout);
        }
        return res;
    }
    function getInputAtCoordsSnippet(inputInfo, isVec4) {
        var texName = inputInfo.name;
        var rank = inputInfo.shape.length;
        var type = getCoordsDataType(rank);
        var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
        var dims = ['d0', 'd1', 'd2', 'd3', 'd4', 'd5'].slice(0, rank);
        var inputs = dims.map(function (d) { return d + " : i32"; }).join(', ');
        if (rank < 1) {
            if (isVec4) {
                return "\n        fn " + funcName + "() -> vec4<f32> {\n          return vec4<f32>(" + texName + "[0]);\n        }\n      ";
            }
            return "\n      fn " + funcName + "() ->f32 {\n        return f32(" + texName + "[0]);\n      }\n    ";
        }
        var shapeStr = "uniforms." + (texName.charAt(0).toLowerCase() + texName.slice(1)) + "Shape";
        var rankStr = rank + "D";
        if (rank === 0) {
            rankStr = '1D';
        }
        if (isVec4) {
            return "\n      fn " + funcName + "(" + inputs + ") -> vec4<f32> {\n        return vec4<f32>(" + texName + "[getIndexFromCoords" + rankStr + "(" + type + "(" + dims.join(',') + "),\n          " + shapeStr + ") / 4]);\n      }\n      ";
        }
        return "\n    fn " + funcName + "(" + inputs + ") -> f32 {\n      return f32(" + texName + "[getIndexFromCoords" + rankStr + "(" + type + "(" + dims.join(',') + "),\n        " + shapeStr + ")]);\n    }\n   ";
    }
    function getInputByOutputSnippet(inputInfo, outShape, isVec4, isFlatDispatchLayout) {
        var texName = inputInfo.name;
        var texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
        var funcName = 'get' + texFuncSnippet + 'ByOutput';
        var inRank = inputInfo.shape.length;
        var outRank = outShape.length;
        var type = getCoordsDataType(outRank);
        // If the inShape equals the outShape and the dispatch layout is flat, we can
        // directly use |gl_GlobalInvocationID.x| as the index and don't need coords
        // conversion between these two shapes.
        if (tf.util.arraysEqual(inputInfo.shape, outShape) && isFlatDispatchLayout) {
            if (isVec4) {
                return "\n        fn " + funcName + "Index(globalIndex : i32) -> vec4<f32> {\n          return vec4<f32>(" + texName + "[globalIndex]);\n        }\n\n        fn " + funcName + "Coords(coords : " + type + ") -> vec4<f32> {\n          return vec4<f32>(" + texName + "[" + (outRank > 1 ? 'getOutputIndexFromCoords(coords)' : 'coords') + " / 4]);\n        }\n        ";
            }
            else {
                return "\n      fn " + funcName + "Index(globalIndex : i32) -> f32 {\n        return f32(" + texName + "[globalIndex]);\n      }\n\n      fn " + funcName + "Coords(coords : " + type + ") -> f32 {\n        return f32(" + texName + "[" + (outRank > 1 ? 'getOutputIndexFromCoords(coords)' : 'coords') + "]);\n      }\n      ";
            }
        }
        var broadcastDims = tf.backend_util.getBroadcastDims(inputInfo.shape, outShape);
        var rankDiff = outRank - inRank;
        var coordsSnippet = '';
        if (inRank === 0) {
            if (isVec4) {
                return "\n      fn " + funcName + "Index(globalIndex : i32) -> vec4<f32> {\n        return get" + texFuncSnippet + "();\n      }\n\n      fn " + funcName + "Coords(coords : " + type + ") -> vec4<f32> {\n        return get" + texFuncSnippet + "();\n      }\n    ";
            }
            return "\n      fn " + funcName + "Index(globalIndex : i32) -> f32{\n        return get" + texFuncSnippet + "();\n      }\n\n      fn " + funcName + "Coords(coords : " + type + ") -> f32{\n        return get" + texFuncSnippet + "();\n      }\n    ";
        }
        else {
            if (outRank < 2 && broadcastDims.length >= 1) {
                coordsSnippet = 'coords = 0;';
            }
            else {
                coordsSnippet =
                    broadcastDims.map(function (d) { return "coords." + getCoordsXYZ(d + rankDiff) + " = 0;"; })
                        .join('\n');
            }
        }
        var unpackedCoordsSnippet = '';
        if (outRank < 2 && inRank > 0) {
            unpackedCoordsSnippet = 'coords';
        }
        else {
            if (outRank > 1) {
                var coordsType = getCoordsDataType(inRank);
                var coordsValues = inputInfo.shape.map(function (s, i) { return "coords." + getCoordsXYZ(i + rankDiff); })
                    .join(', ');
                unpackedCoordsSnippet = coordsType + "(" + coordsValues + ")";
            }
            else {
                unpackedCoordsSnippet = 'coords';
            }
        }
        var shapeStr = "uniforms." + (texName.charAt(0).toLowerCase() + texName.slice(1)) + "Shape";
        var rankStr = inRank + "D";
        if (isVec4) {
            return "\n      fn " + funcName + "Index(globalIndex : i32) -> vec4<f32> {\n        var coords = getCoordsFromIndex(globalIndex);\n        " + coordsSnippet + "\n        return " + texName + "[getIndexFromCoords" + rankStr + "(" + unpackedCoordsSnippet + ", " + shapeStr + ") / 4];\n      }\n\n      fn " + funcName + "Coords(coordsIn : " + type + ") -> vec4<f32> {\n        var coords = coordsIn;\n        " + coordsSnippet + "\n        return " + texName + "[getIndexFromCoords" + rankStr + "(" + unpackedCoordsSnippet + ", " + shapeStr + ") / 4];\n      }\n    ";
        }
        return "\n    fn " + funcName + "Index(globalIndex : i32) -> f32 {\n      var coords = getCoordsFromIndex(globalIndex);\n      " + coordsSnippet + "\n      return f32(" + texName + "[getIndexFromCoords" + rankStr + "(" + unpackedCoordsSnippet + ", " + shapeStr + ")]);\n    }\n\n    fn " + funcName + "Coords(coordsIn : " + type + ") -> f32 {\n      var coords = coordsIn;\n      " + coordsSnippet + "\n      return f32(" + texName + "[getIndexFromCoords" + rankStr + "(" + unpackedCoordsSnippet + ", " + shapeStr + ")]);\n    }\n  ";
    }
    /**
     * Generates getOutputCoords() function that computes output coordinates from
     * dispatch geometry to reduce arithmetic.
     */
    function getOutputCoordsSnippet(outShape, dispatchLayout) {
        var x = dispatchLayout.x, _a = dispatchLayout.y, y = _a === void 0 ? [] : _a, _b = dispatchLayout.z, z = _b === void 0 ? [] : _b;
        var outRank = outShape.length;
        if (x.length === outRank) {
            var dtype_1 = getCoordsDataType(outRank);
            var snippet_1 = "fn getOutputCoords() -> " + dtype_1 + "{\n      let globalIndex = getGlobalIndex();\n      return getCoordsFromIndex(globalIndex);\n    }\n    ";
            return [snippet_1, outRank];
        }
        var gatherDimensionsStr = '';
        var dims = [x, y, z];
        var rank = 0;
        for (var i = 0; i < dims.length; i++) {
            var arr = dims[i];
            if (arr.length === 0) {
                continue;
            }
            rank += arr.length;
            if (arr.length === 1) {
                gatherDimensionsStr += "let d" + arr[0] + " = i32(globalId[" + i + "]);";
            }
            else {
                var strides = symbolicallyComputeStrides(arr, 'uniforms.outShape');
                gatherDimensionsStr += "var index" + i + " = i32(globalId[" + i + "]);";
                for (var j = 0; j < strides.length; j++) {
                    gatherDimensionsStr += "let d" + arr[j] + " = index" + i + " / " + strides[j] + ";";
                    if (j === strides.length - 1) {
                        gatherDimensionsStr += "let d" + arr[j + 1] + " = " +
                            ("index" + i + " - d" + arr[j] + " * " + strides[j] + ";");
                    }
                    else {
                        gatherDimensionsStr +=
                            "index" + i + " = index" + i + " - d" + arr[j] + " * " + strides[j] + ";";
                    }
                }
            }
        }
        var dimensions = [];
        for (var i = 0; i < rank; i++) {
            dimensions.push("d" + i);
        }
        var dtype = getCoordsDataType(rank);
        var snippet = "fn getOutputCoords() -> " + dtype + " {\n    " + gatherDimensionsStr + "\n  ";
        if (dimensions.length === 0) {
            snippet += "return " + dtype + "(0); }";
        }
        else {
            snippet += "return " + dtype + "(" + dimensions.join(',') + "); }";
        }
        return [snippet, rank];
    }
    /**
     * Derives logical coordinates from a flat index. Performs integer division
     * with each stride and decrements the index until the index equals the final
     * dimension coordinate.
     */
    function getCoordsFromIndexSnippet(shape) {
        var rank = shape.length;
        if (rank <= 1) {
            return "fn getCoordsFromIndex(index : i32) -> i32 { return index; }";
        }
        var strides = tf.util.computeStrides(shape);
        var dtype = getCoordsDataType(rank);
        var coords = [];
        for (var i = 0; i < rank; i++) {
            coords.push("d" + i);
        }
        if (strides.length === 1) {
            return "    fn getCoordsFromIndex(index : i32) -> vec2<i32> {\n      let d0 = index / uniforms.outShapeStrides; let d1 = index - d0 * uniforms.outShapeStrides;\n      return vec2<i32>(d0, d1);\n    }";
        }
        var snippet;
        snippet = 'var index2 = index;' +
            strides
                .map(function (_, i) {
                var line1 = "let " + coords[i] + " = index2 / uniforms.outShapeStrides." + getCoordsXYZ(i);
                var line2 = i === strides.length - 1 ?
                    "let " + coords[i + 1] + " = index2 - " + coords[i] + " * uniforms.outShapeStrides." + getCoordsXYZ(i) :
                    "index2 = index2 - " + coords[i] + " * uniforms.outShapeStrides." + getCoordsXYZ(i);
                return line1 + "; " + line2 + ";";
            })
                .join('');
        return "\n    fn getCoordsFromIndex(index : i32) -> " + dtype + " {\n      " + snippet + "\n      return " + dtype + "(" + coords.join(',') + ");\n    }\n  ";
    }

    var arrayProduct = function (arr) {
        var product = 1;
        for (var i = 0; i < arr.length; i++) {
            product *= arr[i];
        }
        return product;
    };
    function tilesFitEvenlyIntoShape(tileSize, shape) {
        if (tileSize.length !== shape.length) {
            throw new Error("Cannot compute whether rank " + tileSize.length +
                (" tiles fit evenly into rank " + shape.length + " shape") +
                " - ranks must match.");
        }
        return shape.every(function (dim, dimIdx) { return dim % tileSize[dimIdx] === 0; });
    }
    // Computes dispatch geometry based on layout of output dimensions and
    // workGroupSize.
    function computeDispatch(layout, outputShape, workGroupSize, elementsPerThread) {
        if (workGroupSize === void 0) { workGroupSize = [1, 1, 1]; }
        if (elementsPerThread === void 0) { elementsPerThread = [1, 1, 1]; }
        var _a = __read([
            Math.ceil(arrayProduct(layout.x.map(function (d) { return outputShape[d]; })) /
                (workGroupSize[0] * elementsPerThread[0])),
            layout.y ? Math.ceil(arrayProduct(layout.y.map(function (d) { return outputShape[d]; })) /
                (workGroupSize[1] * elementsPerThread[1])) :
                1,
            layout.z ? Math.ceil(arrayProduct(layout.z.map(function (d) { return outputShape[d]; })) /
                (workGroupSize[2] * elementsPerThread[2])) :
                1
        ], 3), dispatchX = _a[0], dispatchY = _a[1], dispatchZ = _a[2];
        return [dispatchX, dispatchY, dispatchZ];
    }
    function computeWorkGroupSizeForConv2d(layout, outputShape) {
        var dim0 = arrayProduct(layout.x.map(function (d) { return outputShape[d]; }));
        var dim1 = arrayProduct(layout.y.map(function (d) { return outputShape[d]; }));
        // TODO(jiajia.qin@intel.com): More fine tune based on outputShape.
        // These are experimental values. Usually, we need to adjust the work group
        // size based on the output shape. For example, when one dimension is smaller
        // than 4, it will be wasteful if we assign a larger size for this dimension,
        // which results lots of threads doing useless work and reduces parallelism
        // of hardware threads. But it is always a balance between work group size
        // and shared memory. If one dimension is too small, such as 1, shared memory
        // will won't be fully utilized.
        if (dim0 <= 4) {
            return [4, 16, 1];
        }
        if (dim1 <= 4) {
            return [16, 4, 1];
        }
        return [16, 16, 1];
    }
    function computeWorkGroupSizeForMatMul(dimAOuter, dimInner, dimBOuter) {
        // These are experimental values. Usually, we need to adjust the work group
        // size based on the input shapes to improve the EU occupancy.
        // TODO: WebGPU limits the maximum allowed shared memory size as 16K. To make
        // sure it doesn't exceed this limitations. Temporarily reduce the work group
        // size to [8, 8, 1] and the work per thread size is [4, 4, 1]. But we should
        // revisit it and find the balance between work group size and work per thread
        // size.
        if (dimAOuter === 1) {
            return [32, 1, 1];
        }
        else if (dimBOuter === 1) {
            return [1, 32, 1];
        }
        return [8, 8, 1];
    }
    function computeWorkPerThreadForConv2d(layout, outputShape) {
        var dim0 = arrayProduct(layout.x.map(function (d) { return outputShape[d]; }));
        var dim1 = arrayProduct(layout.y.map(function (d) { return outputShape[d]; }));
        // TODO(jiajia.qin@intel.com): More fine tune based on outputShape.
        // The following conditions correspond to the values set in
        // computeWorkGroupSizeForConv2d.
        if (dim0 <= 4) {
            return [1, 2, 1];
        }
        if (dim1 <= 4) {
            return [2, 1, 1];
        }
        return [2, 2, 1];
    }
    function flatDispatchLayout(shape) {
        return { x: shape.map(function (d, i) { return i; }) };
    }
    function GPUBytesPerElement(dtype) {
        if (dtype === 'float32' || dtype === 'int32' || dtype === 'bool' ||
            dtype === 'string') {
            return 4;
        }
        else if (dtype === 'complex64') {
            return 8;
        }
        else {
            throw new Error("Unknown dtype " + dtype);
        }
    }
    function ArrayBufferToTypedArray(data, dtype) {
        if (dtype === 'float32') {
            return new Float32Array(data);
        }
        else if (dtype === 'int32') {
            return new Int32Array(data);
        }
        else if (dtype === 'bool' || dtype === 'string') {
            return Uint8Array.from(new Int32Array(data));
        }
        else {
            throw new Error("Unknown dtype " + dtype);
        }
    }
    function isWebGPUSupported() {
        return ((typeof window !== 'undefined') ||
            //@ts-ignore
            (typeof WorkerGlobalScope !== 'undefined')) && !!navigator.gpu;
    }

    var webgpu_util = {
        __proto__: null,
        tilesFitEvenlyIntoShape: tilesFitEvenlyIntoShape,
        computeDispatch: computeDispatch,
        computeWorkGroupSizeForConv2d: computeWorkGroupSizeForConv2d,
        computeWorkGroupSizeForMatMul: computeWorkGroupSizeForMatMul,
        computeWorkPerThreadForConv2d: computeWorkPerThreadForConv2d,
        flatDispatchLayout: flatDispatchLayout,
        GPUBytesPerElement: GPUBytesPerElement,
        ArrayBufferToTypedArray: ArrayBufferToTypedArray,
        isWebGPUSupported: isWebGPUSupported
    };

    function makeMatMulPackedVec4Source(workPerThread, tileAOuter, tileBOuter, tileInner) {
        tf.util.assert(tileInner % 4 === 0 && workPerThread[0] === 4, function () { return 'tileInner must be divisible by 4. And ColPerThread must be 4'; });
        return "\n  var<workgroup> mm_Asub : array<array<vec4<f32>, " + tileInner / workPerThread[0] + ">, " + tileAOuter + ">;\n  var<workgroup> mm_Bsub : array<array<vec4<f32>, " + tileBOuter / workPerThread[0] + ">, " + tileInner + ">;\n\n  let RowPerThread = " + workPerThread[1] + ";\n  let ColPerThread = " + workPerThread[0] + ";\n  let TileInner = " + tileInner + ";\n\n  " + getMainHeaderString() + "\n\n    let tileRow = " + (tileAOuter === 1 ? '0' : 'i32(localId.y) * RowPerThread') + ";\n    let tileCol = i32(localId.x);\n\n    let globalRow = " + (tileAOuter === 1 ? '0' : 'i32(globalId.y) * RowPerThread') + ";\n    let globalCol = i32(globalId.x);\n    let numTiles = (uniforms.dimInner - 1) / TileInner + 1;\n\n    var acc: array<vec4<f32>, RowPerThread>;\n    var ACached : vec4<f32>;\n    var BCached : array<vec4<f32>, 4>;\n\n    // Loop over shared dimension.\n    var globalColA = tileCol;\n    let RowPerThreadB = TileInner / i32(workGroupSizeY);\n    let tileRowB = i32(localId.y) * RowPerThreadB;\n    for (var t = 0; t < numTiles; t = t + 1) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < RowPerThread; innerRow = innerRow + 1) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileCol;\n            mm_Asub[inputRow][inputCol] = mm_readA(globalRow + innerRow, globalColA, globalId);\n        }\n        globalColA = globalColA + TileInner / ColPerThread;\n\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < RowPerThreadB; innerRow = innerRow + 1) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol;\n            mm_Bsub[inputRow][inputCol] = mm_readB(t * TileInner + inputRow, globalCol, globalId);\n        }\n\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < TileInner / ColPerThread; k = k + 1) {\n            BCached[0] = mm_Bsub[k * ColPerThread][tileCol];\n            BCached[1] = mm_Bsub[k * ColPerThread + 1][tileCol];\n            BCached[2] = mm_Bsub[k * ColPerThread + 2][tileCol];\n            BCached[3] = mm_Bsub[k * ColPerThread + 3][tileCol];\n\n            for (var i = 0; i < RowPerThread; i = i + 1) {\n                ACached = mm_Asub[tileRow + i][k];\n                acc[i] = BCached[0] * ACached.x + acc[i];\n                acc[i] = BCached[1] * ACached.y + acc[i];\n                acc[i] = BCached[2] * ACached.z + acc[i];\n                acc[i] = BCached[3] * ACached.w + acc[i];\n            }\n        }\n\n        workgroupBarrier();\n    }\n\n    for (var innerRow = 0; innerRow < RowPerThread; innerRow = innerRow + 1) {\n        mm_write(globalRow + innerRow,\n                 globalCol,\n                 acc[innerRow], globalId);\n    }\n  }";
    }
    var MatMulPackedVec4Program = /** @class */ (function () {
        function MatMulPackedVec4Program(aShape, outputShape, rowPerThread, batchAEqualOne, batchBEqualOne, bias, activation, preluActivationWeights) {
            var _a;
            if (bias === void 0) { bias = null; }
            if (activation === void 0) { activation = null; }
            if (preluActivationWeights === void 0) { preluActivationWeights = null; }
            this.variableNames = ['A', 'B'];
            this.uniforms = "dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.workGroupSize = [8, 8, 1];
            this.isVec4 = true;
            this.outputShape = outputShape;
            this.dispatchLayout = { x: [2], y: [1], z: [0] };
            // The first element in elementsPerThread must be 4.
            if (outputShape[1] === 1) {
                this.elementsPerThread = [4, 1, 1];
            }
            else {
                this.elementsPerThread = [4, 4, 1];
            }
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
            var addBias = bias != null;
            var hasPreluActivationWeights = preluActivationWeights != null;
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.tileAOuter = outputShape[1] === 1 ?
                1 :
                this.workGroupSize[1] * this.elementsPerThread[1];
            this.tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
            this.tileInner = this.tileBOuter;
            this.aShape = aShape;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.batchAEqualOne = batchAEqualOne;
            this.batchBEqualOne = batchBEqualOne;
            _a = __read(this.getShapeFit(), 2), this.fitA = _a[0], this.fitB = _a[1];
            this.shaderKey = "matMulPackedVec4_" + this.activation + "_" + this.fitA + "_" + this.fitB + "_" + this.elementsPerThread + "_" + this.batchAEqualOne + "_" + this.batchBEqualOne;
        }
        MatMulPackedVec4Program.prototype.getShapeFit = function () {
            var dimInner = this.aShape[2];
            var dimBOuter = this.outputShape[2];
            var bShape = [this.outputShape[0], dimInner, dimBOuter];
            var tileSizeA = [this.tileAOuter, this.tileInner];
            var tileSizeB = [this.tileInner, this.tileBOuter];
            return [
                tilesFitEvenlyIntoShape(tileSizeA, this.aShape.slice(1)),
                tilesFitEvenlyIntoShape(tileSizeB, bShape.slice(1))
            ];
        };
        MatMulPackedVec4Program.prototype.getUserCode = function () {
            var sampleA = this.fitA ?
                "return A[batch * batchASize + row * uniforms.dimInner / 4 + col]" :
                "if (coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {\n            return A[batch * batchASize + row * uniforms.dimInner / 4 + col];\n        }\n        return vec4<f32>(0.0)";
            var sampleB = this.fitB ?
                "return B[batch * batchBSize + row * uniforms.dimBOuter / 4 + col]" :
                "if(coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n             return B[batch * batchBSize + row * uniforms.dimBOuter / 4 + col];\n        }\n        return vec4<f32>(0.0)";
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : vec4<f32>, outCoord : vec3<i32>) -> vec4<f32> {\n                  let b = getPreluActivationWeightsByOutputCoords(outCoord);\n                  " + activationOp + "\n                }";
                }
                else {
                    activationSnippet = "\n            fn activation(a : vec4<f32>, outCoord : vec3<i32>) -> vec4<f32> {\n              " + activationOp + "\n            }";
                }
                applyActivationSnippet = 'value = activation(value, outCoord);';
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n      " + activationSnippet + "\n      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> vec4<f32> {\n        " + (this.batchAEqualOne ? "\n          let batchASize = 0;\n          let batch = 0;\n        " :
                "\n          let batchASize = uniforms.aShape[1] * uniforms.aShape[2] / 4;\n          let batch = i32(globalId.z);\n        ") + "\n\n        " + sampleA + ";\n      }\n\n      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> vec4<f32> {\n        " + (this.batchBEqualOne ? "\n          let batchBSize = 0;\n          let batch = 0;\n          " :
                "\n          let batchBSize = uniforms.bShape[1] * uniforms.bShape[2] / 4;\n          let batch = i32(globalId.z);\n       ") + "\n        " + sampleB + ";\n      }\n\n      fn mm_write(row : i32, col : i32, valueIn : vec4<f32>, globalId : vec3<u32>) {\n        if (row < uniforms.aShape[1] && col * 4 < uniforms.bShape[2])\n        {\n          var value = valueIn;\n          let batch = i32(globalId.z);\n          let outCoord = vec3<i32>(batch, row, col * 4);\n          " + addBiasSnippet + "\n          " + applyActivationSnippet + "\n          setOutputAtCoords(outCoord[0], outCoord[1], outCoord[2], value);\n        }\n      }\n      " + makeMatMulPackedVec4Source(this.elementsPerThread, this.tileAOuter, this.tileBOuter, this.tileInner) + "\n    ";
            return userCode;
        };
        return MatMulPackedVec4Program;
    }());

    function makeMatMulPackedSource(workPerThread, workGroupSize) {
        var tileAOuter = workGroupSize[1] * workPerThread[1];
        var tileBOuter = workGroupSize[0] * workPerThread[0];
        var tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
        return "\n    var<workgroup> mm_Asub : array<array<f32, " + tileInner + ">, " + tileAOuter + ">;\n    var<workgroup> mm_Bsub : array<array<f32, " + tileBOuter + ">, " + tileInner + ">;\n    " + getMainHeaderString() + "\n      let tileRow = i32(localId.y) * " + workPerThread[1] + ";\n      let tileCol = i32(localId.x) * " + workPerThread[0] + ";\n\n      let globalRow = i32(globalId.y) * " + workPerThread[1] + ";\n      let globalCol = i32(globalId.x) * " + workPerThread[0] + ";\n\n      let numTiles = (uniforms.dimInner - 1) / " + tileInner + " + 1;\n\n      var acc : array<array<f32, " + workPerThread[0] + ">, " + workPerThread[1] + ">;\n      var ACached : f32;\n      var BCached : array<f32, " + workPerThread[0] + ">;\n\n      // Without this initialization strange values show up in acc.\n      for (var innerRow = 0; innerRow < " + workPerThread[1] + "; innerRow = innerRow + 1) {\n        for (var innerCol = 0; innerCol < " + workPerThread[0] + "; innerCol = innerCol + 1) {\n          acc[innerRow][innerCol] = 0.0;\n        }\n      }\n\n      let ColPerThreadA = " + tileInner + " / " + workGroupSize[0] + ";\n      let tileColA = i32(localId.x) * ColPerThreadA;\n      let RowPerThreadB = " + tileInner + " / " + workGroupSize[1] + ";\n      let tileRowB = i32(localId.y) * RowPerThreadB;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t = t + 1) {\n        // Load one tile of A into local memory.\n        for (var innerRow = 0; innerRow < " + workPerThread[1] + "; innerRow = innerRow + 1) {\n          for (var innerCol = 0; innerCol < ColPerThreadA; innerCol = innerCol + 1) {\n            let inputRow = tileRow + innerRow;\n            let inputCol = tileColA + innerCol;\n\n            mm_Asub[inputRow][inputCol] = mm_readA(\n                globalRow + innerRow,\n                t * " + tileInner + " + inputCol, globalId);\n          }\n        }\n        // Load one tile of B into local memory.\n        for (var innerRow = 0; innerRow < RowPerThreadB; innerRow = innerRow + 1) {\n          for (var innerCol = 0; innerCol < " + workPerThread[0] + "; innerCol = innerCol + 1) {\n            let inputRow = tileRowB + innerRow;\n            let inputCol = tileCol + innerCol;\n\n            mm_Bsub[inputRow][inputCol] = mm_readB(\n              t * " + tileInner + " + inputRow,\n              globalCol + innerCol, globalId);\n          }\n        }\n\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < " + tileInner + "; k = k + 1) {\n          for (var inner = 0; inner < " + workPerThread[0] + "; inner = inner + 1) {\n            BCached[inner] = mm_Bsub[k][tileCol + inner];\n          }\n\n          for (var innerRow = 0; innerRow < " + workPerThread[1] + "; innerRow = innerRow + 1) {\n            ACached = mm_Asub[tileRow + innerRow][k];\n            for (var innerCol = 0; innerCol < " + workPerThread[0] + "; innerCol = innerCol + 1) {\n              acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];\n            }\n          }\n        }\n\n        workgroupBarrier();\n      }\n\n      for (var innerRow = 0; innerRow < " + workPerThread[1] + "; innerRow = innerRow + 1) {\n        for (var innerCol = 0; innerCol < " + workPerThread[0] + "; innerCol = innerCol + 1) {\n\n          if ((globalCol + innerCol) < uniforms.dimBOuter &&\n              (globalRow + innerRow) < uniforms.dimAOuter) {\n            mm_write(globalRow + innerRow,\n                     globalCol + innerCol,\n                     acc[innerRow][innerCol], globalId);\n          }\n        }\n      }\n    }\n  ";
    }
    function makeMatMulVectorSource(workGroupSize) {
        return "\n    let TileSize = " + workGroupSize[0] * 4 + ";\n    var<workgroup> mm_Asub : array<vec4<f32>, " + workGroupSize[0] + ">;\n\n    " + getMainHeaderString() + "\n      let tileCol = i32(localId.x);\n      let globalCol = i32(globalId.x);\n      let globalRow = i32(globalId.y);\n\n      let numTiles = (uniforms.dimInner - 1) / TileSize + 1;\n\n      // Without this initialization strange values show up in acc.\n      var acc = 0.0;\n\n      // Loop over shared dimension.\n      for (var t = 0; t < numTiles; t = t + 1) {\n        // Load one tile of A into local memory.\n        let colA = t * TileSize + tileCol * 4;\n        mm_Asub[tileCol] = vec4<f32>(mm_readA(globalRow, colA, globalId),\n                                mm_readA(globalRow, colA + 1, globalId),\n                                mm_readA(globalRow, colA + 2, globalId),\n                                mm_readA(globalRow, colA + 3, globalId));\n        workgroupBarrier();\n\n        // Compute acc values for a single thread.\n        for (var k = 0; k < TileSize / 4; k = k + 1) {\n          let rowB = t * TileSize + k * 4;\n          let BCached = vec4<f32>(mm_readB(rowB, globalCol, globalId),\n                              mm_readB(rowB + 1, globalCol, globalId),\n                              mm_readB(rowB + 2, globalCol, globalId),\n                              mm_readB(rowB + 3, globalCol, globalId));\n\n          let ACached = mm_Asub[k];\n          acc = acc + dot(ACached, BCached);\n        }\n\n        workgroupBarrier();\n      }\n\n      if (globalRow < uniforms.dimAOuter && globalCol < uniforms.dimBOuter) {\n        mm_write(globalRow, globalCol, acc, globalId);\n      }\n    }\n  ";
    }
    var MatMulPackedProgram = /** @class */ (function () {
        function MatMulPackedProgram(aShape, outputShape, workPerThread, batchAEqualOne, batchBEqualOne, transposeA, transposeB, bias, activation, preluActivationWeights) {
            var _a;
            if (transposeA === void 0) { transposeA = false; }
            if (transposeB === void 0) { transposeB = false; }
            if (bias === void 0) { bias = null; }
            if (activation === void 0) { activation = null; }
            if (preluActivationWeights === void 0) { preluActivationWeights = null; }
            this.variableNames = ['A', 'B'];
            this.uniforms = "dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.workGroupSize = [16, 16, 1];
            this.outputShape = outputShape;
            this.dispatchLayout = { x: [2], y: [1], z: [0] };
            var dimInner = transposeA ? aShape[1] : aShape[2];
            this.workGroupSize =
                computeWorkGroupSizeForMatMul(outputShape[1], dimInner, outputShape[2]);
            if (outputShape[1] === 1 || outputShape[2] === 1) {
                workPerThread = 1;
            }
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [workPerThread, workPerThread, 1]);
            // If dispaching number is one, it means only one work group is running.
            // For modern GPUs, it supports multiple work groups running in parallel.
            // So there may be some idle hardware threads.
            // In this case, we prefer to reduce the work per thread and improve the
            // thread utilization
            if (tf.util.arraysEqual(this.dispatch, [1, 1, 1])) {
                workPerThread = 1;
                this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [workPerThread, workPerThread, 1]);
            }
            var addBias = bias != null;
            var hasPreluActivationWeights = preluActivationWeights != null;
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.workPerThread = workPerThread;
            this.aShape = aShape;
            this.transposeA = transposeA;
            this.transposeB = transposeB;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.batchAEqualOne = batchAEqualOne;
            this.batchBEqualOne = batchBEqualOne;
            var dimBOuter = this.outputShape[2];
            var bShape = this.transposeB ?
                [this.outputShape[0], dimBOuter, dimInner] :
                [this.outputShape[0], dimInner, dimBOuter];
            _a = __read(this.getShapeFit(bShape), 2), this.fitA = _a[0], this.fitB = _a[1];
            this.shaderKey = "matMulPacked_" + this.workPerThread + "_" + transposeA + "_" + transposeB + "_" + this.activation + "_" + this.fitA + "_" + this.fitB + "_" + (this.outputShape[1] > 1) + "_" + this.batchAEqualOne + "_" + this.batchBEqualOne;
        }
        MatMulPackedProgram.prototype.getShapeFit = function (bShape) {
            var tileAOuter = this.workGroupSize[1] * this.workPerThread;
            var tileBOuter = this.workGroupSize[0] * this.workPerThread;
            var tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
            if (this.outputShape[1] === 1) {
                tileInner *= 4;
            }
            tf.util.assert(tileInner % this.workGroupSize[0] === 0 &&
                tileInner % this.workGroupSize[1] === 0, function () { return "tileInner must be multiple of workgroupsize.x " +
                "and workgroupsize.y"; });
            var tileSizeA = [tileAOuter, tileInner];
            var tileSizeB = [tileInner, tileBOuter];
            return [
                tilesFitEvenlyIntoShape(tileSizeA, this.aShape.slice(1)),
                tilesFitEvenlyIntoShape(tileSizeB, bShape.slice(1))
            ];
        };
        MatMulPackedProgram.prototype.getUserCode = function () {
            var sampleA;
            if (this.transposeA === false) {
                sampleA = this.fitA ?
                    "return A[batch * batchASize + row * uniforms.dimInner + col];" :
                    "if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {\n             return A[batch * batchASize + row * uniforms.dimInner + col];\n           }\n           return 0.0;";
            }
            else {
                sampleA = this.fitA ?
                    "return A[batch * batchASize + col * uniforms.dimAOuter + row];" :
                    "if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {\n             return A[batch* batchASize + col * uniforms.dimAOuter + row];\n           }\n           return 0.0;";
            }
            var sampleB;
            if (this.transposeB === false) {
                sampleB = this.fitB ?
                    "return B[batch * batchBSize + row * uniforms.dimBOuter + col];" :
                    "if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n             return B[batch * batchBSize + row * uniforms.dimBOuter + col];\n           }\n           return 0.0;";
            }
            else {
                sampleB = this.fitB ?
                    "return B[batch * batchBSize + col * uniforms.dimInner + row];" :
                    "if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n             return B[batch * batchBSize + col * uniforms.dimInner + row];\n           }\n           return 0.0;";
            }
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, false);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n               let b = getPreluActivationWeightsByOutputCoords(outCoord);\n               " + activationOp + "\n            }";
                }
                else {
                    activationSnippet = "\n              fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n                " + activationOp + "\n              }\n            ";
                }
                applyActivationSnippet = 'value = activation(value, outCoord);';
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n      " + activationSnippet + "\n\n      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {\n        " + (this.batchAEqualOne ? "\n        let batch = 0;\n        let batchASize = 0;\n        " :
                "\n        let batch = i32(globalId.z);\n        let batchASize = uniforms.aShape[1] * uniforms.aShape[2];\n        ") + "\n        " + sampleA + "\n      }\n\n      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {\n        " + (this.batchBEqualOne ? "\n        let batch = 0;\n        let batchBSize = 0;\n        " :
                "\n        let batch = i32(globalId.z);\n        let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];\n        ") + "\n        " + sampleB + "\n      }\n\n      fn mm_write(row : i32, col : i32, valueIn : f32, globalId : vec3<u32>) {\n        var value = valueIn;\n        let batch = i32(globalId.z);\n        let outCoord = vec3<i32>(batch, row, col);\n        " + addBiasSnippet + "\n        " + applyActivationSnippet + "\n        setOutputAtCoords(batch, row, col, value);\n      }\n      " + (this.outputShape[1] > 1 ?
                makeMatMulPackedSource([this.workPerThread, this.workPerThread, 1], this.workGroupSize) :
                makeMatMulVectorSource(this.workGroupSize)) + "\n    ";
            return userCode;
        };
        return MatMulPackedProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function makeMatMulReduceSource() {
        return "\n    var<workgroup> sumValues : array<f32, workGroupSizeX>;\n    " + getMainHeaderString() + "\n      let coords = getOutputCoords();\n      let batch = coords[0];\n      let row = coords[1];\n      let col = coords[2];\n      var sum = 0.0;\n      let Length = uniforms.dimInner;\n      for (var k = i32(localId.x); k < Length; k = k + i32(workGroupSizeX)) {\n        let dataA = mm_readA(batch, row, k);\n        let dataB = mm_readB(batch, k, col);\n        sum = sum + dataA * dataB;\n      }\n      sumValues[localId.x] = sum;\n      workgroupBarrier();\n\n      for(var currentSize = workGroupSizeX / 2u; currentSize > 1u;\n          currentSize = currentSize / 2u) {\n        if (localId.x < currentSize)\n        {\n          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];\n        }\n        workgroupBarrier();\n      }\n\n      if (localId.x == 0u) {\n        sum = sumValues[0] + sumValues[1];\n        mm_write(batch, row, col, sum);\n      }\n    }\n  ";
    }
    var MatMulReduceProgram = /** @class */ (function () {
        function MatMulReduceProgram(outputShape, batchAEqualOne, batchBEqualOne, transposeA, transposeB, bias, activation, preluActivationWeights) {
            if (transposeA === void 0) { transposeA = false; }
            if (transposeB === void 0) { transposeB = false; }
            if (bias === void 0) { bias = null; }
            if (activation === void 0) { activation = null; }
            if (preluActivationWeights === void 0) { preluActivationWeights = null; }
            this.variableNames = ['A', 'B'];
            this.uniforms = "dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.workGroupSize = [256, 1, 1];
            this.outputShape = outputShape;
            this.dispatchLayout = { x: [], y: [1, 2], z: [0] };
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            var addBias = bias != null;
            var hasPreluActivationWeights = preluActivationWeights != null;
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.transposeA = transposeA;
            this.transposeB = transposeB;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.batchAEqualOne = batchAEqualOne;
            this.batchBEqualOne = batchBEqualOne;
            this.shaderKey = "matMulReduce_" + this.activation + "_" + transposeA + "_" + transposeB + "_" + this.batchAEqualOne + "_" + this.batchBEqualOne;
        }
        MatMulReduceProgram.prototype.getUserCode = function () {
            var sampleA;
            if (this.transposeA === false) {
                sampleA =
                    "return f32(A[batch * batchASize + row * uniforms.dimInner + col]);";
            }
            else {
                sampleA =
                    "return f32(A[batch * batchASize + col * uniforms.dimAOuter + row]);";
            }
            var sampleB;
            if (this.transposeB === false) {
                sampleB =
                    "return f32(B[batch * batchBSize + row * uniforms.dimBOuter + col]);";
            }
            else {
                sampleB =
                    "return f32(B[batch * batchBSize + col * uniforms.dimInner + row]);";
            }
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, false);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n               let b = getPreluActivationWeightsByOutputCoords(outCoord);\n               " + activationOp + "\n            }";
                }
                else {
                    activationSnippet = "\n              fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n                " + activationOp + "\n              }\n            ";
                }
                applyActivationSnippet = 'value = activation(value, outCoord);';
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n      " + activationSnippet + "\n\n      fn mm_readA(batchIn: i32, row : i32, col : i32) -> f32 {\n        " + (this.batchAEqualOne ? "\n          let batchASize = 0;\n          let batch = 0;\n          " :
                "\n          let batchASize = uniforms.aShape[1] * uniforms.aShape[2];\n          let batch = batchIn;\n          ") + "\n        " + sampleA + "\n      }\n\n      fn mm_readB(batchIn: i32, row : i32, col : i32) -> f32 {\n        " + (this.batchBEqualOne ? "\n          let batch = 0;\n          let batchBSize = 0;\n          " :
                "\n          let batch = batchIn;\n          let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];\n          ") + "\n        " + sampleB + "\n      }\n\n      fn mm_write(batch: i32, row : i32, col : i32, valueIn : f32) {\n        var value = valueIn;\n        let outCoord = vec3<i32>(batch, row, col);\n        " + addBiasSnippet + "\n        " + applyActivationSnippet + "\n        setOutputAtCoords(batch, row, col, value);\n      }\n      " + makeMatMulReduceSource() + "\n    ";
            return userCode;
        };
        return MatMulReduceProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function makeMatMulSmallOutputSizeSource(workGroupSize) {
        var tileAOuter = workGroupSize[1] / 2;
        var tileBOuter = workGroupSize[0];
        var tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
        return "\n  var<workgroup> mm_Asub1 : array<array<f32, " + tileInner + ">, " + tileAOuter + ">;\n  var<workgroup> mm_Bsub1 : array<array<f32, " + tileBOuter + ">, " + tileInner + ">;\n  var<workgroup> mm_Asub2 : array<array<f32, " + tileInner + ">, " + tileAOuter + ">;\n  var<workgroup> mm_Bsub2 : array<array<f32, " + tileBOuter + ">, " + tileInner + ">;\n\n  // If the output size is small for matrix multiplication, avoid to use vec4\n  // and handle some elements per thread to optimally utilize the ALU.\n  // Introduces two shared memory buffers, some logical threads could handle\n  // arithmetic operations and others handle IO operations between barrier api,\n  // makes ALUs and load/store units work simultaneously, could improves\n  // the performance.\n  " + getMainHeaderString() + "\n    let tileRow = i32(localId.y);\n    let tileCol = i32(localId.x);\n    let globalRow = i32(globalId.y);\n    let globalCol = i32(globalId.x);\n\n    // uniforms.dimInner should be greater than 0.\n    let numTiles = (uniforms.dimInner - 1) / " + tileInner + " + 1;\n    var acc = 0.0;\n\n    var globalColA = tileCol;\n    var globalRowB = tileRow;\n    for (var t = 0; t < numTiles; t = t + 1) {\n      if (t == 0) {\n        if (tileRow < " + tileAOuter + ") {\n          // Load one tile of A and B into local memory.\n          // globalRow is always greater than or equal tileRow.\n          mm_Asub1[tileRow][tileCol] =\n              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);\n          globalColA = globalColA + " + tileInner + ";\n          mm_Bsub1[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);\n          globalRowB = globalRowB + " + tileInner + ";\n        }\n      } else {\n        if (tileRow < " + tileAOuter + ") {\n          // Load one tile of A and B into local memory.\n          // globalRow is always greater than or equal tileRow.\n          mm_Asub1[tileRow][tileCol] =\n              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);\n          globalColA = globalColA + " + tileInner + ";\n          mm_Bsub1[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);\n          globalRowB = globalRowB + " + tileInner + ";\n        } else {\n          // Compute acc values for a single thread.\n          for (var k = 0; k < " + tileInner + "; k = k + 1) {\n            let subRow = tileRow - " + tileAOuter + ";\n            if (subRow < 0) {\n              continue;\n            }\n            acc = acc + mm_Asub2[subRow][k] * mm_Bsub2[k][tileCol];\n          }\n        }\n      }\n      workgroupBarrier();\n      if (t != 0) {\n        t = t + 1;\n      }\n\n      if (t < numTiles) {\n        if (tileRow < " + tileAOuter + ") {\n          // Load one tile of A and B into local memory.\n          // globalRow is always greater than or equal tileRow.\n          mm_Asub2[tileRow][tileCol] =\n              mm_readA((globalRow - tileRow) / 2 + tileRow, globalColA, globalId);\n          globalColA = globalColA + " + tileInner + ";\n          mm_Bsub2[tileRow][tileCol] = mm_readB(globalRowB, globalCol, globalId);\n          globalRowB = globalRowB + " + tileInner + ";\n        } else {\n          // Compute acc values for a single thread.\n          for (var k = 0; k < " + tileInner + "; k = k + 1) {\n            let subRow = tileRow - " + tileAOuter + ";\n            if (subRow < 0) {\n              continue;\n            }\n            acc = acc + mm_Asub1[subRow][k] * mm_Bsub1[k][tileCol];\n          }\n        }\n      }\n      workgroupBarrier();\n    }\n    let writeCol = (globalRow - tileRow) / 2 + tileRow - " + tileAOuter + ";\n    if (tileRow >= " + tileAOuter + " && writeCol >= 0) {\n      mm_write(writeCol, globalCol, acc, globalId);\n    }\n  }\n  ";
    }
    var MatMulSmallOutputSizeProgram = /** @class */ (function () {
        function MatMulSmallOutputSizeProgram(aShape, bShape, outputShape, bias, activation, preluActivationWeights) {
            if (bias === void 0) { bias = null; }
            if (activation === void 0) { activation = null; }
            if (preluActivationWeights === void 0) { preluActivationWeights = null; }
            this.variableNames = ['A', 'B'];
            this.uniforms = "dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.workGroupSize = [8, 16, 1];
            tf.util.assert(aShape[1] <= 16 || bShape[2] <= 16, function () { return 'This program can be only used when A width or B Height are small'; });
            this.outputShape = outputShape;
            this.dispatchLayout = { x: [2], y: [1], z: [0] };
            this.dispatch = [
                Math.ceil(outputShape[2] / this.workGroupSize[0]),
                Math.ceil(outputShape[1] * 2 / this.workGroupSize[1]), outputShape[0]
            ];
            var addBias = bias != null;
            if (addBias) {
                this.variableNames.push('bias');
            }
            var hasPreluActivationWeights = preluActivationWeights != null;
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.batchAEqualOne = aShape[0] === 1;
            this.batchBEqualOne = bShape[0] === 1;
            this.shaderKey = "matMulSmallOutputSize_" + this.activation + "_" + this.batchAEqualOne + "_" + this.batchBEqualOne;
        }
        MatMulSmallOutputSizeProgram.prototype.getUserCode = function () {
            var sampleA = "if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimInner))) {\n          return A[batch * batchASize + row * uniforms.dimInner + col];\n        }\n        return 0.0;";
            var sampleB = "if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n           return B[batch * batchBSize + row * uniforms.dimBOuter + col];\n         }\n         return 0.0;";
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, false);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n            let b = getPreluActivationWeightsByOutputCoords(outCoord);\n            " + activationOp + "\n            }";
                }
                else {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec3<i32>) -> f32 {\n            " + activationOp + "\n        }";
                }
                applyActivationSnippet = 'value = activation(value, outCoord);';
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n      " + activationSnippet + "\n\n      fn mm_readA(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {\n        " + (this.batchAEqualOne ? "\n          let batch = 0;\n          let batchASize = 0;\n          " :
                "\n          let batchASize = uniforms.aShape[1] * uniforms.aShape[2];\n          let batch = i32(globalId.z);\n          ") + "\n        " + sampleA + "\n      }\n      fn mm_readB(row : i32, col : i32,  globalId : vec3<u32>) -> f32 {\n        " + (this.batchBEqualOne ? "\n          let batch = 0;\n          let batchBSize = 0;\n          " :
                "\n          let batch = i32(globalId.z);\n          let batchBSize = uniforms.bShape[1] * uniforms.bShape[2];\n          ") + "\n        " + sampleB + "\n      }\n      fn mm_write(row : i32, col : i32, valueIn : f32, globalId : vec3<u32>) {\n        if (coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimAOuter, uniforms.dimBOuter))) {\n          let batch = i32(globalId.z);\n          let outCoord = vec3<i32>(batch, row, col);\n          var value = valueIn;\n          " + addBiasSnippet + "\n          " + applyActivationSnippet + "\n          setOutputAtCoords(batch, row, col, value);\n        }\n      }\n      " + makeMatMulSmallOutputSizeSource(this.workGroupSize) + "\n    ";
            return userCode;
        };
        return MatMulSmallOutputSizeProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function reshape(args) {
        var inputs = args.inputs, attrs = args.attrs;
        var x = inputs.x;
        var shape = attrs.shape;
        var xSize = tf.util.sizeFromShape(x.shape);
        var $shape = tf.util.inferFromImplicitShape(shape, xSize);
        var $xSize = tf.util.sizeFromShape($shape);
        tf.util.assert(xSize === $xSize, function () { return "The new shape (" + $shape + ") has " + $xSize + " elements and the old " +
            ("shape (" + x.shape + ") has " + xSize + " elements. The new shape and old ") +
            "shape must have the same number of elements."; });
        // Backend needs to track refCount for the dataId for reshape op
        args.backend.incRef(x.dataId);
        return { dataId: x.dataId, shape: $shape, dtype: x.dtype };
    }
    var reshapeConfig = {
        kernelName: tf.Reshape,
        backendName: 'webgpu',
        kernelFunc: reshape
    };

    function batchMatMulImpl(_a) {
        var e_1, _b;
        var a = _a.a, b = _a.b, transposeA = _a.transposeA, transposeB = _a.transposeB, backend = _a.backend, _c = _a.bias, bias = _c === void 0 ? null : _c, _d = _a.preluActivationWeights, preluActivationWeights = _d === void 0 ? null : _d, _e = _a.leakyreluAlpha, leakyreluAlpha = _e === void 0 ? 0 : _e, _f = _a.activation, activation = _f === void 0 ? null : _f;
        var aRank = a.shape.length;
        var bRank = b.shape.length;
        var innerShapeA = transposeA ? a.shape[aRank - 2] : a.shape[aRank - 1];
        var innerShapeB = transposeB ? b.shape[bRank - 1] : b.shape[bRank - 2];
        var outerShapeA = transposeA ? a.shape[aRank - 1] : a.shape[aRank - 2];
        var outerShapeB = transposeB ? b.shape[bRank - 2] : b.shape[bRank - 1];
        var outerDimsA = a.shape.slice(0, -2);
        var outerDimsB = b.shape.slice(0, -2);
        var batchDimA = tf.util.sizeFromShape(outerDimsA);
        var batchDimB = tf.util.sizeFromShape(outerDimsB);
        var outShapeOuterDims = tf.broadcast_util.assertAndGetBroadcastShape(a.shape.slice(0, -2), b.shape.slice(0, -2));
        var outShape = outShapeOuterDims.concat([outerShapeA, outerShapeB]);
        tf.util.assert(innerShapeA === innerShapeB, function () { return "Error in matMul: inner shapes (" + innerShapeA + ") and (" +
            (innerShapeB + ") of Tensors with shapes " + a.shape + " and ") +
            (b.shape + " and transposeA=" + transposeA) +
            (" and transposeB=" + transposeB + " must match."); });
        var a3dShape = transposeA ?
            [batchDimA, innerShapeA, outerShapeA] :
            [batchDimA, outerShapeA, innerShapeA];
        var b3dShape = transposeB ?
            [batchDimB, outerShapeB, innerShapeB] :
            [batchDimB, innerShapeB, outerShapeB];
        // The rest of the implementation is designed to operate on rank-3 tensors
        var a3d = reshape({ inputs: { x: a }, backend: backend, attrs: { shape: a3dShape } });
        var b3d = reshape({ inputs: { x: b }, backend: backend, attrs: { shape: b3dShape } });
        var intermediates = [a3d, b3d];
        var batchDim = Math.max(batchDimA, batchDimB);
        var batchAEqualOne = batchDimA === 1;
        var batchBEqualOne = batchDimB === 1;
        var useVec4 = innerShapeA % 4 === 0 && outerShapeB % 4 === 0 &&
            !transposeA && !transposeB;
        var program;
        if (outerShapeA * outerShapeB <= 32) {
            program = new MatMulReduceProgram([batchDim, outerShapeA, outerShapeB], batchAEqualOne, batchBEqualOne, transposeA, transposeB, bias, activation, preluActivationWeights);
        }
        else 
        // When the output size is absolutely small or relatively small, we may
        // use MatMulSmallOutputSizeProgram to get better performance. Absolutely
        // small size means that the output size is smaller than [16, 512].
        // Relatively small size means that one demension size of the output is
        // smaller than 16, and the output size is also more than or equal two
        // times smaller than each of the two input sizes. For example, if input
        // sizes are [12, 2048] and [2048, 1024], the output size is [12, 1024],
        // which is relatively small compared to input sizes.
        if (!transposeA && !transposeB &&
            ((outerShapeA <= 16 &&
                (outerShapeB <= 512 || innerShapeB >= 2 * outerShapeB)) ||
                (outerShapeB <= 16 &&
                    (outerShapeA <= 512 || innerShapeA >= 2 * outerShapeA)))) {
            program = new MatMulSmallOutputSizeProgram(a3dShape, b3dShape, [batchDim, outerShapeA, outerShapeB], bias, activation, preluActivationWeights);
        }
        else if (useVec4) {
            // TODO: Currently we need to make sure that innerShapeA and outerShapeB
            // are divisible by 4 since we use vec4 to get data. In future, we can
            // remove this limitation by insert 0 to pack data.
            program = new MatMulPackedVec4Program(a3dShape, [batchDim, outerShapeA, outerShapeB], tf.env().get('WEBGPU_MATMUL_WORK_PER_THREAD'), batchAEqualOne, batchBEqualOne, bias, activation, preluActivationWeights);
        }
        else {
            program = new MatMulPackedProgram(a3dShape, [batchDim, outerShapeA, outerShapeB], tf.env().get('WEBGPU_MATMUL_WORK_PER_THREAD'), batchAEqualOne, batchBEqualOne, transposeA, transposeB, bias, activation, preluActivationWeights);
        }
        var inputs = [a3d, b3d];
        if (bias) {
            inputs.push(bias);
        }
        if (preluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        var dimensions = [
            { type: 'int32', data: [outerShapeA] }, { type: 'int32', data: [outerShapeB] },
            { type: 'int32', data: [innerShapeA] }
        ];
        if (activation === 'leakyrelu') {
            dimensions.push({ type: 'float32', data: [leakyreluAlpha] });
            program.uniforms += ' alpha : f32,';
        }
        var out = backend.runWebGPUProgram(program, inputs, a.dtype, dimensions);
        var outReshaped = reshape({ inputs: { x: out }, backend: backend, attrs: { shape: outShape } });
        intermediates.push(out);
        try {
            for (var intermediates_1 = __values(intermediates), intermediates_1_1 = intermediates_1.next(); !intermediates_1_1.done; intermediates_1_1 = intermediates_1.next()) {
                var i = intermediates_1_1.value;
                backend.disposeData(i.dataId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (intermediates_1_1 && !intermediates_1_1.done && (_b = intermediates_1.return)) _b.call(intermediates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return outReshaped;
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function _fusedMatMul(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var a = inputs.a, b = inputs.b, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
        var transposeA = attrs.transposeA, transposeB = attrs.transposeB, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
        return batchMatMulImpl({
            a: a,
            b: b,
            transposeA: transposeA,
            transposeB: transposeB,
            backend: backend,
            bias: bias,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha,
            activation: activation
        });
    }
    var _fusedMatMulConfig = {
        kernelName: tf._FusedMatMul,
        backendName: 'webgpu',
        kernelFunc: _fusedMatMul,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BinaryOpComplexProgram = /** @class */ (function () {
        function BinaryOpComplexProgram(op, aShape, bShape) {
            this.variableNames = ['AReal', 'AImag', 'BReal', 'BImag'];
            this.workGroupSize = [128, 1, 1];
            this.size = true;
            this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "binaryOpComplex_" + op;
            this.op = op;
        }
        BinaryOpComplexProgram.prototype.getUserCode = function () {
            var opStr = getBinaryOpString(this.op, false);
            var userCode = "\n      fn binaryOpComplex(\n          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {\n        " + opStr + "\n      }\n\n      " + getMainHeaderAndGlobalIndexString() + "\n        if(index < uniforms.size) {\n          let areal = getARealByOutputIndex(index);\n          let aimag = getAImagByOutputIndex(index);\n          let breal = getBRealByOutputIndex(index);\n          let bimag = getBImagByOutputIndex(index);\n          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));\n        }\n      }\n    ";
            return userCode;
        };
        return BinaryOpComplexProgram;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BinaryOpSharedProgram = /** @class */ (function () {
        function BinaryOpSharedProgram(op, aShape, bShape, useSharedMemoryWithB) {
            this.variableNames = ['A', 'B'];
            this.size = true;
            // This is an experimental value when using shared memory.
            // Note that the maximum of workgroup X dimension is 256.
            var workGroupSizeX = 256;
            this.workGroupSize = [workGroupSizeX, 1, 1];
            this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.lastDimensionSize = useSharedMemoryWithB ? bShape[0] : aShape[0];
            if (this.lastDimensionSize < 256) {
                this.workPerThread = 1;
            }
            else if (this.lastDimensionSize < 512) {
                this.workPerThread = 2;
            }
            else {
                this.workPerThread = 4;
            }
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.useSharedMemoryWithB = useSharedMemoryWithB;
            this.op = op;
            // this.lastDimensionSize is used as sharedBuf array size, so can not be
            // used as uniform.
            this.shaderKey = "binaryShared_" + op + "_" + this.lastDimensionSize + "_" + this.useSharedMemoryWithB;
        }
        BinaryOpSharedProgram.prototype.getUserCode = function () {
            var sharedIndexSnippet = this.lastDimensionSize > 1 ?
                "coords[" + (this.outputShape.length - 1) + "]" :
                '0';
            var accessDataSnippet = this.useSharedMemoryWithB ?
                "let a = getAByOutputCoords(coords);\n         let b = sharedBuf[" + sharedIndexSnippet + "];" :
                "let a = sharedBuf[" + sharedIndexSnippet + "];\n         let b = getBByOutputCoords(coords);";
            var opStr = getBinaryOpString(this.op, false);
            var userCode = "\n        fn binaryOperation(a : f32, b : f32) -> f32 {\n          " + opStr + "\n        }\n        var<workgroup> sharedBuf : array<f32, " + this.lastDimensionSize + ">;\n        " + getMainHeaderAndGlobalIndexString() + "\n\n          // Fill in the shared memory buffer. Here we need a loop to make sure\n          // that all data in A|B are uploaded when |sharedMemorySize| is larger\n          // than work group size.\n          for(var localIndex = i32(localId.x); localIndex < " + this.lastDimensionSize + "; localIndex = localIndex + " + this.workGroupSize[0] + ") {\n            sharedBuf[localIndex] = f32(" + (this.useSharedMemoryWithB ? 'B' : 'A') + "[localIndex]);\n          }\n          workgroupBarrier();\n\n          for(var i = 0; i < " + this.workPerThread + "; i = i + 1) {\n            let flatIndex = index * " + this.workPerThread + " + i;\n            if(flatIndex < uniforms.size) {\n              let coords = getCoordsFromIndex(flatIndex);\n\n              " + accessDataSnippet + "\n              setOutputAtIndex(flatIndex, binaryOperation(a, b));\n            }\n          }\n        }\n        ";
            return userCode;
        };
        return BinaryOpSharedProgram;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BinaryOpVec4Program = /** @class */ (function () {
        function BinaryOpVec4Program(op, aShape, bShape) {
            this.variableNames = ['A', 'B'];
            this.workPerThread = 4;
            this.isVec4 = true;
            this.size = true;
            // TODO(jiajia.qin@intel.com): Heuristically select a good work group size.
            var workGroupSizeX = 128;
            this.workGroupSize = [workGroupSizeX, 1, 1];
            this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.op = op;
            this.shaderKey = "binaryVec4_" + op;
        }
        BinaryOpVec4Program.prototype.getUserCode = function () {
            var opStr = getBinaryOpString(this.op, this.isVec4);
            var userCode = "\n      fn binaryOperation(a : vec4<f32>, b : vec4<f32>) -> vec4<f32> {\n        " + opStr + "\n      }\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          let b = getBByOutputIndex(index);\n          setOutputAtIndex(index, binaryOperation(a, b));\n        }\n      }\n    ";
            return userCode;
        };
        return BinaryOpVec4Program;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BinaryOpProgram = /** @class */ (function () {
        function BinaryOpProgram(op, aShape, bShape) {
            this.variableNames = ['A', 'B'];
            this.size = true;
            // TODO(jiajia.qin@intel.com): Heuristically select a good work group size.
            var workGroupSizeX = 128;
            this.workGroupSize = [workGroupSizeX, 1, 1];
            this.outputShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "binary_" + op;
            this.op = op;
        }
        BinaryOpProgram.prototype.getUserCode = function () {
            var opStr = getBinaryOpString(this.op, false);
            var userCode = "\n      fn binaryOperation(a : f32, b : f32) -> f32 {\n        " + opStr + "\n      }\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          let b = getBByOutputIndex(index);\n          setOutputAtIndex(index, binaryOperation(a, b));\n        }\n      }\n      ";
            return userCode;
        };
        return BinaryOpProgram;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function getBinaryProgram(op, aShape, bShape) {
        var useVec4 = tf.util.arraysEqual(aShape, bShape) && tf.util.sizeFromShape(aShape) % 4 === 0;
        if (useVec4) {
            return new BinaryOpVec4Program(op, aShape, bShape);
        }
        var useSharedMemoryWithA = aShape.length === 1 && bShape.length > 1 && aShape[0] < 1024;
        var useSharedMemoryWithB = bShape.length === 1 && aShape.length > 1 && bShape[0] < 1024;
        if (useSharedMemoryWithA || useSharedMemoryWithB) {
            return new BinaryOpSharedProgram(op, aShape, bShape, useSharedMemoryWithB);
        }
        else {
            return new BinaryOpProgram(op, aShape, bShape);
        }
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function identity(args) {
        var inputs = args.inputs;
        var x = inputs.x;
        args.backend.incRef(x.dataId);
        return { dataId: x.dataId, shape: x.shape, dtype: x.dtype };
    }
    var identityConfig = {
        kernelName: tf.Identity,
        backendName: 'webgpu',
        kernelFunc: identity
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * Complex tensors share data with their real and imaginary components. Complex
     * tensors' reference to the components is tracked by refCount on the individual
     * component. The refCounts are increased by the identity call.
     *
     * When a complex tensor is disposed, it will reduce the refCount on the
     * components by calling disposeData on each.
     */
    function complex(args) {
        var inputs = args.inputs, backend = args.backend;
        var real = inputs.real, imag = inputs.imag;
        var complexInfo = backend.makeTensorInfo(real.shape, 'complex64');
        var complex = backend.tensorMap.get(complexInfo.dataId);
        var realTensorInfo = identity({ inputs: { x: real }, backend: backend });
        var imagTensorInfo = identity({ inputs: { x: imag }, backend: backend });
        complex.complexTensorInfos = { real: realTensorInfo, imag: imagTensorInfo };
        return complexInfo;
    }
    var complexConfig = {
        kernelName: tf.Complex,
        backendName: 'webgpu',
        kernelFunc: complex
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var UnaryOpProgram = /** @class */ (function () {
        function UnaryOpProgram(outputShape, op) {
            this.variableNames = ['A'];
            this.size = true;
            // TODO(jiajia.qin@intel.com): Heuristically select a good work group size.
            var workGroupSizeX = 128;
            this.workGroupSize = [workGroupSizeX, 1, 1];
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.op = op;
            this.shaderKey = "unary_" + op;
        }
        UnaryOpProgram.prototype.getUserCode = function () {
            return "\n      fn unaryOperation(a : f32) -> f32 {\n        " + getUnaryOpString(this.op, false) + "\n      }\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let a = getAByOutputIndex(index);\n          setOutputAtIndex(index, unaryOperation(a));\n        }\n      }\n      ";
        };
        return UnaryOpProgram;
    }());

    /**
     * Template that creates a `KernelFunc` for unary ops.
     * @param opSnippet Op snippet to create `UnaryOpProgram`.
     * @param cpuKernelImpl Optional. Shared functionality from tfjs-backend-cpu, it
     *     will be involved when necessary.
     * @param dtype Optional. If set, the result has this dtype. Otherwise, the
     *     result has the same dtype as the first input. This is mainly used in
     *     comparison kernels, such as Equal, Less, Greater, etc.
     */
    function unaryKernelFunc(_a) {
        var opType = _a.opType, cpuKernelImpl = _a.cpuKernelImpl, dtype = _a.dtype;
        return function (_a) {
            var inputs = _a.inputs, backend = _a.backend;
            var x = inputs.x;
            var webgpuBackend = backend;
            var $dtype = dtype || x.dtype;
            if (webgpuBackend.shouldExecuteOnCPU([x]) && cpuKernelImpl != null) {
                var xData = webgpuBackend.tensorMap.get(x.dataId);
                var outValues = cpuKernelImpl(xData.values, $dtype);
                return webgpuBackend.makeTensorInfo(x.shape, $dtype, outValues);
            }
            var program = new UnaryOpProgram(x.shape, opType);
            return webgpuBackend.runWebGPUProgram(program, [x], $dtype);
        };
    }
    /**
     * Template that creates a `KernelFunc` for binary ops.
     * @param opSnippet Op snippet to create `BinaryOpProgram`.
     * @param cpuKernelImpl Optional. Shared functionality from tfjs-backend-cpu, it
     *     will be involved when necessary.
     * @param dtype Optional. If set, the result has this dtype. Otherwise, the
     *     result has the same dtype as the first input. This is mainly used in
     *     comparison kernels, such as Equal, Less, Greater, etc.
     */
    function binaryKernelFunc(_a) {
        var opSnippet = _a.opSnippet, cpuKernelImpl = _a.cpuKernelImpl, _b = _a.supportsComplex, supportsComplex = _b === void 0 ? false : _b, dtype = _a.dtype;
        return function (_a) {
            var _b;
            var inputs = _a.inputs, backend = _a.backend;
            var a = inputs.a, b = inputs.b;
            var webgpuBackend = backend;
            if (supportsComplex && a.dtype === 'complex64') {
                var aData = webgpuBackend.tensorMap.get(a.dataId);
                var bData = webgpuBackend.tensorMap.get(b.dataId);
                var real = void 0, imag = void 0;
                if (opSnippet !== BinaryOpType.MUL) {
                    _b = __read([
                        [aData.complexTensorInfos.real, bData.complexTensorInfos.real],
                        [aData.complexTensorInfos.imag, bData.complexTensorInfos.imag]
                    ].map(function (complexParts) {
                        var _a = __read(complexParts, 2), aPart = _a[0], bPart = _a[1];
                        var aHandle = {
                            dataId: aPart.dataId,
                            dtype: aPart.dtype,
                            shape: a.shape
                        };
                        var bHandle = {
                            dataId: bPart.dataId,
                            dtype: bPart.dtype,
                            shape: b.shape
                        };
                        var program = getBinaryProgram(opSnippet, a.shape, b.shape);
                        return webgpuBackend.runWebGPUProgram(program, [aHandle, bHandle], tf.upcastType(aPart.dtype, bPart.dtype));
                    }), 2), real = _b[0], imag = _b[1];
                }
                else {
                    var realProgram = new BinaryOpComplexProgram(BinaryOpType.COMPLEX_MULTIPLY_REAL, a.shape, b.shape);
                    var imagProgram = new BinaryOpComplexProgram(BinaryOpType.COMPLEX_MULTIPLY_IMAG, a.shape, b.shape);
                    var inputs_1 = [
                        {
                            dataId: aData.complexTensorInfos.real.dataId,
                            dtype: aData.complexTensorInfos.real.dtype,
                            shape: a.shape
                        },
                        {
                            dataId: aData.complexTensorInfos.imag.dataId,
                            dtype: aData.complexTensorInfos.imag.dtype,
                            shape: a.shape
                        },
                        {
                            dataId: bData.complexTensorInfos.real.dataId,
                            dtype: bData.complexTensorInfos.real.dtype,
                            shape: b.shape
                        },
                        {
                            dataId: bData.complexTensorInfos.imag.dataId,
                            dtype: bData.complexTensorInfos.imag.dtype,
                            shape: b.shape
                        }
                    ];
                    real = webgpuBackend.runWebGPUProgram(realProgram, inputs_1, 'float32');
                    imag = webgpuBackend.runWebGPUProgram(imagProgram, inputs_1, 'float32');
                }
                var complexOutput = complex({ inputs: { real: real, imag: imag }, backend: webgpuBackend });
                webgpuBackend.disposeData(real.dataId);
                webgpuBackend.disposeData(imag.dataId);
                // TODO: Implement CPU forwarding for complex inputs.
                return complexOutput;
            }
            var $dtype = dtype || tf.upcastType(a.dtype, b.dtype);
            if ((a.dtype === 'string' || b.dtype === 'string' ||
                webgpuBackend.shouldExecuteOnCPU([a, b])) &&
                cpuKernelImpl != null) {
                var aData = webgpuBackend.tensorMap.get(a.dataId).values;
                var bData = webgpuBackend.tensorMap.get(b.dataId).values;
                var decodedAVals = a.dtype === 'string' ?
                    // tslint:disable-next-line: no-any
                    tf.backend_util.fromUint8ToStringArray(aData) :
                    aData;
                var decodedBVals = a.dtype === 'string' ?
                    // tslint:disable-next-line: no-any
                    tf.backend_util.fromUint8ToStringArray(bData) :
                    bData;
                var _c = __read(cpuKernelImpl(a.shape, b.shape, decodedAVals, decodedBVals, $dtype), 2), outValues = _c[0], outShape = _c[1];
                return webgpuBackend.makeTensorInfo(outShape, $dtype, outValues);
            }
            var program = getBinaryProgram(opSnippet, a.shape, b.shape);
            return webgpuBackend.runWebGPUProgram(program, [a, b], $dtype);
        };
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function simpleAbsImpl(vals) {
        var resultValues = new Float32Array(vals.length);
        for (var i = 0; i < vals.length; ++i) {
            resultValues[i] = Math.abs(vals[i]);
        }
        return resultValues;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * Template that creates implementation for binary ops. Supports broadcast.
     */
    function createSimpleBinaryKernelImpl(op) {
        return function (aShape, bShape, aVals, bVals, dtype) {
            var newShape = tf.backend_util.assertAndGetBroadcastShape(aShape, bShape);
            var resultRank = newShape.length;
            var resultStrides = tf.util.computeStrides(newShape);
            var resultSize = tf.util.sizeFromShape(newShape);
            var result = tf.util.getTypedArrayFromDType(dtype, resultSize);
            var aRank = aShape.length;
            var bRank = bShape.length;
            var aStrides = tf.util.computeStrides(aShape);
            var bStrides = tf.util.computeStrides(bShape);
            var aBroadcastDims = tf.backend_util.getBroadcastDims(aShape, newShape);
            var bBroadcastDims = tf.backend_util.getBroadcastDims(bShape, newShape);
            if (aBroadcastDims.length + bBroadcastDims.length === 0) {
                for (var i = 0; i < result.length; ++i) {
                    result[i] = op(aVals[i % aVals.length], bVals[i % bVals.length]);
                }
            }
            else {
                var _loop_1 = function (i) {
                    var loc = tf.util.indexToLoc(i, resultRank, resultStrides);
                    var aLoc = loc.slice(-aRank);
                    aBroadcastDims.forEach(function (d) { return aLoc[d] = 0; });
                    var aIndex = tf.util.locToIndex(aLoc, aRank, aStrides);
                    var bLoc = loc.slice(-bRank);
                    bBroadcastDims.forEach(function (d) { return bLoc[d] = 0; });
                    var bIndex = tf.util.locToIndex(bLoc, bRank, bStrides);
                    result[i] = op(aVals[aIndex], bVals[bIndex]);
                };
                for (var i = 0; i < result.length; ++i) {
                    _loop_1(i);
                }
            }
            return [result, newShape];
        };
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var addImpl = createSimpleBinaryKernelImpl((function (a, b) { return a + b; }));

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * Template that creates implementation for unary op.
     */
    function createSimpleUnaryImpl(op) {
        return function (values, dtype, attrs) {
            var newValues = tf.util.getTypedArrayFromDType(dtype, values.length);
            for (var i = 0; i < values.length; ++i) {
                newValues[i] = op(values[i], attrs);
            }
            return newValues;
        };
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ceilImpl = createSimpleUnaryImpl(function (xi) { return Math.ceil(xi); });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function concatImpl$1(inputs, outShape, dtype, simplyConcat) {
        var outVals = tf.util.getArrayFromDType(dtype, tf.util.sizeFromShape(outShape));
        if (simplyConcat && dtype !== 'string') {
            // Use built-in TypedArray.set() method for speed.
            var offset_1 = 0;
            inputs.forEach(function (input) {
                var size = tf.util.sizeFromShape(input.shape);
                outVals.set(input.vals, offset_1);
                offset_1 += size;
            });
        }
        else {
            var colOffset_1 = 0;
            inputs.forEach(function (input) {
                var decodedData = dtype === 'string' ?
                    tf.backend_util.fromUint8ToStringArray(input.vals) :
                    input.vals;
                var tIdx = 0;
                for (var row = 0; row < input.shape[0]; ++row) {
                    var resIdx = row * outShape[1] + colOffset_1;
                    for (var col = 0; col < input.shape[1]; ++col) {
                        outVals[resIdx + col] = decodedData[tIdx++];
                    }
                }
                colOffset_1 += input.shape[1];
            });
        }
        return outVals;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var equalImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a === b) ? 1 : 0; });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var expImpl = createSimpleUnaryImpl(function (xi) { return Math.exp(xi); });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var expm1Impl = createSimpleUnaryImpl(function (xi) { return Math.expm1(xi); });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var floorImpl = createSimpleUnaryImpl(function (xi) { return Math.floor(xi); });

    function gatherNdImpl(indicesData, paramsBuf, dtype, numSlices, sliceRank, sliceSize, strides, paramsShape, paramsSize) {
        var outBuf = tf.buffer([numSlices, sliceSize], dtype);
        for (var i = 0; i < numSlices; i++) {
            var index = [];
            var flattenIndex = 0;
            for (var j = 0; j < sliceRank; j++) {
                var dim = indicesData[i * sliceRank + j];
                flattenIndex += dim * strides[j];
                index.push(dim);
            }
            if (flattenIndex < 0 || flattenIndex >= paramsSize / sliceSize) {
                throw new Error("Invalid indices: " + index + " does not index into " + paramsShape);
            }
            for (var k = 0; k < sliceSize; k++) {
                outBuf.values[i * sliceSize + k] = paramsBuf.get.apply(paramsBuf, __spread(paramsBuf.indexToLoc(flattenIndex * sliceSize + k)));
            }
        }
        return outBuf;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function gatherV2Impl(xBuf, indicesBuf, flattenOutputShape) {
        var outBuf = tf.buffer(flattenOutputShape, xBuf.dtype);
        for (var i = 0; i < outBuf.size; ++i) {
            var newLoc = outBuf.indexToLoc(i);
            var originalLoc = newLoc.slice();
            var batchIdx = originalLoc[0];
            var indicesIdx = originalLoc[2];
            var indicesIndex = indicesBuf.locToIndex([batchIdx, indicesIdx]);
            originalLoc[2] = indicesBuf.values[indicesIndex];
            var originalIndex = xBuf.locToIndex(originalLoc);
            if (0 <= originalIndex && originalIndex < xBuf.values.length) {
                outBuf.values[i] = xBuf.values[originalIndex];
            } // Else, index is out of bounds, so leave the default zero val in outBuf.
        }
        return outBuf;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var greaterImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a > b) ? 1 : 0; });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var greaterEqualImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a >= b) ? 1 : 0; });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var lessImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a < b) ? 1 : 0; });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var lessEqualImpl = createSimpleBinaryKernelImpl(function (a, b) { return (a <= b) ? 1 : 0; });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var logImpl = createSimpleUnaryImpl(function (xi) { return Math.log(xi); });

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function maxImpl(aVals, reduceSize, outShape, dtype) {
        var vals = tf.util.getTypedArrayFromDType(dtype, tf.util.sizeFromShape(outShape));
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var max = aVals[offset];
            for (var j = 0; j < reduceSize; ++j) {
                var value = aVals[offset + j];
                if (Number.isNaN(value) ||
                    value > max) { // comparison with NaN always return false
                    max = value;
                }
            }
            vals[i] = max;
        }
        return vals;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var maximumImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return Math.max(aValue, bValue); }));

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var minimumImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return Math.min(aValue, bValue); }));

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var multiplyImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return aValue * bValue; }));

    function negImpl(xVals, xShape, xDtype) {
        var minusOne = tf.util.createScalarValue(-1, xDtype);
        return multiplyImpl([], xShape, minusOne, xVals, xDtype);
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var notEqualImpl = createSimpleBinaryKernelImpl((function (a, b) { return (a !== b) ? 1 : 0; }));

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function transposeImpl(xVals, xShape, dtype, perm, newShape) {
        var xRank = xShape.length;
        var xSize = tf.util.sizeFromShape(xShape);
        var xStrides = tf.util.computeStrides(xShape);
        var newStrides = tf.util.computeStrides(newShape);
        var result = tf.util.getTypedArrayFromDType(dtype, tf.util.sizeFromShape(newShape));
        for (var i = 0; i < xSize; ++i) {
            var loc = tf.util.indexToLoc(i, xRank, xStrides);
            // Permute location.
            var newLoc = new Array(loc.length);
            for (var i_1 = 0; i_1 < newLoc.length; i_1++) {
                newLoc[i_1] = loc[perm[i_1]];
            }
            var newIndex = tf.util.locToIndex(newLoc, xRank, newStrides);
            result[newIndex] = xVals[i];
        }
        return result;
    }

    function prodImpl(xShape, xDtype, xVals, reductionAxes) {
        var _a = __read(tf.backend_util.computeOutAndReduceShapes(xShape, reductionAxes), 2), outShape = _a[0], reduceShape = _a[1];
        var outDtype = tf.upcastType(xDtype, 'int32');
        var outVals = tf.util.makeZerosTypedArray(tf.util.sizeFromShape(outShape), outDtype);
        var reduceSize = tf.util.sizeFromShape(reduceShape);
        for (var i = 0; i < outVals.length; ++i) {
            var offset = i * reduceSize;
            var prod_1 = 1;
            for (var j = 0; j < reduceSize; ++j) {
                prod_1 *= xVals[offset + j];
            }
            outVals[i] = prod_1;
        }
        return { outVals: outVals, outShape: outShape, outDtype: outDtype };
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function rangeImpl(start, stop, step, dtype) {
        var sameStartStop = start === stop;
        var increasingRangeNegativeStep = start < stop && step < 0;
        var decreasingRangePositiveStep = stop < start && step > 1;
        if (sameStartStop || increasingRangeNegativeStep ||
            decreasingRangePositiveStep) {
            return tf.util.makeZerosTypedArray(0, dtype);
        }
        var numElements = Math.abs(Math.ceil((stop - start) / step));
        var values = tf.util.makeZerosTypedArray(numElements, dtype);
        if (stop < start && step === 1) {
            // Auto adjust the step's sign if it hasn't been set
            // (or was set to 1)
            step = -1;
        }
        values[0] = start;
        for (var i = 1; i < values.length; i++) {
            values[i] = values[i - 1] + step;
        }
        return values;
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var rsqrtImpl = createSimpleUnaryImpl(function (xi) { return 1 / Math.sqrt(xi); });

    function sliceImpl(vals, begin, size, shape, dtype) {
        var isContinous = tf.slice_util.isSliceContinous(shape, begin, size);
        var length = tf.util.sizeFromShape(size);
        var xStrides = tf.util.computeStrides(shape);
        if (isContinous) {
            var flatOffset = tf.slice_util.computeFlatOffset(begin, xStrides);
            if (dtype === 'string') {
                return vals.slice(flatOffset, flatOffset + length);
            }
            return vals.subarray(flatOffset, flatOffset + length);
        }
        var decodedData = dtype === 'string' ?
            tf.backend_util.fromUint8ToStringArray(vals) :
            vals;
        var inBuf = tf.buffer(shape, dtype, decodedData);
        var outBuf = tf.buffer(size, dtype);
        for (var i = 0; i < outBuf.size; ++i) {
            var outLoc = outBuf.indexToLoc(i);
            var inLoc = outLoc.map(function (idx, j) { return idx + begin[j]; });
            outBuf.set.apply(outBuf, __spread([inBuf.get.apply(inBuf, __spread(inLoc))], outLoc));
        }
        if (dtype === 'string') {
            return tf.backend_util.fromStringArrayToUint8(outBuf.values);
        }
        return outBuf.values;
    }

    function stridedSliceImpl(outShape, xBuf, strides, begin) {
        var outBuf = tf.buffer(outShape, xBuf.dtype);
        for (var i = 0; i < outBuf.size; i++) {
            var loc = outBuf.indexToLoc(i);
            var newLoc = new Array(loc.length);
            for (var j = 0; j < newLoc.length; j++) {
                newLoc[j] = loc[j] * strides[j] + begin[j];
            }
            outBuf.set.apply(outBuf, __spread([xBuf.get.apply(xBuf, __spread(newLoc))], loc));
        }
        return outBuf;
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * The StringNGramsOp class creates ngrams from ragged string data.
     * The constructor contains all attributes related to the operation such as
     * padding widths and strings, and the compute function can be used to
     * compute the ngrams for different ragged tensor inputs.
     */
    var StringNGramsOp = /** @class */ (function () {
        function StringNGramsOp(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
            this.separator = tf.util.encodeString(separator);
            this.nGramWidths = nGramWidths;
            this.leftPad = tf.util.encodeString(leftPad);
            this.rightPad = tf.util.encodeString(rightPad);
            this.padWidth = padWidth;
            this.preserveShort = preserveShortSequences;
        }
        StringNGramsOp.prototype.getPadWidth = function (nGramWidth) {
            // Ngrams can be padded with either a fixed pad width or a dynamic pad
            // width depending on the 'padWidth' arg, but in no case should the padding
            // ever be wider than 'nGramWidth' - 1.
            return Math.min(this.padWidth < 0 ? nGramWidth - 1 : this.padWidth, nGramWidth - 1);
        };
        StringNGramsOp.prototype.getNumNGrams = function (length, nGramWidth) {
            var padWidth = this.getPadWidth(nGramWidth);
            return Math.max(0, ((length + 2 * padWidth) - nGramWidth) + 1);
        };
        StringNGramsOp.prototype.createNGrams = function (data, splitIndex, output, outputStartIndex, numNGrams, nGramWidth) {
            var _loop_1 = function (nGramIndex) {
                var padWidth = this_1.getPadWidth(nGramWidth);
                var leftPadding = Math.max(0, padWidth - nGramIndex);
                var rightPadding = Math.max(0, padWidth - (numNGrams - (nGramIndex + 1)));
                var numTokens = nGramWidth - (leftPadding + rightPadding);
                var dataStartIndex = splitIndex + (leftPadding > 0 ? 0 : nGramIndex - padWidth);
                // Calculate the total expected size of the nGram so we can reserve the
                // correct amount of space in the string.
                var nGramSize = 0;
                // Size of the left padding.
                nGramSize += leftPadding * this_1.leftPad.length;
                // Size of the tokens.
                for (var n = 0; n < numTokens; ++n) {
                    nGramSize += data[dataStartIndex + n].length;
                }
                // Size of the right padding.
                nGramSize += rightPadding * this_1.rightPad.length;
                // Size of the separators.
                var numSeparators = leftPadding + rightPadding + numTokens - 1;
                nGramSize += numSeparators * this_1.separator.length;
                // Build the nGram.
                output[outputStartIndex + nGramIndex] = new Uint8Array(nGramSize);
                var nGram = output[outputStartIndex + nGramIndex];
                var nextNGramIndex = 0;
                var appendToNGram = function (str) { return str.forEach(function (value) { return nGram[nextNGramIndex++] = value; }); };
                for (var n = 0; n < leftPadding; ++n) {
                    appendToNGram(this_1.leftPad);
                    appendToNGram(this_1.separator);
                }
                // Only output first numTokens - 1 pairs of data and separator
                for (var n = 0; n < numTokens - 1; ++n) {
                    appendToNGram(data[dataStartIndex + n]);
                    appendToNGram(this_1.separator);
                }
                // Handle case when there are no tokens or no right padding as these
                // can result in consecutive separators.
                if (numTokens > 0) {
                    // If we have tokens, then output last and then pair each separator
                    // with the right padding that follows, to ensure nGram ends either with
                    // the token or with the right pad.
                    appendToNGram(data[dataStartIndex + numTokens - 1]);
                    for (var n = 0; n < rightPadding; ++n) {
                        appendToNGram(this_1.separator);
                        appendToNGram(this_1.rightPad);
                    }
                }
                else {
                    // If we don't have tokens, then the last item inserted into the nGram
                    // has been the separator from the left padding loop above. Hence,
                    // output right pad and separator and make sure to finish with a
                    // padding, not a separator.
                    for (var n = 0; n < rightPadding - 1; ++n) {
                        appendToNGram(this_1.rightPad);
                        appendToNGram(this_1.separator);
                    }
                    appendToNGram(this_1.rightPad);
                }
            };
            var this_1 = this;
            for (var nGramIndex = 0; nGramIndex < numNGrams; ++nGramIndex) {
                _loop_1(nGramIndex);
            }
        };
        // Data and splits together form the definition of the ragged tensor,
        // where data is 1 dimensional and contains the values of the tensor
        // and splits denotes the indices at which each row starts.
        StringNGramsOp.prototype.compute = function (data, splits) {
            var _this = this;
            // Validate that the splits are valid indices into data, only if there are
            // splits specified.
            var inputDataSize = data.length;
            var splitsSize = splits.length;
            if (splitsSize > 0) {
                var prevSplit = splits[0];
                if (prevSplit !== 0) {
                    throw new Error("First split value must be 0, got " + prevSplit);
                }
                for (var i = 1; i < splitsSize; ++i) {
                    var validSplits = splits[i] >= prevSplit;
                    validSplits = validSplits && (splits[i] <= inputDataSize);
                    if (!validSplits) {
                        throw new Error("Invalid split value " + splits[i] + ", must be in [" + prevSplit + ", " + inputDataSize + "]");
                    }
                    prevSplit = splits[i];
                }
                if (prevSplit !== inputDataSize) {
                    throw new Error("Last split value must be data size. Expected " + inputDataSize + ", got " + prevSplit);
                }
            }
            var numBatchItems = splitsSize - 1;
            var nGramsSplits = tf.util.getArrayFromDType('int32', splitsSize);
            // If there is no data or size, return an empty ragged tensor.
            if (inputDataSize === 0 || splitsSize === 0) {
                var empty = new Array(inputDataSize);
                for (var i = 0; i <= numBatchItems; ++i) {
                    nGramsSplits[i] = 0;
                }
                return [empty, nGramsSplits];
            }
            nGramsSplits[0] = 0;
            var _loop_2 = function (i) {
                var length = splits[i] - splits[i - 1];
                var numNGrams = 0;
                this_2.nGramWidths.forEach(function (nGramWidth) {
                    numNGrams += _this.getNumNGrams(length, nGramWidth);
                });
                if (this_2.preserveShort && length > 0 && numNGrams === 0) {
                    numNGrams = 1;
                }
                nGramsSplits[i] = nGramsSplits[i - 1] + numNGrams;
            };
            var this_2 = this;
            for (var i = 1; i <= numBatchItems; ++i) {
                _loop_2(i);
            }
            var nGrams = new Array(nGramsSplits[numBatchItems]);
            var _loop_3 = function (i) {
                var splitIndex = splits[i];
                var outputStartIdx = nGramsSplits[i];
                this_3.nGramWidths.forEach(function (nGramWidth) {
                    var length = splits[i + 1] - splits[i];
                    var numNGrams = _this.getNumNGrams(length, nGramWidth);
                    _this.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
                    outputStartIdx += numNGrams;
                });
                // If we're preserving short sequences, check to see if no sequence was
                // generated by comparing the current output start idx to the original
                // one (nGramSplitsdata). If no ngrams were generated, then they will
                // be equal (since we increment outputStartIdx by numNGrams every
                // time we create a set of ngrams.)
                if (this_3.preserveShort && outputStartIdx === nGramsSplits[i]) {
                    var dataLength = splits[i + 1] - splits[i];
                    // One legitimate reason to not have any ngrams when this.preserveShort
                    // is true is if the sequence itself is empty. In that case, move on.
                    if (dataLength === 0) {
                        return "continue";
                    }
                    // We don't have to worry about dynamic padding sizes here: if padding
                    // was dynamic, every sequence would have had sufficient padding to
                    // generate at least one nGram.
                    var nGramWidth = dataLength + 2 * this_3.padWidth;
                    var numNGrams = 1;
                    this_3.createNGrams(data, splitIndex, nGrams, outputStartIdx, numNGrams, nGramWidth);
                }
            };
            var this_3 = this;
            for (var i = 0; i < numBatchItems; ++i) {
                _loop_3(i);
            }
            return [nGrams, nGramsSplits];
        };
        return StringNGramsOp;
    }());
    function stringNGramsImpl(data, dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences) {
        return new StringNGramsOp(separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences)
            .compute(data, dataSplits);
    }

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var subImpl = createSimpleBinaryKernelImpl((function (aValue, bValue) { return aValue - bValue; }));

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    /**
     * An implementation of the tile kernel shared between webgl and cpu for string
     * tensors only.
     */
    function tileImpl(xBuf, reps) {
        var newShape = new Array(xBuf.rank);
        for (var i = 0; i < newShape.length; i++) {
            newShape[i] = xBuf.shape[i] * reps[i];
        }
        var result = tf.buffer(newShape, xBuf.dtype);
        for (var i = 0; i < result.values.length; ++i) {
            var newLoc = result.indexToLoc(i);
            var originalLoc = new Array(xBuf.rank);
            for (var j = 0; j < originalLoc.length; j++) {
                originalLoc[j] = newLoc[j] % xBuf.shape[j];
            }
            var originalIndex = xBuf.locToIndex(originalLoc);
            result.values[i] = xBuf.values[originalIndex];
        }
        return result;
    }

    var comparePair = function (a, b) {
        var valueDiff = b.value - a.value;
        return valueDiff === 0 ? a.index - b.index : valueDiff;
    };
    /**
     * Partitions array where all elements smaller than the (k+1) smallest element
     * are found to the left of it, and all larger to the right of it.
     * Based on the Floyd-Rivest Algorithm, ref:
     * https://en.wikipedia.org/wiki/Floyd%E2%80%93Rivest_algorithm
     * @param array: Array to partition
     * @param left: Left index for the interval
     * @param right: Right index for the interval
     * @param k: Desired index value, where array[k] is the (k+1)th smallest element
     *           when left = 0
     */
    function select$1(array, k, left, right) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = array.length - 1; }
        while (right > left) {
            // Use select recursively to sample a smaller set of size s
            // the arbitrary constants 600 and 0.5 are used in the original
            // version to minimize execution time.
            if (right - left > 600) {
                var n = right - left + 1;
                var i_1 = k - left + 1;
                var z = Math.log(n);
                var s = 0.5 * Math.exp(2 * z / 3);
                var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * Math.sign(i_1 - n / 2);
                var newLeft = Math.max(left, Math.floor(k - i_1 * s / n + sd));
                var newRight = Math.min(right, Math.floor(k + (n - i_1) * s / n + sd));
                select$1(array, k, newLeft, newRight);
            }
            // partition the elements between left and right around t
            var t = array[k];
            var i = left;
            var j = right;
            tf.util.swap(array, left, k);
            if (comparePair(array[right], t) > 0) {
                tf.util.swap(array, left, right);
            }
            while (i < j) {
                tf.util.swap(array, i, j);
                i++;
                j--;
                while (comparePair(array[i], t) < 0) {
                    i = i + 1;
                }
                while (comparePair(array[j], t) > 0) {
                    j = j - 1;
                }
            }
            if (comparePair(array[left], t) === 0) {
                tf.util.swap(array, left, j);
            }
            else {
                j = j + 1;
                tf.util.swap(array, j, right);
            }
            // Adjust left and right towards the boundaries of the subset
            // containing the (k - left + 1)th smallest element.
            if (j <= k) {
                left = j + 1;
            }
            if (k <= j) {
                right = j - 1;
            }
        }
    }
    function topKImpl(x, xShape, xDtype, k, sorted) {
        // Reshape into a 2d tensor [batch, lastDim] and compute topk along lastDim.
        var lastDim = xShape[xShape.length - 1];
        var _a = __read([x.length / lastDim, lastDim], 2), batch = _a[0], size = _a[1];
        var allTopKVals = tf.util.getTypedArrayFromDType(xDtype, batch * k);
        var allTopKIndices = tf.util.getTypedArrayFromDType('int32', batch * k);
        var _loop_1 = function (b) {
            var offset = b * size;
            var vals = x.subarray(offset, offset + size);
            var valAndInd = new Array(vals.length);
            vals.forEach(function (value, index) { return valAndInd[index] = { value: value, index: index }; });
            if (k < valAndInd.length) {
                select$1(valAndInd, k);
                valAndInd = valAndInd.slice(0, k);
            }
            if (sorted) {
                valAndInd.sort(comparePair);
            }
            var outOffset = b * k;
            var topKVals = allTopKVals.subarray(outOffset, outOffset + k);
            var topKIndices = allTopKIndices.subarray(outOffset, outOffset + k);
            for (var i = 0; i < k; i++) {
                topKVals[i] = valAndInd[i].value;
                topKIndices[i] = valAndInd[i].index;
            }
        };
        for (var b = 0; b < batch; b++) {
            _loop_1(b);
        }
        // Reshape back to the original input shape, except that the last
        // dimension is k.
        var outputShape = xShape.slice();
        outputShape[outputShape.length - 1] = k;
        return [
            tf.buffer(outputShape, xDtype, allTopKVals),
            tf.buffer(outputShape, 'int32', allTopKIndices)
        ];
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var addImplCPU = addImpl, ceilImplCPU = ceilImpl, concatImplCPU = concatImpl$1, equalImplCPU = equalImpl, expImplCPU = expImpl, expm1ImplCPU = expm1Impl, floorImplCPU = floorImpl, gatherNdImplCPU = gatherNdImpl, gatherV2ImplCPU = gatherV2Impl, greaterEqualImplCPU = greaterEqualImpl, greaterImplCPU = greaterImpl, lessEqualImplCPU = lessEqualImpl, lessImplCPU = lessImpl, logImplCPU = logImpl, maxImplCPU = maxImpl, maximumImplCPU = maximumImpl, minimumImplCPU = minimumImpl, multiplyImplCPU = multiplyImpl, negImplCPU = negImpl, notEqualImplCPU = notEqualImpl, prodImplCPU = prodImpl, rangeImplCPU = rangeImpl, rsqrtImplCPU = rsqrtImpl, simpleAbsImplCPU = simpleAbsImpl, sliceImplCPU = sliceImpl, stridedSliceImplCPU = stridedSliceImpl, stringNGramsImplCPU = stringNGramsImpl, subImplCPU = subImpl, tileImplCPU = tileImpl, topKImplCPU = topKImpl, transposeImplCPU = transposeImpl;

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var abs = unaryKernelFunc({ opType: UnaryOpType.ABS, cpuKernelImpl: simpleAbsImplCPU });
    var absConfig = {
        kernelName: tf.Abs,
        backendName: 'webgpu',
        kernelFunc: abs
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var addKernelFunc = binaryKernelFunc({
        opSnippet: BinaryOpType.ADD,
        cpuKernelImpl: addImplCPU,
        supportsComplex: true
    });
    var addConfig = {
        kernelName: tf.Add,
        backendName: 'webgpu',
        kernelFunc: addKernelFunc
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var AddNPackedProgram = /** @class */ (function () {
        function AddNPackedProgram(shapes) {
            this.workPerThread = 4;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = shapes[0];
            this.variableNames = shapes.map(function (_, i) { return "T" + i; });
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.shaderKey = 'addN';
        }
        AddNPackedProgram.prototype.getUserCode = function () {
            var snippets = [];
            // Get target elements from every input tensor.
            this.variableNames.forEach(function (variable) {
                snippets.push("let v" + variable + " = get" + variable + "ByOutputCoords(coords);");
            });
            // Calculate the sum of all elements.
            var operation = this.variableNames
                .map(function (variable) {
                return "v" + variable;
            })
                .join(' + ');
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        for (var i = 0; i < " + this.workPerThread + "; i = i + 1) {\n          let flatIndex = index * " + this.workPerThread + " + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            " + snippets.join('\n        ') + "\n            setOutputAtIndex(flatIndex, " + operation + ");\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return AddNPackedProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function addN(args) {
        var inputs = args.inputs, backend = args.backend;
        var tensors = inputs;
        if (tensors.length === 1) {
            return identity({ inputs: { x: tensors[0] }, backend: backend });
        }
        var dtype = tensors.map(function (t) { return t.dtype; }).reduce(function (d1, d2) { return tf.upcastType(d1, d2); });
        var shapes = tensors.map(function (t) { return t.shape; });
        var program = new AddNPackedProgram(shapes);
        return backend.runWebGPUProgram(program, tensors, dtype);
    }
    var addNConfig = {
        kernelName: tf.AddN,
        backendName: 'webgpu',
        kernelFunc: addN
    };

    var ArgMinMaxProgram = /** @class */ (function () {
        function ArgMinMaxProgram(inputShape, axis, reduceType) {
            this.workGroupSize = [64, 1, 1];
            this.variableNames = ['x'];
            this.uniforms = 'infinityValue : f32,';
            this.size = true;
            var axes = [axis];
            tf.backend_util.assertAxesAreInnerMostDims('arg' + reduceType.charAt(0).toUpperCase() + reduceType.slice(1), axes, inputShape.length);
            this.op = reduceType === 'min' ? '<' : '>';
            // |outShape| is the shape with the removed axis
            var _a = __read(tf.backend_util.computeOutAndReduceShapes(inputShape, axes), 1), outputShape = _a[0];
            this.outputShape = outputShape.length === 0 ? [1] : outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            // A work group only outputs a data, so we transfer [1, 1, 1] to compute
            // dispatch size.
            this.dispatch =
                computeDispatch(this.dispatchLayout, this.outputShape, [1, 1, 1]);
            this.inputShape = inputShape;
            this.shaderKey = "argMinMax" + this.op;
        }
        ArgMinMaxProgram.prototype.getUserCode = function () {
            var _this = this;
            var sharedMemorySnippet = "\n      var<workgroup> xBestIndices : array<i32, " + this.workGroupSize[0] + ">;\n      var<workgroup> xBestValues : array<f32, " + this.workGroupSize[0] + ">;\n    ";
            var getInputShapeLastDim = function () {
                if (_this.inputShape.length === 1) {
                    return 'uniforms.xShape';
                }
                else {
                    return "uniforms.xShape." + getCoordsXYZ(_this.inputShape.length - 1);
                }
            };
            var splitOutputCoords = function () {
                var snippet = '';
                if (_this.outputShape.length === 1) {
                    if (_this.inputShape.length !== 1) {
                        snippet += 'outputCoords,';
                    }
                }
                else {
                    for (var i = 0; i < _this.outputShape.length; i++) {
                        snippet += "outputCoords." + getCoordsXYZ(i) + ",";
                    }
                }
                return snippet;
            };
            var userCode = "\n      fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n      }\n\n      " + sharedMemorySnippet + "\n\n      " + getMainHeaderAndGlobalIndexString() + "\n        let outputIndex = index / i32(workGroupSizeX);\n        let reduceLength = " + getInputShapeLastDim() + ";\n\n        var bestIndex = i32(localId.x);\n        var bestValue = uniforms.infinityValue;\n        let outputCoords = getCoordsFromIndex(outputIndex);\n        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;\n            k = k + i32(workGroupSizeX)) {\n          let candidate = getX(" + splitOutputCoords() + " k);\n          if (!isnan(candidate) && candidate " + this.op + " bestValue) {\n            bestValue = candidate;\n            bestIndex = k;\n          }\n        }\n        xBestValues[localId.x] = bestValue;\n        xBestIndices[localId.x] = bestIndex;\n        workgroupBarrier();\n\n        var reduceSize = min(u32(reduceLength), workGroupSizeX);\n        for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n            currentSize = reduceSize / 2u) {\n          let interval = DIV_CEIL(reduceSize, 2u);\n          if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            if (candidate " + this.op + " bestValue) {\n              bestValue = candidate;\n              xBestValues[localId.x] = bestValue;\n              xBestIndices[localId.x] = xBestIndices[localId.x + interval];\n            }\n          }\n          reduceSize = interval;\n          workgroupBarrier();\n        }\n\n        if (localId.x == 0u && outputIndex < uniforms.size) {\n          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);\n        }\n      }\n    ";
            return userCode;
        };
        return ArgMinMaxProgram;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var TransposeSharedProgram = /** @class */ (function () {
        function TransposeSharedProgram(aShape, newDim) {
            this.variableNames = ['A'];
            // Note that the maximum number of workgroup invocations by webgpu is 256.
            this.workGroupSize = [16, 16, 1];
            var outputShape = new Array(aShape.length);
            for (var i = 0; i < outputShape.length; i++) {
                outputShape[i] = aShape[newDim[i]];
            }
            this.outputShape = outputShape;
            this.dispatchLayout = { x: [0], y: [1] };
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [1, 1, 1]);
            this.shaderKey = 'transposeShared';
        }
        TransposeSharedProgram.prototype.getUserCode = function () {
            var userCode = "\n      let TILE_DIM = " + this.workGroupSize[0] + ";\n      var<workgroup> tile : array<array<f32, " + (this.workGroupSize[0] + 1) + ">, " + this.workGroupSize[0] + ">;\n      " + getWorkGroupSizeString() + "\n      fn main(@builtin(local_invocation_id) localId : vec3<u32>,\n              @builtin(workgroup_id) workgroupId : vec3<u32>) {\n        var x = i32(workgroupId.x) * TILE_DIM + i32(localId.x);\n        var y = i32(workgroupId.y) * TILE_DIM + i32(localId.y);\n        let width = uniforms.outShape[0];\n        let height = uniforms.outShape[1];\n        if (x < width && y < height) {\n          tile[localId.y][localId.x] = A[y * width + x];\n        }\n        workgroupBarrier();\n\n        x = i32(workgroupId.y) * TILE_DIM + i32(localId.x);\n        y = i32(workgroupId.x) * TILE_DIM + i32(localId.y);\n        if (x < height && y < width) {\n          setOutputAtIndex((y * height + x), tile[localId.x]\n            [localId.y]);\n        }\n      }\n    ";
            return userCode;
        };
        return TransposeSharedProgram;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var TransposeProgram = /** @class */ (function () {
        function TransposeProgram(aShape, newDim) {
            this.variableNames = ['A'];
            this.workPerThread = 4;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            var outputShape = new Array(aShape.length);
            for (var i = 0; i < outputShape.length; i++) {
                outputShape[i] = aShape[newDim[i]];
            }
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.newDim = newDim;
            this.shaderKey = "transpose_" + newDim;
        }
        TransposeProgram.prototype.getUserCode = function () {
            var dtype = getCoordsDataType(this.outputShape.length);
            var switched = getSwitchedCoords(this.newDim);
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n\n        for(var i = 0; i < " + this.workPerThread + "; i = i + 1) {\n          let flatIndex = index * " + this.workPerThread + " + i;\n          if(flatIndex < uniforms.size) {\n            let resRC = getCoordsFromIndex(flatIndex);\n            setOutputAtIndex(flatIndex, A[getIndexFromCoords" + this.outputShape.length + "D(\n              " + dtype + "(" + switched + "), uniforms.aShape)]);\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return TransposeProgram;
    }());
    function getSwitchedCoords(newDim) {
        var rank = newDim.length;
        if (rank > 6) {
            throw Error("Transpose for rank " + rank + " is not yet supported");
        }
        var switchedCoords = new Array(rank);
        for (var i = 0; i < newDim.length; i++) {
            switchedCoords[newDim[i]] = "resRC." + getCoordsXYZ(i);
        }
        return switchedCoords.join();
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function transpose(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var perm = attrs.perm;
        var webgpuBackend = backend;
        var xRank = x.shape.length;
        var newShape = new Array(xRank);
        for (var i = 0; i < newShape.length; i++) {
            newShape[i] = x.shape[perm[i]];
        }
        if (backend.shouldExecuteOnCPU([x])) {
            var xData = webgpuBackend.tensorMap.get(x.dataId);
            var values = xData.values;
            var outValues = transposeImplCPU(values, x.shape, x.dtype, perm, newShape);
            return backend.makeTensorInfo(newShape, x.dtype, outValues);
        }
        if (x.shape.length === 2 && tf.util.arraysEqual(perm, [1, 0])) {
            var program_1 = new TransposeSharedProgram(x.shape, perm);
            return webgpuBackend.runWebGPUProgram(program_1, [x], x.dtype);
        }
        var program = new TransposeProgram(x.shape, perm);
        return webgpuBackend.runWebGPUProgram(program, [x], x.dtype);
    }
    var transposeConfig = {
        kernelName: tf.Transpose,
        backendName: 'webgpu',
        kernelFunc: transpose
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function argMax(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis;
        var axes = tf.util.parseAxisParam(axis, x.shape);
        var permutedAxes = tf.backend_util.getAxesPermutation(axes, x.shape.length);
        var $x = x;
        var intermediateTensorInfos = [];
        if (permutedAxes != null) {
            $x = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
            intermediateTensorInfos.push($x);
            axes = tf.backend_util.getInnerMostAxes(axes.length, $x.shape.length);
        }
        tf.backend_util.assertAxesAreInnerMostDims('argMax', [axes[0]], $x.shape.length);
        var program = new ArgMinMaxProgram($x.shape, axes[0], 'max');
        var uniformData = [{ type: 'float32', data: [Number.NEGATIVE_INFINITY] }];
        var out = backend.runWebGPUProgram(program, [$x], 'int32', uniformData);
        intermediateTensorInfos.forEach(function (t) { return backend.disposeData(t.dataId); });
        return out;
    }
    var argMaxConfig = {
        kernelName: tf.ArgMax,
        backendName: 'webgpu',
        kernelFunc: argMax
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function argMin(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis;
        var axes = tf.util.parseAxisParam(axis, x.shape);
        var permutedAxes = tf.backend_util.getAxesPermutation(axes, x.shape.length);
        var $x = x;
        var intermediateTensorInfos = [];
        if (permutedAxes != null) {
            $x = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutedAxes } });
            intermediateTensorInfos.push($x);
            axes = tf.backend_util.getInnerMostAxes(axes.length, $x.shape.length);
        }
        tf.backend_util.assertAxesAreInnerMostDims('argMin', [axes[0]], $x.shape.length);
        var program = new ArgMinMaxProgram($x.shape, axes[0], 'min');
        var uniformData = [{ type: 'float32', data: [Number.POSITIVE_INFINITY] }];
        var out = backend.runWebGPUProgram(program, [$x], 'int32', uniformData);
        intermediateTensorInfos.forEach(function (t) { return backend.disposeData(t.dataId); });
        return out;
    }
    var argMinConfig = {
        kernelName: tf.ArgMin,
        backendName: 'webgpu',
        kernelFunc: argMin
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var Pool2DProgram = /** @class */ (function () {
        function Pool2DProgram(convInfo, poolType) {
            this.variableNames = ['x'];
            this.uniforms = "stride : vec2<i32>, pad : vec2<i32>, dilation : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,";
            // TODO(jiajia.qin@intel.com): Dynamically choose different workGroupSize for
            // different output shapes.
            this.workGroupSize = [128, 1, 1];
            this.size = true;
            this.outputShape = convInfo.outShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "pool2D_" + poolType;
            this.poolType = poolType;
        }
        Pool2DProgram.prototype.getUserCode = function () {
            var updateSnippet = "resultValue = max(value, resultValue);";
            if (this.poolType === 'avg') {
                updateSnippet = "resultValue = resultValue + value; count = count + 1.0;";
            }
            var returnValue = "resultValue";
            if (this.poolType === 'avg') {
                returnValue = "resultValue / count";
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let xRCCorner = vec2<i32>(coords.yz) * uniforms.stride - uniforms.pad;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          var resultValue = " + (this.poolType === 'avg' ? '0.0' : '-1.0 / pow(10.0, -20.0)') + ";\n          var count = 0.0;\n\n          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilation.x) {\n            let xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= uniforms.convDims.x) {\n              continue;\n            }\n\n            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilation.y) {\n              let xC = xCCorner + wC;\n              if (xC < 0 || xC >= uniforms.convDims.y) {\n                continue;\n              }\n\n              let value = getX(batch, xR, xC, coords[3]);\n              " + updateSnippet + "\n            }\n          }\n\n          setOutputAtIndex(index, " + returnValue + ");\n        }\n      }\n    ";
            return userCode;
        };
        return Pool2DProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var PoolWithFilterSizeEqualsOneProgram = /** @class */ (function () {
        function PoolWithFilterSizeEqualsOneProgram(convInfo) {
            this.variableNames = ['x'];
            this.uniforms = "stride : vec2<i32>,";
            this.workGroupSize = [256, 1, 1];
            this.size = true;
            this.outputShape = convInfo.outShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = 'poolWithFilterSizeEqualsOne';
        }
        PoolWithFilterSizeEqualsOneProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let batch = coords[0];\n          let d = coords[3];\n\n          let xRCCorner = coords.yz * uniforms.stride;\n          let xRCorner = xRCCorner.x;\n          let xCCorner = xRCCorner.y;\n\n          let value = getX(batch, xRCorner, xCCorner, d);\n          setOutputAtIndex(index, value);\n        }\n      }\n    ";
            return userCode;
        };
        return PoolWithFilterSizeEqualsOneProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function avgPool(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
        var dilations = 1;
        var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
        if (convInfo.filterWidth === 1 && convInfo.filterHeight === 1 &&
            tf.util.arraysEqual(convInfo.inShape, convInfo.outShape)) {
            return identity({ inputs: { x: x }, backend: backend });
        }
        var program;
        var dimensions = [{ type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] }];
        if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1) {
            program = new PoolWithFilterSizeEqualsOneProgram(convInfo);
        }
        else {
            program = new Pool2DProgram(convInfo, 'avg');
            dimensions.push({ type: 'int32', data: [convInfo.padInfo.top, convInfo.padInfo.left] }, {
                type: 'int32',
                data: [convInfo.dilationHeight, convInfo.dilationWidth]
            }, { type: 'int32', data: [convInfo.inHeight, convInfo.inWidth] }, {
                type: 'int32',
                data: [convInfo.effectiveFilterHeight, convInfo.effectiveFilterWidth]
            });
        }
        return backend.runWebGPUProgram(program, [x], x.dtype, dimensions);
    }
    var avgPoolConfig = {
        kernelName: tf.AvgPool,
        backendName: 'webgpu',
        kernelFunc: avgPool
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function batchMatMul(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var a = inputs.a, b = inputs.b;
        var transposeA = attrs.transposeA, transposeB = attrs.transposeB;
        return batchMatMulImpl({ a: a, b: b, transposeA: transposeA, transposeB: transposeB, backend: backend });
    }
    var batchMatMulConfig = {
        kernelName: tf.BatchMatMul,
        backendName: 'webgpu',
        kernelFunc: batchMatMul,
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var SliceProgram = /** @class */ (function () {
        function SliceProgram(start, destSize) {
            this.variableNames = ['source'];
            this.workPerThread = 1;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = destSize;
            this.rank = destSize.length;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.start = start;
            this.uniforms = "start : " + getCoordsDataType(start.length) + ", ";
            this.shaderKey = 'slice';
        }
        SliceProgram.prototype.getUserCode = function () {
            var dtype = getCoordsDataType(this.rank);
            var sourceCoords = getCoords$1(this.rank);
            var coordSum;
            if (this.start.length === 1) {
                coordSum = this.outputShape.map(function (_, i) {
                    return "sourceLoc = uniforms.start + coords;";
                });
            }
            else {
                coordSum = this.outputShape.map(function (_, i) {
                    return "sourceLoc." + coords[i] + " = uniforms.start[" + i + "] + coords." + coords[i] + ";";
                });
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          var sourceLoc : " + dtype + ";\n          let coords = getCoordsFromIndex(index);\n          " + coordSum.join('\n') + "\n          setOutputAtIndex(index, getSource(" + sourceCoords + "));\n        }\n      }\n    ";
            return userCode;
        };
        return SliceProgram;
    }());
    var coords = ['x', 'y', 'z', 'w', 'u', 'v'];
    function getCoords$1(rank) {
        if (rank === 1) {
            return 'sourceLoc';
        }
        else if (rank <= 6) {
            return coords.slice(0, rank).map(function (coord) { return "sourceLoc." + coord; }).join(',');
        }
        else {
            throw Error("Slicing for rank " + rank + " is not yet supported");
        }
    }

    function slice(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var begin = attrs.begin, size = attrs.size;
        var _a = __read(tf.slice_util.parseSliceParams(x, begin, size), 2), $begin = _a[0], $size = _a[1];
        tf.slice_util.assertParamsValid(x, $begin, $size);
        if (backend.shouldExecuteOnCPU([x]) || x.dtype === 'string') {
            var xBufferInfo = backend.tensorMap.get(x.dataId);
            var outValues = sliceImplCPU(xBufferInfo.values, $begin, $size, x.shape, x.dtype);
            return backend.makeTensorInfo($size, x.dtype, outValues);
        }
        if (tf.util.sizeFromShape($size) === 0) {
            return backend.makeTensorInfo($size, x.dtype, []);
        }
        // TODO(xing.xu): Add shadow slice support.
        var program = new SliceProgram($begin, $size);
        var uniformData = [{ type: 'int32', data: $begin }];
        return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
    }
    var sliceConfig = {
        kernelName: tf.Slice,
        backendName: 'webgpu',
        kernelFunc: slice
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var batchToSpaceND = function (args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var blockShape = attrs.blockShape, crops = attrs.crops;
        tf.util.assert(x.shape.length <= 4, function () { return 'batchToSpaceND for rank > 4 with a WebGPU backend not ' +
            'implemented yet'; });
        var prod = blockShape.reduce(function (a, b) { return a * b; });
        var reshaped = tf.backend_util.getReshaped(x.shape, blockShape, prod);
        var permuted = tf.backend_util.getPermuted(reshaped.length, blockShape.length);
        var reshapedPermuted = tf.backend_util.getReshapedPermuted(x.shape, blockShape, prod);
        var sliceBeginCoords = tf.backend_util.getSliceBeginCoords(crops, blockShape.length);
        var sliceSize = tf.backend_util.getSliceSize(reshapedPermuted, crops, blockShape.length);
        var toDispose = [];
        var reshapedIntermediate = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: reshaped } });
        var transposedIntermediate = transpose({ inputs: { x: reshapedIntermediate }, backend: backend, attrs: { perm: permuted } });
        var reshapedIntermediate2 = reshape({
            inputs: { x: transposedIntermediate },
            backend: backend,
            attrs: { shape: reshapedPermuted }
        });
        var sliced = slice({
            inputs: { x: reshapedIntermediate2 },
            backend: backend,
            attrs: { begin: sliceBeginCoords, size: sliceSize }
        });
        toDispose.push(reshapedIntermediate);
        toDispose.push(transposedIntermediate);
        toDispose.push(reshapedIntermediate2);
        toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
        return sliced;
    };
    var batchToSpaceNDConfig = {
        kernelName: tf.BatchToSpaceND,
        backendName: 'webgpu',
        kernelFunc: batchToSpaceND
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var notEqual = binaryKernelFunc({
        opSnippet: BinaryOpType.NOT_EQUAL,
        dtype: 'bool',
        cpuKernelImpl: notEqualImplCPU
    });
    var notEqualConfig = {
        kernelName: tf.NotEqual,
        backendName: 'webgpu',
        kernelFunc: notEqual
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function real(args) {
        var inputs = args.inputs, backend = args.backend;
        var input = inputs.input;
        var inputData = backend.tensorMap.get(input.dataId);
        return identity({ inputs: { x: inputData.complexTensorInfos.real }, backend: backend });
    }
    var realConfig = {
        kernelName: tf.Real,
        backendName: 'webgpu',
        kernelFunc: real
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function int(input, backend) {
        var program = new UnaryOpProgram(input.shape, UnaryOpType.TO_INT);
        var output = backend.runWebGPUProgram(program, [input], 'int32');
        return { dataId: output.dataId, shape: output.shape, dtype: output.dtype };
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function cast(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var dtype = attrs.dtype;
        // Casting to complex64.
        if (dtype === 'complex64') {
            if (x.dtype === 'complex64') {
                return identity({ inputs: { x: x }, backend: backend });
            }
            // TODO: Import kernel function once zeros is modularized.
            var zerosTensor = tf__namespace.zeros(x.shape);
            var floatX = cast({ inputs: { x: x }, backend: backend, attrs: { dtype: 'float32' } });
            var result = complex({ inputs: { real: floatX, imag: zerosTensor }, backend: backend });
            zerosTensor.dispose();
            backend.disposeData(floatX.dataId);
            return result;
        }
        // Casting from complex64
        if (x.dtype === 'complex64') {
            var realPart = real({ inputs: { input: x }, backend: backend });
            var result = cast({ inputs: { x: realPart }, backend: backend, attrs: { dtype: dtype } });
            backend.disposeData(realPart.dataId);
            return result;
        }
        if (!tf.util.hasEncodingLoss(x.dtype, dtype)) {
            // We don't change the underlying data, since we cast to higher
            // precision.
            var result = identity({ inputs: { x: x }, backend: backend });
            return { dataId: result.dataId, shape: result.shape, dtype: dtype };
        }
        if (dtype === 'int32') {
            return int(x, backend);
        }
        if (dtype === 'bool') {
            var zerosTensorInfo = backend.makeTensorInfo([], 'bool', tf.util.getTypedArrayFromDType('bool', 1));
            var binaryInputs = { a: x, b: zerosTensorInfo };
            var result = notEqual({ inputs: binaryInputs, backend: backend });
            backend.disposeData(zerosTensorInfo.dataId);
            return result;
        }
        throw new Error("Error in Cast: failed to cast " + x.dtype + " to " + dtype);
    }
    var castConfig = {
        kernelName: tf.Cast,
        backendName: 'webgpu',
        kernelFunc: cast
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ceil = unaryKernelFunc({ opType: UnaryOpType.CEIL, cpuKernelImpl: ceilImplCPU });
    var ceilConfig = {
        kernelName: tf.Ceil,
        backendName: 'webgpu',
        kernelFunc: ceil
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ClipVec4Program = /** @class */ (function () {
        function ClipVec4Program(outputShape) {
            this.variableNames = ['A'];
            this.uniforms = 'minVal : f32, maxVal : f32,';
            this.workPerThread = 4;
            this.workGroupSize = [64, 1, 1];
            this.isVec4 = true;
            this.size = true;
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.shaderKey = 'clipVec4';
        }
        ClipVec4Program.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          var clampedValue : vec4<f32>;\n          for (var i = 0; i < 4; i = i + 1) {\n            if (isnan(value[i])) {\n              clampedValue[i] = value[i];\n            } else {\n              clampedValue[i] = clamp(value[i], uniforms.minVal, uniforms.maxVal);\n            }\n          }\n\n          setOutputAtIndex(index, clampedValue);\n        }\n      }\n    ";
            return userCode;
        };
        return ClipVec4Program;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ClipProgram = /** @class */ (function () {
        function ClipProgram(outputShape) {
            this.variableNames = ['A'];
            this.uniforms = 'minVal : f32, maxVal : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = 'clip';
        }
        ClipProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if(index < uniforms.size) {\n          let value = getAByOutputIndex(index);\n          if (isnan(value)) {\n            setOutputAtIndex(index, value);\n            return;\n          }\n          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));\n        }\n      }\n    ";
            return userCode;
        };
        return ClipProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function clipByValue(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var clipValueMin = attrs.clipValueMin, clipValueMax = attrs.clipValueMax;
        var program;
        var uniformData = [
            { type: 'float32', data: [clipValueMin] },
            { type: 'float32', data: [clipValueMax] }
        ];
        if (tf.util.sizeFromShape(x.shape) % 4 === 0) {
            program = new ClipVec4Program(x.shape);
        }
        else {
            program = new ClipProgram(x.shape);
        }
        return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
    }
    var clipByValueConfig = {
        kernelName: tf.ClipByValue,
        backendName: 'webgpu',
        kernelFunc: clipByValue
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ConcatProgram = /** @class */ (function () {
        function ConcatProgram(shapes) {
            this.uniforms = '';
            this.workPerThread = 4;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape =
                tf.backend_util.computeOutShape(shapes, 1 /* axis */);
            this.variableNames = shapes.map(function (_, i) { return "T" + i; });
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.offsetLength = shapes.length - 1;
            for (var i = 0; i < this.offsetLength; i++) {
                this.uniforms += "offset" + i + " : i32,";
            }
            this.shaderKey = 'concat';
        }
        ConcatProgram.prototype.getUserCode = function () {
            var snippets = [];
            if (this.offsetLength > 0) {
                snippets.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");
                for (var i = 1; i < this.offsetLength; i++) {
                    snippets.push("else if (yC < uniforms.offset" + [i] + "){ " +
                        ("setOutputAtCoords(coords.x, coords.y, getT" + i + "(yR, yC - uniforms.offset" + (i - 1) + ")); }"));
                }
                var lastIndex = this.offsetLength;
                var lastShiftIndex = this.offsetLength - 1;
                snippets.push("else { setOutputAtCoords(coords.x, coords.y, getT" + lastIndex + "(yR, yC - uniforms.offset" + lastShiftIndex + ")); }");
            }
            else {
                snippets.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        for(var i = 0; i < " + this.workPerThread + "; i = i + 1) {\n          let flatIndex = index * " + this.workPerThread + " + i;\n          if(flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndex);\n            let yR = coords.x;\n            let yC = coords.y;\n\n            " + snippets.join('\n        ') + "\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return ConcatProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function imag(args) {
        var inputs = args.inputs, backend = args.backend;
        var input = inputs.input;
        var inputData = backend.tensorMap.get(input.dataId);
        return identity({ inputs: { x: inputData.complexTensorInfos.imag }, backend: backend });
    }
    var imagConfig = {
        kernelName: tf.Imag,
        backendName: 'webgpu',
        kernelFunc: imag
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function concatImpl(inputs, axis, backend) {
        var dtype = inputs[0].dtype;
        if (dtype === 'complex64') {
            var reals = inputs.map(function (t) { return real({ inputs: { input: t }, backend: backend }); });
            var imags = inputs.map(function (t) { return imag({ inputs: { input: t }, backend: backend }); });
            var realConcated = concatImpl(reals, axis, backend);
            var imagConcated = concatImpl(imags, axis, backend);
            var result = complex({ inputs: { real: realConcated, imag: imagConcated }, backend: backend });
            reals.forEach(function (r) { return backend.disposeData(r.dataId); });
            imags.forEach(function (i) { return backend.disposeData(i.dataId); });
            backend.disposeData(realConcated.dataId);
            backend.disposeData(imagConcated.dataId);
            return result;
        }
        var runOnCpu = backend.shouldExecuteOnCPU(inputs);
        // Run on cpu if dtype is string. For string, the backend represents it
        // as Uint8Array[], where each Uint8Array is a character. Given that the
        // computation is only on the outer array, uploading the whole data onto
        // gpu is wasteful. Also, currently webgpu doesn't have a design to
        // upload and retrieve Uint8Array[] between cpu and gpu. Therefore, we
        // just run the kernel on cpu if dtype is string.
        if (dtype === 'string') {
            runOnCpu = true;
        }
        if (runOnCpu) {
            // Any concat of n-dimensional tensors across any axis can be reduced to
            // a concatenation of two-dimensional tensors across the axis 1 by first
            // partitioning the axes of the original tensors into those less than the
            // axis to be concatenated and the rest. Then reshape the tensors
            // into a two-dimensional tensor by collapsing these two sets of axes and
            // concatenate the resulting matrices across the axis 1, finally reshaping
            // the result to have the proper shape.
            var tensors2D_1 = inputs.map(function (t) {
                var innerSize = tf.util.sizeFromShape(t.shape.slice(axis));
                var shape = [-1, innerSize];
                return reshape({ inputs: { x: t }, backend: backend, attrs: { shape: shape } });
            });
            var inputsValShapes = tensors2D_1.map(function (t) {
                return { vals: backend.readSync(t.dataId), shape: t.shape };
            });
            // Concats 2d tensors along axis=1.
            var outShape_1 = tf.backend_util.computeOutShape(tensors2D_1.map(function (t) { return t.shape; }), 1 /* axis */);
            var simplyConcat = tensors2D_1[0].shape[0] === 1;
            var outVals = concatImplCPU(inputsValShapes, outShape_1, dtype, simplyConcat);
            var finalOutShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), axis);
            var outInfo = backend.makeTensorInfo(finalOutShape, dtype, outVals);
            tensors2D_1.forEach(function (t) { return backend.disposeData(t.dataId); });
            return outInfo;
        }
        var _a = computeTensors2D(inputs, axis, backend), tensors2D = _a.tensors2D, outShape = _a.outShape;
        var shapes = (tensors2D).map(function (t) { return t.shape; });
        var program = new ConcatProgram(shapes);
        var uniformData = [];
        var offsets = new Array(shapes.length - 1);
        if (offsets.length > 0) {
            offsets[0] = shapes[0][1];
            uniformData.push({ type: 'int32', data: [offsets[0]] });
            for (var i = 1; i < offsets.length; i++) {
                offsets[i] = offsets[i - 1] + shapes[i][1];
                uniformData.push({ type: 'int32', data: [offsets[i]] });
            }
        }
        var res = backend.runWebGPUProgram(program, tensors2D, tensors2D[0].dtype, uniformData);
        tensors2D.forEach(function (r) { return backend.disposeData(r.dataId); });
        var reshapedResult = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: outShape } });
        backend.disposeData(res.dataId);
        return reshapedResult;
    }
    function computeTensors2D(inputs, axis, backend) {
        var outShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), axis);
        var tensors2D = inputs.map(function (t) { return reshape({
            inputs: { x: t },
            backend: backend,
            attrs: {
                shape: [
                    tf.util.sizeFromShape(t.shape.slice(0, axis)),
                    tf.util.sizeFromShape(t.shape.slice(axis))
                ]
            }
        }); });
        return { tensors2D: tensors2D, outShape: outShape };
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function concat(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var axis = attrs.axis;
        var $axis = tf.util.parseAxisParam(axis, inputs[0].shape)[0];
        var outShape = tf.backend_util.computeOutShape(inputs.map(function (t) { return t.shape; }), $axis);
        if (tf.util.sizeFromShape(outShape) === 0) {
            return backend.makeTensorInfo(outShape, inputs[0].dtype, []);
        }
        // Keep only non-empty tensors (ignore tensors with 0 in their shape).
        var $inputs = inputs.filter(function (t) { return tf.util.sizeFromShape(t.shape) > 0; });
        if ($inputs.length === 1) {
            return identity({ inputs: { x: $inputs[0] }, backend: backend });
        }
        var shapes = $inputs.map(function (t) { return t.shape; });
        tf.backend_util.assertParamsConsistent(shapes, $axis);
        return concatImpl($inputs, $axis, backend);
    }
    var concatConfig = {
        kernelName: tf.Concat,
        backendName: 'webgpu',
        kernelFunc: concat
    };

    var Conv2DMMVec4Program = /** @class */ (function () {
        function Conv2DMMVec4Program(convInfo, addBias, activation, hasPreluActivationWeights, hasLeakyreluAlpha) {
            var _a;
            if (addBias === void 0) { addBias = false; }
            if (activation === void 0) { activation = null; }
            if (hasPreluActivationWeights === void 0) { hasPreluActivationWeights = false; }
            if (hasLeakyreluAlpha === void 0) { hasLeakyreluAlpha = false; }
            this.variableNames = ['x', 'W'];
            this.uniforms = "filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>,\n      dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.workGroupSize = [8, 8, 1];
            this.isVec4 = true;
            this.outputShape = convInfo.outShape;
            tf.util.assert(convInfo.dataFormat === 'channelsLast', function () { return 'TODO: NCHW is unimplemented'; });
            this.dispatchLayout = { x: [3], y: [1, 2], z: [0] };
            // The first element in elementsPerThread must be 4.
            if (this.outputShape[1] === 1) {
                this.elementsPerThread = [4, 1, 1];
            }
            else {
                this.elementsPerThread = [4, 4, 1];
            }
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
            this.convInfo = convInfo;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.hasLeakyreluAlpha = hasLeakyreluAlpha;
            if (this.addBias) {
                this.variableNames.push('bias');
            }
            if (this.hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            if (this.hasLeakyreluAlpha) {
                this.variableNames.push('leakyreluAlpha');
            }
            this.tileAOuter = this.outputShape[1] === 1 ?
                1 :
                this.workGroupSize[1] * this.elementsPerThread[1];
            this.tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
            this.tileInner = this.tileBOuter;
            _a = __read(this.getShapeFit(), 2), this.fitA = _a[0], this.fitB = _a[1];
            this.shaderKey = "conv2DMMVec4_" + this.activation + "_" + this.fitA + "_" + this.fitB + "_" + this.elementsPerThread;
        }
        Conv2DMMVec4Program.prototype.getShapeFit = function () {
            var tileSizeA = [this.tileAOuter, this.tileInner];
            var tileSizeB = [this.tileInner, this.tileBOuter];
            var dimAOuter = this.outputShape[1] * this.outputShape[2];
            var dimBOuter = this.outputShape[3];
            var dimInner = this.convInfo.filterHeight * this.convInfo.filterWidth *
                this.convInfo.inChannels;
            return [
                tilesFitEvenlyIntoShape(tileSizeA, [dimAOuter, dimInner]),
                tilesFitEvenlyIntoShape(tileSizeB, [dimInner, dimBOuter])
            ];
        };
        // index is used to avoid repeated definition error.
        Conv2DMMVec4Program.prototype.getSampleAWithRemainder = function (index) {
            return "let flatIndex" + index + " = getIndexFromCoords4D(coord, uniforms.xShape);\n    let divBy4Remainder" + index + " = flatIndex" + index + " % 4;\n    let divBy4Index" + index + " = flatIndex" + index + " / 4;\n    let curData" + index + " = x[divBy4Index" + index + "];\n    if (divBy4Remainder" + index + " == 0) {\n      temp = curData" + index + ";\n    } else {\n      // TODO: This could end up being a redundant load with another one in\n      // the same shader invocation. Perhaps there's an opportunity for\n      // optimization\n      let nextData" + index + " = x[divBy4Index" + index + " + 1];\n      if (divBy4Remainder" + index + " == 1) {\n        temp = vec4<f32>(curData" + index + ".yzw, nextData" + index + ".x);\n      } else if (divBy4Remainder" + index + " == 2) {\n        temp = vec4<f32>(curData" + index + ".zw, nextData" + index + ".xy);\n      } else if (divBy4Remainder" + index + " == 3) {\n        temp = vec4<f32>(curData" + index + ".w, nextData" + index + ".xyz);\n      }\n    }\n    ";
        };
        Conv2DMMVec4Program.prototype.getUserCode = function () {
            var matMulSource = makeMatMulPackedVec4Source(this.elementsPerThread, this.tileAOuter, this.tileBOuter, this.tileInner);
            var remainder = this.convInfo.inChannels % 4;
            // Below code only applys to valid padding type.
            var remainderSnippet = remainder === 0 ?
                "// The bounds checking is always needed since we use it to pad zero for\n          // the 'same' padding type.\n          if (coordsInBounds4D(coord, uniforms.xShape)) {\n            resData = x[getIndexFromCoords4D(coord, uniforms.xShape) / 4];\n          } else {\n            resData = vec4<f32>(0.0); }" :
                "var temp = vec4<f32>(0.0);\n          " + this.getSampleAWithRemainder(1) + "\n          resData = temp;\n          if (WCol == (uniforms.filterDims[1] - 1)) {\n            coord = vec4<i32>(\n              coord.x, coord.y + 1, coord.z + 1 - uniforms.filterDims[1], 0);\n              " + this.getSampleAWithRemainder(2) + "\n            if (inChCoord == 0) {\n              resData = vec4<f32>(resData.xyz, temp.x);\n            } else if (inChCoord == 1) {\n              resData = vec4<f32>(resData.xy, temp.xy);\n            } else {\n              resData = vec4<f32>(resData.x, temp.xyz);\n            }\n          }\n          ";
            var readASnippet = "let outRow = r / uniforms.outShape[2];\n        let outCol = r % uniforms.outShape[2];\n        let WRow = c / (uniforms.filterDims[1] * uniforms.xShape[3]);\n        let WCol = c / uniforms.xShape[3] % uniforms.filterDims[1];\n        let inChCoord = c % uniforms.xShape[3];\n        var coord = vec4<i32>(\n            batch,\n            outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0],\n            outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1],\n            inChCoord);\n        var resData = vec4<f32>(0.0);\n        " + remainderSnippet + "\n        return resData;";
            var sampleA = this.fitA ?
                "" + readASnippet :
                "if (r < uniforms.dimAOuter && c < uniforms.dimInner) {\n          " + readASnippet + "\n         }\n         return vec4<f32>(0.0);\n        ";
            var sampleB = this.fitB ?
                "return W[row * uniforms.dimBOuter / 4 + col];" :
                "if(coordsInBounds2D(vec2<i32>(row, col * 4), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n           return W[row * uniforms.dimBOuter / 4 + col];\n         }\n         return vec4<f32>(0.0);\n        ";
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {\n          let b = getPreluActivationWeightsByOutputCoords(outCoord);\n          " + activationOp + "\n        }";
                }
                else if (this.hasLeakyreluAlpha) {
                    activationSnippet = "fn activation(outCoord: vec4<f32>) -> vec4<f32> {\n          let b = getLeakyreluAlphaByOutputCoords(outCoord);\n          " + activationOp + "\n        }";
                    throw new Error('Leakyrelu is not supported.');
                }
                else {
                    activationSnippet = "\n        fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {\n          " + activationOp + "\n        }";
                }
                applyActivationSnippet = "value = activation(value, outCoord);";
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n        " + activationSnippet + "\n        fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> vec4<f32> {\n          let r = row;\n          let c = col * 4;\n          var batch = i32(globalId.z);\n          " + sampleA + "\n        }\n\n        fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> vec4<f32> {\n          " + sampleB + "\n        }\n\n        fn mm_write(row : i32, col : i32, valueInput : vec4<f32>, globalId : vec3<u32>) {\n          var batch = i32(globalId.z);\n          var value = valueInput;\n          if (row < uniforms.dimAOuter && col * 4 < uniforms.dimBOuter)\n          {\n            let outCoord = vec4<i32>(\n              batch,\n              row / uniforms.outShape[2],\n              row % uniforms.outShape[2],\n              col * 4);\n            " + addBiasSnippet + "\n            " + applyActivationSnippet + "\n            setOutputAtCoords(outCoord[0], outCoord[1], outCoord[2], outCoord[3],\n              value);\n          }\n        }\n        " + matMulSource + "\n      ";
            return userCode;
        };
        return Conv2DMMVec4Program;
    }());

    var Conv2DMMProgram = /** @class */ (function () {
        function Conv2DMMProgram(convInfo, addBias, activation, hasPreluActivationWeights) {
            var _a;
            if (addBias === void 0) { addBias = false; }
            if (activation === void 0) { activation = null; }
            if (hasPreluActivationWeights === void 0) { hasPreluActivationWeights = false; }
            this.variableNames = ['x', 'W'];
            this.uniforms = "filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,";
            this.outputShape = convInfo.outShape;
            this.isChannelsLast = convInfo.dataFormat === 'channelsLast';
            this.dispatchLayout = this.isChannelsLast ? { x: [3], y: [1, 2], z: [0] } :
                { x: [1], y: [2, 3], z: [0] };
            this.workGroupSize =
                computeWorkGroupSizeForConv2d(this.dispatchLayout, this.outputShape);
            this.elementsPerThread =
                computeWorkPerThreadForConv2d(this.dispatchLayout, this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.convInfo = convInfo;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            _a = __read(this.getShapeFit(), 2), this.fitA = _a[0], this.fitB = _a[1];
            this.shaderKey = "conv2DMM_" + this.elementsPerThread + "_" + this.activation + "_" + this.fitA + "_" + this.fitB + "_" + this.isChannelsLast;
        }
        Conv2DMMProgram.prototype.getShapeFit = function () {
            var tileAOuter = this.workGroupSize[1] * this.elementsPerThread[1];
            var tileBOuter = this.workGroupSize[0] * this.elementsPerThread[0];
            var tileInner = tileAOuter > tileBOuter ? tileAOuter : tileBOuter;
            tf.util.assert(tileInner % this.workGroupSize[0] === 0 &&
                tileInner % this.workGroupSize[1] === 0, function () {
                // tslint:disable-next-line: max-line-length
                return 'tileInner must be multiple of workgroupsize.x and workgroupsize.y';
            });
            var tileSizeA = [tileAOuter, tileInner];
            var tileSizeB = [tileInner, tileBOuter];
            var dimAOuter = this.convInfo.outHeight * this.convInfo.outWidth;
            var dimBOuter = this.convInfo.outChannels;
            var dimInner = this.convInfo.filterHeight * this.convInfo.filterWidth *
                this.convInfo.inChannels;
            return [
                tilesFitEvenlyIntoShape(tileSizeA, [dimAOuter, dimInner]),
                tilesFitEvenlyIntoShape(tileSizeB, [dimInner, dimBOuter])
            ];
        };
        Conv2DMMProgram.prototype.getUserCode = function () {
            var coordASnippet = this.isChannelsLast ? "\n    let coord = vec4<i32>(batch, xRow, xCol, col % inChannels);\n    " :
                "\n    let coord = vec4<i32>(batch, col % inChannels, xRow, xCol);\n    ";
            var coordResSnippet = this.isChannelsLast ? "\n    let outCoord = vec4<i32>(\n      batch,\n      row / outWidth,\n      row % outWidth,\n      col);\n    " :
                "\n    let outCoord = vec4<i32>(\n      batch,\n      col,\n      row / outWidth,\n      row % outWidth);\n    ";
            var matMulSource = makeMatMulPackedSource(this.elementsPerThread, this.workGroupSize);
            var readASnippet = "\n    let inChannels = uniforms.wShape[2];\n    let outWidth = " + (this.isChannelsLast ? 'uniforms.outShape[2]' : 'uniforms.outShape[3]') + ";\n    let outRow = row / outWidth;\n    let outCol = row % outWidth;\n\n    let WRow = col / (uniforms.filterDims[1] * inChannels);\n    let WCol = col / inChannels % uniforms.filterDims[1];\n    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];\n    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];\n    " + coordASnippet + "\n    // The bounds checking is always needed since we use it to pad zero for the\n    // 'same' padding type.\n    if(coordsInBounds4D(coord, uniforms.xShape)) {\n      return x[getIndexFromCoords4D(coord, uniforms.xShape)];\n    }\n    return 0.0;";
            var sampleA = this.fitA ?
                "" + readASnippet :
                "if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n      " + readASnippet + "\n    }\n    return 0.0;\n    ";
            var sampleB = this.fitB ?
                "return W[row * uniforms.dimBOuter + col];" :
                "if(coordsInBounds2D(vec2<i32>(row, col), vec2<i32>(uniforms.dimInner, uniforms.dimBOuter))) {\n           return W[row * uniforms.dimBOuter + col];\n\t }\n\t return 0.0;\n\t ";
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, false);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a: f32, outCoord : vec4<i32>) -> f32 {\n                  let b = getPreluActivationWeightsByOutputCoords(outCoord);\n                  " + activationOp + "\n                }";
                }
                else {
                    activationSnippet = "\n                  fn activation(a : f32, outCoord : vec4<i32>) -> f32 {\n                    " + activationOp + "\n                  }\n                ";
                }
                applyActivationSnippet = "value = activation(value, outCoord);";
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n    " + activationSnippet + "\n    fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> f32 {\n      var batch = i32(globalId.z);\n      " + sampleA + "\n    }\n\n    fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> f32 {\n      " + sampleB + "\n    }\n\n    fn mm_write(row : i32, col : i32, valueInput : f32, globalId : vec3<u32>) {\n      var batch = i32(globalId.z);\n      var value = valueInput;\n      let outWidth = " + (this.isChannelsLast ? 'uniforms.outShape[2]' : 'uniforms.outShape[3]') + ";\n      " + coordResSnippet + "\n      " + addBiasSnippet + "\n      " + applyActivationSnippet + "\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)] = value;\n    }\n    " + matMulSource + "\n  ";
            return userCode;
        };
        return Conv2DMMProgram;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var Conv2DNaiveProgram = /** @class */ (function () {
        function Conv2DNaiveProgram(convInfo, addBias, activation, hasPreluActivationWeights) {
            if (addBias === void 0) { addBias = false; }
            if (activation === void 0) { activation = null; }
            if (hasPreluActivationWeights === void 0) { hasPreluActivationWeights = false; }
            this.variableNames = ['x', 'W'];
            this.uniforms = "filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>,";
            this.workGroupSize = [128, 1, 1];
            this.outputShape = convInfo.outShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            tf.util.assert(convInfo.dataFormat === 'channelsLast', function () { return 'TODO: NCHW is unimplemented'; });
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivationWeights) {
                this.variableNames.push('preluActivationWeights');
            }
            this.convInfo = convInfo;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivationWeights = hasPreluActivationWeights;
            this.shaderKey = "conv2DNaive_" + this.activation;
        }
        Conv2DNaiveProgram.prototype.getUserCode = function () {
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation);
                if (this.hasPreluActivationWeights) {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec4<i32>) -> f32{\n               let b = getPreluActivationWeightsByOutputCoords(outCoord);\n               " + activationOp + "\n             }";
                }
                else {
                    activationSnippet = "\n                  fn activation(a : f32, outCoord : vec4<i32>) -> f32{\n                    " + activationOp + "\n                  }\n                ";
                }
                applyActivationSnippet = "value = activation(value, outCoord);";
            }
            var addBiasSnippet = this.addBias ? 'value = value + getBiasByOutputCoords(outCoord);' : '';
            var userCode = "\n      " + activationSnippet + "\n      fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32 {\n        let coord = vec4<i32>(batch, row, col, chan);\n        if(coordsInBounds4D(coord, uniforms.xShape)) {\n          return getX(batch, row, col, chan);\n        }\n        return 0.0;\n      }\n\n      fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{\n        let coord = vec4<i32>(row, col, xChannel, outChannel);\n        if(coordsInBounds4D(coord, uniforms.wShape)) {\n          return getW(row, col, xChannel, outChannel);\n        }\n        return 0.0;\n      }\n\n      fn writeResult(batch : i32, row : i32, col : i32, chan : i32, value : f32) {\n        let coord = vec4<i32>(batch, row, col, chan);\n        if (coordsInBounds4D(coord, uniforms.outShape)) {\n          " + addBiasSnippet + "\n          " + applyActivationSnippet + "\n          setOutputAtCoords(batch, row, col, chan, value);\n        }\n      }\n\n      " + getMainHeaderString() + "\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let outChannel = coords[3];\n\n        var acc = 0.0;\n\n        for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {\n          for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {\n            for (var xChannel = 0; xChannel < uniforms.xShape[3]; xChannel = xChannel + 1) {\n              let coordRow = coords[1] * uniforms.stride[0] + uniforms.dilation[0] * row - uniforms.pad[0];\n              let coordCol = coords[2] * uniforms.stride[1] + uniforms.dilation[1] * col - uniforms.pad[1];\n              let v = readInp(batch, coordRow, coordCol, xChannel);\n              let f = readFilt(row, col, xChannel, outChannel);\n              acc = acc + v * f;\n            }\n          }\n        }\n\n        writeResult(batch, coords[1], coords[2], outChannel, acc);\n      }\n    ";
            return userCode;
        };
        return Conv2DNaiveProgram;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var Im2ColProgram = /** @class */ (function () {
        function Im2ColProgram(outputShape, isChannelsLast) {
            this.variableNames = ['A'];
            this.uniforms = "pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,\n      inChannels : i32,";
            this.workPerThread = 4;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            this.isChannelsLast = isChannelsLast;
            this.shaderKey = "im2col_" + this.isChannelsLast;
        }
        Im2ColProgram.prototype.getUserCode = function () {
            var rowDim = this.isChannelsLast ? 0 : 1;
            var colDim = this.isChannelsLast ? 1 : 2;
            var userCode = "\n    " + getMainHeaderAndGlobalIndexString() + "\n\n      for(var i = 0; i<" + this.workPerThread + "; i = i + 1) {\n        let flatIndex = index * " + this.workPerThread + " + i;\n\n        let rc = getCoordsFromIndex(flatIndex);\n\n        if(flatIndex < uniforms.size) {\n          let blockIndex = rc[0];\n          let pos = rc[1];\n\n          let offsetY = blockIndex / uniforms.outWidth * uniforms.stride[1] - uniforms.pad[1];\n          let d0 = offsetY + uniforms.dilation[1] * pos / uniforms.itemsPerBlockRow;\n          var value = 0.0;\n          if(d0 < uniforms.aShape[" + rowDim + "] && d0 >= 0) {\n            let offsetX = (blockIndex % uniforms.outWidth) * uniforms.stride[0] -\n              uniforms.pad[0];\n            let d1 = offsetX + uniforms.dilation[0] * ((pos %\n              uniforms.itemsPerBlockRow) / uniforms.inChannels);\n            let ch = pos % uniforms.inChannels;\n            if(d1 < uniforms.aShape[" + colDim + "] && d1 >= 0) {\n              value = getA(d0, d1, ch);\n            }\n          }\n          setOutputAtIndex(flatIndex, value);\n        }\n      }\n    }\n  ";
            return userCode;
        };
        return Im2ColProgram;
    }());

    // For 1x1 kernels that iterate through every point in the input, convolution
    // can be expressed as matrix multiplication (without need for memory
    // remapping).
    function conv2dByMatMul(_a) {
        var x = _a.x, filter = _a.filter, convInfo = _a.convInfo, backend = _a.backend, _b = _a.bias, bias = _b === void 0 ? null : _b, _c = _a.preluActivationWeights, preluActivationWeights = _c === void 0 ? null : _c, _d = _a.leakyreluAlpha, leakyreluAlpha = _d === void 0 ? 0 : _d, _e = _a.activation, activation = _e === void 0 ? null : _e;
        var isChannelsLast = convInfo.dataFormat === 'channelsLast';
        var transposeA = isChannelsLast ? false : true;
        var transposeB = false;
        var sameSize = isChannelsLast &&
            convInfo.filterHeight === convInfo.inHeight &&
            convInfo.filterWidth === convInfo.inWidth &&
            convInfo.padInfo.type === 'VALID';
        var xReshaped;
        var filterReshaped;
        if (sameSize) {
            var sharedDim = convInfo.inHeight * convInfo.inWidth * convInfo.inChannels;
            xReshaped = reshape({
                inputs: { x: x },
                backend: backend,
                attrs: { shape: [1, convInfo.batchSize, sharedDim] }
            });
            filterReshaped = reshape({
                inputs: { x: filter },
                backend: backend,
                attrs: { shape: [1, sharedDim, convInfo.outChannels] }
            });
        }
        else {
            xReshaped = reshape({
                inputs: { x: x },
                backend: backend,
                attrs: {
                    shape: isChannelsLast ?
                        [
                            convInfo.batchSize, convInfo.inHeight * convInfo.inWidth,
                            convInfo.inChannels
                        ] :
                        [
                            convInfo.batchSize, convInfo.inChannels,
                            convInfo.inHeight * convInfo.inWidth
                        ]
                }
            });
            filterReshaped = reshape({
                inputs: { x: filter },
                backend: backend,
                attrs: { shape: [1, convInfo.inChannels, convInfo.outChannels] }
            });
        }
        var result = batchMatMulImpl({
            a: isChannelsLast ? xReshaped : filterReshaped,
            b: isChannelsLast ? filterReshaped : xReshaped,
            transposeA: transposeA,
            transposeB: transposeB,
            backend: backend,
            bias: bias,
            activation: activation,
            preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha
        });
        var out = reshape({ inputs: { x: result }, backend: backend, attrs: { shape: convInfo.outShape } });
        backend.disposeData(xReshaped.dataId);
        backend.disposeData(filterReshaped.dataId);
        backend.disposeData(result.dataId);
        return out;
    }
    // Implements the im2row algorithm as outlined in "High Performance
    // Convolutional Neural Networks for Document Processing" (Suvisoft, 2006)
    function conv2dWithIm2Col(_a) {
        var e_1, _b;
        var x = _a.x, filter = _a.filter, convInfo = _a.convInfo, backend = _a.backend, _c = _a.bias, bias = _c === void 0 ? null : _c, _d = _a.preluActivationWeights, preluActivationWeights = _d === void 0 ? null : _d, _e = _a.leakyreluAlpha, leakyreluAlpha = _e === void 0 ? 0 : _e, _f = _a.activation, activation = _f === void 0 ? null : _f;
        // Rearranges conv2d input so each block to be convolved over forms the
        // column of a new matrix with shape [filterWidth * filterHeight *
        // inChannels, outHeight * outWidth]. The filter is also rearranged so each
        // output channel forms a row of a new matrix with shape [outChannels,
        // filterWidth * filterHeight * inChannels]. The convolution is then
        // computed by multiplying these matrices and reshaping the result.
        var filterWidth = convInfo.filterWidth, filterHeight = convInfo.filterHeight, inChannels = convInfo.inChannels, strideWidth = convInfo.strideWidth, strideHeight = convInfo.strideHeight, padInfo = convInfo.padInfo, outWidth = convInfo.outWidth, outHeight = convInfo.outHeight, dilationWidth = convInfo.dilationWidth, dilationHeight = convInfo.dilationHeight, dataFormat = convInfo.dataFormat;
        var isChannelsLast = dataFormat === 'channelsLast';
        var sharedDim = filterWidth * filterHeight * inChannels;
        var numCols = outHeight * outWidth;
        var x2ColShape = [numCols, sharedDim];
        var transposeA = false;
        var transposeB = false;
        var intermediates = [];
        var xSqueezed = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: x.shape.slice(1) } });
        var w2Row = reshape({ inputs: { x: filter }, backend: backend, attrs: { shape: [1, sharedDim, -1] } });
        intermediates.push(xSqueezed);
        intermediates.push(w2Row);
        var im2ColProgram = new Im2ColProgram(x2ColShape, isChannelsLast);
        var dimensions = [
            { type: 'int32', data: [padInfo.left, padInfo.top] },
            { type: 'int32', data: [strideWidth, strideHeight] },
            { type: 'int32', data: [dilationWidth, dilationHeight] },
            { type: 'int32', data: [outWidth] },
            { type: 'int32', data: [inChannels * filterWidth] },
            { type: 'int32', data: [inChannels] }
        ];
        var im2Col = backend.runWebGPUProgram(im2ColProgram, [xSqueezed], xSqueezed.dtype, dimensions);
        var im2Col3D = reshape({
            inputs: { x: im2Col },
            backend: backend,
            attrs: { shape: [1, x2ColShape[0], x2ColShape[1]] }
        });
        intermediates.push(im2Col);
        intermediates.push(im2Col3D);
        var a3dShape = [1, x2ColShape[0], x2ColShape[1]];
        var matMulProgram = new MatMulPackedProgram(a3dShape, [1, numCols, convInfo.outChannels], tf.env().get('WEBGPU_MATMUL_WORK_PER_THREAD'), true, true, transposeA, transposeB, bias, activation, preluActivationWeights);
        var dimAOuter = a3dShape[1];
        var dimInner = a3dShape[2];
        var dimBOuter = convInfo.outChannels;
        var matmulDimensions = [
            { type: 'int32', data: [dimAOuter] }, { type: 'int32', data: [dimBOuter] },
            { type: 'int32', data: [dimInner] }
        ];
        var inputs = [im2Col3D, w2Row];
        if (bias) {
            inputs.push(bias);
        }
        if (preluActivationWeights) {
            inputs.push(preluActivationWeights);
        }
        if (activation === 'leakyrelu') {
            dimensions.push({ type: 'float32', data: [leakyreluAlpha] });
            matMulProgram.uniforms += ' alpha : f32,';
        }
        var result = backend.runWebGPUProgram(matMulProgram, inputs, im2Col3D.dtype, matmulDimensions);
        var outShape = isChannelsLast ?
            [1, outHeight, outWidth, convInfo.outChannels] :
            [1, convInfo.outChannels, outHeight, outWidth];
        var out = reshape({ inputs: { x: result }, backend: backend, attrs: { shape: outShape } });
        intermediates.push(result);
        try {
            for (var intermediates_1 = __values(intermediates), intermediates_1_1 = intermediates_1.next(); !intermediates_1_1.done; intermediates_1_1 = intermediates_1.next()) {
                var i = intermediates_1_1.value;
                backend.disposeData(i.dataId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (intermediates_1_1 && !intermediates_1_1.done && (_b = intermediates_1.return)) _b.call(intermediates_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return out;
    }
    function conv2DImpl(_a) {
        var x = _a.x, filter = _a.filter, convInfo = _a.convInfo, backend = _a.backend, _b = _a.bias, bias = _b === void 0 ? null : _b, _c = _a.preluActivationWeights, preluActivationWeights = _c === void 0 ? null : _c, _d = _a.leakyreluAlpha, leakyreluAlpha = _d === void 0 ? 0 : _d, _e = _a.activation, activation = _e === void 0 ? null : _e;
        var hasBias = bias != null;
        var hasPreluActivationWeights = preluActivationWeights != null;
        var isChannelsLast = convInfo.dataFormat === 'channelsLast';
        var program;
        var sameSize = isChannelsLast &&
            convInfo.filterHeight === convInfo.inHeight &&
            convInfo.filterWidth === convInfo.inWidth &&
            convInfo.padInfo.type === 'VALID';
        if (sameSize ||
            (convInfo.filterHeight === 1 && convInfo.filterWidth === 1 &&
                convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
                convInfo.strideHeight === 1 && convInfo.strideWidth === 1 &&
                (convInfo.padInfo.type === 'SAME' ||
                    convInfo.padInfo.type === 'VALID'))) {
            return conv2dByMatMul({
                x: x,
                filter: filter,
                convInfo: convInfo,
                backend: backend,
                bias: bias,
                activation: activation,
                preluActivationWeights: preluActivationWeights,
                leakyreluAlpha: leakyreluAlpha
            });
        }
        if (tf.env().getBool('WEBGPU_CONV_SEPARATE_IM2COL_SHADER') && x.shape[0] === 1) {
            tf.util.assert(isChannelsLast, function () { return 'TODO: NCHW is unimplemented'; });
            return conv2dWithIm2Col({
                x: x,
                filter: filter,
                convInfo: convInfo,
                backend: backend,
                bias: bias,
                preluActivationWeights: preluActivationWeights,
                leakyreluAlpha: leakyreluAlpha,
                activation: activation
            });
        }
        var useNaive = tf.env().getBool('WEBGPU_USE_NAIVE_CONV2D');
        var useVec4 = (convInfo.inChannels % 4 === 0 ||
            (convInfo.inChannels === 3 && convInfo.padInfo.type === 'VALID')) &&
            convInfo.outChannels % 4 === 0 && isChannelsLast;
        var padInfo = [convInfo.padInfo.top, convInfo.padInfo.left];
        var dimensions = [
            { type: 'int32', data: [convInfo.filterHeight, convInfo.filterWidth] },
            { type: 'int32', data: __spread(padInfo) },
            { type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] },
            { type: 'int32', data: [convInfo.dilationHeight, convInfo.dilationWidth] }
        ];
        if (useNaive) {
            tf.util.assert(isChannelsLast, function () { return 'TODO: NCHW is unimplemented'; });
            // TODO(kainino0x): This may be obsolete, but is kept for reference.
            program = new Conv2DNaiveProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
        }
        else {
            if (useVec4) {
                program = new Conv2DMMVec4Program(convInfo, hasBias, activation, hasPreluActivationWeights);
            }
            else {
                program = new Conv2DMMProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
            }
            var dimAOuter = convInfo.outHeight * convInfo.outWidth;
            var dimBOuter = convInfo.outChannels;
            var dimInner = convInfo.filterHeight * convInfo.filterWidth * convInfo.inChannels;
            dimensions.push({ type: 'int32', data: [dimAOuter] }, { type: 'int32', data: [dimBOuter] }, { type: 'int32', data: [dimInner] });
        }
        var inputVar = [x, filter];
        if (hasBias) {
            inputVar.push(bias);
        }
        if (hasPreluActivationWeights) {
            inputVar.push(preluActivationWeights);
        }
        if (activation === 'leakyrelu') {
            dimensions.push({ type: 'float32', data: [leakyreluAlpha] });
            program.uniforms += ' alpha : f32,';
        }
        return backend.runWebGPUProgram(program, inputVar, x.dtype, dimensions);
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function conv2d(args) {
        var inputs = args.inputs, attrs = args.attrs, backend = args.backend;
        var x = inputs.x, filter = inputs.filter;
        var strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode;
        var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
        var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false /* depthwise */, $dataFormat);
        return conv2DImpl({ x: x, filter: filter, convInfo: convInfo, backend: backend });
    }
    var conv2DConfig = {
        kernelName: tf.Conv2D,
        backendName: 'webgpu',
        kernelFunc: conv2d
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var Conv2DDerInputMMProgram = /** @class */ (function () {
        function Conv2DDerInputMMProgram(convInfo) {
            this.variableNames = ['x', 'W'];
            this.uniforms = 'filterDims : vec2<i32>, pads : vec2<i32>, stride : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,';
            this.outputShape = convInfo.inShape;
            tf.util.assert(convInfo.dataFormat === 'channelsLast', function () { return 'TODO: NCHW is unimplemented'; });
            this.dispatchLayout = { x: [3], y: [1, 2], z: [0] };
            this.workGroupSize =
                computeWorkGroupSizeForConv2d(this.dispatchLayout, this.outputShape);
            this.elementsPerThread =
                computeWorkPerThreadForConv2d(this.dispatchLayout, this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, this.elementsPerThread);
            this.shaderKey = "conv2DDerInputMM_" + this.elementsPerThread;
        }
        Conv2DDerInputMMProgram.prototype.getUserCode = function () {
            var matMulSource = makeMatMulPackedSource(this.elementsPerThread, this.workGroupSize);
            var readASnippet = "\n    let outRow = row / uniforms.outShape[2];\n    let outCol = row % uniforms.outShape[2];\n\n    let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n    let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];\n    let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.stride[0]);\n    let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.stride[1]);\n    if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {\n      return 0.0;\n    }\n    if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {\n      return 0.0;\n    }\n    let coord = vec4<i32>(\n        batch,\n        i32(xR),\n        i32(xC),\n        col % uniforms.outBackprop[3]);\n    return x[getIndexFromCoords4D(coord, uniforms.xShape)];";
            var sampleA = "if (row < uniforms.dimAOuter && col < uniforms.dimInner) {\n      " + readASnippet + "\n    }\n    return 0.0;";
            var userCode = "\n    fn mm_readA(row : i32, col : i32, globalId : vec3<u32>) -> f32 {\n      var batch = i32(globalId.z);\n      " + sampleA + "\n    }\n\n    fn mm_readB(row : i32, col : i32, globalId : vec3<u32>) -> f32 {\n      let coordX = uniforms.filterDims.x - 1 -\n          row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);\n      let coordY = uniforms.filterDims.y - 1 -\n          (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];\n      if (row < uniforms.dimInner && col < uniforms.dimBOuter &&\n          coordX >= 0 && coordY >= 0) {\n        let coord = vec4<i32>(coordX, coordY, col,\n            row % uniforms.outBackprop[3]);\n        return W[getIndexFromCoords4D(coord, uniforms.wShape)];\n      }\n      return 0.0;\n    }\n\n    fn mm_write(row : i32, col : i32, valueInput : f32, globalId : vec3<u32>) {\n      var batch = i32(globalId.z);\n      var value = valueInput;\n      let outCoord = vec4<i32>(\n          batch,\n          row / uniforms.outShape[2],\n          row % uniforms.outShape[2],\n          col);\n      result[getIndexFromCoords4D(outCoord, uniforms.outShape)] = value;\n    }\n\n    " + matMulSource + "\n  ";
            return userCode;
        };
        return Conv2DDerInputMMProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var Conv2DDerInputProgram = /** @class */ (function () {
        function Conv2DDerInputProgram(convInfo) {
            this.variableNames = ['dy', 'W'];
            this.uniforms = 'filterDims : vec2<i32>, pads : vec2<i32>, stride : vec2<i32>, outBackprop : vec4<i32>,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = convInfo.inShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.isChannelsLast = convInfo.dataFormat === 'channelsLast';
            this.shaderKey = "conv2DDerInput_" + this.isChannelsLast;
        }
        Conv2DDerInputProgram.prototype.getUserCode = function () {
            var rowDim = this.isChannelsLast ? 1 : 2;
            var colDim = this.isChannelsLast ? 2 : 3;
            var channelDim = this.isChannelsLast ? 3 : 1;
            return "\n    " + getMainHeaderAndGlobalIndexString() + " {\n      if(index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let batch = coords[0];\n        let d1 = coords[" + channelDim + "];\n\n        let dyCorner = vec2<i32>(coords[" + rowDim + "]), coords[" + colDim + "]) - uniforms.pads;\n        let dyRCorner = dyCorner.x;\n        let dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {\n          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.stride.x);\n          let wRPerm = uniforms.filterDims.x - 1 - wR;\n          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||\n              wRPerm < 0) {\n            continue;\n          }\n          let idyR = dyR;\n\n          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {\n            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.stride.y);\n            let wCPerm = uniforms.filterDims.y - 1 - wC;\n            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||\n                fract(dyC) > 0.0 || wCPerm < 0) {\n              continue;\n            }\n            let idyC = dyC;\n\n            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {\n              if (" + this.isChannelsLast + ") {\n                let xValue = getDy(batch, idyR, idyC, d2);\n                let wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd = dotProd + xValue * wValue;\n              } else {\n                let xValue = getDy(batch, d2, idyR, idyC);\n                let wValue = getW(wRPerm, wCPerm, d1, d2);\n                dotProd = dotProd + xValue * wValue;\n              }\n\n            }\n          }\n        }\n        setOutputAtIndex(index, dotProd);\n      }\n    }\n  ";
        };
        return Conv2DDerInputProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function conv2DBackpropInput(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var dy = inputs.dy, filter = inputs.filter;
        var inputShape = attrs.inputShape, strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dimRoundingMode = attrs.dimRoundingMode;
        var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
        var convInfo = tf.backend_util.computeConv2DInfo(inputShape, filter.shape, strides, 1 /* dilations */, pad, dimRoundingMode, false, $dataFormat);
        var dimensions = [
            { type: 'int32', data: [convInfo.filterHeight, convInfo.filterWidth] },
            {
                type: 'int32',
                data: [
                    convInfo.filterHeight - 1 - convInfo.padInfo.top,
                    convInfo.filterWidth - 1 - convInfo.padInfo.left
                ]
            },
            { type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] },
            {
                type: 'int32',
                data: [
                    convInfo.batchSize, convInfo.outHeight, convInfo.outWidth,
                    convInfo.outChannels
                ]
            },
        ];
        var program;
        if (tf.env().getBool('WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE')) {
            // Keep Conv2DDerInputProgram for reference.
            program = new Conv2DDerInputProgram(convInfo);
        }
        else {
            program = new Conv2DDerInputMMProgram(convInfo);
            var dimAOuter = convInfo.inShape[1] * convInfo.inShape[2];
            var dimBOuter = convInfo.inShape[3];
            var dimInner = convInfo.filterHeight * convInfo.filterWidth * convInfo.outChannels;
            dimensions.push({ type: 'uint32', data: [dimAOuter] }, { type: 'uint32', data: [dimBOuter] }, { type: 'uint32', data: [dimInner] });
        }
        return backend.runWebGPUProgram(program, [dy, filter], 'float32', dimensions);
    }
    var conv2DBackpropInputConfig = {
        kernelName: tf.Conv2DBackpropInput,
        backendName: 'webgpu',
        kernelFunc: conv2DBackpropInput,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var cos = unaryKernelFunc({ opType: UnaryOpType.COS });
    var cosConfig = {
        kernelName: tf.Cos,
        backendName: 'webgpu',
        kernelFunc: cos
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var cosh = unaryKernelFunc({ opType: UnaryOpType.COSH });
    var coshConfig = {
        kernelName: tf.Cosh,
        backendName: 'webgpu',
        kernelFunc: cosh
    };

    var CropAndResizeProgram = /** @class */ (function () {
        function CropAndResizeProgram(channnel, boxShape, cropSize, method) {
            this.variableNames = ['Image', 'Boxes', 'BoxInd'];
            this.uniforms = 'extrapolationValue : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            var _a = __read(boxShape, 1), numBoxes = _a[0];
            this.outputShape = [numBoxes, cropSize[0], cropSize[1], channnel];
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.methodId = method === 'bilinear' ? 1 : 0;
            this.cropHeightBiggerThan1 = this.outputShape[1] > 1;
            this.cropWidthBiggerThan1 = this.outputShape[2] > 1;
            this.shaderKey = "cropAndResize_" + this.methodId + "_" + this.cropHeightBiggerThan1 + "_" + this.cropWidthBiggerThan1;
        }
        CropAndResizeProgram.prototype.getUserCode = function () {
            var _a = __read(["f32(uniforms.imageShape[1] - 1)", "f32(uniforms.imageShape[2] - 1)"], 2), inputHeightFloat = _a[0], inputWidthFloat = _a[1];
            var _b = __read(this.cropHeightBiggerThan1 ?
                [
                    "(" + inputHeightFloat + " / f32(uniforms.outShape[1] - 1))",
                    '(y2-y1) * height_ratio',
                    "y1*" + inputHeightFloat + " + f32(y)*(height_scale)",
                ] :
                [
                    '0.0',
                    '0.0',
                    "0.5 * (y1+y2) * " + inputHeightFloat,
                ], 3), heightRatio = _b[0], heightScale = _b[1], inY = _b[2];
            var _c = __read(this.cropWidthBiggerThan1 ?
                [
                    "(" + inputWidthFloat + " / f32(uniforms.outShape[2] - 1))",
                    '(x2-x1) * width_ratio',
                    "x1*" + inputWidthFloat + " + f32(x)*(width_scale)",
                ] :
                [
                    '0.0',
                    '0.0',
                    "0.5 * (x1+x2) * " + inputWidthFloat,
                ], 3), widthRatio = _c[0], widthScale = _c[1], inX = _c[2];
            // Reference implementation
            // tslint:disable-next-line:max-line-length
            // https://github.com/tensorflow/tensorflow/blob/master/tensorflow/core/kernels/crop_and_resize_op_gpu.cu.cc
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n      if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n        let height_ratio = f32(" + heightRatio + ");\n        let width_ratio = f32(" + widthRatio + ");\n        let b = coords[0];\n        let y = coords[1];\n        let x = coords[2];\n        let d = coords[3];\n        // get box vals\n        let y1 = getBoxes(b, 0);\n        let x1 = getBoxes(b, 1);\n        let y2 = getBoxes(b, 2);\n        let x2 = getBoxes(b, 3);\n        // get image in batch index\n        let bInd = i32(round(getBoxInd(b)));\n        if(bInd < 0 || bInd >= uniforms.outShape[0]) {\n          return;\n        }\n        let height_scale = " + heightScale + ";\n        let width_scale = " + widthScale + ";\n        let in_y = " + inY + ";\n        if( in_y < 0.0 || in_y > " + inputHeightFloat + " ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let in_x = " + inX + ";\n        if( in_x < 0.0 || in_x > " + inputWidthFloat + " ) {\n          setOutputAtIndex(index, uniforms.extrapolationValue);\n          return;\n        }\n        let sourceFracIndexCR = vec2<f32>(in_x,in_y);\n        if(" + this.methodId + " == 1) {\n          // Compute the four integer indices.\n          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);\n          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));\n          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);\n          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);\n          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);\n          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);\n          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);\n          let top = topLeft + (topRight - topLeft) * fracCR.x;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          let newValue = top + (bottom - top) * fracCR.y;\n          setOutputAtIndex(index, newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          let sourceNearestCR = vec2<i32>(floor(\n            sourceFracIndexCR + vec2<f32>(0.5,0.5)));\n          let newValue = getImage(\n            bInd, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    }\n    ";
            return userCode;
        };
        return CropAndResizeProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var cropAndResize = function (args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var image = inputs.image, boxes = inputs.boxes, boxInd = inputs.boxInd;
        var cropSize = attrs.cropSize, method = attrs.method, extrapolationValue = attrs.extrapolationValue;
        var program = new CropAndResizeProgram(image.shape[3], boxes.shape, cropSize, method);
        var uniformData = [{ type: 'float32', data: [extrapolationValue] }];
        return backend.runWebGPUProgram(program, [image, boxes, boxInd], 'float32', uniformData);
    };
    var cropAndResizeConfig = {
        kernelName: tf.CropAndResize,
        backendName: 'webgpu',
        kernelFunc: cropAndResize
    };

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var CumOpType;
    (function (CumOpType) {
        CumOpType["Prod"] = "*";
        CumOpType["Sum"] = "+";
    })(CumOpType || (CumOpType = {}));
    var CumProgram = /** @class */ (function () {
        function CumProgram(op, shape, exclusive, reverse) {
            this.variableNames = ['x'];
            // pow(i32, i32) is not supported, use pow(f32, f32) instead.
            this.uniforms = 'index : f32,';
            this.size = true;
            var workGroupSizeX = 128;
            this.workGroupSize = [workGroupSizeX, 1, 1];
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.exclusive = exclusive;
            this.reverse = reverse;
            this.op = op;
            this.shaderKey = "cum_" + this.op + "_" + this.exclusive + "_" + this.reverse;
        }
        CumProgram.prototype.getUserCode = function () {
            var rank = this.outputShape.length;
            var initVal = this.op === CumOpType.Prod ? '1.0' : '0.0';
            var val = this.exclusive ? initVal :
                "getX(" + getCoords(rank, 'coords', this.op) + ")";
            var length = this.outputShape[this.outputShape.length - 1];
            var condition = '';
            var idxString = '';
            // When exclusive is set, the cum op becomes roll op that copies the
            // value from the previous index based on the direction specified by the
            // reverse flag.
            if (this.exclusive) {
                condition = this.reverse ? "end != " + (length - 1) : 'end != 0';
                idxString = this.reverse ? 'end + 1' : 'end - 1';
            }
            else {
                condition = this.reverse ? "end + pow2 < " + length : 'end >= pow2';
                idxString = (this.reverse ? 'end + pow2' : 'end - pow2');
            }
            return "\n      " + getMainHeaderAndGlobalIndexString() + "\n       if (index < uniforms.size) {\n         var coords = getCoordsFromIndex(index);\n\n         let end = " + getFinalCoord(rank, 'coords', this.op) + ";\n         var val = " + val + ";\n         let pow2 = i32(pow(2.0, uniforms.index));\n         if (" + condition + ") {\n           let idx = " + idxString + ";\n           " + getFinalCoord(rank, 'coords', this.op) + " = idx;\n           val " + this.op + "= getX(" + getCoords(rank, 'coords', this.op) + ");\n         }\n         setOutputAtIndex(index, val);\n       }\n      }\n    ";
        };
        return CumProgram;
    }());
    function getCoords(rank, name, op) {
        if (rank === 1) {
            return "" + name;
        }
        else if (rank === 2) {
            return name + ".x, " + name + ".y";
        }
        else if (rank === 3) {
            return name + ".x, " + name + ".y, " + name + ".z";
        }
        else if (rank === 4) {
            return name + ".x, " + name + ".y, " + name + ".z, " + name + ".w";
        }
        else {
            throw Error("Cumulative " + op + " for rank " + rank + " is not yet supported");
        }
    }
    function getFinalCoord(rank, name, op) {
        if (rank === 1) {
            return "" + name;
        }
        else if (rank === 2) {
            return name + ".y";
        }
        else if (rank === 3) {
            return name + ".z";
        }
        else if (rank === 4) {
            return name + ".w";
        }
        else {
            throw Error("Cumulative " + op + " for rank " + rank + " is not yet supported");
        }
    }

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function cumImpl(op, x, backend, axis, exclusive, reverse) {
        var xRank = x.shape.length;
        var permutation = tf.backend_util.getAxesPermutation([axis], xRank);
        var permutedX = x;
        if (permutation != null) {
            permutedX = transpose({ inputs: { x: x }, backend: backend, attrs: { perm: permutation } });
        }
        var permutedAxis = tf.backend_util.getInnerMostAxes(1, xRank)[0];
        if (permutedAxis !== xRank - 1) {
            throw new Error("WebGPU cumprod shader expects an inner-most axis=" + (x.shape.length - 1) + " " +
                ("but got axis=" + axis));
        }
        var size = permutedX.shape[permutedAxis];
        var result = identity({ inputs: { x: permutedX }, backend: backend });
        // Use cum parallel algorithm, inspired by:
        // https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-39-parallel-prefix-sum-scan-cuda
        // Note: although the algorithm is called sum, it works for any associtative
        // operator with an identity.
        for (var i = 0; i <= Math.ceil(Math.log2(size)) - 1; i++) {
            var program = new CumProgram(op, permutedX.shape, false, reverse);
            var prevResult = result;
            var uniformData = [{ type: 'float32', data: [i] }];
            result =
                backend.runWebGPUProgram(program, [result], result.dtype, uniformData);
            backend.disposeData(prevResult.dataId);
        }
        // For exclusive cum, shift the end result in the direction of product or sum
        // and add 1 for product or 0 for sum to the front index.
        if (exclusive) {
            var program = new CumProgram(op, permutedX.shape, exclusive, reverse);
            var prevResult = result;
            var uniformData = [{ type: 'float32', data: [0] }];
            result =
                backend.runWebGPUProgram(program, [result], result.dtype, uniformData);
            backend.disposeData(prevResult.dataId);
        }
        if (permutation != null) {
            var reversePermutation = tf.backend_util.getUndoAxesPermutation(permutation);
            var reverseTransposedResult = transpose({ inputs: { x: result }, backend: backend, attrs: { perm: reversePermutation } });
            backend.disposeData(result.dataId);
            backend.disposeData(permutedX.dataId);
            return reverseTransposedResult;
        }
        return result;
    }

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function cumprod(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis, exclusive = attrs.exclusive, reverse = attrs.reverse;
        return cumImpl(CumOpType.Prod, x, backend, axis, exclusive, reverse);
    }
    var cumprodConfig = {
        kernelName: tf.Cumprod,
        backendName: 'webgpu',
        kernelFunc: cumprod
    };

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function cumsum(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis, exclusive = attrs.exclusive, reverse = attrs.reverse;
        return cumImpl(CumOpType.Sum, x, backend, axis, exclusive, reverse);
    }
    var cumsumConfig = {
        kernelName: tf.Cumsum,
        backendName: 'webgpu',
        kernelFunc: cumsum
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var DepthToSpaceProgram = /** @class */ (function () {
        function DepthToSpaceProgram(outputShape, dataFormat) {
            this.variableNames = ['x'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.uniforms = 'blockSize : i32,';
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "depthToSpace_" + dataFormat;
            this.dataFormat = dataFormat;
        }
        DepthToSpaceProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let h = " + this.getHeightCoordString() + ";\n          let w = " + this.getWidthCoordString() + ";\n          let d = " + this.getDepthCoordString() + ";\n\n          let in_h = h / uniforms.blockSize;\n          let offset_h = h % uniforms.blockSize;\n          let in_w = w / uniforms.blockSize;\n          let offset_w = w % uniforms.blockSize;\n          let offset_d = (offset_h * uniforms.blockSize + offset_w) *\n            " + this.getOutputDepthSize() + ";\n          let in_d = d + offset_d;\n\n          let rlt = " + this.getInputSamplingString() + ";\n          setOutputAtIndex(index, rlt);\n        }\n      }";
            return userCode;
        };
        DepthToSpaceProgram.prototype.getHeightCoordString = function () {
            if (this.dataFormat === 'NHWC') {
                return "coords[1]";
            }
            else {
                return "coords[2]";
            }
        };
        DepthToSpaceProgram.prototype.getWidthCoordString = function () {
            if (this.dataFormat === 'NHWC') {
                return "coords[2]";
            }
            else {
                return "coords[3]";
            }
        };
        DepthToSpaceProgram.prototype.getDepthCoordString = function () {
            if (this.dataFormat === 'NHWC') {
                return "coords[3]";
            }
            else {
                return "coords[1]";
            }
        };
        DepthToSpaceProgram.prototype.getOutputDepthSize = function () {
            if (this.dataFormat === 'NHWC') {
                return "uniforms.outShape[3]";
            }
            else {
                return "uniforms.outShape[1]";
            }
        };
        DepthToSpaceProgram.prototype.getInputSamplingString = function () {
            if (this.dataFormat === 'NHWC') {
                return "getX(b, in_h, in_w, in_d)";
            }
            else {
                return "getX(b, in_d, in_h, in_w)";
            }
        };
        return DepthToSpaceProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function depthToSpace(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var blockSize = attrs.blockSize, dataFormat = attrs.dataFormat;
        var batchSize = x.shape[0];
        var inputHeight = (dataFormat === 'NHWC') ? x.shape[1] : x.shape[2];
        var inputWidth = (dataFormat === 'NHWC') ? x.shape[2] : x.shape[3];
        var inputDepth = (dataFormat === 'NHWC') ? x.shape[3] : x.shape[1];
        var outputHeight = inputHeight * blockSize;
        var outputWidth = inputWidth * blockSize;
        var outputDepth = inputDepth / (blockSize * blockSize);
        var outputShape = (dataFormat === 'NHWC') ?
            [batchSize, outputHeight, outputWidth, outputDepth] :
            [batchSize, outputDepth, outputHeight, outputWidth];
        var uniformData = [
            { type: 'int32', data: [blockSize] },
        ];
        var program = new DepthToSpaceProgram(outputShape, dataFormat);
        return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
    }
    var depthToSpaceConfig = {
        kernelName: tf.DepthToSpace,
        backendName: 'webgpu',
        kernelFunc: depthToSpace
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var DepthwiseConv2D3x3Program = /** @class */ (function () {
        function DepthwiseConv2D3x3Program(convInfo, addBias, activation, hasPreluActivation) {
            if (addBias === void 0) { addBias = false; }
            if (activation === void 0) { activation = null; }
            if (hasPreluActivation === void 0) { hasPreluActivation = false; }
            this.variableNames = ['x', 'W'];
            this.uniforms = 'pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>, inDims : vec2<i32>,';
            this.workGroupSize = [4, 4, 4];
            this.isVec4 = true;
            this.outputShape = convInfo.outShape;
            this.dispatchLayout = { x: [0, 1], y: [2], z: [3] };
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [1, 4, 4]);
            tf.util.assert(convInfo.dataFormat === 'channelsLast', function () { return 'TODO: NCHW is unimplemented'; });
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivation) {
                this.variableNames.push('preluActivationWeights');
            }
            this.convInfo = convInfo;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivation = hasPreluActivation;
            this.shaderKey = "depthwise3x3_" + activation;
        }
        DepthwiseConv2D3x3Program.prototype.getUserCode = function () {
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, this.isVec4);
                if (this.hasPreluActivation) {
                    activationSnippet =
                        "fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {\n          let b = getPreluActivationWeightsByOutputCoords(outCoord);\n          " + activationOp + "\n        }";
                }
                else {
                    activationSnippet = "\n        fn activation(a : vec4<f32>, outCoord : vec4<i32>) -> vec4<f32> {\n            " + activationOp + "\n          }\n        ";
                }
                applyActivationSnippet = "dotProd[i] = activation(dotProd[i], coords);";
            }
            var addBiasSnippet = this.addBias ?
                'dotProd[i] = dotProd[i] + getBiasByOutputCoords(coords);' :
                '';
            var userCode = "\n      " + activationSnippet + "\n\n      " + getWorkGroupSizeString() + "\n      fn main(@builtin(global_invocation_id) globalId: vec3<u32>) {\n        let batch = 0;\n        let r = i32(globalId.x);\n        let c = i32(globalId.y) * 4;\n        let d2 = i32(globalId.z) * 4;\n        let xRCCorner = vec2<i32>(r, c) * uniforms.stride - uniforms.pad;\n        let d1 = d2;\n        let q = 0;\n\n        let xRCorner = xRCCorner.x;\n        let xCCorner = xRCCorner.y;\n\n        var wVals : array<vec4<f32>, 9>;\n        wVals[0] = getW(0, 0, d1, q);\n        wVals[1] = getW(0, 1, d1, q);\n        wVals[2] = getW(0, 2, d1, q);\n        wVals[3] = getW(1, 0, d1, q);\n        wVals[4] = getW(1, 1, d1, q);\n        wVals[5] = getW(1, 2, d1, q);\n        wVals[6] = getW(2, 0, d1, q);\n        wVals[7] = getW(2, 1, d1, q);\n        wVals[8] = getW(2, 2, d1, q);\n\n        var xVals : array<array<vec4<f32>, 6>, 3>;\n        for (var wR = 0; wR < 3; wR = wR + 1) {\n          let xR = xRCorner + wR * uniforms.dilation[0];\n          for (var wC = 0; wC < 6; wC = wC + 1) {\n            let xC = xCCorner + wC * uniforms.dilation[1];\n            if (xR < 0 || xR >= uniforms.inDims[0] || xC < 0 || xC >= uniforms.inDims[1]) {\n              xVals[wR][wC] = vec4<f32>(0.0);\n            } else {\n              xVals[wR][wC] = getX(batch, xR, xC, d1);\n            }\n          }\n        }\n\n        var dotProd : array<vec4<f32>, 4>;\n        dotProd[0] = vec4<f32>(0.0);\n        dotProd[1] = vec4<f32>(0.0);\n        dotProd[2] = vec4<f32>(0.0);\n        dotProd[3] = vec4<f32>(0.0);\n\n        for (var wR = 0; wR < 3; wR = wR + 1) {\n          for (var wC = 0; wC < 3; wC = wC + 1) {\n            let indexW = wR * 3 + wC;\n            dotProd[0] = dotProd[0] + xVals[wR][0 + wC] * wVals[indexW];\n            dotProd[1] = dotProd[1] + xVals[wR][1 + wC] * wVals[indexW];\n            dotProd[2] = dotProd[2] + xVals[wR][2 + wC] * wVals[indexW];\n            dotProd[3] = dotProd[3] + xVals[wR][3 + wC] * wVals[indexW];\n          }\n        }\n\n        for (var i = 0; i < 4; i = i + 1) {\n          let coords = vec4<i32>(batch, r, c + i, d2);\n          if (coordsInBounds4D(coords, uniforms.outShape)) {\n            " + addBiasSnippet + "\n            " + applyActivationSnippet + "\n            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return DepthwiseConv2D3x3Program;
    }());

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var DepthwiseConv2DProgram = /** @class */ (function () {
        function DepthwiseConv2DProgram(convInfo, addBias, activation, hasPreluActivation) {
            if (addBias === void 0) { addBias = false; }
            if (activation === void 0) { activation = null; }
            if (hasPreluActivation === void 0) { hasPreluActivation = false; }
            this.variableNames = ['x', 'W'];
            this.uniforms = "pad : vec2<i32>, stride : vec2<i32>, dilation : vec2<i32>,\n      inDims : vec2<i32>, filterHeight : i32, filterWidth : i32,\n      channelMul : i32,";
            // This is an experimental value.
            this.workGroupSize = [256, 1, 1];
            this.outputShape = convInfo.outShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            tf.util.assert(convInfo.dataFormat === 'channelsLast', function () { return 'TODO: NCHW is unimplemented'; });
            if (addBias) {
                this.variableNames.push('bias');
            }
            if (hasPreluActivation) {
                this.variableNames.push('preluActivationWeights');
            }
            this.convInfo = convInfo;
            this.addBias = addBias;
            this.activation = activation;
            this.hasPreluActivation = hasPreluActivation;
            this.shaderKey = "depthwise_" + this.activation;
        }
        DepthwiseConv2DProgram.prototype.getUserCode = function () {
            var activationSnippet = '', applyActivationSnippet = '';
            if (this.activation) {
                var activationOp = mapActivationToShaderProgram(this.activation, false);
                if (this.hasPreluActivation) {
                    activationSnippet =
                        "fn activation(a : f32, outCoord : vec4<i32>) -> f32 {\n          let b = getPreluActivationWeightsByOutputCoords(outCoord);\n          " + activationOp + "\n        }";
                }
                else {
                    activationSnippet = "\n          fn activation(a : f32, outCoord : vec4<i32>) -> f32 {\n            " + activationOp + "\n          }\n        ";
                }
                applyActivationSnippet = "dotProd = activation(dotProd, coords);";
            }
            var addBiasSnippet = this.addBias ?
                'dotProd = dotProd + getBiasByOutputCoords(coords);' :
                '';
            var userCode = "\n      " + activationSnippet + "\n\n      fn writeResult(batch : i32, row : i32, col : i32, chan : i32,\n          value : f32) {\n        let coord = vec4<i32>(batch, row, col, chan);\n        if (coordsInBounds4D(coord, uniforms.outShape)) {\n          setOutputAtCoords(batch, row, col, chan, value);\n        }\n      }\n\n      " + getMainHeaderString() + "\n        let coords = getOutputCoords();\n        let batch = coords[0];\n        let xRCCorner = vec2<i32>(coords.yz) * uniforms.stride - uniforms.pad;\n        let d2 = coords[3];\n        let d1 = d2 / uniforms.channelMul;\n        let q = d2 - d1 * uniforms.channelMul;\n\n        let inputRowStart = xRCCorner.x;\n        let inputColStart = xRCCorner.y;\n        let inputRowEnd = inputRowStart + uniforms.filterHeight *\n            uniforms.dilation[0];\n        let inputColEnd = inputColStart + uniforms.filterWidth *\n            uniforms.dilation[1];\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        var dotProd = 0.0;\n\n        // Extract if checking out of for loop for performance.\n        if (inputRowStart >= 0 && inputColStart >= 0 &&\n          inputRowEnd < uniforms.inDims[0] &&\n              inputColEnd < uniforms.inDims[1]) {\n            // Here using a constant value |this.convInfo.filterHeight| instead\n            // of uniform value is in order to loop unrolling.\n            for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n              let xR = inputRowStart + wR * uniforms.dilation[0];\n\n              for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                let xC = inputColStart + wC * uniforms.dilation[1];\n\n                let xVal = getX(batch, xR, xC, d1);\n                let wVal = getW(wR, wC, d1, q);\n                dotProd = dotProd + xVal * wVal;\n              }\n            }\n          } else {\n            for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {\n              let xR = inputRowStart + wR * uniforms.dilation[0];\n\n              if (xR < 0 || xR >= uniforms.inDims[0]) {\n                continue;\n              }\n\n              for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {\n                let xC = inputColStart + wC * uniforms.dilation[1];\n\n                if (xC < 0 || xC >= uniforms.inDims[1]) {\n                  continue;\n                }\n\n                let xVal = getX(batch, xR, xC, d1);\n                let wVal = getW(wR, wC, d1, q);\n                dotProd = dotProd + xVal * wVal;\n              }\n            }\n          }\n\n        " + addBiasSnippet + "\n        " + applyActivationSnippet + "\n        writeResult(batch, coords[1], coords[2], d2, dotProd);\n      }\n    ";
            return userCode;
        };
        return DepthwiseConv2DProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function depthwiseConv2dNative(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x, filter = inputs.filter;
        var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode;
        var $dilations = dilations;
        if ($dilations == null) {
            $dilations = [1, 1];
        }
        var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad, dimRoundingMode, true /* depthwise */);
        var dimensions = [
            { type: 'int32', data: [convInfo.padInfo.top, convInfo.padInfo.left] },
            { type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] },
            { type: 'int32', data: [convInfo.dilationHeight, convInfo.dilationWidth] },
            { type: 'int32', data: [convInfo.inHeight, convInfo.inWidth] }
        ];
        var program;
        // TODO: To see if we need to relax the limitation. Currently, it's only for
        // filter size 3x3.
        if (convInfo.batchSize === 1 && convInfo.inHeight === convInfo.outHeight &&
            convInfo.inWidth === convInfo.outWidth && convInfo.strideHeight === 1 &&
            convInfo.strideWidth === 1 &&
            convInfo.filterHeight === convInfo.filterWidth &&
            convInfo.inChannels === convInfo.outChannels &&
            convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
            convInfo.filterHeight === 3 && convInfo.inChannels % 4 === 0) {
            program = new DepthwiseConv2D3x3Program(convInfo);
        }
        else {
            program = new DepthwiseConv2DProgram(convInfo);
            dimensions.push({ type: 'int32', data: [convInfo.filterHeight] }, { type: 'int32', data: [convInfo.filterWidth] }, { type: 'int32', data: [convInfo.outChannels / convInfo.inChannels] });
        }
        return backend.runWebGPUProgram(program, [x, filter], x.dtype, dimensions);
    }
    var depthwiseConv2dNativeConfig = {
        kernelName: tf.DepthwiseConv2dNative,
        backendName: 'webgpu',
        kernelFunc: depthwiseConv2dNative,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var multiplyKernelFunc = binaryKernelFunc({
        opSnippet: BinaryOpType.MUL,
        cpuKernelImpl: multiplyImplCPU,
        supportsComplex: true
    });
    var multiplyConfig = {
        kernelName: tf.Multiply,
        backendName: 'webgpu',
        kernelFunc: multiplyKernelFunc
    };

    var ReduceProgram = /** @class */ (function () {
        function ReduceProgram(reduceInfo, reduceType) {
            this.workGroupSize = [64, 1, 1];
            this.variableNames = ['x'];
            this.uniforms = 'reduceSize : i32,';
            this.size = true;
            this.inputShape = [reduceInfo.batchSize, reduceInfo.inSize];
            var _a = __read(tf.backend_util.computeOutAndReduceShapes(this.inputShape, [1]), 1), outputShape = _a[0];
            this.outputShape = outputShape.length === 0 ? [1] : outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            // A work group only outputs a data, so we transfer [1, 1, 1] to compute
            // dispatch size.
            this.dispatch =
                computeDispatch(this.dispatchLayout, this.outputShape, [1, 1, 1]);
            this.reduceType = reduceType;
            this.shaderKey = "reduce_" + reduceType;
        }
        ReduceProgram.prototype.getUserCode = function () {
            var reduceOp = "";
            var initValue = '0.0';
            if (this.reduceType === 'min' || this.reduceType === 'max') {
                reduceOp = "\n         if (isnan(candidate)) {\n          bestValue = uniforms.NAN;\n         } else if (!isnan(bestValue) && candidate " + (this.reduceType === 'min' ? '<' : '>') + " bestValue)\n           {  bestValue = candidate; }";
                initValue = 'f32(x[offset])';
            }
            else if (this.reduceType === 'sum' || this.reduceType === 'mean') {
                reduceOp = ' bestValue = bestValue + candidate; ';
            }
            else if (this.reduceType === 'prod') {
                reduceOp = ' bestValue = bestValue * candidate; ';
                initValue = '1.0';
            }
            var outputSnippet = this.reduceType === 'mean' ?
                // tslint:disable-next-line:max-line-length
                "setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));" :
                "setOutputAtIndex(outputIndex, bestValue);";
            var sharedMemorySnippet = "\n         var<workgroup> xBestValues : array<f32, " + this.workGroupSize[0] + ">;\n       ";
            var userCode = "\n       fn DIV_CEIL(a : u32, b : u32) -> u32 {\n        return ((a - 1u) / b + 1u);\n       }\n\n       " + sharedMemorySnippet + "\n       fn getOffset(outputIndex : i32) -> i32 {\n         let outputCoords = getCoordsFromIndex(outputIndex);\n         let offset = " + (this.outputShape.length === 1 ?
                'outputCoords' :
                'outputCoords[0]') + " * uniforms.reduceSize;\n          return offset;\n       }\n       " + getMainHeaderAndGlobalIndexString() + "\n         let outputIndex = index / i32(workGroupSizeX);\n         let offset = getOffset(outputIndex);\n         var bestValue = " + initValue + ";\n         let Length = uniforms.reduceSize;\n         let WorkPerThread = DIV_CEIL(u32(Length), workGroupSizeX);\n         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;\n             k = k + i32(workGroupSizeX)) {\n           let candidate = f32(x[offset + k]);\n           " + reduceOp + "\n         }\n         xBestValues[localId.x] = bestValue;\n         workgroupBarrier();\n\n         var reduceSize = min(u32(Length), workGroupSizeX);\n         for (var currentSize = reduceSize / 2u; reduceSize > 1u;\n             currentSize = reduceSize / 2u) {\n           let interval = DIV_CEIL(reduceSize, 2u);\n           if (localId.x < currentSize) {\n            let candidate = xBestValues[localId.x + interval];\n            " + reduceOp + "\n            xBestValues[localId.x] = bestValue;\n           }\n           reduceSize = interval;\n           workgroupBarrier();\n         }\n\n         if (localId.x == 0u && outputIndex < uniforms.size) {\n          " + outputSnippet + "\n        }\n       }\n     ";
            return userCode;
        };
        return ReduceProgram;
    }());

    function reduce(x, axis, keepDims, reduceType, backend) {
        var xRank = x.shape.length;
        var toDispose = [];
        var origAxes = tf.util.parseAxisParam(axis, x.shape);
        var axes = origAxes;
        var permutedAxes = tf.backend_util.getAxesPermutation(axes, xRank);
        var input = x;
        if (permutedAxes != null) {
            input = transpose({ inputs: { x: x }, attrs: { perm: permutedAxes }, backend: backend });
            axes = tf.backend_util.getInnerMostAxes(axes.length, xRank);
            toDispose.push(input);
        }
        tf.backend_util.assertAxesAreInnerMostDims(reduceType, axes, xRank);
        var _a = __read(tf.backend_util.computeOutAndReduceShapes(input.shape, axes), 2), reduceOutShape = _a[0], reduceShape = _a[1];
        var resOutShape = reduceOutShape;
        if (keepDims) {
            // rather than reshape at the end, set the target shape here.
            resOutShape = tf.backend_util.expandShapeToKeepDim(reduceOutShape, origAxes);
        }
        var res;
        if ((reduceType === 'max' || reduceType === 'prod') &&
            backend.shouldExecuteOnCPU([input])) {
            var xVals = backend.tensorMap.get(input.dataId).values;
            switch (reduceType) {
                case 'max':
                    var outValues = maxImplCPU(xVals, tf.util.sizeFromShape(reduceShape), resOutShape, x.dtype);
                    res = backend.makeTensorInfo(resOutShape, x.dtype, outValues);
                    break;
                case 'prod':
                    var _b = prodImplCPU(input.shape, input.dtype, xVals, axes), outVals = _b.outVals, outShape = _b.outShape, outDtype = _b.outDtype;
                    res = backend.makeTensorInfo(outShape, outDtype, outVals);
                    break;
                default:
                    throw new Error(reduceType + " CPU implementation is not yet supported.");
            }
        }
        else {
            var inSize = tf.util.sizeFromShape(reduceShape);
            var xSize = tf.util.sizeFromShape(input.shape);
            var batchSize = xSize / inSize;
            var reduceInfo = { windowSize: inSize, inSize: inSize, batchSize: batchSize, outSize: 1 };
            var dtype = reduceType === 'mean' ? 'float32' : tf.sumOutType(x.dtype);
            var uniformData = [
                { type: 'int32', data: [inSize] },
            ];
            var program = new ReduceProgram(reduceInfo, reduceType);
            var reduced = backend.runWebGPUProgram(program, [input], dtype, uniformData);
            toDispose.push(reduced);
            res = reshape({ inputs: { x: reduced }, attrs: { shape: resOutShape }, backend: backend });
        }
        toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
        return res;
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function sum(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis, keepDims = attrs.keepDims;
        return reduce(x, axis, keepDims, 'sum', backend);
    }
    var sumConfig = {
        kernelName: tf.Sum,
        backendName: 'webgpu',
        kernelFunc: sum
    };

    function einsum(args) {
        var e_1, _a, e_2, _b;
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var equation = attrs.equation;
        var tensors = inputs;
        var _c = tf.backend_util.decodeEinsumEquation(equation, tensors.length), allDims = _c.allDims, summedDims = _c.summedDims, idDims = _c.idDims;
        tf.backend_util.checkEinsumDimSizes(allDims.length, idDims, tensors);
        var _d = tf.backend_util.getEinsumComputePath(summedDims, idDims), path = _d.path, steps = _d.steps;
        var nSteps = steps.length;
        var out = null;
        var numDimsRemaining = allDims.length;
        var tensorsToDispose = [];
        for (var i = 0; i < nSteps; ++i) {
            try {
                for (var _e = (e_1 = void 0, __values(steps[i])), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var idTerm = _f.value;
                    var _g = tf.backend_util.getEinsumPermutation(numDimsRemaining, idDims[idTerm]), perm = _g.permutationIndices, dimsToExpand = _g.expandDims;
                    var x = void 0;
                    if (tf.backend_util.isIdentityPermutation(perm)) {
                        x = tensors[idTerm];
                    }
                    else {
                        x = transpose({ inputs: { x: tensors[idTerm] }, backend: backend, attrs: { perm: perm } });
                        tensorsToDispose.push(x);
                    }
                    var targetShape = x.shape.slice();
                    for (var k = 0; k < dimsToExpand.length; ++k) {
                        targetShape.splice(dimsToExpand[k], 0, 1);
                    }
                    if (!tf.util.arraysEqual(x.shape, targetShape)) {
                        x = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: targetShape } });
                        tensorsToDispose.push(x);
                    }
                    if (out === null) {
                        out = x;
                    }
                    else {
                        // tslint:disable-next-line: no-unnecessary-type-assertion
                        out =
                            multiplyKernelFunc({ inputs: { a: x, b: out }, backend: backend });
                        tensorsToDispose.push(out);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (i < nSteps - 1) {
                if (path[i] >= 0) {
                    out = sum({
                        inputs: { x: out },
                        backend: backend,
                        attrs: {
                            axis: path[i] - (allDims.length - numDimsRemaining),
                            keepDims: false
                        }
                    });
                    tensorsToDispose.push(out);
                }
                numDimsRemaining--;
            }
        }
        try {
            // Clean up intermediate tensors.
            for (var tensorsToDispose_1 = __values(tensorsToDispose), tensorsToDispose_1_1 = tensorsToDispose_1.next(); !tensorsToDispose_1_1.done; tensorsToDispose_1_1 = tensorsToDispose_1.next()) {
                var tensorInfo = tensorsToDispose_1_1.value;
                if (tensorInfo === out) {
                    continue;
                }
                backend.disposeData(tensorInfo.dataId);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (tensorsToDispose_1_1 && !tensorsToDispose_1_1.done && (_b = tensorsToDispose_1.return)) _b.call(tensorsToDispose_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return out;
    }
    var einsumConfig = {
        kernelName: tf.Einsum,
        backendName: 'webgpu',
        kernelFunc: einsum
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var elu = unaryKernelFunc({ opType: UnaryOpType.ELU });
    var eluConfig = {
        kernelName: tf.Elu,
        backendName: 'webgpu',
        kernelFunc: elu
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var equal = binaryKernelFunc({ opSnippet: BinaryOpType.EQUAL, dtype: 'bool', cpuKernelImpl: equalImplCPU });
    var equalConfig = {
        kernelName: tf.Equal,
        backendName: 'webgpu',
        kernelFunc: equal
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var exp = unaryKernelFunc({
        opType: UnaryOpType.EXP,
        cpuKernelImpl: expImplCPU,
        dtype: 'float32',
    });
    var expConfig = {
        kernelName: tf.Exp,
        backendName: 'webgpu',
        kernelFunc: exp
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the License);
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an AS IS BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function expandDims(args) {
        var inputs = args.inputs, attrs = args.attrs, backend = args.backend;
        var dim = attrs.dim;
        var input = inputs.input;
        var inputRank = input.shape.length;
        var newShape = input.shape.slice();
        var $dim = dim;
        if (dim < 0) {
            // Negative value is counted from the tail of rank.
            tf.util.assert(-(inputRank + 1) <= dim, function () { return "Axis must be in the interval [" + -(inputRank + 1) + ", " + inputRank + "]"; });
            $dim = inputRank + dim + 1;
        }
        newShape.splice($dim, 0, 1);
        return reshape({ inputs: { x: input }, backend: backend, attrs: { shape: newShape } });
    }
    var expandDimsConfig = {
        kernelName: tf.ExpandDims,
        backendName: 'webgpu',
        kernelFunc: expandDims,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var expm1 = unaryKernelFunc({ opType: UnaryOpType.EXPM1, cpuKernelImpl: expm1ImplCPU });
    var expm1Config = {
        kernelName: tf.Expm1,
        backendName: 'webgpu',
        kernelFunc: expm1
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var FillProgram = /** @class */ (function () {
        function FillProgram(shape) {
            this.variableNames = [];
            this.outputShape = [];
            this.uniforms = 'value : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = 'fill';
        }
        FillProgram.prototype.getUserCode = function () {
            var userCode = "\n    " + getMainHeaderAndGlobalIndexString() + "\n      if (index < uniforms.size) {\n        setOutputAtIndex(index, uniforms.value);\n      }\n    }\n  ";
            return userCode;
        };
        return FillProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function fill(args) {
        var backend = args.backend, attrs = args.attrs;
        var shape = attrs.shape, value = attrs.value;
        var dtype = attrs.dtype;
        dtype = dtype || tf.util.inferDtype(value);
        if (dtype === 'string') {
            // String type should be handled in CPU memory.
            var values = tf.util.getArrayFromDType(dtype, tf.util.sizeFromShape(shape));
            values.fill(value);
            return backend.makeTensorInfo(shape, dtype, values);
        }
        else {
            var program = new FillProgram(shape);
            var uniformData = [{ type: 'float32', data: [value] }];
            return backend.runWebGPUProgram(program, [], dtype, uniformData);
        }
    }
    var fillConfig = {
        kernelName: tf.Fill,
        backendName: 'webgpu',
        kernelFunc: fill
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var FlipLeftRightProgram = /** @class */ (function () {
        function FlipLeftRightProgram(imageShape) {
            this.outputShape = [];
            this.variableNames = ['x'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = imageShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = 'flipLeftRight';
        }
        FlipLeftRightProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let coordX = uniforms.xShape[2] - coords[2] - 1;\n          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);\n          setOutputAtIndex(index, outputValue);\n        }\n      }\n    ";
            return userCode;
        };
        return FlipLeftRightProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var flipLeftRightConfig = {
        kernelName: tf.FlipLeftRight,
        backendName: 'webgpu',
        kernelFunc: function (_a) {
            var inputs = _a.inputs, backend = _a.backend;
            var image = inputs.image;
            var webgpuBackend = backend;
            var program = new FlipLeftRightProgram(image.shape);
            var output = webgpuBackend.runWebGPUProgram(program, [image], image.dtype);
            return output;
        }
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var floor = unaryKernelFunc({ opType: UnaryOpType.FLOOR, cpuKernelImpl: floorImplCPU });
    var floorConfig = {
        kernelName: tf.Floor,
        backendName: 'webgpu',
        kernelFunc: floor
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var floorDiv = binaryKernelFunc({ opSnippet: BinaryOpType.INT_DIV, dtype: 'int32' });
    var floorDivConfig = {
        kernelName: tf.FloorDiv,
        backendName: 'webgpu',
        kernelFunc: floorDiv
    };

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var FromPixelsProgram = /** @class */ (function () {
        function FromPixelsProgram(outputShape, useImport) {
            if (useImport === void 0) { useImport = false; }
            this.outputShape = [0];
            this.variableNames = [];
            this.workGroupSize = [256, 1, 1]; // The empirical value.
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.useImport = useImport;
            this.shaderKey = "fromPixels_" + this.useImport;
        }
        FromPixelsProgram.prototype.getUserCode = function () {
            var textureLoad = this.useImport ?
                'textureLoad(src, vec2<i32>(coords.yx));' :
                'textureLoad(src, vec2<i32>(coords.yx), 0)';
            var textureType = this.useImport ? 'texture_external' : 'texture_2d<f32>';
            return "\n      @binding(1) @group(0) var src: " + textureType + ";\n\n      " + getMainHeaderAndGlobalIndexString() + "\n        let flatIndexBase = index * uniforms.numChannels;\n        for (var i = 0; i < uniforms.numChannels; i = i + 1) {\n          let flatIndex = flatIndexBase + i;\n          if (flatIndex < uniforms.size) {\n            let coords = getCoordsFromIndex(flatIndexBase);\n            let values = " + textureLoad + ";\n            result[flatIndex] = i32(floor(255.0 * values[i]));\n          }\n        }\n      }\n  ";
        };
        return FromPixelsProgram;
    }());

    var fromPixelsConfig = {
        kernelName: tf.FromPixels,
        backendName: 'webgpu',
        kernelFunc: fromPixels,
    };
    var fromPixels2DContext;
    function fromPixels(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var pixels = inputs.pixels;
        var numChannels = attrs.numChannels;
        if (pixels == null) {
            throw new Error('pixels passed to tf.browser.fromPixels() can not be null');
        }
        var isVideo = typeof (HTMLVideoElement) !== 'undefined' &&
            pixels instanceof HTMLVideoElement;
        var isImage = typeof (HTMLImageElement) !== 'undefined' &&
            pixels instanceof HTMLImageElement;
        var isCanvas = (typeof (HTMLCanvasElement) !== 'undefined' &&
            pixels instanceof HTMLCanvasElement) ||
            (typeof (OffscreenCanvas) !== 'undefined' &&
                pixels instanceof OffscreenCanvas);
        var isImageBitmap = typeof (ImageBitmap) !== 'undefined' && pixels instanceof ImageBitmap;
        var _a = __read(isVideo ?
            [
                pixels.videoWidth,
                pixels.videoHeight
            ] :
            [pixels.width, pixels.height], 2), width = _a[0], height = _a[1];
        var outShape = [height, width, numChannels];
        if (tf.env().getBool('WEBGPU_USE_IMPORT')) {
            if (isVideo) {
                return fromPixelsExternalImage({
                    externalImage: pixels,
                    backend: backend,
                    attrs: attrs,
                    outShape: outShape,
                    useImport: true
                });
            }
        }
        if (isVideo || isImage) {
            if (fromPixels2DContext == null) {
                fromPixels2DContext = document.createElement('canvas').getContext('2d');
            }
            fromPixels2DContext.canvas.width = width;
            fromPixels2DContext.canvas.height = height;
            fromPixels2DContext.drawImage(pixels, 0, 0, width, height);
            pixels = fromPixels2DContext.canvas;
        }
        if (isImageBitmap || isCanvas || isVideo || isImage) {
            return fromPixelsExternalImage({
                externalImage: pixels,
                backend: backend,
                attrs: attrs,
                outShape: outShape,
                useImport: false
            });
        }
        // TODO: Encoding should happen on GPU once we no longer have to download
        // image data to the CPU.
        var imageData = pixels.data;
        var pixelArray = imageData;
        if (numChannels != null && numChannels !== 4) {
            pixelArray = new Uint8Array(pixels.width * pixels.height * numChannels);
            var dataLength = imageData.length;
            var j = 0;
            for (var i = 0; i < dataLength; i++) {
                if (i % 4 < numChannels) {
                    pixelArray[j++] = imageData[i];
                }
            }
        }
        var output = backend.makeTensorInfo(outShape, 'int32');
        var info = backend.tensorMap.get(output.dataId);
        info.values = new Int32Array(pixelArray);
        backend.maybeReleaseBuffer(output.dataId);
        backend.uploadToGPU(output.dataId);
        return output;
    }
    function fromPixelsExternalImage(args) {
        var externalImage = args.externalImage, backend = args.backend, attrs = args.attrs, outShape = args.outShape, useImport = args.useImport;
        var numChannels = attrs.numChannels;
        var size = tf.util.sizeFromShape(outShape);
        var strides = tf.util.computeStrides(outShape);
        var program = new FromPixelsProgram(outShape, useImport);
        var uniformData = [
            { type: 'uint32', data: [size] }, { type: 'uint32', data: [numChannels] },
            { type: 'uint32', data: __spread(strides) },
            { type: 'uint32', data: __spread(program.dispatch) }
        ];
        var output = backend.runFromPixelsProgram(program, outShape, uniformData, useImport, externalImage);
        return output;
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BatchNormProgram = /** @class */ (function () {
        function BatchNormProgram(xShape, meanShape, varianceShape, offsetShape, scaleShape) {
            this.uniforms = 'varianceEpsilon : f32,';
            // This is an experimental value.
            this.workGroupSize = [128, 1, 1];
            this.size = true;
            this.variableNames = ['x', 'mean', 'variance'];
            tf.backend_util.assertAndGetBroadcastShape(xShape, meanShape);
            tf.backend_util.assertAndGetBroadcastShape(xShape, varianceShape);
            this.outputShape = xShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            if (offsetShape != null) {
                tf.backend_util.assertAndGetBroadcastShape(xShape, offsetShape);
                this.variableNames.push('offset');
            }
            if (scaleShape != null) {
                tf.backend_util.assertAndGetBroadcastShape(xShape, scaleShape);
                this.variableNames.push('scale');
            }
            this.offsetShape = offsetShape;
            this.scaleShape = scaleShape;
            this.shaderKey = 'batchNorm';
        }
        BatchNormProgram.prototype.getUserCode = function () {
            var offsetSnippet = '0.0';
            if (this.offsetShape != null) {
                offsetSnippet = 'getOffsetByOutputIndex(index)';
            }
            var scaleSnippet = '1.0';
            if (this.scaleShape != null) {
                scaleSnippet = 'getScaleByOutputIndex(index)';
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size)\n        {\n          let xValue = getXByOutputIndex(index);\n          let meanValue = getMeanByOutputIndex(index);\n          let varianValue = getVarianceByOutputIndex(index);\n          let offsetValue = " + offsetSnippet + ";\n          let scaleValue = " + scaleSnippet + ";\n          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));\n          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));\n        }\n      }\n  ";
            return userCode;
        };
        return BatchNormProgram;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var fusedBatchNormConfig = {
        kernelName: tf.FusedBatchNorm,
        backendName: 'webgpu',
        kernelFunc: function (_a) {
            var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
            var x = inputs.x, scale = inputs.scale, offset = inputs.offset, mean = inputs.mean, variance = inputs.variance;
            var varianceEpsilon = attrs.varianceEpsilon;
            var webGPUBackend = backend;
            var batchNormInputs = [x, mean, variance];
            var offsetShape = null;
            if (offset != null) {
                offsetShape = offset.shape;
                batchNormInputs.push(offset);
            }
            var scaleShape = null;
            if (scale != null) {
                scaleShape = scale.shape;
                batchNormInputs.push(scale);
            }
            var program = new BatchNormProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape);
            var uniformData = [{ type: 'float32', data: [varianceEpsilon] }];
            return webGPUBackend.runWebGPUProgram(program, batchNormInputs, x.dtype, uniformData);
        }
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function fusedConv2d(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x, filter = inputs.filter, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
        var strides = attrs.strides, pad = attrs.pad, dataFormat = attrs.dataFormat, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
        var $dataFormat = tf.backend_util.convertConv2DDataFormat(dataFormat);
        var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, dilations, pad, dimRoundingMode, false /* depthwise */, $dataFormat);
        return conv2DImpl({ x: x, filter: filter, convInfo: convInfo, backend: backend, bias: bias, preluActivationWeights: preluActivationWeights,
            leakyreluAlpha: leakyreluAlpha, activation: activation });
    }
    var fusedConv2DConfig = {
        kernelName: tf.FusedConv2D,
        backendName: 'webgpu',
        kernelFunc: fusedConv2d,
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function fusedDepthwiseConv2D(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x, filter = inputs.filter, bias = inputs.bias, preluActivationWeights = inputs.preluActivationWeights;
        var strides = attrs.strides, pad = attrs.pad, dilations = attrs.dilations, dimRoundingMode = attrs.dimRoundingMode, activation = attrs.activation, leakyreluAlpha = attrs.leakyreluAlpha;
        var $dilations = dilations;
        if ($dilations == null) {
            $dilations = [1, 1];
        }
        tf.util.assert(tf.backend_util.eitherStridesOrDilationsAreOne(strides, $dilations), function () { return 'Error in depthwiseConv2d: Either strides or dilations must be ' +
            ("1. Got strides " + strides + " and dilations '" + $dilations + "'"); });
        var convInfo = tf.backend_util.computeConv2DInfo(x.shape, filter.shape, strides, $dilations, pad, dimRoundingMode, true /* depthwise */);
        var programInputs = [x, filter];
        var hasBias = bias != null;
        var hasPreluActivationWeights = preluActivationWeights != null;
        if (hasBias) {
            programInputs.push(bias);
        }
        if (hasPreluActivationWeights) {
            programInputs.push(preluActivationWeights);
        }
        var dimensions = [
            { type: 'int32', data: [convInfo.padInfo.top, convInfo.padInfo.left] },
            { type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] },
            { type: 'int32', data: [convInfo.dilationHeight, convInfo.dilationWidth] },
            { type: 'int32', data: [convInfo.inHeight, convInfo.inWidth] }
        ];
        var program;
        // TODO: To see if we need to relax the limitation. Currently, it's only for
        // filter size 3x3.
        if (convInfo.batchSize === 1 && convInfo.inHeight === convInfo.outHeight &&
            convInfo.inWidth === convInfo.outWidth && convInfo.strideHeight === 1 &&
            convInfo.strideWidth === 1 &&
            convInfo.filterHeight === convInfo.filterWidth &&
            convInfo.inChannels === convInfo.outChannels &&
            convInfo.dilationHeight === 1 && convInfo.dilationWidth === 1 &&
            convInfo.filterHeight === 3 && convInfo.inChannels % 4 === 0) {
            program = new DepthwiseConv2D3x3Program(convInfo, hasBias, activation, hasPreluActivationWeights);
        }
        else {
            program = new DepthwiseConv2DProgram(convInfo, hasBias, activation, hasPreluActivationWeights);
            dimensions.push({ type: 'int32', data: [convInfo.filterHeight] }, { type: 'int32', data: [convInfo.filterWidth] }, { type: 'int32', data: [convInfo.outChannels / convInfo.inChannels] });
        }
        if (activation === 'leakyrelu') {
            dimensions.push({ type: 'float32', data: [leakyreluAlpha] });
            program.uniforms += ' alpha : f32,';
        }
        var result = backend.runWebGPUProgram(program, programInputs, 'float32', dimensions);
        return result;
    }
    var fusedDepthwiseConv2DConfig = {
        kernelName: tf.FusedDepthwiseConv2D,
        backendName: 'webgpu',
        kernelFunc: fusedDepthwiseConv2D,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var GatherNDProgram = /** @class */ (function () {
        function GatherNDProgram(sliceDim, shape) {
            this.variableNames = ['A', 'indices'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "gathernd_" + sliceDim;
            this.sliceDim = sliceDim;
            this.uniforms = "sliceDim : i32, strides : " + getCoordsDataType(sliceDim) + ",";
        }
        GatherNDProgram.prototype.getUserCode = function () {
            var strideString;
            if (this.sliceDim > 1) {
                strideString = 'uniforms.strides[j]';
            }
            else {
                strideString = 'uniforms.strides';
            }
            var userCode = "\n        " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          var flattenIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexTemp = i32(round(getIndices(coords[0], j)));\n            let strideNum = " + strideString + ";\n            flattenIndex = flattenIndex + indexTemp * strideNum;\n          }\n\n          setOutputAtIndex(index, getA(flattenIndex, coords[1]));\n        }\n      }\n      ";
            return userCode;
        };
        return GatherNDProgram;
    }());

    function gatherNd(args) {
        var inputs = args.inputs, backend = args.backend;
        var params = inputs.params, indices = inputs.indices;
        var indicesShape = indices.shape;
        var sliceRank = indicesShape[indicesShape.length - 1];
        var paramsSize = tf.util.sizeFromShape(params.shape);
        var _a = __read(tf.backend_util.prepareAndValidate(params, indices), 4), resultShape = _a[0], numSlices = _a[1], sliceSize = _a[2], strides = _a[3];
        var flattenIndices = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [numSlices, sliceRank] } });
        var flattenX = reshape({
            inputs: { x: params },
            backend: backend,
            attrs: { shape: [(tf.util.sizeFromShape(params.shape) / sliceSize), sliceSize] }
        });
        if (backend.shouldExecuteOnCPU([params, indices]) ||
            params.dtype === 'string') {
            var indicesData = backend.readSync(indices.dataId);
            var paramsBuf = backend.bufferSync(params);
            var outValue = gatherNdImplCPU(indicesData, paramsBuf, params.dtype, numSlices, sliceRank, sliceSize, strides, params.shape, paramsSize);
            return backend.makeTensorInfo(resultShape, params.dtype, outValue.values);
        }
        var program = new GatherNDProgram(sliceRank, [numSlices, sliceSize]);
        var uniformData = [{ type: 'int32', data: [sliceRank] }, { type: 'int32', data: strides }];
        var res = backend.runWebGPUProgram(program, [flattenX, flattenIndices], flattenX.dtype, uniformData);
        var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: resultShape } });
        backend.disposeData(flattenIndices.dataId);
        backend.disposeData(flattenX.dataId);
        backend.disposeData(res.dataId);
        return reshaped;
    }
    var gatherNdConfig = {
        kernelName: tf.GatherNd,
        backendName: 'webgpu',
        kernelFunc: gatherNd
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var GatherProgram = /** @class */ (function () {
        function GatherProgram(aShape, outputShape) {
            this.variableNames = ['A', 'indices'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = aShape.slice();
            this.aShape = aShape;
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "gather";
        }
        GatherProgram.prototype.getUserCode = function () {
            var sourceCoords = getSourceCoords$1(this.aShape);
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let indexZ = i32(getIndices(resRC.x, resRC.z));\n          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);\n          setOutputAtIndex(index, inBounds * getA(" + sourceCoords + "));\n        }\n      }\n    ";
            return userCode;
        };
        return GatherProgram;
    }());
    // The input and output are always flattened into rank 4 tensors.
    function getSourceCoords$1(aShape) {
        var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
        var sourceCoords = [];
        for (var i = 0; i < aShape.length; i++) {
            if (i === 2) {
                sourceCoords.push('indexZ');
            }
            else {
                sourceCoords.push("" + currentCoords[i]);
            }
        }
        return sourceCoords.join();
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function gatherV2(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x, indices = inputs.indices;
        var axis = attrs.axis, batchDims = attrs.batchDims;
        // Unlike WebGL, WebGPU won't check if index is out of bound by calling
        // backend.readSync() function in debug mode.
        var parsedAxis = tf.util.parseAxisParam(axis, x.shape)[0];
        var shapeInfo = tf.backend_util.segment_util.collectGatherOpShapeInfo(x, indices, parsedAxis, batchDims);
        var indicesSize = tf.util.sizeFromShape(indices.shape);
        var toDispose = [];
        var flattenX = reshape({
            inputs: { x: x },
            backend: backend,
            attrs: {
                shape: [
                    shapeInfo.batchSize, shapeInfo.outerSize, shapeInfo.dimSize,
                    shapeInfo.sliceSize
                ]
            }
        });
        var flattenIndex = reshape({
            inputs: { x: indices },
            backend: backend,
            attrs: { shape: [shapeInfo.batchSize, indicesSize / shapeInfo.batchSize] }
        });
        toDispose.push(flattenX);
        toDispose.push(flattenIndex);
        var flattenOutputShape = [
            shapeInfo.batchSize, shapeInfo.outerSize, indicesSize / shapeInfo.batchSize,
            shapeInfo.sliceSize
        ];
        if (backend.shouldExecuteOnCPU([x, indices])) {
            var indicesBufferInfo = backend.tensorMap.get(flattenIndex.dataId);
            var indicesValues = indicesBufferInfo.values;
            var indicesBuf = tf.buffer(flattenIndex.shape, flattenIndex.dtype, indicesValues);
            var xBufferInfo = backend.tensorMap.get(flattenX.dataId);
            var xValues = xBufferInfo.values;
            var xBuf = tf.buffer(flattenX.shape, flattenX.dtype, xValues);
            var outBuf = gatherV2ImplCPU(xBuf, indicesBuf, flattenOutputShape);
            toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
            return backend.makeTensorInfo(shapeInfo.outputShape, outBuf.dtype, outBuf.values);
        }
        var program = new GatherProgram(flattenX.shape, flattenOutputShape);
        var res = backend.runWebGPUProgram(program, [flattenX, flattenIndex], flattenX.dtype);
        toDispose.push(res);
        var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: shapeInfo.outputShape } });
        toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
        return reshaped;
    }
    var gatherV2Config = {
        kernelName: tf.GatherV2,
        backendName: 'webgpu',
        kernelFunc: gatherV2
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var greater = binaryKernelFunc({
        opSnippet: BinaryOpType.GREATER,
        cpuKernelImpl: greaterImplCPU,
        dtype: 'bool',
    });
    var greaterConfig = {
        kernelName: tf.Greater,
        backendName: 'webgpu',
        kernelFunc: greater
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var greaterEqual = binaryKernelFunc({
        opSnippet: BinaryOpType.GREATER_EQUAL,
        dtype: 'bool',
        cpuKernelImpl: greaterEqualImplCPU
    });
    var greaterEqualConfig = {
        kernelName: tf.GreaterEqual,
        backendName: 'webgpu',
        kernelFunc: greaterEqual
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function leakyRelu(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var alpha = attrs.alpha;
        var uniformData = [{ type: 'float32', data: [alpha] }];
        var program = new UnaryOpProgram(x.shape, UnaryOpType.LEAKYRELU);
        program.uniforms = 'alpha : f32,';
        return backend.runWebGPUProgram(program, [x], 'float32', uniformData);
    }
    var leakyReluConfig = {
        kernelName: tf.LeakyRelu,
        backendName: 'webgpu',
        kernelFunc: leakyRelu
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var less = binaryKernelFunc({ opSnippet: BinaryOpType.LESS, dtype: 'bool', cpuKernelImpl: lessImplCPU });
    var lessConfig = {
        kernelName: tf.Less,
        backendName: 'webgpu',
        kernelFunc: less
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var lessEqual = binaryKernelFunc({
        opSnippet: BinaryOpType.LESS_EQUAL,
        dtype: 'bool',
        cpuKernelImpl: lessEqualImplCPU
    });
    var lessEqualConfig = {
        kernelName: tf.LessEqual,
        backendName: 'webgpu',
        kernelFunc: lessEqual
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var log = unaryKernelFunc({ opType: UnaryOpType.LOG, cpuKernelImpl: logImplCPU });
    var logConfig = {
        kernelName: tf.Log,
        backendName: 'webgpu',
        kernelFunc: log
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var logicalAnd = binaryKernelFunc({
        opSnippet: BinaryOpType.LOGICAL_AND,
        dtype: 'bool'
    });
    var logicalAndConfig = {
        kernelName: tf.LogicalAnd,
        backendName: 'webgpu',
        kernelFunc: logicalAnd
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var logicalNot = unaryKernelFunc({ opType: UnaryOpType.LOGICAL_NOT });
    var logicalNotConfig = {
        kernelName: tf.LogicalNot,
        backendName: 'webgpu',
        kernelFunc: logicalNot
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function max(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var reductionIndices = attrs.reductionIndices, keepDims = attrs.keepDims;
        return reduce(x, reductionIndices, keepDims, 'max', backend);
    }
    var maxConfig = {
        kernelName: tf.Max,
        backendName: 'webgpu',
        kernelFunc: max
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var maximum = binaryKernelFunc({
        opSnippet: BinaryOpType.MAX,
        cpuKernelImpl: maximumImplCPU,
    });
    var maximumConfig = {
        kernelName: tf.Maximum,
        backendName: 'webgpu',
        kernelFunc: maximum
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function maxPool(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var filterSize = attrs.filterSize, strides = attrs.strides, pad = attrs.pad, dimRoundingMode = attrs.dimRoundingMode;
        var dilations = 1;
        var convInfo = tf.backend_util.computePool2DInfo(x.shape, filterSize, strides, dilations, pad, dimRoundingMode);
        var program;
        var dimensions = [];
        if (convInfo.filterHeight === 1 && convInfo.filterWidth === 1) {
            if (tf.util.arraysEqual(convInfo.inShape, convInfo.outShape)) {
                return identity({ inputs: { x: x }, backend: backend });
            }
            program = new PoolWithFilterSizeEqualsOneProgram(convInfo);
            dimensions.push({ type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] });
        }
        else {
            program = new Pool2DProgram(convInfo, 'max');
            dimensions.push({ type: 'int32', data: [convInfo.strideHeight, convInfo.strideWidth] }, { type: 'int32', data: [convInfo.padInfo.top, convInfo.padInfo.left] }, {
                type: 'int32',
                data: [convInfo.dilationHeight, convInfo.dilationWidth]
            }, { type: 'int32', data: [convInfo.inHeight, convInfo.inWidth] }, {
                type: 'int32',
                data: [convInfo.effectiveFilterHeight, convInfo.effectiveFilterWidth]
            });
        }
        return backend.runWebGPUProgram(program, [x], x.dtype, dimensions);
    }
    var maxPoolConfig = {
        kernelName: tf.MaxPool,
        backendName: 'webgpu',
        kernelFunc: maxPool
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function mean(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var keepDims = attrs.keepDims, axis = attrs.axis;
        return reduce(x, axis, keepDims, 'mean', backend);
    }
    var meanConfig = {
        kernelName: tf.Mean,
        backendName: 'webgpu',
        kernelFunc: mean
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function min(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis, keepDims = attrs.keepDims;
        return reduce(x, axis, keepDims, 'min', backend);
    }
    var minConfig = {
        kernelName: tf.Min,
        backendName: 'webgpu',
        kernelFunc: min
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var minimum = binaryKernelFunc({
        opSnippet: BinaryOpType.MIN,
        cpuKernelImpl: minimumImplCPU,
    });
    var minimumConfig = {
        kernelName: tf.Minimum,
        backendName: 'webgpu',
        kernelFunc: minimum
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var MirrorPadProgram = /** @class */ (function () {
        function MirrorPadProgram(xShape, paddings, mode) {
            var _this = this;
            this.uniforms = '';
            this.variableNames = ['x'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.xShape = xShape;
            paddings.map(function (_, i) {
                _this.uniforms += " pad" + i + " : vec2<i32>,";
            });
            this.offset = mode === 'reflect' ? 0 : 1;
            this.shaderKey = "mirrorPad_" + mode;
        }
        MirrorPadProgram.prototype.getUserCode = function () {
            var rank = this.xShape.length;
            // The length of paddings are same with the rank of the input tensor.
            var start = this.xShape.map(function (_, i) { return "uniforms.pad" + i + "[0]"; }).join(',');
            var end = this.xShape
                .map(function (_, i) { return "uniforms.pad" + i + "[0] + uniforms.xShape" + (rank > 1 ? "[" + i + "]" : ''); })
                .join(',');
            var shaderStart = rank === 1 ? 'start' : 'start[i]';
            var shaderEnd = rank === 1 ? 'end' : 'end[i]';
            var shaderOutC = rank === 1 ? 'outC' : 'outC[i]';
            var dtype = getCoordsDataType(rank);
            var unpackedCoords = rank > 1 ?
                ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank) :
                'coords';
            return "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let start = " + dtype + "(" + start + ");\n          let end = " + dtype + "(" + end + ");\n          var outC = getCoordsFromIndex(index);\n          for (var i = 0; i < " + rank + "; i = i + 1) {\n            if (" + shaderOutC + " < " + shaderStart + ") {\n              " + shaderOutC + " = " + shaderStart + " * 2 - " + shaderOutC + " - " + this.offset + ";\n            } else if(" + shaderOutC + " >= " + shaderEnd + ") {\n              " + shaderOutC + " = (" + shaderEnd + " - 1) * 2 - " + shaderOutC + " + " + this.offset + ";\n            }\n          }\n          let coords = outC - start;\n          setOutputAtIndex(index, getX(" + unpackedCoords + "));\n        }\n      }\n    ";
        };
        return MirrorPadProgram;
    }());

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var mirrorPadConfig = {
        kernelName: tf.MirrorPad,
        backendName: 'webgpu',
        kernelFunc: function (_a) {
            var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
            var x = inputs.x;
            var paddings = attrs.paddings, mode = attrs.mode;
            var webGPUBackend = backend;
            var uniformData = paddings.map(function (p) {
                return { type: 'int32', data: [p[0], p[1]] };
            });
            var program = new MirrorPadProgram(x.shape, paddings, mode);
            var output = webGPUBackend.runWebGPUProgram(program, [x], x.dtype, uniformData);
            return output;
        }
    };

    // This doesn't use unaryKernelFunc because negImplCPU is not of type
    // SimpleUnaryKernelImplCPU.
    function neg(args) {
        var inputs = args.inputs, backend = args.backend;
        var x = inputs.x;
        if (backend.shouldExecuteOnCPU([x])) {
            var xData = backend.tensorMap.get(x.dataId);
            var _a = __read(negImplCPU(xData.values, x.shape, x.dtype), 2), outValues = _a[0], newShape = _a[1];
            return backend.makeTensorInfo(newShape, x.dtype, outValues);
        }
        var program = new UnaryOpProgram(x.shape, UnaryOpType.NEG);
        return backend.runWebGPUProgram(program, [x], x.dtype);
    }
    var negConfig = {
        kernelName: tf.Neg,
        backendName: 'webgpu',
        kernelFunc: neg
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function nonMaxSuppressionV3(args) {
        console.warn('tf.nonMaxSuppression() in webgpu locks the UI thread. ' +
            'Call tf.nonMaxSuppressionAsync() instead');
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var boxes = inputs.boxes, scores = inputs.scores;
        var maxOutputSize = attrs.maxOutputSize, iouThreshold = attrs.iouThreshold, scoreThreshold = attrs.scoreThreshold;
        var boxesVals = backend.readSync(boxes.dataId);
        var scoresVals = backend.readSync(scores.dataId);
        var selectedIndices = tf.kernel_impls.nonMaxSuppressionV3Impl(boxesVals, scoresVals, maxOutputSize, iouThreshold, scoreThreshold).selectedIndices;
        return backend.makeTensorInfo([selectedIndices.length], 'int32', new Int32Array(selectedIndices));
    }
    var nonMaxSuppressionV3Config = {
        kernelName: tf.NonMaxSuppressionV3,
        backendName: 'webgpu',
        kernelFunc: nonMaxSuppressionV3
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function nonMaxSuppressionV5(args) {
        console.warn('tf.nonMaxSuppression() in webgpu locks the UI thread. ' +
            'Call tf.nonMaxSuppressionAsync() instead');
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var boxes = inputs.boxes, scores = inputs.scores;
        var maxOutputSize = attrs.maxOutputSize, iouThreshold = attrs.iouThreshold, scoreThreshold = attrs.scoreThreshold, softNmsSigma = attrs.softNmsSigma;
        var boxesVals = backend.readSync(boxes.dataId);
        var scoresVals = backend.readSync(scores.dataId);
        var maxOutputSizeVal = maxOutputSize;
        var iouThresholdVal = iouThreshold;
        var scoreThresholdVal = scoreThreshold;
        var softNmsSigmaVal = softNmsSigma;
        var _a = tf.kernel_impls.nonMaxSuppressionV5Impl(boxesVals, scoresVals, maxOutputSizeVal, iouThresholdVal, scoreThresholdVal, softNmsSigmaVal), selectedIndices = _a.selectedIndices, selectedScores = _a.selectedScores;
        return [
            backend.makeTensorInfo([selectedIndices.length], 'int32', new Int32Array(selectedIndices)),
            backend.makeTensorInfo([selectedScores.length], 'float32', new Float32Array(selectedScores))
        ];
    }
    var nonMaxSuppressionV5Config = {
        kernelName: tf.NonMaxSuppressionV5,
        backendName: 'webgpu',
        kernelFunc: nonMaxSuppressionV5
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function zerosLike(args) {
        var inputs = args.inputs, backend = args.backend;
        var x = inputs.x;
        if (x.dtype === 'complex64') {
            var realPart = real({ inputs: { input: x }, backend: backend });
            var r = zerosLike({ inputs: { x: realPart }, backend: backend });
            var imagPart = imag({ inputs: { input: x }, backend: backend });
            var i = zerosLike({ inputs: { x: imagPart }, backend: backend });
            var result = complex({ inputs: { real: r, imag: i }, backend: backend });
            backend.disposeData(realPart.dataId);
            backend.disposeData(r.dataId);
            backend.disposeData(imagPart.dataId);
            backend.disposeData(i.dataId);
            return result;
        }
        else {
            return fill({
                attrs: {
                    shape: x.shape,
                    dtype: x.dtype,
                    value: x.dtype === 'string' ? '' : 0
                },
                backend: backend
            });
        }
    }
    var zerosLikeConfig = {
        kernelName: tf.ZerosLike,
        backendName: 'webgpu',
        kernelFunc: zerosLike
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function onesLike(args) {
        var inputs = args.inputs, backend = args.backend;
        var x = inputs.x;
        if (x.dtype === 'string') {
            throw new Error('onesLike is not supported under string dtype');
        }
        else if (x.dtype === 'complex64') {
            var realPart = real({ inputs: { input: x }, backend: backend });
            var r = onesLike({ inputs: { x: realPart }, backend: backend });
            var imagPart = imag({ inputs: { input: x }, backend: backend });
            var i = zerosLike({ inputs: { x: imagPart }, backend: backend });
            var result = complex({ inputs: { real: r, imag: i }, backend: backend });
            backend.disposeData(realPart.dataId);
            backend.disposeData(r.dataId);
            backend.disposeData(imagPart.dataId);
            backend.disposeData(i.dataId);
            return result;
        }
        else {
            return fill({ attrs: { shape: x.shape, dtype: x.dtype, value: 1 }, backend: backend });
        }
    }
    var onesLikeConfig = {
        kernelName: tf.OnesLike,
        backendName: 'webgpu',
        kernelFunc: onesLike
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function pack(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var axis = attrs.axis;
        if (inputs.length === 1) {
            return expandDims({ inputs: { input: inputs[0] }, backend: backend, attrs: { dim: axis } });
        }
        var shape = inputs[0].shape;
        var dtype = inputs[0].dtype;
        inputs.forEach(function (t) {
            tf.util.assertShapesMatch(shape, t.shape, 'All tensors passed to stack must have matching shapes');
            tf.util.assert(dtype === t.dtype, function () { return 'All tensors passed to stack must have matching dtypes'; });
        });
        var intermediateTensorInfos = [];
        var expandedTensors = inputs.map(function (t) {
            var expandedT = expandDims({ inputs: { input: t }, backend: backend, attrs: { dim: axis } });
            intermediateTensorInfos.push(expandedT);
            return expandedT;
        });
        var result = concat({ inputs: expandedTensors, backend: backend, attrs: { axis: axis } });
        intermediateTensorInfos.forEach(function (t) { return backend.disposeData(t.dataId); });
        return result;
    }
    var packConfig = {
        kernelName: tf.Pack,
        backendName: 'webgpu',
        kernelFunc: pack
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var PadProgram = /** @class */ (function () {
        function PadProgram(xShape, paddings) {
            var _this = this;
            this.variableNames = ['x'];
            this.uniforms = 'constantValue : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + xShape[i] + p[1]; } /* afterPad */);
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            paddings.map(function (_, i) {
                _this.uniforms += " pad" + i + " : vec2<i32>,";
            });
            this.xShape = xShape;
            this.shaderKey = 'pad';
        }
        PadProgram.prototype.getUserCode = function () {
            var rank = this.xShape.length;
            var type = getCoordsDataType(rank);
            // The length of paddings are same with the rank of the input tensor.
            var start = this.xShape.map(function (_, i) { return "uniforms.pad" + i + "[0]"; }).join(',');
            var end = this.xShape
                .map(function (_, i) { return "uniforms.pad" + i + "[0] + uniforms.xShape" + (rank > 1 ? "[" + i + "]" : ''); })
                .join(',');
            var startValue = rank > 1 ? type + "(" + start + ")" : "" + start;
            var endValue = rank > 1 ? type + "(" + end + ")" : "" + end;
            var leftPadCondition = rank > 1 ? "any(outC < start)" : "outC < start";
            var rightPadCondition = rank > 1 ? "any(outC >= end)" : "outC >= end";
            var unpackedCoords = rank > 1 ?
                ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank) :
                'coords';
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let start = " + startValue + ";\n          let end = " + endValue + ";\n          let outC = getCoordsFromIndex(index);\n\n          if (" + leftPadCondition + " || " + rightPadCondition + ") {\n            setOutputAtIndex(index, uniforms.constantValue);\n          } else {\n            let coords = outC - start;\n            setOutputAtIndex(index, getX(" + unpackedCoords + "));\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return PadProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var padV2 = function (args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var paddings = attrs.paddings, constantValue = attrs.constantValue;
        if (paddings.every(function (p) { return tf.util.arraysEqual(p, [0, 0]); })) {
            return identity({ inputs: { x: x }, backend: backend });
        }
        if (tf.util.sizeFromShape(x.shape) === 0) {
            // Short-circuit the computation, since x doesn't have value, only
            // the shape is used to compute output shape to pad.
            var outputShape = paddings.map(function (p, i) { return p[0] /* beforePad */ + x.shape[i] + p[1]; } /* afterPad */);
            return fill({
                backend: backend,
                attrs: { shape: outputShape, value: constantValue, dtype: x.dtype }
            });
        }
        var uniformData = [{ type: 'float32', data: [constantValue] }];
        paddings.map(function (p) { return uniformData.push({ type: 'int32', data: [p[0], p[1]] }); });
        var program = new PadProgram(x.shape, paddings);
        return backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
    };
    var padV2Config = {
        kernelName: tf.PadV2,
        backendName: 'webgpu',
        kernelFunc: padV2
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var pow = binaryKernelFunc({
        opSnippet: BinaryOpType.POW,
    });
    var powConfig = {
        kernelName: tf.Pow,
        backendName: 'webgpu',
        kernelFunc: pow
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function prelu(args) {
        var inputs = args.inputs, backend = args.backend;
        var x = inputs.x, alpha = inputs.alpha;
        var program = new BinaryOpProgram(BinaryOpType.PRELU, x.shape, alpha.shape);
        return backend.runWebGPUProgram(program, [x, alpha], 'float32');
    }
    var preluConfig = {
        kernelName: tf.Prelu,
        backendName: 'webgpu',
        kernelFunc: prelu
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function prod(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var axis = attrs.axis, keepDims = attrs.keepDims;
        return reduce(x, axis, keepDims, 'prod', backend);
    }
    var prodConfig = {
        kernelName: tf.Prod,
        backendName: 'webgpu',
        kernelFunc: prod
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var range = function (args) {
        var backend = args.backend, attrs = args.attrs;
        var start = attrs.start, stop = attrs.stop, step = attrs.step, dtype = attrs.dtype;
        var values = rangeImplCPU(start, stop, step, dtype);
        return backend.makeTensorInfo([values.length], dtype, values);
    };
    var rangeConfig = {
        kernelName: tf.Range,
        backendName: 'webgpu',
        kernelFunc: range
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var realDiv = binaryKernelFunc({ opSnippet: BinaryOpType.DIV });
    var realDivConfig = {
        kernelName: tf.RealDiv,
        backendName: 'webgpu',
        kernelFunc: realDiv
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var relu = unaryKernelFunc({ opType: UnaryOpType.RELU });
    var reluConfig = {
        kernelName: tf.Relu,
        backendName: 'webgpu',
        kernelFunc: relu
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var relu6 = unaryKernelFunc({ opType: UnaryOpType.RELU6 });
    var relu6Config = {
        kernelName: tf.Relu6,
        backendName: 'webgpu',
        kernelFunc: relu6
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ResizeBilinearProgram = /** @class */ (function () {
        function ResizeBilinearProgram(inputShape, newHeight, newWidth) {
            this.variableNames = ['x'];
            this.uniforms = 'adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = [inputShape[0], newHeight, newWidth, inputShape[3]];
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = "resizeBilinear";
        }
        ResizeBilinearProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n        let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC =\n            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *\n            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);\n\n          // Compute the four integer indices.\n          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);\n          let sourceCeilRC = vec2<i32>(\n            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));\n\n          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);\n          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);\n          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);\n          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);\n\n          let top = topLeft + (topRight - topLeft) * fracRC.y;\n          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n          let newValue = top + (bottom - top) * fracRC.x;\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    ";
            return userCode;
        };
        return ResizeBilinearProgram;
    }());

    function resizeBilinear(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var images = inputs.images;
        var alignCorners = attrs.alignCorners, size = attrs.size, halfPixelCenters = attrs.halfPixelCenters;
        var _a = __read(size, 2), newHeight = _a[0], newWidth = _a[1];
        var adjustHeight = alignCorners && newHeight > 1 ? 1.0 : 0.0;
        var adjustWidth = alignCorners && newWidth > 1 ? 1.0 : 0.0;
        var halfPixelCentersValue = halfPixelCenters ? 0.5 : 0.0;
        var uniformData = [
            { type: 'float32', data: [adjustHeight, adjustWidth] },
            { type: 'float32', data: [halfPixelCentersValue] }
        ];
        var program = new ResizeBilinearProgram(images.shape, newHeight, newWidth);
        return backend.runWebGPUProgram(program, [images], 'float32', uniformData);
    }
    var resizeBilinearConfig = {
        kernelName: tf.ResizeBilinear,
        backendName: 'webgpu',
        kernelFunc: resizeBilinear
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ResizeNearestNeighborProgram = /** @class */ (function () {
        function ResizeNearestNeighborProgram(inputShape, newHeight, newWidth, halfPixelCenters) {
            this.variableNames = ['x'];
            this.uniforms = 'adjustHeightWidth : vec2<f32>, roundBase : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = [inputShape[0], newHeight, newWidth, inputShape[3]];
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.halfPixelCenters = halfPixelCenters;
            this.shaderKey = "resizeNearest_" + halfPixelCenters;
        }
        ResizeNearestNeighborProgram.prototype.getUserCode = function () {
            var sourceFracIndexRC;
            if (this.halfPixelCenters) {
                sourceFracIndexRC =
                    "max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC" +
                        ", vec2<f32>(0.0))";
            }
            else {
                sourceFracIndexRC = "vec2<f32>(rc) * effectiveInputOverOutputRatioRC";
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let coords = getCoordsFromIndex(index);\n          let b = coords[0];\n          let d = coords[3];\n          let rc = coords.yz;\n\n          let effectiveInSize = vec2<f32>(\n            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveOutSize = vec2<f32>(\n            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],\n            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);\n\n          let effectiveInputOverOutputRatioRC =\n              effectiveInSize / effectiveOutSize;\n\n          // Fractional source index\n          let sourceFracIndexRC = " + sourceFracIndexRC + ";\n\n          // Compute the coordinators of nearest neighbor point.\n          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));\n          let sourceNearestRC = vec2<i32>(\n            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));\n          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n          setOutputAtIndex(index, newValue);\n        }\n      }\n    ";
            return userCode;
        };
        return ResizeNearestNeighborProgram;
    }());

    function resizeNearestNeighbor(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var images = inputs.images;
        var alignCorners = attrs.alignCorners, halfPixelCenters = attrs.halfPixelCenters, size = attrs.size;
        var _a = __read(size, 2), newHeight = _a[0], newWidth = _a[1];
        var adjustHeight = alignCorners && newHeight > 1 ? 1.0 : 0.0;
        var adjustWidth = alignCorners && newWidth > 1 ? 1.0 : 0.0;
        // When align corners is false, we rounds the value with floor.
        var roundBase = alignCorners ? 0.5 : 0.0;
        var uniformData = [
            { type: 'float32', data: [adjustHeight, adjustWidth] },
            { type: 'float32', data: [roundBase] }
        ];
        var program = new ResizeNearestNeighborProgram(images.shape, newHeight, newWidth, halfPixelCenters);
        return backend.runWebGPUProgram(program, [images], images.dtype, uniformData);
    }
    var resizeNearestNeighborConfig = {
        kernelName: tf.ResizeNearestNeighbor,
        backendName: 'webgpu',
        kernelFunc: resizeNearestNeighbor
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var RotateProgram = /** @class */ (function () {
        function RotateProgram(imageShape, fillValue) {
            this.outputShape = [];
            this.variableNames = ['x'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = imageShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.uniforms = "centerX : f32, centerY : f32, sinRadians : f32,\n          cosRadians : f32,";
            this.shaderKey = 'rotate';
            this.outputShape = imageShape;
            if (typeof fillValue === 'number') {
                this.uniforms += " fillValue : f32,";
                this.fillSnippet = "var outputValue = uniforms.fillValue;";
                this.shaderKey += '_float';
            }
            else {
                this.uniforms += " fillValue : vec3<f32>,";
                this.fillSnippet = "var outputValue = uniforms.fillValue[coords[3]];";
                this.shaderKey += '_vec3';
            }
        }
        RotateProgram.prototype.getUserCode = function () {
            var userCode = "\n        " + getMainHeaderAndGlobalIndexString() + "\n\n          if (index < uniforms.size) {\n            let coords = getCoordsFromIndex(index);\n            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *\n                uniforms.sinRadians;\n            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *\n                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *\n                uniforms.cosRadians;\n            let coordX = i32(round(coordXFloat + uniforms.centerX));\n            let coordY = i32(round(coordYFloat + uniforms.centerY));\n            " + this.fillSnippet + "\n            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&\n                coordY < uniforms.xShape[1]) {\n              outputValue = getX(coords[0], coordY, coordX, coords[3]);\n            }\n            setOutputAtIndex(index, outputValue);\n          }\n        }\n      ";
            return userCode;
        };
        return RotateProgram;
    }());

    var rotateWithOffsetConfig = {
        kernelName: tf.RotateWithOffset,
        backendName: 'webgpu',
        kernelFunc: function (_a) {
            var inputs = _a.inputs, attrs = _a.attrs, backend = _a.backend;
            var image = inputs.image;
            var radians = attrs.radians, fillValue = attrs.fillValue, center = attrs.center;
            var webgpuBackend = backend;
            var program = new RotateProgram(image.shape, fillValue);
            var _b = __read(tf.backend_util.getImageCenter(center, image.shape[1], image.shape[2]), 2), centerX = _b[0], centerY = _b[1];
            var uniformData = [
                { type: 'float32', data: [centerX] },
                { type: 'float32', data: [centerY] },
                { type: 'float32', data: [Math.sin(radians)] },
                { type: 'float32', data: [Math.cos(radians)] }
            ];
            if (typeof fillValue === 'number') {
                uniformData.push({ type: 'float32', data: [Number.parseFloat(fillValue.toFixed(2))] });
            }
            else {
                uniformData.push({ type: 'float32', data: fillValue });
            }
            var output = webgpuBackend.runWebGPUProgram(program, [image], image.dtype, uniformData);
            return output;
        }
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var rsqrt = unaryKernelFunc({ opType: UnaryOpType.RSQRT, cpuKernelImpl: rsqrtImplCPU });
    var rsqrtConfig = {
        kernelName: tf.Rsqrt,
        backendName: 'webgpu',
        kernelFunc: rsqrt
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ScatterOptimizedProgram = /** @class */ (function () {
        function ScatterOptimizedProgram(flattenXShape, sliceDim, indicesRank, updatesRank, strides, shape, outputDtype) {
            this.variableNames = ['updates', 'indices'];
            this.workGroupSize = [64, 1, 1];
            this.atomic = true;
            this.outputShape = shape;
            this.type = outputDtype;
            this.dispatchLayout = flatDispatchLayout(flattenXShape);
            // Dispatching based on |updates| shape instead of output shape.
            this.dispatch =
                computeDispatch(this.dispatchLayout, flattenXShape, this.workGroupSize);
            this.sliceDimGreaterThanOne = sliceDim > 1;
            this.shaderKey = "scatter_" + indicesRank + "_" + updatesRank + "_" + this.sliceDimGreaterThanOne + "_" + outputDtype;
            var stridesType = getCoordsDataType(strides.length);
            this.uniforms = "sliceDim : i32, strides: " + stridesType + ", size: i32,";
            this.updatesRank = updatesRank;
            this.indicesRank = indicesRank;
        }
        ScatterOptimizedProgram.prototype.getUserCode = function () {
            var indicesString = '';
            if (this.indicesRank === 1) {
                indicesString = 'coords[0]';
            }
            else if (this.indicesRank === 2) {
                indicesString = 'coords[0], j';
            }
            var indicesSnippet = "getIndices(" + indicesString + ")";
            var strideString = this.sliceDimGreaterThanOne ? 'uniforms.strides[j]' :
                'uniforms.strides';
            var updatesString = '';
            var outCoordsString = '';
            var getUpdatesCoordsFromFlatIndex = '';
            if (this.updatesRank === 1) {
                updatesString = 'coords[0]';
                outCoordsString = 'flattenedIndex';
                getUpdatesCoordsFromFlatIndex = "\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {\n        return index;\n      }\n      ";
            }
            else if (this.updatesRank === 2) {
                updatesString = 'coords[0], coords[1]';
                outCoordsString = 'vec2<i32>(flattenedIndex, coords[1])';
                getUpdatesCoordsFromFlatIndex = "\n      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {\n        let d0 = index / uniforms.updatesShape[1];\n        let d1 = index - d0 * uniforms.updatesShape[1];\n        return vec2<i32>(d0, d1);\n      }\n      ";
            }
            var updatesSnippet = "getUpdates(" + updatesString + ")";
            // atomicAdd only supports uint/int type. For float, we use
            // atomicCompareExchangeWeak to simulate.
            var atomicAddSnippet = this.type === 'int32' ?
                "atomicAdd(&(result[flatIndex]), i32(updateValue));" :
                "\n     var assumed = atomicLoad(&(result[flatIndex]));\n     var success = 0;\n     for (; success == 0;) {\n       let new = bitcast<f32>(assumed) + updateValue;\n       let newI32 = bitcast<i32>(new);\n       let resValue = atomicCompareExchangeWeak(&(result[flatIndex]), assumed, newI32);\n       assumed = resValue[0];\n       success = resValue[1];\n     }\n     ";
            var userCode = "\n    " + getUpdatesCoordsFromFlatIndex + "\n\n      " + getMainHeaderAndGlobalIndexString() + "\n\n        if (index < uniforms.size) {\n          let coords = getUpdatesCoordsFromFlatIndex(index);\n          var flattenedIndex = 0;\n          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n            let indexInside = i32(round(" + indicesSnippet + "));\n            flattenedIndex = flattenedIndex + indexInside * " + strideString + ";\n          }\n          let updateValue = " + updatesSnippet + ";\n          let flatIndex = getOutputIndexFromCoords(" + outCoordsString + ");\n\n         " + atomicAddSnippet + "\n        }\n      }";
            return userCode;
        };
        return ScatterOptimizedProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function scatterNd(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var indices = inputs.indices, updates = inputs.updates;
        var shape = attrs.shape;
        var _a = tf.backend_util.calculateShapes(updates, indices, shape), sliceRank = _a.sliceRank, numUpdates = _a.numUpdates, sliceSize = _a.sliceSize, strides = _a.strides, outputSize = _a.outputSize;
        var flattenShape = [outputSize / sliceSize, sliceSize];
        if (outputSize === 0) {
            return backend.makeTensorInfo(shape, indices.dtype);
        }
        var flattenIndices = reshape({ inputs: { x: indices }, backend: backend, attrs: { shape: [numUpdates, sliceRank] } });
        var flattenX = reshape({ inputs: { x: updates }, backend: backend, attrs: { shape: [numUpdates, sliceSize] } });
        var type = flattenX.dtype;
        var output = fill({ backend: backend, attrs: { shape: flattenShape, value: 0, dtype: type } });
        var size = tf.util.sizeFromShape(flattenX.shape);
        var uniformData = [
            { type: 'int32', data: [sliceRank] }, { type: 'int32', data: strides },
            { type: 'int32', data: [size] }
        ];
        var program = new ScatterOptimizedProgram(flattenX.shape, sliceRank, flattenIndices.shape.length, flattenX.shape.length, strides, flattenShape, type);
        var res = backend.runWebGPUProgram(program, [flattenX, flattenIndices], type, uniformData, output);
        var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: shape } });
        backend.disposeData(flattenIndices.dataId);
        backend.disposeData(flattenX.dataId);
        backend.disposeData(res.dataId);
        return reshaped;
    }
    var scatterNdConfig = {
        kernelName: tf.ScatterNd,
        backendName: 'webgpu',
        kernelFunc: scatterNd
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var SelectProgram = /** @class */ (function () {
        function SelectProgram(cRank, shape, rank) {
            this.variableNames = ['c', 'a', 'b'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.cRank = cRank;
            this.rank = rank;
            this.shaderKey = 'select';
        }
        SelectProgram.prototype.getUserCode = function () {
            // TODO(WGSL): below code can be merged with getUserCode.
            var cCoords;
            var abCoords;
            if (this.rank > 4) {
                throw Error("Where for rank " + this.rank + " is not yet supported");
            }
            if (this.rank === 1) {
                abCoords = "resRC";
                cCoords = "resRC";
            }
            else {
                var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
                var cCoordVars = [];
                var abCoordVars = [];
                for (var i = 0; i < this.outputShape.length; i++) {
                    abCoordVars.push("" + currentCoords[i]);
                    if (i < this.cRank) {
                        cCoordVars.push("" + currentCoords[i]);
                    }
                }
                cCoords = cCoordVars.join();
                abCoords = abCoordVars.join();
            }
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          let cVal = getC(" + cCoords + ");\n          if (cVal >= 1.0) {\n            setOutputAtIndex(index, getA(" + abCoords + "));\n          } else {\n            setOutputAtIndex(index, getB(" + abCoords + "));\n          }\n        }\n      }\n    ";
            return userCode;
        };
        return SelectProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function select(args) {
        var inputs = args.inputs, backend = args.backend;
        var condition = inputs.condition, t = inputs.t, e = inputs.e;
        var program = new SelectProgram(condition.shape.length, t.shape, t.shape.length);
        return backend.runWebGPUProgram(program, [condition, t, e], tf.upcastType(t.dtype, e.dtype));
    }
    var selectConfig = {
        kernelName: tf.Select,
        backendName: 'webgpu',
        kernelFunc: select
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var sigmoid = unaryKernelFunc({ opType: UnaryOpType.SIGMOID });
    var sigmoidConfig = {
        kernelName: tf.Sigmoid,
        backendName: 'webgpu',
        kernelFunc: sigmoid,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var sin = unaryKernelFunc({ opType: UnaryOpType.SIN });
    var sinConfig = {
        kernelName: tf.Sin,
        backendName: 'webgpu',
        kernelFunc: sin
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var sinh = unaryKernelFunc({ opType: UnaryOpType.SINH });
    var sinhConfig = {
        kernelName: tf.Sinh,
        backendName: 'webgpu',
        kernelFunc: sinh
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var sub = binaryKernelFunc({
        opSnippet: BinaryOpType.SUB,
        cpuKernelImpl: subImplCPU,
        supportsComplex: true
    });
    var subConfig = {
        kernelName: tf.Sub,
        backendName: 'webgpu',
        kernelFunc: sub
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function softmax(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var logits = inputs.logits;
        var dim = attrs.dim;
        var axes = tf.util.parseAxisParam([dim], logits.shape);
        var maxLogit = max({
            inputs: { x: logits },
            backend: backend,
            attrs: { reductionIndices: axes, keepDims: false }
        });
        var expandedShape = tf.backend_util.expandShapeToKeepDim(maxLogit.shape, axes);
        var maxLogitsReshaped = reshape({ inputs: { x: maxLogit }, backend: backend, attrs: { shape: expandedShape } });
        var a = sub({ inputs: { a: logits, b: maxLogitsReshaped }, backend: backend });
        var b = exp({ inputs: { x: a }, backend: backend });
        var sumExp = sum({ inputs: { x: b }, backend: backend, attrs: { axis: axes, keepDims: false } });
        var sumExpReshaped = reshape({ inputs: { x: sumExp }, backend: backend, attrs: { shape: expandedShape } });
        var res = realDiv({ inputs: { a: b, b: sumExpReshaped }, backend: backend });
        backend.disposeData(maxLogit.dataId);
        backend.disposeData(maxLogitsReshaped.dataId);
        backend.disposeData(a.dataId);
        backend.disposeData(b.dataId);
        backend.disposeData(sumExp.dataId);
        backend.disposeData(sumExpReshaped.dataId);
        return res;
    }
    var softmaxConfig = {
        kernelName: tf.Softmax,
        backendName: 'webgpu',
        kernelFunc: softmax
    };

    var spaceToBatchND = function (args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var blockShape = attrs.blockShape, paddings = attrs.paddings;
        tf.util.assert(x.shape.length <= 4, function () { return 'spaceToBatchND for rank > 4 with a WebGPU backend not ' +
            'implemented yet'; });
        var prod = blockShape.reduce(function (a, b) { return a * b; });
        var completePaddings = [[0, 0]];
        completePaddings.push.apply(completePaddings, __spread(paddings));
        for (var i = 1 + blockShape.length; i < x.shape.length; ++i) {
            completePaddings.push([0, 0]);
        }
        var toDispose = [];
        var paddedX = padV2({
            inputs: { x: x },
            backend: backend,
            attrs: { paddings: completePaddings, constantValue: 0 }
        });
        var reshapedPaddedShape = tf.backend_util.getReshaped(paddedX.shape, blockShape, prod, false);
        var permutedReshapedPaddedPermutation = tf.backend_util.getPermuted(reshapedPaddedShape.length, blockShape.length, false);
        var flattenShape = tf.backend_util.getReshapedPermuted(paddedX.shape, blockShape, prod, false);
        var reshapedPaddedX = reshape({ inputs: { x: paddedX }, backend: backend, attrs: { shape: reshapedPaddedShape } });
        var paddedXT = transpose({
            inputs: { x: reshapedPaddedX },
            backend: backend,
            attrs: { perm: permutedReshapedPaddedPermutation }
        });
        var result = reshape({ inputs: { x: paddedXT }, backend: backend, attrs: { shape: flattenShape } });
        toDispose.push(paddedX);
        toDispose.push(reshapedPaddedX);
        toDispose.push(paddedXT);
        toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
        return result;
    };
    var spaceToBatchNDConfig = {
        kernelName: tf.SpaceToBatchND,
        backendName: 'webgpu',
        kernelFunc: spaceToBatchND
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var ScatterProgram = /** @class */ (function () {
        function ScatterProgram(updateSize, sliceDim, indicesRank, updatesRank, strides, shape, summingDupeIndex) {
            this.variableNames = ['updates', 'indices', 'defaultValue'];
            this.workGroupSize = [64, 1, 1];
            this.workPerThread = 4;
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            var sliceDimGreaterThanOne = sliceDim > 1;
            this.shaderKey =
                "scatter_" + indicesRank + "_" + updatesRank + "_" + sliceDimGreaterThanOne;
            var stridesType = getCoordsDataType(strides.length);
            this.uniforms =
                "updateSize : i32, sliceDim : i32, strides: " + stridesType + ",";
            var indicesString = '';
            if (indicesRank === 1) {
                indicesString = 'i';
            }
            else if (indicesRank === 2) {
                indicesString = 'i, j';
            }
            this.indicesSnippet = "getIndices(" + indicesString + ")";
            var updatesString = '';
            if (updatesRank === 1) {
                updatesString = 'i';
            }
            else if (updatesRank === 2) {
                updatesString = 'i, coords[1]';
            }
            this.updatesSnippet = "getUpdates(" + updatesString + ")";
            this.strideString =
                sliceDimGreaterThanOne ? 'uniforms.strides[j]' : 'uniforms.strides';
        }
        ScatterProgram.prototype.getUserCode = function () {
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n\n        let globalIndex = index * " + this.workPerThread + ";\n        if (globalIndex < uniforms.size) {\n          var sum = vec4<f32>(0.0);\n          var found = vec4<bool>(false);\n          for (var i = 0; i < uniforms.updateSize; i = i + 1) {\n            var flattenedIndex = 0;\n            for (var j = 0; j < uniforms.sliceDim; j = j + 1) {\n              let indexInside = i32(round(" + this.indicesSnippet + "));\n              flattenedIndex = flattenedIndex + indexInside * " + this.strideString + ";\n            }\n            for (var innerIndex = 0; innerIndex < " + this.workPerThread + "; innerIndex = innerIndex + 1) {\n              let curIndex = globalIndex + innerIndex;\n              let coords = getCoordsFromIndex(curIndex);\n              if (flattenedIndex == coords[0]) {\n                sum[innerIndex] = sum[innerIndex] + " + this.updatesSnippet + ";\n                found[innerIndex] = true;\n              }\n            }\n          }\n          for (var innerIndex = 0; innerIndex < " + this.workPerThread + "; innerIndex = innerIndex + 1) {\n            let curIndex = globalIndex + innerIndex;\n            if (curIndex < uniforms.size)\n            {\n              setOutputAtIndex(curIndex, mix(getDefaultValue(), sum[innerIndex], f32(found[innerIndex])));\n            }\n          }\n        }\n      }";
            return userCode;
        };
        return ScatterProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function sparseToDense(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var sparseIndices = inputs.sparseIndices, sparseValues = inputs.sparseValues, defaultValue = inputs.defaultValue;
        var outputShape = attrs.outputShape;
        var _a = tf.backend_util.calculateShapes(sparseValues, sparseIndices, outputShape), sliceRank = _a.sliceRank, numUpdates = _a.numUpdates, strides = _a.strides, outputSize = _a.outputSize;
        var sumDupeIndices = false;
        var uniformData = [
            { type: 'int32', data: [numUpdates] },
            { type: 'int32', data: [sliceRank] },
            { type: 'int32', data: strides },
        ];
        var program = new ScatterProgram(numUpdates, sliceRank, sparseIndices.shape.length, sparseValues.shape.length, strides, [outputSize, 1], sumDupeIndices);
        var res = backend.runWebGPUProgram(program, [sparseValues, sparseIndices, defaultValue], sparseValues.dtype, uniformData);
        var reshaped = reshape({ inputs: { x: res }, backend: backend, attrs: { shape: outputShape } });
        backend.disposeData(res.dataId);
        return reshaped;
    }
    var sparseToDenseConfig = {
        kernelName: tf.SparseToDense,
        backendName: 'webgpu',
        kernelFunc: sparseToDense
    };

    function splitV(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var numOrSizeSplits = attrs.numOrSizeSplits, axis = attrs.axis;
        var $axis = tf.util.parseAxisParam(axis, x.shape)[0];
        var splitSizes = tf.backend_util.prepareSplitSize(x, numOrSizeSplits, $axis);
        var xRank = x.shape.length;
        var begin = new Array(xRank).fill(0);
        var size = x.shape.slice();
        return splitSizes.map(function (s) {
            var sliceSize = __spread(size);
            sliceSize[$axis] = s;
            var sliceT = slice({ inputs: { x: x }, backend: backend, attrs: { begin: begin, size: sliceSize } });
            begin[$axis] += s;
            return sliceT;
        });
    }
    var splitVConfig = {
        kernelName: tf.SplitV,
        backendName: 'webgpu',
        kernelFunc: splitV
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var sqrt = unaryKernelFunc({ opType: UnaryOpType.SQRT });
    var sqrtConfig = {
        kernelName: tf.Sqrt,
        backendName: 'webgpu',
        kernelFunc: sqrt
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var squareConfig = {
        kernelName: tf.Square,
        backendName: 'webgpu',
        kernelFunc: function (_a) {
            var inputs = _a.inputs, backend = _a.backend;
            var x = inputs.x;
            var webGPUBackend = backend;
            var program = new UnaryOpProgram(x.shape, UnaryOpType.SQUARE);
            return webGPUBackend.runWebGPUProgram(program, [x], x.dtype);
        }
    };

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var squaredDifference = binaryKernelFunc({
        opSnippet: BinaryOpType.SQUARED_DIFFERENCE,
    });
    var squaredDifferenceConfig = {
        kernelName: tf.SquaredDifference,
        backendName: 'webgpu',
        kernelFunc: squaredDifference
    };

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var StridedSliceProgram = /** @class */ (function () {
        function StridedSliceProgram(destSize) {
            this.variableNames = ['x'];
            // TODO(xing.xu): Increase the workPerThread.
            this.workPerThread = 1;
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = destSize;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize, [this.workPerThread, 1, 1]);
            var dtype = getCoordsDataType(this.outputShape.length);
            this.uniforms = "begin : " + dtype + ",  strides : " + dtype + ", ";
            this.shaderKey = 'stridedSlice';
        }
        StridedSliceProgram.prototype.getUserCode = function () {
            var _this = this;
            var rank = this.outputShape.length;
            var newCoords = '';
            if (rank === 1) {
                newCoords = 'coords * uniforms.strides + uniforms.begin';
            }
            else {
                var outputAxis_1 = 0;
                newCoords =
                    this.outputShape
                        .map(function (_, i) {
                        outputAxis_1++;
                        return _this.outputShape.length === 1 ?
                            "coords * uniforms.strides[" + i + "] + uniforms.begin[" + i + "]" :
                            "coords[" + (outputAxis_1 - 1) + "] * uniforms.strides[" + i + "] + uniforms.begin[" + i + "]";
                    })
                        .join(',');
            }
            var userCode = "\n       " + getMainHeaderAndGlobalIndexString() + "\n         if (index < uniforms.size) {\n           let coords = getCoordsFromIndex(index);\n           setOutputAtIndex(index, getX(" + newCoords + "));\n         }\n       }\n     ";
            return userCode;
        };
        return StridedSliceProgram;
    }());

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function stridedSlice(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var begin = attrs.begin, end = attrs.end, strides = attrs.strides, beginMask = attrs.beginMask, endMask = attrs.endMask, ellipsisMask = attrs.ellipsisMask, newAxisMask = attrs.newAxisMask, shrinkAxisMask = attrs.shrinkAxisMask;
        var _a = tf.slice_util.sliceInfo(x.shape, begin, end, strides, beginMask, endMask, ellipsisMask, newAxisMask, shrinkAxisMask), finalShapeSparse = _a.finalShapeSparse, finalShape = _a.finalShape, isIdentity = _a.isIdentity, sliceDim0 = _a.sliceDim0, isSimpleSlice = _a.isSimpleSlice, $begin = _a.begin, $end = _a.end, $strides = _a.strides;
        var result;
        if (isIdentity) {
            // Optimization #1, slice is a no-op plus reshape
            result = reshape({ inputs: { x: x }, backend: backend, attrs: { shape: finalShape } });
        }
        else if (sliceDim0 || isSimpleSlice) {
            // Optimization #2, slice is memory contiguous (only occurs in dim 0)
            tf.util.assert(x.shape.length >= 1, function () { return "Input must have rank at least 1, got: " + x.shape.length; });
            var size = tf.slice_util.computeOutShape($begin, $end, $strides);
            // To tolerate begin[0] > end[0] (a 0-output slice), we min(begin, end).
            var sliced = slice({ inputs: { x: x }, backend: backend, attrs: { begin: $begin, size: size } });
            result =
                reshape({ inputs: { x: sliced }, backend: backend, attrs: { shape: finalShape } });
            backend.disposeData(sliced.dataId);
        }
        else {
            var shouldExecuteOnCPU = backend.shouldExecuteOnCPU([x]);
            if (shouldExecuteOnCPU) {
                var values = backend.readSync(x.dataId);
                var xBuf = tf.buffer(x.shape, x.dtype, values);
                var resultValues = stridedSliceImplCPU(finalShapeSparse, xBuf, $strides, $begin);
                result = backend.makeTensorInfo(finalShape, x.dtype, resultValues.values);
            }
            else {
                var program = new StridedSliceProgram(finalShapeSparse);
                var uniformData = [{ type: 'int32', data: $begin }, { type: 'int32', data: $strides }];
                var resultValues = backend.runWebGPUProgram(program, [x], x.dtype, uniformData);
                result = reshape({ inputs: { x: resultValues }, backend: backend, attrs: { shape: finalShape } });
                backend.disposeData(resultValues.dataId);
            }
        }
        return result;
    }
    var stridedSliceConfig = {
        kernelName: tf.StridedSlice,
        backendName: 'webgpu',
        kernelFunc: stridedSlice
    };

    function stringNGrams(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var separator = attrs.separator, nGramWidths = attrs.nGramWidths, leftPad = attrs.leftPad, rightPad = attrs.rightPad, padWidth = attrs.padWidth, preserveShortSequences = attrs.preserveShortSequences;
        var data = inputs.data, dataSplits = inputs.dataSplits;
        var $data = backend.readSync(data.dataId);
        var $dataSplits = backend.readSync(dataSplits.dataId);
        var _a = __read(stringNGramsImplCPU($data, $dataSplits, separator, nGramWidths, leftPad, rightPad, padWidth, preserveShortSequences), 2), nGrams = _a[0], nGramsSplits = _a[1];
        return [
            backend.makeTensorInfo([nGrams.length], 'string', nGrams),
            backend.makeTensorInfo(dataSplits.shape, 'int32', nGramsSplits),
        ];
    }
    var stringNGramsConfig = {
        kernelName: tf.StringNGrams,
        backendName: 'webgpu',
        kernelFunc: stringNGrams,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var tanh = unaryKernelFunc({ opType: UnaryOpType.TANH });
    var tanhConfig = {
        kernelName: tf.Tanh,
        backendName: 'webgpu',
        kernelFunc: tanh
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var TileProgram = /** @class */ (function () {
        function TileProgram(aShape, reps) {
            this.variableNames = ['A'];
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            var outputShape = new Array(aShape.length);
            for (var i = 0; i < outputShape.length; i++) {
                outputShape[i] = aShape[i] * reps[i];
            }
            this.outputShape = outputShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.rank = this.outputShape.length;
            this.shaderKey = 'tile';
        }
        TileProgram.prototype.getUserCode = function () {
            var sourceCoords = getSourceCoords(this.rank, 'uniforms.');
            var userCode = "\n      " + getMainHeaderAndGlobalIndexString() + "\n        if (index < uniforms.size) {\n          let resRC = getCoordsFromIndex(index);\n          setOutputAtIndex(index, getA(" + sourceCoords + "));\n        }\n      }\n    ";
            return userCode;
        };
        return TileProgram;
    }());
    function getSourceCoords(rank, uniformPrefix) {
        if (uniformPrefix === void 0) { uniformPrefix = ''; }
        if (rank >= 5) {
            throw Error("Tile for rank " + rank + " is not yet supported");
        }
        if (rank === 1) {
            return "(resRC % " + uniformPrefix + "aShape)";
        }
        var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
        var sourceCoords = [];
        for (var i = 0; i < rank; i++) {
            sourceCoords.push("(" + currentCoords[i] + " % " + uniformPrefix + "aShape[" + i + "])");
        }
        return sourceCoords.join();
    }

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function tile(params) {
        var inputs = params.inputs, backend = params.backend, attrs = params.attrs;
        var x = inputs.x;
        var reps = attrs.reps;
        // tile gpu program cannot handle rank >= 5 case.
        if (backend.shouldExecuteOnCPU([x]) || x.dtype === 'string' ||
            x.shape.length >= 5) {
            // Even thought string tensor is always on CPU, just to be consistent on how
            // to access tensor data.
            var data = backend.readSync(x.dataId);
            var value = x.dtype === 'string' ?
                data.map(function (d) { return tf.util.decodeString(d); }) :
                data;
            var buf = tf.buffer(x.shape, x.dtype, value);
            var outBuf = tileImplCPU(buf, reps);
            return backend.makeTensorInfo(outBuf.shape, outBuf.dtype, outBuf.values);
        }
        var program = new TileProgram(x.shape, reps);
        var output = backend.runWebGPUProgram(program, [x], x.dtype);
        return output;
    }
    var tileConfig = {
        kernelName: tf.Tile,
        backendName: 'webgpu',
        kernelFunc: tile,
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    // Based on Algorithm 2 of Bitonic Top K, ref:
    // https://anilshanbhag.in/static/papers/gputopk_sigmod18.pdf
    // The original algorithm is based on computing the top K only, however
    // since for TFJS we require the indices of the top K values as well then the
    // algorithm found here is a bit modified. Rather than producing the values
    // at each step, the indices containing the top K are generated instead.
    // The output values are not generated to reduce the number of outputs in the
    // GPU, the values can easily be retrieved from the indices using a gather
    // op.
    var SwapProgram = /** @class */ (function () {
        function SwapProgram(shape) {
            this.variableNames = ['x', 'indices'];
            this.workGroupSize = [256, 1, 1];
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.uniforms = "inputSize : i32, firstPass : i32, negativeInf : f32,\n        dir : i32, inc : i32,";
            this.shaderKey = 'swap';
        }
        SwapProgram.prototype.getUserCode = function () {
            var userCode = "\n        " + getMainHeaderAndGlobalIndexString() + "\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // We compare elements pair-wise within a group of size 2 * inc.\n            // The comparing rule for each group alternates between ascending\n            // and descending. Within each group, we compare each pair at\n            // positions i and i+inc. To decide whether an element at position i\n            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than\n            // inc, it is in the first half of the group, we denote it as x0,\n            // otherwise we denote it as x1.\n            // For example, as shown in the Bitonic top K paper referenced\n            // above, Figure5(a) shows that element[1] is in the second half of\n            // the group when group size is 2, but it is in the first half of\n            // the group when group size is 4.\n            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;\n            var i = 0;\n            if (isFirstInPair) {\n              i = elemIdx;\n            } else {\n              i = elemIdx - uniforms.inc;\n            }\n\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.inc;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.inc));\n            }\n\n            var x0 = f32(0.0);\n            var x1 = f32(0.0);\n            if (i0 < uniforms.inputSize) {\n              x0 = getX(batch, i0);\n            } else {\n              x0 = uniforms.negativeInf;\n            }\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = uniforms.negativeInf;\n            }\n\n            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;\n            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);\n            if (reverse == isGreater) {\n              // Elements in opposite order of direction\n              let iTemp = i0;\n              i0 = i1;\n              i1 = iTemp;\n            }\n            if (isFirstInPair) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      ";
            return userCode;
        };
        return SwapProgram;
    }());
    var MergeProgram = /** @class */ (function () {
        function MergeProgram(shape) {
            this.variableNames = ['x', 'indices'];
            this.workGroupSize = [256, 1, 1];
            this.size = true;
            this.outputShape = shape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            // |n| Size of the original input of TopK
            // |firstPass| indicates if this is the first time swap is being used which
            // means no indices input containing the top K is present yet.
            // |k| Top k elements desired
            this.uniforms = "inputSize : i32, firstPass : i32, k : i32,";
            this.shaderKey = 'merge';
        }
        MergeProgram.prototype.getUserCode = function () {
            var userCode = "\n        " + getMainHeaderAndGlobalIndexString() + "\n          if (index < uniforms.size) {\n            let outC = getCoordsFromIndex(index);\n            let batch = outC[0];\n            let elemIdx = outC[1];\n            // The output size is half of the previous size.\n            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _\n            // (k=4), we only need to output the indices at positions |, the\n            // indices at positions _ can be thrown away, see Figure5(b) After\n            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced\n            // above.\n            // For example, the paper shows we only need to output the orange\n            // bars. The output sequence should look like this | | | | | | | |.\n            // Because the sequence is halved, to map the output index back to\n            // the previous sequence to find the corresponding value, we need\n            // to double the index. When we double the index, we basically\n            // interpolate a position, so 2i looks like\n            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k\n            // position of each 2k positions by - elemIdx % k. E.g. for output\n            // at index 4,5,6,7, we want to get the corresponding element at\n            // original index 8,9,10,11, for output at index 8,9,10,11,\n            // we want to get the corresponding element at original index\n            // 16,17,18,19, so on and so forth.\n\n            var i = 0;\n            if (elemIdx < uniforms.k) {\n              i = elemIdx;\n            } else {\n              i = elemIdx * 2 - elemIdx % uniforms.k;\n            }\n            var i0 = 0;\n            if (uniforms.firstPass == 1) {\n              i0 = i;\n            } else {\n              i0 = i32(getIndices(batch, i));\n            }\n            var i1 = 0;\n            if (uniforms.firstPass == 1) {\n              i1 = i + uniforms.k;\n            } else {\n              i1 = i32(getIndices(batch, i + uniforms.k));\n            }\n\n            let x0 = getX(batch, i0);\n            var x1 = f32(0.0);\n            if (i1 < uniforms.inputSize) {\n              x1 = getX(batch, i1);\n            } else {\n              x1 = x0;\n            }\n\n            if (x0 >= x1) {\n              setOutputAtIndex(index, f32(i0));\n            } else {\n              setOutputAtIndex(index, f32(i1));\n            }\n          }\n        }\n      ";
            return userCode;
        };
        return MergeProgram;
    }());

    function disposeIntermediateTensorInfoOrNull(backend, tensorInfo) {
        if (tensorInfo !== null) {
            backend.disposeData(tensorInfo.dataId);
        }
    }
    function roundUpToPow2(num) {
        var pow2 = 1;
        while (pow2 < num) {
            pow2 *= 2;
        }
        return pow2;
    }
    // Based on Algorithm 2 of Bitonic Top K, ref:
    // https://anilshanbhag.in/static/papers/gputopk_sigmod18.pdf
    function topK(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var x = inputs.x;
        var k = attrs.k, sorted = attrs.sorted;
        var xShape = x.shape;
        var lastDim = xShape[xShape.length - 1];
        if (backend.shouldExecuteOnCPU([x])) {
            var xVals = backend.readSync(x.dataId);
            var _a = __read(topKImplCPU(xVals, xShape, x.dtype, k, sorted), 2), allTopKVals = _a[0], allTopKIndices = _a[1];
            return [
                backend.makeTensorInfo(allTopKVals.shape, allTopKVals.dtype, allTopKVals.values),
                backend.makeTensorInfo(allTopKIndices.shape, allTopKIndices.dtype, allTopKIndices.values)
            ];
        }
        if (k === 0) {
            xShape[xShape.length - 1] = 0;
            return [
                backend.makeTensorInfo(xShape, x.dtype, []),
                backend.makeTensorInfo(xShape, 'int32', [])
            ];
        }
        if (lastDim === 1 /* firstPass */) {
            return [
                x, fill({ attrs: { shape: xShape, dtype: 'int32', value: 0 }, backend: backend })
            ];
        }
        // Reshape into a 2d tensor [batch, lastDim] and compute topk along lastDim.
        var xSize = tf.util.sizeFromShape(xShape);
        var batch = xSize / lastDim;
        var x2D = reshape({ inputs: { x: x }, attrs: { shape: [batch, lastDim] }, backend: backend });
        var kPow2 = roundUpToPow2(k);
        var lastDimPow2 = roundUpToPow2(lastDim);
        // Only the indices containing the top K are kept at every step to reduce
        // number of outputs in the GPU algorithms, so once the final set of indices
        // is computed then gather is used to grab the corresponding values
        // from the original input.
        var indices = null;
        // GPU algorithm always takes in an indices input but this input is not used
        // on the first run of a GPU algorithm, therefore if indices is null we simply
        // pass in x2D instead of it but the value will not actually be used
        var getInputs = function () { return indices === null ? [x2D, x2D] : [x2D, indices]; };
        var runSwap = function (dir, inc, shape) {
            var inputs = getInputs();
            var program = new SwapProgram(shape);
            var firstPass = indices === null ? 1 : 0;
            var uniformDataSwap = [
                { type: 'int32', data: [lastDim] },
                { type: 'int32', data: [firstPass] },
                { type: 'float32', data: [Number.NEGATIVE_INFINITY] },
                { type: 'int32', data: [dir] },
                { type: 'int32', data: [inc] }
            ];
            var prevIndices = indices;
            indices = backend.runWebGPUProgram(program, inputs, 'int32', uniformDataSwap);
            disposeIntermediateTensorInfoOrNull(backend, prevIndices);
        };
        // Step 1: local sort
        for (var len = 1; len < kPow2; len *= 2) {
            var dir = len * 2;
            for (var inc = len; inc >= 1; inc /= 2) {
                runSwap(dir, inc, [batch, lastDimPow2]);
            }
        }
        // Step 2: merge
        for (var indicesSize = lastDimPow2; indicesSize > kPow2; indicesSize /= 2) {
            var inputs_1 = getInputs();
            var mergeProgram = new MergeProgram([batch, indicesSize / 2]);
            var firstPass = indices === null ? 1 : 0;
            var uniformDataMerge = [
                { type: 'int32', data: [lastDim] },
                { type: 'int32', data: [firstPass] },
                { type: 'int32', data: [kPow2] }
            ];
            var prevIndices_1 = indices;
            indices = backend.runWebGPUProgram(mergeProgram, inputs_1, 'int32', uniformDataMerge);
            disposeIntermediateTensorInfoOrNull(backend, prevIndices_1);
            // Step 3: rebuild
            var len = kPow2 / 2;
            var dir = len * 2;
            for (var inc = len; inc >= 1; inc /= 2) {
                runSwap(dir, inc, indices.shape);
            }
        }
        // Keep only the requested top K results instead of kPow2
        var prevIndices = indices;
        indices = slice({ inputs: { x: indices }, backend: backend, attrs: { begin: 0, size: [batch, k] } });
        disposeIntermediateTensorInfoOrNull(backend, prevIndices);
        // Gather values on last dimension
        var values = gatherV2({ inputs: { x: x2D, indices: indices }, backend: backend, attrs: { axis: 1, batchDims: 1 } });
        disposeIntermediateTensorInfoOrNull(backend, x2D);
        // Reshape back to the original input shape, except that the last
        // dimension is k.
        var newShape = xShape.slice(0, -1);
        newShape.push(k);
        prevIndices = indices;
        indices = reshape({ inputs: { x: indices }, attrs: { shape: newShape }, backend: backend });
        disposeIntermediateTensorInfoOrNull(backend, prevIndices);
        var prevValues = values;
        values = reshape({ inputs: { x: values }, attrs: { shape: newShape }, backend: backend });
        disposeIntermediateTensorInfoOrNull(backend, prevValues);
        return [values, indices];
    }
    var topKConfig = {
        kernelName: tf.TopK,
        backendName: 'webgpu',
        kernelFunc: topK
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var TransformProgram = /** @class */ (function () {
        function TransformProgram(outShape) {
            this.variableNames = ['Image', 'Transforms'];
            this.uniforms = 'interpolationModeId : i32, fillModeId : i32, fillValue : f32,';
            this.workGroupSize = [64, 1, 1];
            this.size = true;
            this.outputShape = outShape;
            this.dispatchLayout = flatDispatchLayout(this.outputShape);
            this.dispatch = computeDispatch(this.dispatchLayout, this.outputShape, this.workGroupSize);
            this.shaderKey = 'transform';
        }
        TransformProgram.prototype.getUserCode = function () {
            var userCode = "\n          fn mapCoord(outCoord : f32, len : f32) -> f32{\n            var inCoord = outCoord;\n            if(uniforms.fillModeId == 2) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  if (inCoord < sz2) {\n                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +\n                    inCoord;\n                  }\n                  if (inCoord < -len) {\n                    inCoord = inCoord + sz2;\n                  } else {\n                    inCoord = -inCoord - 1.0;\n                  }\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz2 = 2.0 * len;\n                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));\n                  if (inCoord >= len) {\n                    inCoord = sz2 - inCoord - 1.0;\n                  }\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 3) {\n              if (inCoord < 0.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);\n                }\n              } else if (inCoord > len - 1.0) {\n                if (len <= 1.0) {\n                  inCoord = 0.0;\n                } else {\n                  let sz = len - 1.0;\n                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));\n                }\n              }\n              return clamp(inCoord, 0.0, len - 1.0);\n            } else if (uniforms.fillModeId == 4) {\n              return clamp(outCoord, 0.0, len - 1.0);\n            }\n            return outCoord;\n          }\n          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,\n            channel : i32) -> f32 {\n            var outputValue : f32;\n            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {\n                outputValue = getImage(batch, coordY, coordX, channel);\n            } else {\n              outputValue = uniforms.fillValue;\n            }\n            return outputValue;\n          }\n\n          " + getMainHeaderAndGlobalIndexString() + "\n            if (index < uniforms.size) {\n              let coords = getCoordsFromIndex(index);\n              var outputValue : f32;\n              let batch = coords[0];\n              let x = coords[2];\n              let y = coords[1];\n              let channel = coords[3];\n              let xf = f32(x);\n              let yf = f32(y);\n              let a1 = getTransforms(batch, 0);\n              let a2 = getTransforms(batch, 1);\n              let a3 = getTransforms(batch, 2);\n              let b1 = getTransforms(batch, 3);\n              let b2 = getTransforms(batch, 4);\n              let b3 = getTransforms(batch, 5);\n              let c1 = getTransforms(batch, 6);\n              let c2 = getTransforms(batch, 7);\n              let projection = c1 * xf + c2 * yf + 1.0;\n              if (projection == 0.0) {\n                outputValue = uniforms.fillValue;\n              } else {\n                let inX = (a1 * xf + a2 * yf + a3) / projection;\n                let inY = (b1 * xf + b2 * yf + b3) / projection;\n                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));\n                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));\n\n                if (uniforms.interpolationModeId == 1) {\n                  let coordY = i32(round(mapY));\n                  let coordX = i32(round(mapX));\n                  outputValue = readWithFillValue(batch, coordY, coordX,\n                    channel);\n                } else {\n                  let yFloor = floor(mapY);\n                  let xFloor = floor(mapX);\n                  let yCeil = yFloor + 1.0;\n                  let xCeil = xFloor + 1.0;\n                  let valueYFloor = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);\n                  let valueYCeil = (xCeil - mapX) *\n                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +\n                  (mapX - xFloor) *\n                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);\n                  outputValue = (yCeil - mapY) * valueYFloor +\n                  (mapY - yFloor) * valueYCeil;\n                }\n              }\n              setOutputAtIndex(index, outputValue);\n            }\n          }\n        ";
            return userCode;
        };
        return TransformProgram;
    }());

    function transform(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var image = inputs.image, transforms = inputs.transforms;
        var interpolation = attrs.interpolation, fillMode = attrs.fillMode, fillValue = attrs.fillValue, outputShape = attrs.outputShape;
        var _a = __read(image.shape, 4), batch = _a[0], imageHeight = _a[1], imageWidth = _a[2], numChannels = _a[3];
        var _b = __read(outputShape != null ? outputShape : [imageHeight, imageWidth], 2), outHeight = _b[0], outWidth = _b[1];
        var outShape = [batch, outHeight, outWidth,
            numChannels];
        var program = new TransformProgram(outShape);
        var interpolationModeId = interpolation === 'nearest' ? 1 : 2;
        var fillModeId;
        switch (fillMode) {
            case 'constant':
                fillModeId = 1;
                break;
            case 'reflect':
                fillModeId = 2;
                break;
            case 'wrap':
                fillModeId = 3;
                break;
            case 'nearest':
                fillModeId = 4;
                break;
            default:
                fillModeId = 1;
                break;
        }
        var uniformData = [
            { type: 'int32', data: [interpolationModeId] },
            { type: 'int32', data: [fillModeId] }, { type: 'float32', data: [fillValue] }
        ];
        return backend.runWebGPUProgram(program, [image, transforms], 'float32', uniformData);
    }
    var transformConfig = {
        kernelName: tf.Transform,
        backendName: 'webgpu',
        kernelFunc: transform
    };

    /**
     * @license
     * Copyright 2021 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    function unpack(args) {
        var inputs = args.inputs, backend = args.backend, attrs = args.attrs;
        var value = inputs.value;
        var axis = attrs.axis;
        if (axis < 0) {
            axis += value.shape.length;
        }
        var x = value;
        var xRank = x.shape.length;
        var num = value.shape[axis];
        var outShape = new Array(xRank - 1);
        var outIndex = 0;
        for (var i = 0; i < xRank; i++) {
            if (i !== axis) {
                outShape[outIndex++] = x.shape[i];
            }
        }
        var toDispose = [];
        var begin = new Array(xRank).fill(0);
        var size = x.shape.slice();
        size[axis] = 1;
        var res = new Array(num);
        for (var i = 0; i < res.length; i++) {
            begin[axis] = i;
            var sliced = slice({ inputs: { x: x }, backend: backend, attrs: { begin: begin, size: size } });
            var reshaped = reshape({ inputs: { x: sliced }, backend: backend, attrs: { shape: outShape } });
            res[i] = reshaped;
            toDispose.push(sliced);
        }
        toDispose.forEach(function (t) { return backend.disposeData(t.dataId); });
        return res;
    }
    var unpackConfig = {
        kernelName: tf.Unpack,
        backendName: 'webgpu',
        kernelFunc: unpack
    };

    var e_1, _a;
    // List all kernel configs here
    var kernelConfigs = [
        _fusedMatMulConfig,
        absConfig,
        addConfig,
        addNConfig,
        argMaxConfig,
        argMinConfig,
        avgPoolConfig,
        batchMatMulConfig,
        batchToSpaceNDConfig,
        castConfig,
        ceilConfig,
        clipByValueConfig,
        complexConfig,
        concatConfig,
        conv2DConfig,
        conv2DBackpropInputConfig,
        cosConfig,
        coshConfig,
        cropAndResizeConfig,
        cumprodConfig,
        cumsumConfig,
        depthToSpaceConfig,
        depthwiseConv2dNativeConfig,
        einsumConfig,
        eluConfig,
        equalConfig,
        expConfig,
        expandDimsConfig,
        expm1Config,
        fillConfig,
        flipLeftRightConfig,
        fromPixelsConfig,
        floorConfig,
        floorDivConfig,
        fusedBatchNormConfig,
        fusedConv2DConfig,
        fusedDepthwiseConv2DConfig,
        gatherNdConfig,
        gatherV2Config,
        greaterConfig,
        greaterEqualConfig,
        identityConfig,
        imagConfig,
        leakyReluConfig,
        lessConfig,
        lessEqualConfig,
        logConfig,
        logicalAndConfig,
        logicalNotConfig,
        maxConfig,
        maximumConfig,
        maxPoolConfig,
        meanConfig,
        minConfig,
        minimumConfig,
        mirrorPadConfig,
        multiplyConfig,
        negConfig,
        nonMaxSuppressionV3Config,
        nonMaxSuppressionV5Config,
        notEqualConfig,
        onesLikeConfig,
        packConfig,
        padV2Config,
        powConfig,
        preluConfig,
        prodConfig,
        rangeConfig,
        realConfig,
        realDivConfig,
        reluConfig,
        relu6Config,
        reshapeConfig,
        resizeBilinearConfig,
        resizeNearestNeighborConfig,
        rotateWithOffsetConfig,
        rsqrtConfig,
        scatterNdConfig,
        selectConfig,
        sigmoidConfig,
        sinConfig,
        sinhConfig,
        sliceConfig,
        stridedSliceConfig,
        stringNGramsConfig,
        softmaxConfig,
        spaceToBatchNDConfig,
        sparseToDenseConfig,
        splitVConfig,
        sqrtConfig,
        squareConfig,
        squaredDifferenceConfig,
        subConfig,
        sumConfig,
        tanhConfig,
        tileConfig,
        topKConfig,
        transformConfig,
        transposeConfig,
        unpackConfig,
        zerosLikeConfig
    ];
    try {
        for (var kernelConfigs_1 = __values(kernelConfigs), kernelConfigs_1_1 = kernelConfigs_1.next(); !kernelConfigs_1_1.done; kernelConfigs_1_1 = kernelConfigs_1.next()) {
            var kernelConfig = kernelConfigs_1_1.value;
            tf.registerKernel(kernelConfig);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (kernelConfigs_1_1 && !kernelConfigs_1_1.done && (_a = kernelConfigs_1.return)) _a.call(kernelConfigs_1);
        }
        finally { if (e_1) throw e_1.error; }
    }

    /**
     * @license
     * Copyright 2019 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var BufferManager = /** @class */ (function () {
        function BufferManager(device) {
            this.device = device;
            this.numUsedBuffers = 0;
            this.numFreeBuffers = 0;
            this.freeBuffers = new Map();
            this.usedBuffers = new Map();
            this.numBytesUsed = 0;
            this.numBytesAllocated = 0;
        }
        BufferManager.prototype.acquireUploadBuffer = function (byteSize, usage) {
            return this.acquireBuffer(byteSize, usage, true);
        };
        BufferManager.prototype.acquireBuffer = function (byteSize, usage, mappedAtCreation) {
            if (mappedAtCreation === void 0) { mappedAtCreation = false; }
            var key = getBufferKey(byteSize, usage);
            if (!this.freeBuffers.has(key)) {
                this.freeBuffers.set(key, []);
            }
            if (!this.usedBuffers.has(key)) {
                this.usedBuffers.set(key, []);
            }
            this.numBytesUsed += byteSize;
            this.numUsedBuffers++;
            if (this.freeBuffers.get(key).length > 0) {
                this.numFreeBuffers--;
                var newBuffer_1 = this.freeBuffers.get(key).shift();
                this.usedBuffers.get(key).push(newBuffer_1);
                return newBuffer_1;
            }
            this.numBytesAllocated += byteSize;
            var newBuffer = this.device.createBuffer({ mappedAtCreation: mappedAtCreation, size: byteSize, usage: usage });
            this.usedBuffers.get(key).push(newBuffer);
            return newBuffer;
        };
        BufferManager.prototype.releaseBuffer = function (buffer, byteSize, usage) {
            if (this.freeBuffers.size === 0) {
                return;
            }
            var key = getBufferKey(byteSize, usage);
            if (!this.freeBuffers.has(key)) {
                this.freeBuffers.set(key, []);
            }
            this.freeBuffers.get(key).push(buffer);
            this.numFreeBuffers++;
            this.numUsedBuffers--;
            var bufferList = this.usedBuffers.get(key);
            var bufferIndex = bufferList.indexOf(buffer);
            if (bufferIndex < 0) {
                throw new Error('Cannot release a buffer that was never provided by this ' +
                    'buffer manager');
            }
            bufferList.splice(bufferIndex, 1);
            this.numBytesUsed -= byteSize;
        };
        BufferManager.prototype.releaseUploadBuffer = function (buffer, byteSize, usage) {
            var _this = this;
            buffer.mapAsync(GPUMapMode.WRITE)
                .then(function () {
                _this.releaseBuffer(buffer, byteSize, usage);
            }, function (err) {
                // Do nothing;
            });
        };
        BufferManager.prototype.getNumUsedBuffers = function () {
            return this.numUsedBuffers;
        };
        BufferManager.prototype.getNumFreeBuffers = function () {
            return this.numFreeBuffers;
        };
        BufferManager.prototype.dispose = function () {
            this.freeBuffers.forEach(function (buffers, key) {
                buffers.forEach(function (buff) {
                    buff.destroy();
                });
            });
            this.usedBuffers.forEach(function (buffers, key) {
                buffers.forEach(function (buff) {
                    buff.destroy();
                });
            });
            this.freeBuffers = new Map();
            this.usedBuffers = new Map();
            this.numUsedBuffers = 0;
            this.numFreeBuffers = 0;
            this.numBytesUsed = 0;
            this.numBytesAllocated = 0;
        };
        return BufferManager;
    }());
    function getBufferKey(byteSize, usage) {
        return byteSize + "_" + usage;
    }

    /**
     * @license
     * Copyright 2022 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */
    var TextureManager = /** @class */ (function () {
        function TextureManager(device) {
            this.device = device;
            this.numUsedTextures = 0;
            this.numFreeTextures = 0;
            this.freeTextures = new Map();
            this.usedTextures = new Map();
            this.numBytesUsed = 0;
            this.numBytesAllocated = 0;
        }
        TextureManager.prototype.acquireTexture = function (width, height, format, usage) {
            var bytesPerElement = getBytesPerElement(format);
            var byteSize = width * height * bytesPerElement;
            var key = getTextureKey(width, height, format, usage);
            if (!this.freeTextures.has(key)) {
                this.freeTextures.set(key, []);
            }
            if (!this.usedTextures.has(key)) {
                this.usedTextures.set(key, []);
            }
            this.numBytesUsed += byteSize;
            this.numUsedTextures++;
            if (this.freeTextures.get(key).length > 0) {
                this.numFreeTextures--;
                var newTexture_1 = this.freeTextures.get(key).shift();
                this.usedTextures.get(key).push(newTexture_1);
                return newTexture_1;
            }
            this.numBytesAllocated += byteSize;
            var newTexture = this.device.createTexture({
                size: [width, height],
                format: format,
                usage: usage,
            });
            this.usedTextures.get(key).push(newTexture);
            return newTexture;
        };
        TextureManager.prototype.releaseTexture = function (texture, width, height, format, usage) {
            if (this.freeTextures.size === 0) {
                return;
            }
            var key = getTextureKey(width, height, format, usage);
            if (!this.freeTextures.has(key)) {
                this.freeTextures.set(key, []);
            }
            this.freeTextures.get(key).push(texture);
            this.numFreeTextures++;
            this.numUsedTextures--;
            var textureList = this.usedTextures.get(key);
            var textureIndex = textureList.indexOf(texture);
            if (textureIndex < 0) {
                throw new Error('Cannot release a texture that was never provided by this ' +
                    'texture manager');
            }
            textureList.splice(textureIndex, 1);
            var bytesPerElement = getBytesPerElement(format);
            var byteSize = width * height * bytesPerElement;
            this.numBytesUsed -= byteSize;
        };
        TextureManager.prototype.getNumUsedTextures = function () {
            return this.numUsedTextures;
        };
        TextureManager.prototype.getNumFreeTextures = function () {
            return this.numFreeTextures;
        };
        TextureManager.prototype.dispose = function () {
            this.freeTextures.forEach(function (textures, key) {
                textures.forEach(function (texture) {
                    texture.destroy();
                });
            });
            this.usedTextures.forEach(function (textures, key) {
                textures.forEach(function (texture) {
                    texture.destroy();
                });
            });
            this.freeTextures = new Map();
            this.usedTextures = new Map();
            this.numUsedTextures = 0;
            this.numFreeTextures = 0;
            this.numBytesUsed = 0;
            this.numBytesAllocated = 0;
        };
        return TextureManager;
    }());
    function getTextureKey(width, height, format, usage) {
        return width + "_" + height + "_" + format + "_" + usage;
    }
    function getBytesPerElement(format) {
        if (format === 'rgba8unorm') {
            return 16;
        }
        else {
            throw new Error(format + " is not supported!");
        }
    }

    var makeBindGroup = function (device, bindGroupLayout, inputs, output, uniforms) {
        var bindings = __spread([output], inputs);
        if (uniforms) {
            bindings.push(uniforms);
        }
        return device.createBindGroup({
            layout: bindGroupLayout,
            entries: bindings.map(function (b, i) { return ({ binding: i, resource: b }); }),
        });
    };
    var compileProgram = function (device, program, pipelineLayout, inputsData, output, isFromPixel) {
        if (isFromPixel === void 0) { isFromPixel = false; }
        var outputData = { dtype: output.dtype, shape: output.shape };
        var source = makeShader(inputsData, outputData, program, isFromPixel);
        var module = device.createShaderModule({ code: source, label: program.constructor.name });
        var pipeline = device.createComputePipeline({
            layout: pipelineLayout,
            compute: { module: module, entryPoint: 'main' },
            label: program.constructor.name
        });
        return pipeline;
    };
    function makeShaderKey(program, shapes, types, broadcastDimsKey, inputShapesEqualsOutShape) {
        if (types === void 0) { types = []; }
        if (broadcastDimsKey === void 0) { broadcastDimsKey = ''; }
        if (inputShapesEqualsOutShape === void 0) { inputShapesEqualsOutShape = ''; }
        var key = program.shaderKey + '_' +
            (program.workGroupSize ? program.workGroupSize.join(',') : '') +
            shapes.map(function (shape) { return shape.length; }).join(',') + types.join(',') +
            program.variableNames.join(',') + broadcastDimsKey +
            inputShapesEqualsOutShape;
        return key;
    }

    // Empirically determined constant used to determine size threshold for handing
    // off execution to the CPU.
    var CPU_HANDOFF_SIZE_THRESHOLD = tf.env().getNumber('WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD');
    // Reshape dispatch, not to exceed device limits.
    var reshapeDispatch = function (device, program) {
        var MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE = device.limits.maxComputeWorkgroupsPerDimension;
        var layout = program['dispatchLayout'];
        var dispatch = program['dispatch'];
        if (dispatch.every(function (d) { return d <= MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE; })) {
            return dispatch;
        }
        tf.util.assert(dispatch[0] > MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE &&
            layout.y === undefined && layout.z === undefined, function () { return 'Dispatch size exceeds WebGPU limits in Y or Z dimension.'; });
        var dispatchAverage = Math.ceil(Math.sqrt(dispatch[0]));
        if (dispatchAverage > MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE) {
            dispatchAverage = Math.ceil(Math.cbrt(dispatch[0]));
            tf.util.assert(dispatchAverage <= MAX_COMPUTE_PER_DIMENSION_DISPATCH_SIZE, function () { return 'Total dispatch size exceeds WebGPU maximum.'; });
            return [dispatchAverage, dispatchAverage, dispatchAverage];
        }
        else {
            return [dispatchAverage, dispatchAverage, 1];
        }
    };
    var WebGPUBackend = /** @class */ (function (_super) {
        __extends(WebGPUBackend, _super);
        function WebGPUBackend(device, supportTimeQuery) {
            if (supportTimeQuery === void 0) { supportTimeQuery = false; }
            var _this = _super.call(this) || this;
            _this.commandQueueOwnedIds = new WeakSet();
            _this.tensorDisposalQueue = [];
            _this.uniformDisposalQueue = [];
            _this.stagingDisposalQueue = [];
            _this.textureDisposalQueue = [];
            _this.disposed = false;
            _this.uploadWaitMs = 0;
            _this.downloadWaitMs = 0;
            _this.dispatchNumberInEncoder = 0;
            _this.fromPixelTextureLayout = null;
            _this.fromPixelImportTextureLayout = null;
            if (!isWebGPUSupported()) {
                throw new Error('WebGPU is not supported on this device');
            }
            _this.layoutCache = {};
            _this.pipelineCache = {};
            _this.device = device;
            _this.queue = device.queue;
            _this.currentCommandEncoder = null;
            _this.currentComputePass = null;
            _this.supportTimeQuery = supportTimeQuery;
            _this.bufferManager = new BufferManager(_this.device);
            _this.textureManager = new TextureManager(_this.device);
            _this.tensorMap = new tf.DataStorage(_this, tf.engine());
            if (_this.supportTimeQuery) {
                _this.querySet = _this.device.createQuerySet({
                    type: 'timestamp',
                    count: 2,
                });
            }
            // Profiling tools like PIX needs this dummy canvas to
            // trigger capturing a frame.
            if (tf.env().getBool('WEBGPU_USE_PROFILE_TOOL')) {
                _this.dummyCanvas = document.createElement('canvas');
                _this.dummyCanvas.width = 1;
                _this.dummyCanvas.height = 1;
                _this.dummyContext = _this.dummyCanvas.getContext('webgpu');
                _this.dummyContext.configure({
                    device: device,
                    format: 'bgra8unorm',
                });
                document.body.appendChild(_this.dummyCanvas);
            }
            return _this;
        }
        WebGPUBackend.prototype.nextDataId = function () {
            return WebGPUBackend.nextDataId++;
        };
        WebGPUBackend.prototype.floatPrecision = function () {
            return 32;
        };
        WebGPUBackend.prototype.defaultGpuBufferUsage = function () {
            return GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC |
                GPUBufferUsage.COPY_DST;
        };
        WebGPUBackend.prototype.flushDisposalQueue = function () {
            var _this = this;
            this.tensorDisposalQueue.forEach(function (d) {
                _this.maybeReleaseBuffer(d);
                _this.tensorMap.delete(d);
            });
            this.uniformDisposalQueue.forEach(function (d) { return _this.bufferManager.releaseBuffer(d.buffer, d.byteSize, d.usage); });
            this.stagingDisposalQueue.forEach(function (d) { return _this.bufferManager.releaseUploadBuffer(d.buffer, d.byteSize, d.usage); });
            this.textureDisposalQueue.forEach(function (d) { return _this.textureManager.releaseTexture(d.texture, d.width, d.height, d.format, d.usage); });
            this.tensorDisposalQueue = [];
            this.uniformDisposalQueue = [];
            this.stagingDisposalQueue = [];
            this.textureDisposalQueue = [];
        };
        /**
         * Dispose the memory if the dataId has 0 refCount. Return true if the memory
         * is released or memory is not managed in this backend, false if memory is
         * not cleared.
         * @param dataId
         * @oaram force Optional, remove the data regardless of refCount
         */
        WebGPUBackend.prototype.disposeData = function (dataId, force) {
            if (force === void 0) { force = false; }
            if (this.tensorMap.has(dataId)) {
                var data = this.tensorMap.get(dataId);
                data.refCount--;
                if (!force && data.refCount > 0) {
                    return false;
                }
                if (this.commandQueueOwnedIds.has(dataId)) {
                    this.tensorDisposalQueue.push(dataId);
                    return false;
                }
                else {
                    this.maybeReleaseBuffer(dataId);
                }
                var complexTensorInfos = this.tensorMap.get(dataId).complexTensorInfos;
                if (complexTensorInfos != null) {
                    this.disposeData(complexTensorInfos.real.dataId, true);
                    this.disposeData(complexTensorInfos.imag.dataId, true);
                }
                this.tensorMap.delete(dataId);
            }
            return true;
        };
        WebGPUBackend.prototype.memory = function () {
            return {
                numBytesInGPU: this.bufferManager.numBytesUsed,
                numBytesAllocatedInGPU: this.bufferManager.numBytesAllocated,
                unreliable: false
            };
        };
        WebGPUBackend.prototype.getBufferManager = function () {
            return this.bufferManager;
        };
        WebGPUBackend.prototype.getTextureManager = function () {
            return this.textureManager;
        };
        WebGPUBackend.prototype.acquireBuffer = function (byteSize, usage) {
            if (usage === void 0) { usage = this.defaultGpuBufferUsage(); }
            return this.bufferManager.acquireBuffer(byteSize, usage);
        };
        WebGPUBackend.prototype.maybeReleaseBuffer = function (dataId) {
            var info = this.tensorMap.get(dataId);
            if (info != null && info.bufferInfo.buffer != null) {
                this.bufferManager.releaseBuffer(info.bufferInfo.buffer, info.bufferInfo.byteSize, info.bufferInfo.usage);
                info.bufferInfo.buffer = null;
            }
        };
        /** Return refCount of a `TensorData`. */
        WebGPUBackend.prototype.refCount = function (dataId) {
            if (this.tensorMap.has(dataId)) {
                var tensorData = this.tensorMap.get(dataId);
                return tensorData.refCount;
            }
            return 0;
        };
        /** Increase refCount of a `TensorData`. */
        WebGPUBackend.prototype.incRef = function (dataId) {
            var tensorData = this.tensorMap.get(dataId);
            tensorData.refCount++;
        };
        /** Decrease refCount of a `TensorData`. */
        WebGPUBackend.prototype.decRef = function (dataId) {
            if (this.tensorMap.has(dataId)) {
                var tensorData = this.tensorMap.get(dataId);
                tensorData.refCount--;
            }
        };
        WebGPUBackend.prototype.write = function (values, shape, dtype) {
            if (dtype === 'complex64' && values != null) {
                throw new Error("Cannot write to a complex64 dtype. " +
                    "Please use tf.complex(real, imag).");
            }
            var dataId = { id: this.nextDataId() };
            var byteSize = tf.util.sizeFromShape(shape) * GPUBytesPerElement(dtype);
            this.tensorMap.set(dataId, {
                dtype: dtype,
                values: values,
                bufferInfo: { byteSize: byteSize, usage: this.defaultGpuBufferUsage() },
                refCount: 1
            });
            return dataId;
        };
        WebGPUBackend.prototype.move = function (dataId, values, shape, dtype, refCount) {
            if (dtype === 'complex64') {
                throw new Error("Cannot write to a complex64 dtype. " +
                    "Please use tf.complex(real, imag).");
            }
            var byteSize = tf.util.sizeFromShape(shape) * GPUBytesPerElement(dtype);
            this.tensorMap.set(dataId, {
                dtype: dtype,
                values: values,
                bufferInfo: { byteSize: byteSize, usage: this.defaultGpuBufferUsage() },
                refCount: refCount
            });
        };
        WebGPUBackend.prototype.submitQueue = function () {
            this.ensureComputePassEnded();
            this.queue.submit([this.currentCommandEncoder.finish()]);
            this.currentCommandEncoder = null;
            this.dispatchNumberInEncoder = 0;
            this.commandQueueOwnedIds = new WeakSet();
            this.flushDisposalQueue();
        };
        WebGPUBackend.prototype.getBuffer = function (dataId) {
            this.uploadToGPU(dataId);
            return this.tensorMap.get(dataId).bufferInfo.buffer;
        };
        WebGPUBackend.prototype.ensureCommandEncoderReady = function () {
            if (!this.currentCommandEncoder) {
                this.currentCommandEncoder = this.device.createCommandEncoder();
            }
        };
        WebGPUBackend.prototype.ensureComputePassEnded = function () {
            if (this.currentComputePass) {
                this.currentComputePass.end();
                this.currentComputePass = null;
            }
        };
        WebGPUBackend.prototype.getComputePass = function () {
            if (!this.currentComputePass) {
                this.currentComputePass = this.currentCommandEncoder.beginComputePass();
            }
            return this.currentComputePass;
        };
        WebGPUBackend.prototype.getBufferData = function (info) {
            return __awaiter(this, void 0, void 0, function () {
                var staging, values;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (info.values != null) {
                                // Data is on the CPU.
                                return [2 /*return*/, info.values];
                            }
                            staging = this.acquireBuffer(info.bufferInfo.byteSize, GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ);
                            this.ensureCommandEncoderReady();
                            this.ensureComputePassEnded();
                            this.currentCommandEncoder.copyBufferToBuffer(info.bufferInfo.buffer, 0, staging, 0, info.bufferInfo.byteSize);
                            this.submitQueue();
                            return [4 /*yield*/, staging.mapAsync(GPUMapMode.READ)];
                        case 1:
                            _b.sent();
                            values = staging.getMappedRange().slice(0);
                            staging.unmap();
                            if (staging != null) {
                                this.bufferManager.releaseBuffer(staging, info.bufferInfo.byteSize, GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ);
                            }
                            // Need to get texture from swapChain to enable profiling tool
                            // to capture a frame
                            if (tf.env().getBool('WEBGPU_USE_PROFILE_TOOL')) {
                                tf.util.assert(this.dummyContext !== undefined, function () { return "Fail to get context for profiling tool"; });
                                this.dummyContext.getCurrentTexture();
                            }
                            return [2 /*return*/, values];
                    }
                });
            });
        };
        WebGPUBackend.prototype.convertAndCacheOnCPU = function (dataId, data) {
            var info = this.tensorMap.get(dataId);
            this.maybeReleaseBuffer(dataId);
            info.values = data;
            return info.values;
        };
        // TODO: Remove once this is fixed:
        // https://github.com/tensorflow/tfjs/issues/1595
        WebGPUBackend.prototype.readSync = function (dataId) {
            var texData = this.tensorMap.get(dataId);
            var values = texData.values;
            if (values == null) {
                throw new Error('WebGPU readSync is only available for CPU-resident tensors.');
            }
            return values;
        };
        WebGPUBackend.prototype.read = function (dataId) {
            return __awaiter(this, void 0, void 0, function () {
                var info, values, vals, ps, realValues, imagValues, data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!this.tensorMap.has(dataId)) {
                                throw new Error("Tensor " + dataId + " was not registered!");
                            }
                            info = this.tensorMap.get(dataId);
                            values = info.values;
                            if (values != null) {
                                // TODO(xing.xu@intel.com): Merge backend_util.BackendValues and
                                // backend_util.TypedArray.
                                return [2 /*return*/, this.convertAndCacheOnCPU(dataId, values)];
                            }
                            if (!(info.dtype === 'complex64')) return [3 /*break*/, 2];
                            return [4 /*yield*/, Promise.all([
                                    this.read(info.complexTensorInfos.real.dataId),
                                    this.read(info.complexTensorInfos.imag.dataId)
                                ])];
                        case 1:
                            ps = _b.sent();
                            realValues = ps[0];
                            imagValues = ps[1];
                            vals = tf.backend_util.mergeRealAndImagArrays(realValues, imagValues);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.getBufferData(info)];
                        case 3:
                            data = _b.sent();
                            vals =
                                ArrayBufferToTypedArray(data, info.dtype);
                            _b.label = 4;
                        case 4:
                            this.convertAndCacheOnCPU(dataId, vals);
                            return [2 /*return*/, vals];
                    }
                });
            });
        };
        WebGPUBackend.prototype.bufferSync = function (t) {
            var data = this.readSync(t.dataId);
            var decodedData = data;
            if (t.dtype === 'string') {
                try {
                    // Decode the bytes into string.
                    decodedData = data.map(function (d) { return tf.util.decodeString(d); });
                }
                catch (_a) {
                    throw new Error('Failed to decode encoded string bytes into utf-8');
                }
            }
            return tf.buffer(t.shape, t.dtype, decodedData);
        };
        WebGPUBackend.prototype.time = function (f) {
            return __awaiter(this, void 0, void 0, function () {
                var oldActiveTimers, newActiveTimers, outerMostTime, flattenedActiveTimerQueries, flattenedActiveTimerNames, res, kernelMs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            oldActiveTimers = this.activeTimers;
                            newActiveTimers = [];
                            outerMostTime = false;
                            if (this.programTimersStack == null) {
                                this.programTimersStack = newActiveTimers;
                                outerMostTime = true;
                            }
                            else {
                                this.activeTimers.push(newActiveTimers);
                            }
                            this.activeTimers = newActiveTimers;
                            f();
                            flattenedActiveTimerQueries = tf.util.flatten(this.activeTimers.map(function (d) { return d.query; }))
                                .filter(function (d) { return d != null; });
                            flattenedActiveTimerNames = tf.util.flatten(this.activeTimers.map(function (d) { return d.name; }))
                                .filter(function (d) { return d != null; });
                            this.activeTimers = oldActiveTimers;
                            if (outerMostTime) {
                                this.programTimersStack = null;
                            }
                            res = {
                                uploadWaitMs: this.uploadWaitMs,
                                downloadWaitMs: this.downloadWaitMs,
                                kernelMs: null,
                                wallMs: null
                            };
                            return [4 /*yield*/, Promise.all(flattenedActiveTimerQueries)];
                        case 1:
                            kernelMs = _b.sent();
                            res['kernelMs'] = tf.util.sum(kernelMs);
                            res['getExtraProfileInfo'] = function () { return kernelMs.map(function (d, i) { return ({ name: flattenedActiveTimerNames[i], ms: d }); })
                                .map(function (d) { return d.name + ": " + d.ms; })
                                .join(', '); };
                            this.uploadWaitMs = 0;
                            this.downloadWaitMs = 0;
                            return [2 /*return*/, res];
                    }
                });
            });
        };
        WebGPUBackend.prototype.getAndSavePipeline = function (key, getPipeline) {
            if (!(key in this.pipelineCache)) {
                this.pipelineCache[key] = getPipeline();
            }
            return this.pipelineCache[key];
        };
        WebGPUBackend.prototype.makeTensorInfo = function (shape, dtype, values) {
            var dataId;
            if (dtype === 'string' && values != null && values.length > 0 &&
                tf.util.isString(values[0])) {
                var encodedValues = values.map(function (d) { return tf.util.encodeString(d); });
                dataId = this.write(encodedValues, shape, dtype);
            }
            else {
                dataId = this.write(values, shape, dtype);
            }
            return { dataId: dataId, shape: shape, dtype: dtype };
        };
        WebGPUBackend.prototype.tensorToBinding = function (tensor) {
            if (!tensor) {
                return null;
            }
            var tensorData = this.tensorMap.get(tensor.dataId);
            return {
                offset: 0,
                size: tensorData.bufferInfo.byteSize,
                buffer: tensorData.bufferInfo.buffer
            };
        };
        WebGPUBackend.prototype.getQueryTime = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    if (this.supportTimeQuery) {
                        return [2 /*return*/, this.getTimeFromQuerySet(query)];
                    }
                    else {
                        return [2 /*return*/, 0];
                    }
                });
            });
        };
        WebGPUBackend.prototype.uploadToGPU = function (dataId) {
            var info = this.tensorMap.get(dataId);
            if (info.bufferInfo.buffer != null) {
                // Already on the GPU.
                return;
            }
            info.bufferInfo.buffer = this.acquireBuffer(info.bufferInfo.byteSize);
            if (info.values) {
                var stagingBuffer = this.bufferManager.acquireUploadBuffer(info.bufferInfo.byteSize, GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC);
                var arrayBuffer = stagingBuffer.getMappedRange();
                if (info.dtype === 'int32' || info.dtype === 'bool') {
                    new Int32Array(arrayBuffer).set(info.values);
                }
                else {
                    new Float32Array(arrayBuffer).set(info.values);
                }
                stagingBuffer.unmap();
                this.ensureCommandEncoderReady();
                this.ensureComputePassEnded();
                this.currentCommandEncoder.copyBufferToBuffer(stagingBuffer, 0, info.bufferInfo.buffer, 0, info.bufferInfo.byteSize);
                var stagingInfo = {
                    byteSize: info.bufferInfo.byteSize,
                    usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
                    buffer: stagingBuffer
                };
                this.stagingDisposalQueue.push(stagingInfo);
                // TODO: WebGPU doesn't support read data synchronously from GPU to CPU.
                // So it will report error when switching backend from WebGPU to others.
                // There are two situations: 1) swithcing the backend after running a
                // model; 2) swithcing the backend within the model. Temporarilly keep the
                // values on CPU to solve the first issue.
                // info.values = null;
            }
        };
        WebGPUBackend.prototype.makeUniforms = function (uniformsWithType) {
            var currentOffset = 0;
            var preLength = 0;
            var offsets = [];
            uniformsWithType.forEach(function (d) {
                if (d.data.length === 0) {
                    d.data = [1];
                }
                // https://www.w3.org/TR/WGSL/#alignof
                var baseAlignment;
                switch (d.data.length) {
                    case 1:
                        baseAlignment = 4;
                        break;
                    case 2:
                        baseAlignment = 8;
                        break;
                    case 3:
                        baseAlignment = 16;
                        break;
                    case 4:
                        baseAlignment = 16;
                        break;
                    case 5:
                        baseAlignment = 16;
                        break;
                    case 6:
                        baseAlignment = 16;
                        break;
                    default:
                        tf.util.assert(false, function () { return "Unsupported " + d.data.length + "D shape"; });
                }
                if (preLength === 5 || preLength === 6) {
                    baseAlignment = 16;
                }
                currentOffset = Math.ceil(currentOffset / baseAlignment) * baseAlignment;
                preLength = d.data.length;
                offsets.push(currentOffset);
                currentOffset += d.data.length * 4;
            });
            var arrayBuffer = new ArrayBuffer(currentOffset);
            uniformsWithType.forEach(function (d, i) {
                var offset = offsets[i];
                if (d.type === 'int32') {
                    new Int32Array(arrayBuffer, offset, d.data.length).set(d.data);
                }
                else if (d.type === 'uint32') {
                    new Uint32Array(arrayBuffer, offset, d.data.length).set(d.data);
                }
                else {
                    new Float32Array(arrayBuffer, offset, d.data.length).set(d.data);
                }
            });
            var uniformBuffer = this.acquireBuffer(currentOffset, GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM);
            this.queue.writeBuffer(uniformBuffer, 0, arrayBuffer, 0, currentOffset);
            var uniformInfo = {
                byteSize: currentOffset,
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
                buffer: uniformBuffer
            };
            this.uniformDisposalQueue.push(uniformInfo);
            return { offset: 0, size: currentOffset, buffer: uniformBuffer };
        };
        // This layout is used by all programs except fromPixel.
        WebGPUBackend.prototype.createLayout = function (inputEntrySize) {
            var bindGroupLayoutEntries = [];
            // Output buffer binding layout.
            bindGroupLayoutEntries.push({
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                buffer: { type: 'storage' }
            });
            // Input buffer binding layout. Depends on variableNames length.
            for (var i = 0; i < inputEntrySize; i++) {
                bindGroupLayoutEntries.push({
                    binding: i + 1,
                    visibility: GPUShaderStage.COMPUTE,
                    buffer: { type: 'read-only-storage' }
                });
            }
            bindGroupLayoutEntries.push({
                binding: inputEntrySize + 1,
                visibility: GPUShaderStage.COMPUTE,
                buffer: { type: 'uniform' }
            });
            var bindGroupLayout = this.device.createBindGroupLayout({ entries: bindGroupLayoutEntries });
            var pipelineLayout = this.device.createPipelineLayout({ bindGroupLayouts: [bindGroupLayout] });
            return { bindGroupLayout: bindGroupLayout, pipelineLayout: pipelineLayout };
        };
        WebGPUBackend.prototype.getCachedOrCreateLayout = function (inputEntrySize) {
            if (!(inputEntrySize in this.layoutCache)) {
                this.layoutCache[inputEntrySize] = this.createLayout(inputEntrySize);
            }
            return this.layoutCache[inputEntrySize];
        };
        WebGPUBackend.prototype.runWebGPUProgram = function (program, inputs, outputDtype, programUniforms, output) {
            var _this = this;
            if (!output) {
                output = this.makeTensorInfo(program.outputShape, outputDtype);
                if (tf.util.sizeFromShape(output.shape) === 0) {
                    // Short-circuit the computation since the result is empty (has 0 in its
                    // shape).
                    var outData = this.tensorMap.get(output.dataId);
                    outData.values =
                        tf.util.getTypedArrayFromDType(output.dtype, 0);
                    return output;
                }
                this.uploadToGPU(output.dataId);
            }
            program.dispatch = reshapeDispatch(this.device, program);
            // There are five kinds of uniforms: NAN, shapes, shape strides, program
            // size, program defined uniforms.
            var uniformsWithType = [{ type: 'float32', data: [NaN] }];
            var bufferShapes = inputs.concat(output).map(function (d) { return d.shape; });
            var uniformsType = 'int32';
            bufferShapes.map(function (d) {
                uniformsWithType.push({ type: uniformsType, data: d });
            });
            var strides = tf.util.computeStrides(output.shape);
            uniformsWithType.push({ type: uniformsType, data: strides });
            if (program.size) {
                var size = tf.util.sizeFromShape(program.outputShape);
                uniformsWithType.push({ type: uniformsType, data: [program.isVec4 ? size / 4 : size] });
            }
            if (programUniforms) {
                uniformsWithType = __spread(uniformsWithType, programUniforms);
            }
            var uniforms = this.makeUniforms(uniformsWithType);
            var inputsData = inputs.map(function (input, i) {
                if (input.dtype === 'complex64') {
                    throw new Error("GPGPUProgram does not support complex64 input. For complex64 " +
                        "dtypes, please separate the program into real and imaginary " +
                        "parts.");
                }
                _this.uploadToGPU(input.dataId);
                return {
                    // Returning dtype from tensorMap because it reflects dtype
                    // of underlying buffer, rather than abstract dtype.
                    dtype: _this.tensorMap.get(input.dataId).dtype,
                    shape: input.shape,
                    name: program.variableNames[i]
                };
            });
            var bufferTypes = inputsData.map(function (d) { return d.dtype; }).concat(output.dtype);
            var broadcastDims = inputsData.map(function (d) { return tf.backend_util.getBroadcastDims(d.shape, output.shape); });
            var inputShapesEqualsOutShape = inputsData.map(function (d) { return tf.util.arraysEqual(d.shape, output.shape); }).join('_');
            var broadcastDimsKey = broadcastDims.map(function (d) { return d.join('_'); }).join(';');
            var key = makeShaderKey(program, bufferShapes, bufferTypes, broadcastDimsKey, inputShapesEqualsOutShape);
            var _b = this.getCachedOrCreateLayout(program.variableNames.length), bindGroupLayout = _b.bindGroupLayout, pipelineLayout = _b.pipelineLayout;
            var pipeline = this.getAndSavePipeline(key, function () {
                return compileProgram(_this.device, program, pipelineLayout, inputsData, output);
            });
            var shouldTimeProgram = this.activeTimers != null;
            // Creating bind groups on the fly should never be a bottleneck.
            var bg = makeBindGroup(this.device, bindGroupLayout, inputs.map(function (t) { return _this.tensorToBinding(t); }), this.tensorToBinding(output), uniforms);
            this.ensureCommandEncoderReady();
            var pass = this.getComputePass();
            if (shouldTimeProgram) {
                if (this.supportTimeQuery) {
                    // tslint:disable-next-line:no-any
                    pass.writeTimestamp(this.querySet, 0);
                }
            }
            pass.setPipeline(pipeline);
            pass.setBindGroup(0, bg);
            pass.dispatch(program.dispatch[0], program.dispatch[1], program.dispatch[2]);
            if (shouldTimeProgram) {
                if (this.supportTimeQuery) {
                    // tslint:disable-next-line:no-any
                    pass.writeTimestamp(this.querySet, 1);
                }
            }
            this.dispatchNumberInEncoder++;
            inputs.forEach(function (input) {
                _this.commandQueueOwnedIds.add(input.dataId);
            });
            this.commandQueueOwnedIds.add(output.dataId);
            if (tf.env().get('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE') <= this.dispatchNumberInEncoder) {
                this.submitQueue();
            }
            if (shouldTimeProgram) {
                this.activeTimers.push({
                    name: program.constructor.name,
                    query: this.getQueryTime(this.querySet)
                });
            }
            return output;
        };
        WebGPUBackend.prototype.getFromPixelTextureLayout = function (useImport) {
            if (useImport) {
                if (this.fromPixelImportTextureLayout === null) {
                    this.fromPixelImportTextureLayout =
                        this.createFromPixelTextureLayout(true /* useImport */);
                }
                return this.fromPixelImportTextureLayout;
            }
            if (this.fromPixelTextureLayout === null) {
                this.fromPixelTextureLayout =
                    this.createFromPixelTextureLayout(false /* useImport */);
            }
            return this.fromPixelTextureLayout;
        };
        WebGPUBackend.prototype.createFromPixelTextureLayout = function (useImport) {
            var bindGroupLayoutEntries = [];
            // Output buffer binding layout.
            bindGroupLayoutEntries.push({
                binding: 0,
                visibility: GPUShaderStage.COMPUTE,
                buffer: { type: 'storage' }
            });
            // Input texture binding layout.
            if (useImport) {
                bindGroupLayoutEntries.push({
                    binding: 1,
                    visibility: GPUShaderStage.COMPUTE,
                    externalTexture: {},
                });
            }
            else {
                bindGroupLayoutEntries.push({ binding: 1, visibility: GPUShaderStage.COMPUTE, texture: {} });
            }
            // Uniform buffer binding layout.
            bindGroupLayoutEntries.push({ binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: {} });
            var fromPixelBindGroupLayout = this.device.createBindGroupLayout({ entries: bindGroupLayoutEntries });
            var fromPixelPipelineLayout = this.device.createPipelineLayout({ bindGroupLayouts: [fromPixelBindGroupLayout] });
            return {
                bindGroupLayout: fromPixelBindGroupLayout,
                pipelineLayout: fromPixelPipelineLayout
            };
        };
        WebGPUBackend.prototype.copyExternalImageToTexture = function (externalImage, outShape) {
            var textureUsage = GPUTextureUsage.COPY_DST |
                GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING;
            var textureFormat = 'rgba8unorm';
            var texture = this.textureManager.acquireTexture(outShape[1], outShape[0], textureFormat, textureUsage);
            var externalResource = texture.createView();
            this.queue.copyExternalImageToTexture({ source: externalImage }, { texture: texture }, [outShape[1], outShape[0]]);
            var textureInfo = {
                width: outShape[1],
                height: outShape[0],
                format: textureFormat,
                usage: textureUsage,
                texture: texture
            };
            this.textureDisposalQueue.push(textureInfo);
            return externalResource;
        };
        WebGPUBackend.prototype.runFromPixelsProgram = function (program, outShape, programUniforms, useImport, externalImage) {
            var _this = this;
            program.dispatch = reshapeDispatch(this.device, program);
            var output = this.makeTensorInfo(outShape, 'int32');
            if (tf.util.sizeFromShape(output.shape) === 0) {
                // Short-circuit the computation since the result is empty (has 0 in its
                // shape).
                var outData = this.tensorMap.get(output.dataId);
                outData.values =
                    tf.util.getTypedArrayFromDType(output.dtype, 0);
                return output;
            }
            this.uploadToGPU(output.dataId);
            var key = makeShaderKey(program, [output.shape]);
            var layout = this.getFromPixelTextureLayout(useImport);
            var pipeline = this.getAndSavePipeline(key, function () {
                return compileProgram(_this.device, program, layout.pipelineLayout, [], output, true);
            });
            var externalResource;
            if (useImport) {
                var externalTextureDescriptor = {
                    source: externalImage
                };
                externalResource =
                    this.device.importExternalTexture(externalTextureDescriptor);
            }
            else {
                externalResource = this.copyExternalImageToTexture(externalImage, output.shape);
            }
            var binding = this.tensorToBinding(output);
            var uniforms = this.makeUniforms(programUniforms);
            var bindGroup = this.device.createBindGroup({
                layout: layout.bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: {
                            // tslint:disable-next-line: no-unnecessary-type-assertion
                            buffer: binding.buffer,
                        }
                    },
                    {
                        binding: 1,
                        resource: externalResource,
                    },
                    {
                        binding: 2,
                        resource: {
                            // tslint:disable-next-line: no-unnecessary-type-assertion
                            buffer: uniforms.buffer,
                        }
                    }
                ],
            });
            this.ensureCommandEncoderReady();
            var pass = this.getComputePass();
            var shouldTimeProgram = this.activeTimers != null;
            if (shouldTimeProgram) {
                if (this.supportTimeQuery) {
                    // tslint:disable-next-line:no-any
                    pass.writeTimestamp(this.querySet, 0);
                }
            }
            pass.setPipeline(pipeline);
            pass.setBindGroup(0, bindGroup);
            pass.dispatch(program.dispatch[0], program.dispatch[1], program.dispatch[2]);
            if (shouldTimeProgram) {
                if (this.supportTimeQuery) {
                    // tslint:disable-next-line:no-any
                    pass.writeTimestamp(this.querySet, 1);
                }
            }
            this.commandQueueOwnedIds.add(output.dataId);
            this.dispatchNumberInEncoder++;
            if (tf.env().get('WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE') <= this.dispatchNumberInEncoder) {
                this.submitQueue();
            }
            if (shouldTimeProgram) {
                this.activeTimers.push({
                    name: program.constructor.name,
                    query: this.getQueryTime(this.querySet)
                });
            }
            return output;
        };
        WebGPUBackend.prototype.getTimeFromQuerySet = function (querySet) {
            return __awaiter(this, void 0, void 0, function () {
                var queryBuffer, dst, arrayBuf, timeElapsedNanos;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            queryBuffer = this.acquireBuffer(16, GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE);
                            dst = this.acquireBuffer(16, GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST);
                            this.ensureCommandEncoderReady();
                            this.ensureComputePassEnded();
                            this.currentCommandEncoder.resolveQuerySet(querySet, 0, 2, queryBuffer, 0);
                            this.currentCommandEncoder.copyBufferToBuffer(queryBuffer, 0, dst, 0, 16);
                            this.submitQueue();
                            return [4 /*yield*/, dst.mapAsync(GPUMapMode.READ)];
                        case 1:
                            _b.sent();
                            arrayBuf = new BigUint64Array(dst.getMappedRange());
                            timeElapsedNanos = Number((arrayBuf[1] - arrayBuf[0]));
                            dst.unmap();
                            this.bufferManager.releaseBuffer(dst, 16, GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST);
                            this.bufferManager.releaseBuffer(queryBuffer, 16, GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE);
                            // Return milliseconds.
                            return [2 /*return*/, timeElapsedNanos / 1000000];
                    }
                });
            });
        };
        WebGPUBackend.prototype.shouldExecuteOnCPU = function (inputs, sizeThreshold) {
            var _this = this;
            if (sizeThreshold === void 0) { sizeThreshold = CPU_HANDOFF_SIZE_THRESHOLD; }
            return tf.env().getBool('WEBGPU_CPU_FORWARD') &&
                inputs.every(function (input) { return _this.tensorMap.get(input.dataId).bufferInfo.buffer == null &&
                    tf.util.sizeFromShape(input.shape) < sizeThreshold; });
        };
        WebGPUBackend.prototype.numDataIds = function () {
            return this.tensorMap.numDataIds() - this.tensorDisposalQueue.length;
        };
        WebGPUBackend.prototype.dispose = function () {
            if (this.disposed) {
                return;
            }
            this.bufferManager.dispose();
            this.textureManager.dispose();
            this.disposed = true;
        };
        return WebGPUBackend;
    }(tf.KernelBackend));
    WebGPUBackend.nextDataId = 0;

    /**
     * @license
     * Copyright 2020 Google LLC. All Rights Reserved.
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     * =============================================================================
     */

    var webgpu = {
        __proto__: null,
        webgpu_util: webgpu_util,
        WebGPUBackend: WebGPUBackend
    };

    var _this = undefined;
    if (isWebGPUSupported()) {
        tf.registerBackend('webgpu', function () { return __awaiter(_this, void 0, void 0, function () {
            var gpuDescriptor, adapter, adapterLimits, deviceDescriptor, supportTimeQuery, device;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Remove it once we figure out how to correctly read the tensor data
                        // before the tensor is disposed in profiling mode.
                        tf.env().set('CHECK_COMPUTATION_FOR_ERRORS', false);
                        gpuDescriptor = {
                            powerPreference: tf.env().get('WEBGPU_USE_LOW_POWER_GPU') ?
                                'low-power' :
                                'high-performance'
                        };
                        return [4 /*yield*/, navigator.gpu.requestAdapter(gpuDescriptor)];
                    case 1:
                        adapter = _a.sent();
                        adapterLimits = adapter.limits;
                        deviceDescriptor = {};
                        supportTimeQuery = adapter.features.has('timestamp-query');
                        deviceDescriptor.requiredLimits = {
                            'maxComputeWorkgroupStorageSize': adapterLimits.maxComputeWorkgroupStorageSize,
                            'maxComputeWorkgroupsPerDimension': adapterLimits.maxComputeWorkgroupsPerDimension,
                        };
                        if (supportTimeQuery) {
                            deviceDescriptor.requiredFeatures = ['timestamp-query'];
                        }
                        else {
                            console.warn("This device doesn't support timestamp-query extension. " +
                                "Start Chrome browser with flag " +
                                "--disable-dawn-features=disallow_unsafe_apis then try again. " +
                                "Or zero will shown for the kernel time when profiling mode is" +
                                "enabled. Using performance.now is not workable for webgpu since" +
                                "it doesn't support synchronously to read data from GPU.");
                        }
                        return [4 /*yield*/, adapter.requestDevice(deviceDescriptor)];
                    case 2:
                        device = _a.sent();
                        return [2 /*return*/, new WebGPUBackend(device, supportTimeQuery)];
                }
            });
        }); }, 3 /*priority*/);
    }

    exports.webgpu = webgpu;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=tf-backend-webgpu.js.map
