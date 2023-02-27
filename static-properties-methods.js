class User {
  static staticMethod() {
    console.log('this is static method')
  }
}

// User.staticMethod()

class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static createTodays() {
    // remember, this = Article
    return new this('Today diget', new Date())
  }
}


const article = Article.createTodays()

console.log(article.title)

const article2 = new Article('12', new Date())


