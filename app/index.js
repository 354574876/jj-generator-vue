const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        defautl: this.appname
      }
    ])
    .then(answers => {
      this.answers = answers
    })
  }
  writing (){
    // this.fs.write(this.destinationPath('app.js'), 'const a = 1')
    const mainTpl = this.templatePath('main.tpl')
    const context = {user: {name: 'jj'}}
    const output = this.destinationPath('main.html')
    this.fs.copyTpl(mainTpl, output, context)
  }
}