pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('waleedrehman31')
        APP_NAME = "taskbloom"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/waleedrehman31/task_bloom.git'
            }
        }
        stage('Build & Push Docker Images') {
            steps {
                sh "docker build -t $DOCKERHUB_CREDENTIALS_USR/backend:latest ./backend"
                sh "docker build -t $DOCKERHUB_CREDENTIALS_USR/frontend:latest ./frontend"
                sh "echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
                sh "docker push $DOCKERHUB_CREDENTIALS_USR/backend:latest"
                sh "docker push $DOCKERHUB_CREDENTIALS_USR/frontend:latest"
            }
        }
        stage('Deploy to K8s') {
            steps {
                sh "kubectl apply -f k8s/"
            }
        }
    }
}