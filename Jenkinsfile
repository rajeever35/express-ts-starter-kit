pipeline {
  agent any
  
  stages {
    
    stage('Clone from git') {
      steps {
        git 'https://github.com/rajeever35/express-ts-starter-kit'
      }
    }
    stage('Build') {
      steps {
          script {
              newApp = docker.build("rajeever35/express-ts-starter-kit")
          }
      }
    }
    
  }
}
