/***
 * Observer模式是行为模式之一，它的作用是当一个对象的状态发生变化时，能够自动通知其他关联对象，自动刷新对象状态。
 * Observer模式提供给关联对象一种同步通信的手段，使某个对象与依赖它的其他对象之间保持状态同步。
 */

// Observer（观察者）
function Observer() {
    this.update = () => {}
}

// Subject 主题（发布者 被观察者）
// 被观察的对象。当需要被观察的状态发生变化时，需要通知队列中所有观察者对象。Subject需要维持（添加，删除，通知）一个观察者对象的队列列表。
function Subject() {
    // 维护一个观察者队列
    this.observers = [];

    // 添加一个观察者到表中
    this.addObserver = function (observer) {
        this.observers.push(observer);
    }

    // 移除观察者
    this.removeObserver = function (observer) {
        const delIndex = this.observers.indexOf(observer)
        this.observers.splice(delIndex, 1)
    }

    // 发布者 发布一条消息
    this.notify = function (context) {
        this.observers.forEach(observer => {
            observer.update(context);
        });
    }
}

window.ZLObserver = Observer;
window.ZLSubject = Subject;