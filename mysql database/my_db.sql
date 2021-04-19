-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 08:04 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_account`
--

CREATE TABLE `business_account` (
  `busi_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `businessType` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_account`
--

INSERT INTO `business_account` (`busi_id`, `user_id`, `businessType`) VALUES
(1, 47, 'public');

-- --------------------------------------------------------

--
-- Table structure for table `personal_account`
--

CREATE TABLE `personal_account` (
  `per_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `categories` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal_account`
--

INSERT INTO `personal_account` (`per_id`, `user_id`, `categories`) VALUES
(1, 49, 'Intrested'),
(2, 50, 'Intrested'),
(3, 50, 'Intrested'),
(4, 49, 'Intrested'),
(5, 50, 'Intrested');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(500) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `address`, `phone`, `type`) VALUES
(47, 'usman', 'usmanpervaiz230@gmail.com', 'here ernerner er', '123123213', 'business'),
(48, 'usman', 'usmanpervaiz230@gmail.com', 'here ernerner er', '123123213', 'personal'),
(49, 'usmanaa', 'usman@gmail.com', 'abc cccccc', '+9123213123123', 'personal'),
(50, 'umer', 'usman@gmail.com', 'abc cccccc', '+9123213123123', 'personal'),
(51, 'usman2', 'usmanpervaiz230@gmail.com', 'here ernerner er', '123123213', 'personal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business_account`
--
ALTER TABLE `business_account`
  ADD PRIMARY KEY (`busi_id`);

--
-- Indexes for table `personal_account`
--
ALTER TABLE `personal_account`
  ADD PRIMARY KEY (`per_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business_account`
--
ALTER TABLE `business_account`
  MODIFY `busi_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_account`
--
ALTER TABLE `personal_account`
  MODIFY `per_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
