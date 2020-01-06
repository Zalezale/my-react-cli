/**
 * 发布订阅模式
 */
class Middle {
    constructor() {
        this.observers = []
    }
    notice(subject, message) {
        this.observers.forEach(item => {
            if (item.subjects.indexOf(subject)) {
                item.getMessage(subject, message)
            }
        })
    }
}
let middle = new Middle()
class Subject {
    constructor(name) {
        this.name = name
    }
    publish(message) {
        middle.notice(this, message)
    }

}

class Observer {
    constructor(name) {
        this.name = name
        this.subjects = []
        middle.observers.push(this)
    }
    subscribe(...publishes) {
        publishes.forEach(item => {
            if (this.subjects.indexOf(item) === -1) {
                this.subjects.push(item)
            }
        })
    }
    unSubscribe(...publishes) {
        let position
        publishes.forEach(item => {
            if (this.subjects.indexOf(item) !== -1) {
                this.subjects.splice(position, 1)
            }
        })
    }
    getMessage(subject, message) {
        console.log(this.name + '收到的消息：' + subject.name + '-' + message)
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

