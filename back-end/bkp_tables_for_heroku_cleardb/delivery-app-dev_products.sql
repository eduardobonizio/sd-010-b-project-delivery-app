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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `heroku_55b7aeecac9090b`.`products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroku_55b7aeecac9090b`.`products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` decimal(4,2) NOT NULL,
  `url_image` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Skol Lata 250ml',2.20,'http://localhost:3001/images/skol_lata_350ml.jpg'),(2,'Heineken 600ml',7.50,'http://localhost:3001/images/heineken_600ml.jpg'),(3,'Antarctica Pilsen 300ml',2.49,'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'),(4,'Brahma 600ml',7.50,'http://localhost:3001/images/brahma_600ml.jpg'),(5,'Skol 269ml',2.19,'http://localhost:3001/images/skol_269ml.jpg'),(6,'Skol Beats Senses 313ml',4.49,'http://localhost:3001/images/skol_beats_senses_313ml.jpg'),(7,'Becks 330ml',4.99,'http://localhost:3001/images/becks_330ml.jpg'),(8,'Brahma Duplo Malte 350ml',2.79,'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),(9,'Becks 600ml',8.89,'http://localhost:3001/images/becks_600ml.jpg'),(10,'Skol Beats Senses 269ml',3.57,'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),(11,'Stella Artois 275ml',3.49,'http://localhost:3001/images/stella_artois_275ml.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
