pipeline {
    agent any

    environment {
        DOCKERHUB = "waleedrehman31"
    }

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/waleedrehman31/task_bloom.git'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $DOCKERHUB/taskbloom-backend ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $DOCKERHUB/taskbloom-frontend ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {

                    sh 'echo $PASS | docker login -u $USER --password-stdin'

                    sh 'docker push $DOCKERHUB/taskbloom-backend'
                    sh 'docker push $DOCKERHUB/taskbloom-frontend'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'helm upgrade --install taskbloom ./taskbloom'
            }
        }
    }
}