pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
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
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: false,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Automation',
                reportTitles: 'cypress-report'
            ])
        }
    }
}