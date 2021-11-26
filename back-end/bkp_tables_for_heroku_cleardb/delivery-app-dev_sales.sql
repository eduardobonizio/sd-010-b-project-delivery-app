-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: delivery-app-dev
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `heroku_55b7aeecac9090b`.`sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroku_55b7aeecac9090b`.`sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total_price` decimal(9,2) NOT NULL,
  `delivery_address` varchar(100) NOT NULL,
  `delivery_number` varchar(50) NOT NULL,
  `sale_date` datetime NOT NULL,
  `status` varchar(50) NOT NULL,
  `user_id` int NOT NULL,
  `seller_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,2.20,'123','123','2021-11-24 23:53:13','Entregue',4,2),(2,119.29,'Macedo Travessa','836','2021-11-24 23:57:42','Em Trânsito',3,2),(3,38.77,'Daniel Avenida','759','2021-11-24 23:59:25','Em Trânsito',3,2),(4,65.59,'Fábio Rua','654','2021-11-25 00:00:46','Entregue',3,2),(5,8.80,'123123','123123','2021-11-25 00:01:57','Entregue',4,2),(6,8.80,'','','2021-11-25 00:02:45','Entregue',4,2),(7,36.79,'Silva Avenida','150','2021-11-25 00:09:20','Em Trânsito',3,2),(8,2.20,'','','2021-11-25 00:36:59','Entregue',4,2),(9,2.20,'','','2021-11-25 00:37:45','Entregue',4,2),(10,68.26,'Franco Avenida','511','2021-11-25 00:38:43','Em Trânsito',3,2),(11,27.82,'Carvalho Marginal','244','2021-11-25 00:40:47','Em Trânsito',3,2),(12,95.77,'Nogueira Rodovia','858','2021-11-25 00:51:10','Em Trânsito',3,2),(13,49.23,'Silva Travessa','901','2021-11-25 00:53:32','Em Trânsito',3,2),(14,54.41,'Xavier Travessa','50','2021-11-25 00:55:23','Entregue',3,2),(15,79.81,'Eduarda Rua','412','2021-11-25 00:56:52','Entregue',3,2),(16,50.99,'Sílvia Alameda','925','2021-11-25 00:57:54','Entregue',3,2),(17,54.76,'Xavier Rua','156','2021-11-25 01:00:16','Em Trânsito',3,2),(18,46.79,'Costa Avenida','236','2021-11-25 01:02:13','Em Trânsito',3,2),(19,11.00,'','','2021-11-25 01:03:35','Entregue',4,2),(20,2.20,'','','2021-11-25 01:05:29','Entregue',4,2),(21,61.70,'Macedo Alameda','370','2021-11-25 01:10:39','Em Trânsito',3,2),(22,63.45,'Isaac Travessa','143','2021-11-25 01:12:12','Pendente',3,2);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-25 21:11:44
