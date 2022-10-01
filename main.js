import "./MyPromise.js";
import MyPromise from "./MyPromise.js";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
});

const myPromiseFf = new MyPromise((resolve, reject) => {
    // resolve("완료!");
    setTimeout(() => resolve("완료!"), 1000);
});

const myPromiseRj = new MyPromise((resolve, reject) => {
    // reject("실패!");
    setTimeout(() => reject("실패!"), 1000);
});

promise.then((res) => {
    console.log("promise: " + res);
});

myPromiseFf.then((res) => {
    console.log("myPromiseFf: " + res);
});

myPromiseRj.then((res) => {
    console.log("myPromiseRj: " + res);
}, (rej) => {
    console.log("myPromiseRj: " + rej);
});

// then으로 처리되지 않은 프라미스 catch가 받는지