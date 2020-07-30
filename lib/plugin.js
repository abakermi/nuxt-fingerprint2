


const Fingerprint2 = require('fingerprintjs2')



function toObj(array) {
    const obj = {}
    array.forEach((e) => {
        obj[e.key] = e.value

    })
    return obj
}

async function launch() {
    return new Promise((resolve, reject) => {
        if (window.requestIdleCallback) {
            requestIdleCallback(function () {
                Fingerprint2.get(function (components) {
                    resolve(toObj(components))
                })
            })
        } else {
            setTimeout(function () {
                Fingerprint2.get(function (components) {
                    resolve(toObj(components))
                })
            }, 500)
        }
    })

}

export default async function (ctx, inject) {
    const fingerprint = await launch()
    ctx.fingerprint = fingerprint
    inject('fingerprint',fingerprint)

}