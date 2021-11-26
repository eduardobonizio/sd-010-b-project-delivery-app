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
-- Table structure for table `salesproducts`
--

DROP TABLE IF EXISTS `heroku_55b7aeecac9090b`.`salesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroku_55b7aeecac9090b`.`salesproducts` (
  `quantity` int NOT NULL,
  `sale_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`sale_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `salesproducts_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `salesproducts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesproducts`
--

LOCK TABLES `salesproducts` WRITE;
/*!40000 ALTER TABLE `salesproducts` DISABLE KEYS */;
INSERT INTO `salesproducts` VALUES (1,1,1),(2,2,1),(4,2,2),(3,2,4),(2,2,5),(2,2,7),(2,2,8),(2,2,9),(3,2,10),(4,2,11),(4,3,1),(1,3,2),(1,3,4),(3,3,7),(5,4,2),(2,4,6),(1,4,7),(2,4,10),(2,4,11),(4,5,1),(4,6,1),(1,7,1),(3,7,5),(1,7,7),(2,7,8),(5,7,11),(1,8,1),(1,9,1),(1,10,2),(3,10,3),(3,10,5),(4,10,8),(4,10,9),(3,11,1),(3,11,3),(4,11,5),(1,11,7),(2,12,1),(4,12,2),(1,12,3),(1,12,5),(5,12,6),(4,12,7),(4,12,10),(1,13,1),(1,13,2),(3,13,3),(2,13,9),(4,13,10),(4,14,1),(1,14,2),(1,14,3),(3,14,6),(1,14,8),(1,14,9),(3,14,11),(4,15,3),(2,15,4),(5,15,5),(5,15,6),(2,15,8),(1,15,9),(2,15,11),(1,16,1),(1,16,2),(1,16,3),(1,16,7),(3,16,9),(2,16,10),(2,17,3),(4,17,5),(3,17,6),(1,17,8),(2,17,9),(2,17,11),(1,18,1),(1,18,4),(1,18,5),(2,18,7),(2,18,9),(2,18,10),(5,19,1),(1,20,1),(1,21,1),(1,21,2),(4,21,3),(3,21,4),(2,21,8),(4,21,11),(3,22,2),(2,22,3),(3,22,4),(3,22,6);
/*!40000 ALTER TABLE `salesproducts` ENABLE KEYS */;
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
