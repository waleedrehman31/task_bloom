pipeline {
    agent any
    environment {
        APP_NAME = "taskbloom"
    }
    stages {
       
        stage('Build & Push Docker Images') {
            steps {
                sh "docker build -t waleedrehman31/backend:latest ./backend"
                sh "docker build -t waleedrehman31/frontend:latest ./frontend"
                sh "echo waleedrehman31 | docker login -u waleedrehman31 --password-stdin"
                sh "docker push waleedrehman31/backend:latest"
                sh "docker push waleedrehman31/frontend:latest"
            }
        }
        stage('Deploy to K8s') {
            steps {
                sh "kubectl apply -f k8s/backend-deployment.yaml"
                sh "kubectl apply -f k8s/frontend-deployment.yaml"
                sh "kubectl apply -f k8s/services.yaml"
            }
        }
    }
}