-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2022 at 10:01 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid_compliance`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Admin_id` varchar(25) NOT NULL,
  `Campus_id` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Admin_id`, `Campus_id`, `Gender`, `Email`, `Password`, `First_name`, `Last_name`) VALUES
('111', '1', 'm', 'tb@gmail.com', '12345', 'thabo', 'chauke');

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE `campus` (
  `Camp_id` varchar(25) NOT NULL,
  `Campus_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `campus`
--

INSERT INTO `campus` (`Camp_id`, `Campus_name`) VALUES
('1', 'sosh');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `Feed_id` varchar(25) NOT NULL,
  `username` varchar(25) NOT NULL,
  `User_id` varchar(25) NOT NULL,
  `Camp_id` varchar(25) NOT NULL,
  `Comment` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `healthform`
--

CREATE TABLE `healthform` (
  `Form_id` int(13) NOT NULL,
  `User_id` varchar(13) NOT NULL,
  `Vaccination_status` varchar(25) NOT NULL,
  `Covid19` varchar(25) NOT NULL,
  `Recent_cough` varchar(25) NOT NULL,
  `Difficulty_breath` varchar(4) NOT NULL,
  `Weight_lose` varchar(4) NOT NULL,
  `Headache` varchar(4) NOT NULL,
  `Infected_person` varchar(4) NOT NULL,
  `Form_check` varchar(25) NOT NULL,
  `Status` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `healthform`
--

INSERT INTO `healthform` (`Form_id`, `User_id`, `Vaccination_status`, `Covid19`, `Recent_cough`, `Difficulty_breath`, `Weight_lose`, `Headache`, `Infected_person`, `Form_check`, `Status`) VALUES
(1, '111', 'No', 'No', 'No', 'No', 'unde', 'No', 'No', 'undefined', 'undefined'),
(2, '111', 'No', 'No', 'No', 'No', 'unde', 'No', 'No', 'undefined', 'undefined'),
(3, '111', 'No', 'No', 'No', 'No', 'unde', 'No', 'No', 'undefined', 'undefined'),
(4, 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'),
(5, '111', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(6, '111', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(7, '111', '', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'No'),
(8, '123654', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(9, '123654', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(10, '123654', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(11, '123654', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING'),
(12, '4', 'No', 'No', 'No', 'No', 'No', 'No', 'No', 'Yes', 'WARNING');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `image_id` int(25) NOT NULL,
  `pictureName` varchar(255) NOT NULL,
  `pic_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`image_id`, `pictureName`, `pic_path`) VALUES
(23, 'anto', 'http://3000/image/pic_path-1649398910454.jfif'),
(25, 'love', 'http://3000/image/pic_path-1649400075321.jfif'),
(26, 'nunu', 'http://3000/image/pic_path-1649664650752.jpg'),
(27, 'test1', 'http://3000/image/pic_path-1649670028983.mp4'),
(28, 'try1', 'http://localhost:3000/public/images/pic_path-1649679420998.png'),
(29, 'zery', 'http://localhost:3000/pic_path/pic_path-1649758345005.png'),
(30, 'nunu', 'http://localhost:3000/pic_path/pic_path-1649759377253.png'),
(31, 'INDEX', 'http://localhost:3000/pic_path/pic_path-1649834766481.png'),
(32, 'last', 'http://localhost:3000/pic_path/pic_path-1649835729786.png'),
(33, '20 april', 'undefined'),
(34, '22 april', 'http://localhost:3000/pic_path/pic_path-1650442945170.png'),
(35, '22 april', 'http://localhost:3000/pic_path/pic_path-1650443149928.png'),
(36, 'laster 212', 'http://localhost:3000/pic_path/pic_path-1650444136077.png'),
(37, '26 april in advance', 'http://localhost:3000/pic_path/pic_path-1650446133172.png'),
(38, '27 april humn rights day', 'http://localhost:3000/pic_path/pic_path-1650446490319.png'),
(39, '80 may', 'http://localhost:3000/pic_path/pic_path-1650534932381.png'),
(40, 'Mthethwa', 'http://localhost:3000/pic_path/pic_path-1650545333758.png'),
(41, 'try 67', 'http://localhost:3000/view/pic_path-1650545678492.png'),
(42, 'try 69', 'http://localhost:3000/select_image/view/pic_path-1650546098238.png');

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `notification_id` int(25) NOT NULL,
  `admin_id` int(25) NOT NULL,
  `message` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`notification_id`, `admin_id`, `message`) VALUES
(1, 111, 'hi everybody'),
(2, 111, 'good day everybody');

-- --------------------------------------------------------

--
-- Table structure for table `officer`
--

CREATE TABLE `officer` (
  `Officer_id` varchar(25) NOT NULL,
  `Campus_id` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Cellphone_number` varchar(10) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `officer`
--

INSERT INTO `officer` (`Officer_id`, `Campus_id`, `First_name`, `Last_name`, `Gender`, `Cellphone_number`, `Email`, `Password`) VALUES
('111', '1', 'thabo', 'chauke', 'm', '0123662559', 'tb@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `record`
--

CREATE TABLE `record` (
  `Record_id` int(25) NOT NULL,
  `Officer_id` int(25) NOT NULL,
  `User_id` varchar(25) NOT NULL,
  `Form_check` varchar(25) NOT NULL,
  `Date` varchar(10) NOT NULL,
  `Tempareture` int(4) NOT NULL,
  `isAllowedEntrence` tinyint(1) NOT NULL,
  `Health_status_reason` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `record`
--

INSERT INTO `record` (`Record_id`, `Officer_id`, `User_id`, `Form_check`, `Date`, `Tempareture`, `isAllowedEntrence`, `Health_status_reason`) VALUES
(1, 0, '2164', '1', '', 0, 0, ''),
(4, 0, '2164', '0', '', 0, 0, ''),
(5, 0, '2164', '0', '', 0, 0, ''),
(6, 0, '222', '0', '', 0, 0, ''),
(7, 0, '13', '1', '', 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `no` int(11) NOT NULL,
  `User_id` varchar(13) NOT NULL,
  `Camp_id` varchar(25) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Type` char(1) NOT NULL,
  `Cellphone_number` varchar(10) DEFAULT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL,
  `profile_pic` blob DEFAULT NULL,
  `vaccination_card` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`no`, `User_id`, `Camp_id`, `First_name`, `Last_name`, `Gender`, `Type`, `Cellphone_number`, `Email`, `Password`, `profile_pic`, `vaccination_card`) VALUES
(1, '0000', '1', 'undefined', 'undefined', '&', 'u', 'undefined', 'undefined', 'undefined', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `video_id` int(25) NOT NULL,
  `video_name` varchar(25) NOT NULL,
  `video_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`video_id`, `video_name`, `video_path`) VALUES
(3, 'test2', 'http://3000/videos/vid_path-1649670828283.mp4'),
(4, 'test3', 'http://3000/videos/vid_path-1649671032261.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `visitor`
--

CREATE TABLE `visitor` (
  `visitor_id` int(25) NOT NULL,
  `Camp_id` int(1) NOT NULL,
  `First_name` varchar(25) NOT NULL,
  `Last_name` varchar(25) NOT NULL,
  `Gender` char(1) NOT NULL,
  `Cellphone_number` varchar(25) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(25) NOT NULL,
  `vaccination_card` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `visitor`
--

INSERT INTO `visitor` (`visitor_id`, `Camp_id`, `First_name`, `Last_name`, `Gender`, `Cellphone_number`, `Email`, `Password`, `vaccination_card`) VALUES
(111111111, 1, 'squish', 'chauke', 'm', '0123662559', 'tb@gmail.com', '12345', '');

-- --------------------------------------------------------

--
-- Table structure for table `visitor_record`
--

CREATE TABLE `visitor_record` (
  `visitor_record_id` int(25) NOT NULL,
  `Officer_id` int(25) NOT NULL,
  `Visitor_id` int(25) NOT NULL,
  `Form_check` varchar(25) NOT NULL,
  `Date` varchar(25) NOT NULL,
  `Tempareture` int(25) NOT NULL,
  `isAlllowedEntrance` tinyint(4) NOT NULL,
  `Health_status_reason` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Admin_id`),
  ADD KEY `FK_admin_campus_works` (`Campus_id`);

--
-- Indexes for table `campus`
--
ALTER TABLE `campus`
  ADD PRIMARY KEY (`Camp_id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`Feed_id`),
  ADD KEY `FK_feedback_user_sends` (`User_id`),
  ADD KEY `FK_feedback_camp_reiceves` (`Camp_id`);

--
-- Indexes for table `healthform`
--
ALTER TABLE `healthform`
  ADD PRIMARY KEY (`Form_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `officer`
--
ALTER TABLE `officer`
  ADD PRIMARY KEY (`Officer_id`),
  ADD KEY `FK_officer_campus_employes` (`Campus_id`);

--
-- Indexes for table `record`
--
ALTER TABLE `record`
  ADD PRIMARY KEY (`Record_id`),
  ADD KEY `FK_record_user_has` (`User_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User_id`),
  ADD KEY `FK_user_camp_accom` (`Camp_id`),
  ADD KEY `all` (`no`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`video_id`);

--
-- Indexes for table `visitor`
--
ALTER TABLE `visitor`
  ADD PRIMARY KEY (`visitor_id`);

--
-- Indexes for table `visitor_record`
--
ALTER TABLE `visitor_record`
  ADD PRIMARY KEY (`visitor_record_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `healthform`
--
ALTER TABLE `healthform`
  MODIFY `Form_id` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `image_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `notification_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `record`
--
ALTER TABLE `record`
  MODIFY `Record_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `video_id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `visitor_record`
--
ALTER TABLE `visitor_record`
  MODIFY `visitor_record_id` int(25) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_admin_campus_works` FOREIGN KEY (`Campus_id`) REFERENCES `campus` (`Camp_id`);

--
-- Constraints for table `feedback`
--
ALTER TABLE `feedback`
  ADD CONSTRAINT `FK_feedback_camp_reiceves` FOREIGN KEY (`Camp_id`) REFERENCES `campus` (`Camp_id`),
  ADD CONSTRAINT `FK_feedback_user_sends` FOREIGN KEY (`User_id`) REFERENCES `user` (`User_id`);

--
-- Constraints for table `officer`
--
ALTER TABLE `officer`
  ADD CONSTRAINT `FK_officer_campus_employes` FOREIGN KEY (`Campus_id`) REFERENCES `campus` (`Camp_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
