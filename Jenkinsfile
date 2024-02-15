pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm -D install'
           }
        }
        stage('Run e2e tests') {
            steps {
                sh 'npx cypress run --e2e'
            }
        }
    }
    post {
        always {
            publishHTML (target: [
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportTitles: 'cypress-report'
            ])
        }
    }
}