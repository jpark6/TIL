## AWS에 Kafka cluster 설치, 실행하기

### 카프카 및 주키퍼 설치
EC2 서버 3개 설치  
프리티어인 t2.micro 선택
![ec2 instance](../images/Kafka/07_Install_Kafka_ec2_instances.png)

iterm2로 instance 3대 모두 접속
```shell
ssh -i [pem 키 파일] ubuntu@[ec2인스턴스 url]
```
![ssh 접속](../images/Kafka/07_Install_Kafka_ec2_iterm2.png)

3대 모두 주키퍼 다운로드
```shell
wget https://downloads.apache.org/zookeeper/zookeeper-3.7.0/apache-zookeeper-3.7.0-bin.tar.gz
```
![wget zookeeper](../images/Kafka/07_Install_Kafka_wget_zookeeper.png)

압축 해제
```shell
tar xvf apache-zookeeper-3.7.0-bin.tar.gz
```
![zookeeper 압축해제](../images/Kafka/07_Install_Kafka_tarxvf_zookeeper.png)

주키퍼설정
```shell
cd apache-zookeeper-3.7.0-bin/conf
vi zoo.cfg
```

zoo.cfg
```vim
tickTime=2000
dataDir=/var/lib/zookeeper
clientPort=2181
initLimit=20
syncLimit=5
server.1=test-broker01:2888:3888
server.2=test-broker02:2888:3888
server.3=test-broker03:2888:3888
```
![zoo.cfg](../images/Kafka/07_Install_Kafka_zoo_cfg.png)

/etc/hosts에 설정 추가

```shell
172.31.36.221 test-broker01
172.31.33.109 test-broker02
172.31.40.79 test-broker03

```
![hosts](../images/Kafka/07_Install_Kafka_hosts.png)

자바 설치
```shell
sudo apt install openjdk-16-jre-headless
```

자바 설치후 zookeeper 실행
```shell
cd /home/ubuntu/apache-zookeeper-3.7.0-bin/bin
sudo ./jkServer.sh start
```

![run zookeeper](../images/Kafka/07_Install_Kafka_run_zookeeper.png)

Kafka 다운로드
```shell
wget https://mirror.navercorp.com/apache/kafka/2.8.0/kafka-2.8.0-src.tgz
```
![install kafka](../images/Kafka/07_Install_Kafka_install_kafka.png)

Kafka 압축해제
```shell
tar xvf kafka-2.8.0-src.tgz
```

ec2 ubuntu에서 gradle 빌드를 한시간째 하고 있다 다음에 하자...
