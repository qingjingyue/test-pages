# 构建阶段
FROM maven:3.9-eclipse-temurin-21 AS builder
WORKDIR /app
# 复制 pom.xml
COPY pom.xml .

# 下载项目依赖
RUN mvn dependency:resolve -B

# 下载构建插件
RUN mvn dependency:resolve-plugins -B

# 复制源码并构建
COPY src ./src
RUN mvn clean package -DskipTests

# 运行阶段
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# 创建非root用户运行应用
RUN groupadd -r spring && useradd -r -g spring spring
USER spring:spring

# 从构建阶段复制jar文件
COPY --from=builder --chown=spring:spring /app/target/*.jar app.jar

# 设置JVM参数
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

# 暴露端口（根据你的应用端口修改）
EXPOSE 8080

# 启动应用
ENTRYPOINT ["sh", "-c", "java ${JAVA_OPTS} -jar app.jar"]