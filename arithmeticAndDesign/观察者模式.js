/**
 * 观察者模式
 */
class Subject {
    constructor(name) {
        this.name = name
        this.subscribeList = []
    }
    publish(message) {
        this.subscribeList.forEach(item => {
            item.getMessage(message)
        })
    }

}

class Observer {
    constructor(name) {
        this.name = name
    }
    subscribe(...publishes) {
        publishes.forEach(item => {
            if (item.subscribeList.indexOf(this) === -1) {
                item.subscribeList.push(this)
            }
        })
    }
    unSubscribe(...publishes) {
        let position
        publishes.forEach(item => {
            if (position = item.subscribeList.indexOf(this) !== -1) {
                item.subscribeList.splice(position, 1)
            }
        })
    }
    getMessage(message) {
        console.log(this.name + '接受消息：' + message)
    }
}

let publishA = new Subject('我是A电台')
let publishB = new Subject('我是B电台')

let observerA = new Observer('我是观察者A')
let observerB = new Observer('我是观察者B')

observerA.subscribe(publishA)
observerB.subscribe(publishA, publishB)
observerB.unSubscribe(publishA)


publishA.publish('你中奖了')
publishB.publish('明天会更好')

