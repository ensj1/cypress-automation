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
                try {
                    sh 'npx cypress run --e2e'
                } catch (Exception e) {
                    echo 'Exception occurred: ' + e.toString()
                }
            }
        }  
    }
    post {
        always {
            publishHTML (target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/reports/html',
                reportFiles: 'index.html',
                reportName: 'Cypress Automation',
                reportTitles: 'cypress-report'
            ])
        }
    }
}