-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2025 at 08:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kiswa_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$/.AHYU4uUbyeWres5gEkvunxHnHyj5zu4JCB5ZT02YMl2JhL1pRxK');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tour_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `travel_date` date NOT NULL DEFAULT current_timestamp(),
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `user_id`, `tour_id`, `quantity`, `status`, `created_at`, `travel_date`, `name`, `email`, `phone`, `message`) VALUES
(5, 1, 2, 3, '', '2025-06-23 09:48:53', '2025-06-25', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `phone`, `name`, `email`, `message`, `created_at`) VALUES
(1, '03001234567', 'Ali', 'ali@example.com', 'Hello, I need help with booking!', '2025-06-26 18:14:09'),
(2, '+92 0000000003000000000', 'khubaib Bin Tariq', 'khubaibintariq123@gmail.com', 'I am a good Boy', '2025-06-26 18:14:59'),
(3, '+92 0000000003000000000', 'khubaib', 'khubaibintariq123@gmail.com', 'wooooo', '2025-06-27 10:00:38');

-- --------------------------------------------------------

--
-- Table structure for table `inquiries`
--

CREATE TABLE `inquiries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `package_id` int(11) NOT NULL,
  `travel_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `days` int(11) NOT NULL,
  `nights` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `description`, `location`, `price`, `image`, `days`, `nights`, `created_at`) VALUES
(4, 'Hunza Valley Tour', 'A 5-day adventure in the beautiful Hunza region.', 'Hunza', 1200.00, 'https://example.com/image.jpg', 5, 4, '2025-06-25 08:14:19');

-- --------------------------------------------------------

--
-- Table structure for table `tours`
--

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) NOT NULL,
  `available_seats` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tours`
--

INSERT INTO `tours` (`id`, `title`, `description`, `location`, `price`, `image`, `available_seats`, `category`, `created_at`) VALUES
(2, 'Dubai Desert Trip', 'Adventure in desert', '', 300.00, '', 0, '', '2025-06-26 17:40:24');

-- --------------------------------------------------------

--
-- Table structure for table `umrah_applications`
--

CREATE TABLE `umrah_applications` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `country_code` varchar(10) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `title` varchar(15) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `passport_front` varchar(255) NOT NULL,
  `passport_back` varchar(255) NOT NULL,
  `emirates_id` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `package_type` varchar(50) NOT NULL,
  `adults` int(11) NOT NULL,
  `children` int(11) NOT NULL,
  `room_type` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `umrah_applications`
--

INSERT INTO `umrah_applications` (`id`, `email`, `country_code`, `phone`, `title`, `gender`, `first_name`, `last_name`, `passport_front`, `passport_back`, `emirates_id`, `photo`, `package_type`, `adults`, `children`, `room_type`, `created_at`) VALUES
(1, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 00000000030', 'Mr', 'Male', 'khubaib', 'Tariq', '1751470432172-A-C Cleaning.jpg', '1751470432228-A-C Cleaning.jpg', '1751470432283-A4-Size-Flyer.jpg', '1751470432355-420728911_936153944528873_9086293845642484177_n.jpg', 'By Air', 1, 1, 'Single', '2025-07-02 15:33:52');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Ali', 'ali@example.com', '$2b$10$FFhtKbigLlJYAY4S70m8ee5IAH7sXpONMZu5HyhghlowVVQMhcLyK', 'user'),
(2, 'Ahmad', 'ahmad@example.com', '$2b$10$wBYnxTMcP5QJ5J6O9h9fgO7JHzoaWsVKeU8W85hN90dkmm1OgHzwS', 'user'),
(3, 'Ahmad', 'ahmad1@example.com', '$2b$10$YZLhWbSA9K4lczyzARcv1u3tyH1votpTuxu6FsinxS4j.J7M7XT2S', 'user'),
(4, 'Ahmad2', 'ahmad2@example.com', '$2b$10$RQthQGpXQOcLNOhZ1REaou4KDQ9OS7Z6vvTJLs9CIEzTIbrhJeX3G', 'user'),
(5, 'Ahmad2', 'ahmad24@example.com', '$2b$10$duMKWIeDgoXDT3OaJkjZb.6e4ZawjjBz4qPwByw0xdHeynpwblQtS', 'user'),
(6, 'khubaib', 'khubaibtariq512@gmail.com', '$2b$10$k3q30NEjhs1NIFy63FILeucufZ0AHt9AkiP5jp.Hb0O20LC4LihEK', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `visas`
--

CREATE TABLE `visas` (
  `id` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `visa_type` varchar(100) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text NOT NULL,
  `image_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `visa_requests`
--

CREATE TABLE `visa_requests` (
  `id` int(11) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `country_of_residence` varchar(100) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `visa_type` varchar(100) NOT NULL,
  `arrival_date` date NOT NULL,
  `adults` int(11) NOT NULL,
  `children` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `processing_time` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `requirements` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visa_requests`
--

INSERT INTO `visa_requests` (`id`, `destination`, `country_of_residence`, `nationality`, `visa_type`, `arrival_date`, `adults`, `children`, `created_at`, `processing_time`, `price`, `requirements`) VALUES
(1, 'UAE', 'Pakistan', 'Pakistani', 'Tourist', '2025-07-15', 2, 1, '2025-06-26 07:48:25', '3-5 days', 130.50, 'Passport, Photograph, Bank Statement'),
(2, 'UAE', 'Pakistan', 'Pakistan', 'Tourist', '2025-06-27', 2, 1, '2025-06-26 08:08:28', '', 0.00, ''),
(3, 'UAE', 'Pakistan', 'Pakistan', 'Business', '2025-06-27', 2, 2, '2025-06-26 08:09:36', '', 0.00, ''),
(4, 'UAE', 'Pakistan', 'Pakistan', 'Business', '2025-06-27', 2, 1, '2025-06-26 08:20:53', '', 0.00, ''),
(5, 'UAE', 'Pakistan', 'Pakistan', 'Business', '2025-06-27', 2, 1, '2025-06-26 08:21:23', '', 0.00, ''),
(6, 'UAE', 'Pakistan', 'Pakistan', 'Transit', '2025-06-27', 1, 0, '2025-06-26 10:23:38', '', 0.00, ''),
(7, 'UAE', 'Pakistan', 'Pakistan', 'Business', '2025-06-27', 2, 2, '2025-06-26 19:25:40', '', 0.00, ''),
(8, 'UAE', 'Pakistan', 'Pakistan', 'Business', '2025-06-28', 2, 1, '2025-06-27 05:07:18', '', 0.00, '');

-- --------------------------------------------------------

--
-- Table structure for table `visa_travelers`
--

CREATE TABLE `visa_travelers` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `country_code` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `title` varchar(10) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `birth_country` varchar(100) NOT NULL,
  `marital_status` varchar(50) NOT NULL,
  `education` varchar(100) NOT NULL,
  `profession` varchar(100) NOT NULL,
  `passport_number` varchar(100) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `city` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `passport_copy` varchar(255) NOT NULL,
  `photograph` varchar(255) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `terms_accepted` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visa_travelers`
--

INSERT INTO `visa_travelers` (`id`, `email`, `country_code`, `phone`, `title`, `gender`, `first_name`, `middle_name`, `last_name`, `mother_name`, `dob`, `birth_country`, `marital_status`, `education`, `profession`, `passport_number`, `nationality`, `city`, `address`, `passport_copy`, `photograph`, `payment_method`, `terms_accepted`, `created_at`) VALUES
(1, 'test@example.com', '+92', '03123456789', 'Mr', 'Male', 'Ali', 'Khan', 'Raza', 'Fatima', '1995-08-12', 'Pakistan', 'Single', 'Bachelors', 'Engineer', 'AB1234567', 'Pakistani', 'Lahore', '123 Street, Model Town', 'passport.jpg', 'photo.jpg', 'Card', 0, '2025-06-26 08:55:45'),
(2, 'test@example.com', '+92', '03123456789', 'Mr', 'Male', 'Ali', 'Khan', 'Raza', 'Fatima', '1995-08-12', 'Pakistan', 'Single', 'Bachelors', 'Engineer', 'AB1234567', 'Pakistani', 'Lahore', '123 Street, Model Town', 'passport.jpg', 'photo.jpg', 'Card', 0, '2025-06-26 10:26:47'),
(3, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', '', '', '', '', '2025-06-27', '', '', '10th', 'Coding', '', 'Pakistan', 'Sahiwal', 'Sahiwal', '', 'no', '', 0, '2025-06-26 10:30:09'),
(4, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', '', '', '', '', '2025-06-27', '', '', '10th', 'Coding', '', 'Pakistan', 'Sahiwal', 'Sahiwal', '', 'no', '', 0, '2025-06-26 10:30:49'),
(5, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', '', '', '', '', '2025-06-27', '', '', '10th', 'Coding', '', 'Pakistan', 'Sahiwal', 'Sahiwal', '', 'no', '', 0, '2025-06-26 11:09:23'),
(6, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', '', '', '', '', '2025-06-27', '', '', '10th', 'Coding', '', 'Pakistan', 'Sahiwal', 'Sahiwal', '', 'No', '', 0, '2025-06-26 14:22:04'),
(7, 'user@example.com', '+92', '3001234567', 'Mr', 'Male', 'Ali', 'Raza', 'Khan', 'Fatima', '1995-06-10', 'Pakistan', 'Single', 'Graduate', 'Engineer', 'AB1234567', 'Pakistani', 'Lahore', '123 Gulberg', '1750953592028-image8.png', '1750953592029-image7.png', 'Card', 1, '2025-06-26 15:59:52'),
(8, 'user@example.com', '+92', '3001234567', 'Mr', 'Male', 'Ali', 'Raza', 'Khan', 'Fatima', '1995-06-10', 'Pakistan', 'Single', 'Graduate', 'Engineer', 'AB1234567', 'Pakistani', 'Lahore', '123 Gulberg', '1750953755561-image8.png', '1750953755562-image7.png', 'Card', 1, '2025-06-26 16:02:35'),
(9, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', 'khubaib', 'Bin', 'Tariq', 'Farki', '2025-06-27', 'Pakistan', 'NO', '10th', 'Coding', '030000202030', 'Pakistan', 'Sahiwal', 'Sahiwal', '1750953916192-image24.png', '1750953916192-image10.png', '', 0, '2025-06-26 16:05:16'),
(10, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', 'Legend', 'Bin', 'Tariq', 'Farki', '2025-06-27', 'Pakistan', 'NO', '10th', 'Coding', '030000202030', 'Pakistan', 'Sahiwal', 'Sahiwal', '1750954093823-Cream.png', '1750954093824-loafer1.png', 'card', 0, '2025-06-26 16:08:13'),
(11, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', 'Legend', 'Bin', 'Tariq', 'Farki', '2025-06-27', 'Pakistan', 'NO', '10th', 'Coding', '030000202030', 'Pakistan', 'Sahiwal', 'Sahiwal', '1750954112739-Cream.png', '1750954112740-loafer1.png', 'tabby', 0, '2025-06-26 16:08:32'),
(12, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', 'Legends', 'Bin', 'Tariq', 'Farki', '2025-06-27', 'Pakistan', 'NO', '10th', 'Coding', '030000202030', 'Pakistan', 'Sahiwal', 'Sahiwal', '1750958195252-el6.png', '1750958195257-el6.png', 'card', 1, '2025-06-26 17:16:35'),
(13, 'khubaibintariq123@gmail.com', 'Pakistan', '+92 0000000003000000', 'hello', 'Male', 'Sidhu', 'Musssa', 'Wala', 'Farki', '2025-06-27', 'Pakistan', 'NO', '10th', 'Coding', '030000202030', 'Pakistan', 'Sahiwal', 'Sahiwal', '1750964385172-loafer1.png', '1750964385176-Perfume.png', 'card', 1, '2025-06-26 18:59:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Unique` (`username`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `tour_id` (`tour_id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiries`
--
ALTER TABLE `inquiries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tours`
--
ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `umrah_applications`
--
ALTER TABLE `umrah_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unique` (`email`);

--
-- Indexes for table `visas`
--
ALTER TABLE `visas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visa_requests`
--
ALTER TABLE `visa_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visa_travelers`
--
ALTER TABLE `visa_travelers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `inquiries`
--
ALTER TABLE `inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tours`
--
ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `umrah_applications`
--
ALTER TABLE `umrah_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `visas`
--
ALTER TABLE `visas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `visa_requests`
--
ALTER TABLE `visa_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `visa_travelers`
--
ALTER TABLE `visa_travelers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
