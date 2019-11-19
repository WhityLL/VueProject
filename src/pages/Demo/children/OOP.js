// template class
// 注意：JavaScript里面没有接口的概念，与传统的OOP实现有一定的缺陷
class AnimalTemplate {
    constructor() {}
    head () {}
    body () {}
    foot () {}
    render () {
        // 算法过程 ———— 身体部位排列顺序头、身体、脚
        // render方法不能被子类重写，无法通过JavaScript本身实现需人为遵守
        this.head()
        this.body()
        this.foot()
    }
}

// 有一头猪
class Pig extends AnimalTemplate {
    head () {
        console.log('head from pig')
    }
    body () {
        console.log('body from pig')
    }
    foot () {
        console.log('foot from pig')
    }
}
const pig1 = new Pig()
pig1.render() // 执行算法

// 有一只鸡
class Chicken extends AnimalTemplate {
    head () {
        console.log('head from chicken')
    }
    body () {
        console.log('body from chicken')
    }
    foot () {
        console.log('foot from chicken')
    }
}
const chicken1 = new Chicken()
chicken1.render() // 执行算法